const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cryptoJS = require('crypto-js');
const {verifyToken} = require('./verifyToken');
const {User} = require('../models');


router.post('/register', async (req, res) => {
    const {u_email, u_nick, u_password} = req.body;
    const EmailCheck = await User.findOne({where: {
            u_email
        }});
    const NickCheck = await User.findOne({where:{
        u_nick
    }})
    if (EmailCheck) {
        res
            .status(200)
            .json("이미 가입된 상태입니다");
    }
    else if(NickCheck){
        res.status(200).json("닉네임이 중복됩니다.");
    }
    else {
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
            const {u_password,...other}=savedUser;
            res
                .status(201)
                .json(other);
        } catch (err) {
            res
                .status(500)
                .json(err);
        }
    }
});

router.post('/login', async (req, res) => {
    try {
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
            u_id:user.u_id
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