const express = require('express');
const { Auth } = require('../middleware/auth.middleware');
const { carttModel } = require('../models/cartModel');

const cartRoutes = express.Router();

cartRoutes.post('/',Auth,async(req,res)=>{
    console.log(req.body);
    try {
        const { ItemId } = req.body;
        const existingCart = await carttModel.findOne({ItemId});
        if (existingCart) {
            res.status(200).json({message : "product already exists in cart"});
        }
        console.log(existingCart);
        const newProduct = new carttModel(req.body);
        await newProduct.save();
        console.log(newProduct);
        res.status(200).json({message : "product id added in your cart"});
        

    } catch (error) {
        console.log({error});
        res.status(500).json({message : error.message || "something went to wrong"});
    }
})

cartRoutes.get("/",Auth, async(req,res)=>{
    try {
        const {userId} = req.body;
        const product = await carttModel.find({userId});
        res.status(200).json({product});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message || "something went to wrong"});
    }
})

cartRoutes.post("/:id", Auth,async (req, res) => {
    try {
        const { id } = req.params;

        // Assuming carttModel has a method like findByIdAndUpdate
        const product = await carttModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});


cartRoutes.delete("/:id",Auth, async (req, res) => {
    try {
        const { id } = req.params;

        // Assuming carttModel has a method like findByIdAndDelete
        const deletedProduct = await carttModel.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});



module.exports = {cartRoutes};