const Sequelize = require('sequelize');

module.exports=((sequelize,DataTypes)=>{
    return sequelize.define('user',{
        email:{
            type:Sequelize.STRING(40),
            allowNull:false,
            unique:true
        },
        password:{
            type:Sequelize.STRING(100),
            allowNull:false,
        },
        nick:{
            type:Sequelize.STRING(15),
            allowNull:false,
        },
        // provider:{
        //     type:Sequelize.STRING(10),
        //     allowNull:false,
        //     defaultValue:'local',
        // },
    },{
        timestamps:true,
        paranoid:true,
    })
})