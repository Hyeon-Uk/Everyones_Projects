const express=require('express');
const router=express.Router();
const cryptoJS=require('crypto-js');
const {User}=require('../models');
const {verifyToken,verifyTokenAndAuthorization} = require('./verifyToken');

//Update Nickname except for Password
router.put("/nick/:u_id",verifyTokenAndAuthorization,async (req,res)=>{
    const updatedNick=req.body.u_nick;
    try{
        await User.update({u_nick:updatedNick},{
            where:{u_id:req.params.u_id}
        });
        res.status(200).json(updatedNick);
    }catch(err){
        res.status(500).json(err);
    }
});

//Update Password
router.put("/pass/:u_id",verifyTokenAndAuthorization,async (req,res)=>{
    const updatedPassword=req.body.u_password;
    const encrypted=cryptoJS.AES.encrypt(updatedPassword,process.env.SECRET_KEY).toString();
    try{
        await User.update({u_password:encrypted},{
            where:{u_id:req.params.u_id}
        });
        //delete cookies after update password
        res.clearCookie('loginToken');
        res.status(200).json("password complete change");
    }catch(err){
        res.status(500).json(err);
    }
})

//Delete
router.delete("/:u_id",verifyTokenAndAuthorization,async (req,res)=>{
    try {
        console.log(req.user);
        await User.destroy({where:{u_id:req.user.u_id}});
        res.clearCookie('loginToken');
        res.status(200).json("delete complete");
    } catch (error) {
        res.status(500).json(error);
    }
})

//Get User
router.get("/find/:u_nick",verifyToken,async (req,res)=>{
    try {
        
        const findUser=await User.findAll({
            where:{
                u_nick:req.params.u_nick
            }
        });
        if(findUser.length!==0){
            const {u_id,u_password,createdAt,updatedAt,deletedAt,...other}=findUser[0].dataValues;
            res.status(200).json(other);
        }
        else{
            res.status(500).json("No User");
        }
    } catch (error) {
        res.status(500).json(error);  
    }
})

//Get All Users
router.get("/users",verifyToken,async (req,res)=>{
    try {
        const users=await User.findAll({
            where:{
                deletedAt:null
            }
        });
        const filtered=users.map(each=>{
            const {u_password,...others}=each.dataValues;
            return others;
        })
        res.status(200).json(filtered);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Get Specific Position User

module.exports = router;