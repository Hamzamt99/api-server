'use strict'


const author = (sequelize,DataTypes) => sequelize.define('authors',{
    authorName:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = author;