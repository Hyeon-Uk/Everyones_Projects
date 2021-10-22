const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const cryptoJS=require('crypto-js');
const {User}=require('../models');

router.post('/register',async (req,res)=>{
    const {email,nick,password}=req.body;
    const isUser=await User.findOne({where:{email}});
    if(isUser){
        res.status(200).json({message:"이미 가입된 상태입니다"});
    }
    else{
        const savedUser={email,nick,password:cryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString()};
        try{
            await User.create(savedUser);
            res.status(201).json(savedUser);
        }
        catch(err){
            res.status(500).json(err);
        }        
    }
});

router.post('/login',async (req,res)=>{
    try{
    let {email,password}=req.body;
    const user=await User.findOne({where:{email}});

    !user&&res.status(500).json("Wrong email!");

    const bytes=cryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);
    const original=bytes.toString(cryptoJS.enc.Utf8);

    original!==password && res.status(401).json("Wrong password");

    res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;