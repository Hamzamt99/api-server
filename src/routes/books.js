'use strict'

const express = require('express')

const router = express.Router();

const { booksModel } = require('../models/index')

router.get('/book', getBooks)

router.get('/book/:id', getOneBooks)

router.put('/book/:id', updateBooks)

router.post('/book', addNewBooks)

router.delete('/book/:id', deleteBooks)

async function getBooks(req, res) {
   const project = await booksModel.read();
   res.status(200).json(project)
}

async function addNewBooks(req, res) {
   const obj = req.body;
   const addBooks = await booksModel.create(obj);
   res.status(201).json(addBooks)
}

async function updateBooks(req, res) {
   const id = req.params.id;
   const obj = req.body;
   const updateBooks = await booksModel.update(id,obj);
   res.status(201).json(updateBooks)
}

async function getOneBooks(req, res) {
   const id = req.params.id;
   const findBooks = await booksModel.read(id)
   res.status(200).json(findBooks)
}

async function deleteBooks(req, res) {
   const id = req.params.id;
   const deleteBooks = await booksModel.delete(id)
   res.status(204).json(deleteBooks)
}

module.exports = router;