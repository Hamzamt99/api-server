'use strict'

const express = require('express')
const cors = require('cors')

const error404 = require('./error-handlers/404')

const error500 = require('./error-handlers/500')

const app = express();

const clotheRouter = require('./routes/clothes')

const foodRouter = require('./routes/food')

app.use(cors())
app.use(express.json());

app.use(clotheRouter)
app.use(foodRouter)

app.use(error404)

app.use(error500)

function start(PORT){
    console.log(process.env.NODE_ENV)
    app.listen(PORT, ()=> console.log(`Running on ${PORT}`))
}

module.exports = {
    app,
    start
}