const Sequelize = require('sequelize');

module.exports=((sequelize,DataTypes)=>{
    const rposition= sequelize.define('rpositions',{
        postid:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        position:{
            type:Sequelize.STRING(30),
            allowNull:false,
        },
        applicant:{
            type:Sequelize.STRING(30),
            allowNull:true,
            defaultValue:"NULL"
        }
    },{
        timestamps:true,
        paranoid:true,
    });
    return rposition;
})