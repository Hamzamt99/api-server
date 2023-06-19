'use strict'

const food = (sequelize,DataTypes) => sequelize.define('food',{
foodName:{
    type: DataTypes.STRING,
    allowNull:false
},
foodCountry:{
    type: DataTypes.STRING,
    allowNull: false
}
})

module.exports = food;