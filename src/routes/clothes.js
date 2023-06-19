'use strict'

 const express = require('express')

 const router = express.Router();

 const {Clothes} = require('../models/index')

 router.get('/clothes',getClothes)
 
 router.get('/clothes/:id',getOneClothes)

 router.put('/clothes/:id',updateClothes)

 router.post('/clothes',addNewClothe)

 router.delete('/clothes/:id',deleteClothes)

 async function getClothes(req,res){
    const project = await Clothes.findAll();
    res.status(200).json(project)
 }

 async function addNewClothe(req,res){
    const obj = req.body;
    const addClothes = await Clothes.create(obj);
    res.status(201).json(addClothes)
 }

 async function updateClothes(req,res){
    const id = req.params.id;
    const obj = req.body;
    const updateClothe = await Clothes.update(obj,{where:{id:id}});
    res.status(201).json(updateClothe)
 }

 async function getOneClothes(req,res){
    const id = req.params.id;
    const findClothe = await Clothes.findOne({where:{id:id}})
    res.status(200).json(findClothe)
 }

 async function deleteClothes(req,res){
    const id = req.params.id;
    const deleteClothe = await Clothes.destroy({where:{id:id}})
    res.status(204).json(deleteClothe)
 }

 module.exports = router;