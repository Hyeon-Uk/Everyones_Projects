const express = require('express');
const router = express.Router();
const {verifyToken,verifyTokenAndAuthorization} = require('./verifyToken');
const {User,Post} = require('../models');

router.post('/post', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const {publisher, title: p_title, content: p_content} = req.body;
        const data = {
            publisher: req.user.u_id,
            p_title,
            p_content
        };
        await Post.create(data);
        res.json(data);
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
})


module.exports = router;