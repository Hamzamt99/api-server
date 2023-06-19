'use strict'

const clothes = (sequelize,DataTypes) => sequelize.define('clothes',{
clotheType:{
    type: DataTypes.STRING,
    allowNull:false
},
fashionName:{
    type: DataTypes.STRING,
    allowNull: false
}
})

module.exports = clothes;
