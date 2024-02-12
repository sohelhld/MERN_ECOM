const express = require("express");
const { Auth } = require("../middleware/auth.middleware");
const { carttModel } = require("../models/cartModel");
const { productModel } = require("../models/product.model");

const cartRoutes = express.Router();

//new product Add to cart
cartRoutes.post("/newCart", Auth, async (req, res) => {
    const { productId } = req.body;
    try {
        const product = await productModel.findById({ _id: productId });
        // console.log(product);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        const userId = req.user._id;

        let cart = await carttModel.findOne({ userId: userId });
        // console.log("cart:-",cart)
        if (!cart) {
            cart = new carttModel({ userId, items: [] });
        }

        const existingItem = cart.items.find(
            (item) => item.productId.toString() === productId
        );
        // console.log("existingItem",existingItem)
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.items.push({
                productId,
                quantity: 1,
                productName: product.name,
                price: product.price,
                Image: product.images,
            });
        }

        await cart.save();

        res.status(200).send({ message: "Product added to cart successfully" });
    } catch (error) {
        res.status(401).send(error.message);
    }
});

//Get CartItem accoding to userId
cartRoutes.get("/getCartItems", Auth, async (req, res) => {
    try {
        const userId = req.user._id;

        let cartItems = await carttModel.findOne({ userId: userId });
        res.status(200).send(cartItems.items);
    } catch (error) {
        res.status(401).send(error.message);
    }
});

//Delete CartItam for user
cartRoutes.delete("/deleteCartItem/:productId", Auth, async (req, res) => {
    const  {productId}  = req.params;
    // console.log(productId)
    try {
        const userId = req.user._id;
        let cartList = await carttModel.findOne({ userId: userId });
        // console.log(cartList)
        let carListItem = cartList.items

        for(let i=0;i<carListItem.length;i++){
            console.log(carListItem[i].productId.toString())
            if(carListItem[i].productId===productId){
                console.log("okk")
            }
        }
        
        const index = cartList.items.findIndex((item) => item.productId.toString() === productId)
          
        // console.log("index:",index) //-1
        if (index !== -1) {
             cartList.items.splice(index, 1);  
             await cartList.save();
            res.status(200).json({ message: 'Item deleted successfully' });
        } else {
            res.status(404).json({ error: 'Item not found in the cart' });
        }

    } catch (error) {
        res.status(401).send(error.message);
    }
});

// cartRoutes.post("/", Auth, async (req, res) => {
//     console.log(req.body);
//     try {
//         const { ItemId } = req.body;
//         const existingCart = await carttModel.findOne({ ItemId });
//         if (existingCart) {
//             return res
//                 .status(400)
//                 .json({ message: "product already exists in cart" });
//         }
//         console.log(existingCart);
//         const newProduct = new carttModel(req.body);
//         await newProduct.save();
//         console.log(newProduct);
//         res.status(200).json({ message: "product id added in your cart" });
//     } catch (error) {
//         console.log({ error });
//         res.status(500).json({
//             message: error.message || "something went to wrong",
//         });
//     }
// });

// cartRoutes.get("/", Auth, async (req, res) => {
//     try {
//         const { userId } = req.body;
//         const product = await carttModel.find({ userId });
//         res.status(200).json({ product });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message: error.message || "something went to wrong",
//         });
//     }
// });

// cartRoutes.post("/:id", Auth, async (req, res) => {
//     try {
//         const { id } = req.params;

//         // Assuming carttModel has a method like findByIdAndUpdate
//         const product = await carttModel.findByIdAndUpdate(id, req.body, {
//             new: true,
//         });

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         res.status(200).json(product);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });
//     }
// });

// cartRoutes.delete("/:id", Auth, async (req, res) => {
//     try {
//         const { id } = req.params;

//         // Assuming carttModel has a method like findByIdAndDelete
//         const deletedProduct = await carttModel.findByIdAndDelete(id);

//         if (!deletedProduct) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         res.status(200).json({ message: "Product deleted successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });
//     }
// });

module.exports = { cartRoutes };
