'use strict'

const { Sequelize, DataTypes } = require("sequelize");

// check if the enviorment is a test  or production id test run the sqlit else run postgresql
const DATABASE_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;


// sequelize options 

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
} : {}

let sequelize = new Sequelize(DATABASE_URI,sequelizeOptions)

const food = require('./food')
const clothes = require('./clothes')

module.exports = {
    db: sequelize,
    Food: food(sequelize, DataTypes),
    Clothes: clothes(sequelize, DataTypes)
}
