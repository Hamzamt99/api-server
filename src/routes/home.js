'use strict'

const express = require('express')

const router = express.Router();

router.get('/',homePage)

function homePage(req,res){
    res.status(200).json('Welcome to Home Page')
}

module.exports = router;