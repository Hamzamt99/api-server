'use strict'

const books = (sequelize, DataTypes) => sequelize.define('book', {
    bookName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    authorID:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = books;
