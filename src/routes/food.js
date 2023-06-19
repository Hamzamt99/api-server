'use strict'

 const express = require('express')

 const router = express.Router();

 const {Food} = require('../models/index')

 router.get('/food',getFood)

 router.put('/food/:id',updateFood)

 router.delete('/food/:id',deleteFood)

 router.get('/food/:id',getoneFood)
 
 router.post('/food',addNewCFood)

 async function getFood(req,res){
    const getFood = await Food.findAll();
    res.status(200).json(getFood)
 }

 async function addNewCFood(req,res){
    const obj = req.body;
    const addFood = await Food.create(obj);
    res.status(201).json(addFood)
 }

 async function getoneFood(req,res){
    const id = req.params.id;
    const getoneFood = await Food.findOne({ where: { id: id } });
    res.status(200).json(getoneFood)
 }

 async function updateFood(req,res){
    const id = req.params.id
    const obj = req.body;
    const updateFood = await Food.update(obj,{ where: { id } })
    res.status(201).json(updateFood)
 }

 async function deleteFood(req,res){
    const id = req.params.id;
    const getoneFood = await Food.destroy({ where: { id: id } });
    res.status(204).json(getoneFood)
 }

 
 module.exports = router;