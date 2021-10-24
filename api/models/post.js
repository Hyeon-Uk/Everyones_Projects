const Sequelize = require('sequelize');
module.exports=((sequelize,DataTypes)=>{
    const post=sequelize.define('posts',{
        p_id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        p_title:{
            type:Sequelize.STRING(40),
            allowNull:false,
        },
        p_content:{
            type:Sequelize.TEXT,
            allowNull:false,
        },
    },{
        timestamps:true,
        paranoid:true,
    });
    post.associate = models=>{
        post.belongsTo(models.users,{
            foreignKey:"publisher",
            sourceKey:"id",
        })
    }
    return post;
})