const Sequelize = require('sequelize');

module.exports = ((sequelize, DataTypes) => {
    const user = sequelize.define('users', {
        u_id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            
        },
        u_email: {
            type: Sequelize.STRING(40),
            allowNull: false,
            unique: true,
            validate:{
                isEmail:true,
            }
        },
        u_password: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        u_nick: {
            type: Sequelize.STRING(15),
            allowNull: false,
            unique: true
        }
    }, {
        timestamps: true,
        paranoid: true
    });
    
    return user;
})