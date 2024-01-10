const express = require('express');
const { productModel } = require('../models/product.model');
const ApiFeatures = require('../utils/apiFeatures');

const productRoute = express.Router();


//Creat Product ---Admin
productRoute.post('/new',async(req,res)=>{
    const payload = req.body
    try {
        const product  = new productModel(payload)

        await product.save()
        res.status(200).send({message:"New product is added successfully"})
        
    } catch (error) {
        res.status(404).send(error.message)
    }
})

//Get All Product

productRoute.get("/all",async(req,res)=>{
    const resultPerPage = 5
    const productCount = await productModel.countDocuments()
    try {
        const apiFeature = new ApiFeatures(productModel.find(),req.query)
        .search()
        .filter()
        .pagination(resultPerPage)

        let products = await apiFeature.query;

        res.status(200).send({success:true,
        products,
        productCount
    })
        
    } catch (error) {
        res.status(404).send({message:error.message})
    }
})

//Get Product ---Admin 
productRoute.get("/",async(req,res)=>{

    try {

        const product = await productModel.find()
        res.status(200).send(product)
        
    } catch (error) {
        res.status(404).send(error.message)
    }
})

//Get Product delatais
productRoute.get("/:id",async(req,res)=>{
    const {id}= req.params
    try {

        const product = await productModel.findById(id)
        
        if(!product) {
            res.status(404).send({message: 'Product not found'})
        }

        res.status(200).send(product)
        
    } catch (error) {
        res.status(404).send(error.message)
    }
})


//Update Product---Admin
productRoute.patch("/:id",async(req,res)=>{
    const {id} = req.params
    const payload = req.body
    try {

        const product = await productModel.findById(id)
        
        if(!product) {
            res.status(404).send({message: 'Product not found'})
        }

         await productModel.findByIdAndUpdate({_id:id}, payload)
        res.status(200).send({message:"Product updated"})

    } catch (error) {
        res.status(404).send(error.message)
    }
})


//Delete Product ----admin
productRoute.delete("/:id",async(req,res)=>{
    const {id} = req.params
   
    try {

        const product = await productModel.findById(id)
        
        if(!product) {
            res.status(404).send({message: 'Product not found'})
        }

         await productModel.findByIdAndDelete({_id:id})
        res.status(200).send({message:"Product Deleted"})

    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = {productRoute}