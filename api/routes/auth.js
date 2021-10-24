const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cryptoJS = require('crypto-js');
const {verifyUser} = require('./verifyToken');
const {User} = require('../models');


router.post('/register', async (req, res) => {
    const {u_email, u_nick, u_password} = req.body;
    const isUser = await User.findOne({where: {
            u_email
        }});
    if (isUser) {
        res
            .status(200)
            .json({message: "이미 가입된 상태입니다"});
    } else {
        const savedUser = {
            u_email,
            u_nick,
            u_password: cryptoJS
                .AES
                .encrypt(req.body.u_password, process.env.SECRET_KEY)
                .toString()
        };
        try {
            await User.create(savedUser);
            res
                .status(201)
                .json(savedUser);
        } catch (err) {
            res
                .status(500)
                .json(err);
        }
    }
});

router.post('/login', async (req, res) => {
    try {
        console.log("enter!");
        const user = await User.findOne({
            where: {
                u_email: req.body.u_email
            }
        });

        !user && res
            .status(500)
            .json("Wrong u_email!");

        const encryptedPass = user.u_password;
        const bytes = cryptoJS
            .AES
            .decrypt(encryptedPass, process.env.SECRET_KEY);
        const original = bytes.toString(cryptoJS.enc.Utf8);

        original !== req.body.u_password && res
            .status(401)
            .json("Wrong u_password");
        const accessToken = jwt.sign({
            u_id:user.u_id,
            u_email: user.u_email,
            u_nick: user.u_nick
        }, process.env.JWT_SECRET, {expiresIn: "1h"});
        const userData = {
            accessToken,
            u_email: user.u_email,
            u_nick: user.u_nick
        }
        res.cookie('loginToken',accessToken);
        res
            .status(200)
            .json(userData);
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
});

module.exports = router;