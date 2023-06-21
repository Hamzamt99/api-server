'use strict'

const express = require('express')

const router = express.Router();

const {booksModel} = require('../models/index')

const {bookModel} = require('../models/index')

const {authorsModel} = require('../models/index')

router.get('/author', getAuthors)

router.get('/author/:id', getOneAuthors)

router.put('/author/:id', updateAuthors)

router.post('/author', addNewAuthors)

router.delete('/author/:id', deleteAuthors)

router.get('/authorbook/:id', authorBooks)

async function getAuthors(req, res) {
   const project = await authorsModel.read();
   res.status(200).json(project)
}

async function addNewAuthors(req, res) {
   const obj = req.body;
   const addAuthors = await authorsModel.create(obj);
   res.status(201).json(addAuthors)
}

async function updateAuthors(req, res) {
   const id = req.params.id;
   const obj = req.body;
   const updateAuthors = await authorsModel.update(id,obj);
   res.status(201).json(updateAuthors)
}

async function getOneAuthors(req, res) {
   const id = req.params.id;
   const findAuthors = await authorsModel.read(id)
   res.status(200).json(findAuthors)
}

async function deleteAuthors(req, res) {
   const id = req.params.id;
   const deleteAuthors = await authorsModel.delete(id)
   res.status(204).json(deleteAuthors)
}
async function authorBooks(req,res){
let id = req.params.id;
console.log(`===================${booksModel}`)
const authorBooks = await authorsModel.authorBooks(id,bookModel)
res.status(200).json(authorBooks)
}

module.exports = router;