'use strict'

const { Sequelize, DataTypes } = require("sequelize");

// check if the enviorment is a test  or production id test run the sqlit else run postgresql
const DATABASE_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const Collection = require('./Collection')
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
const books = require('./books')
const author = require('./authors')

let authorModel = author(sequelize,DataTypes)
let bookModel = books(sequelize,DataTypes)

// // one to one relation
// authorModel.hasOne(bookModel,{foreignKey:'authorID',sourceKey:'id'})
// bookModel.belongsTo(authorModel,{foreignKey:'authorID',targetKey:'id'})

// one to many relation
authorModel.hasMany(bookModel,{foreignKey:'authorID',sourceKey:'id'})
bookModel.belongsTo(authorModel,{foreignKey:'authorID',targetKey:'id'})


const authorsModel = new Collection(authorModel)

const booksModel = new Collection(bookModel)

module.exports = {
    db: sequelize,
    Food: food(sequelize, DataTypes),
    Clothes: clothes(sequelize, DataTypes),
    Books : books(sequelize, DataTypes),
    Authors: author(sequelize,DataTypes),
    authorsModel,
    booksModel,
    bookModel
}
