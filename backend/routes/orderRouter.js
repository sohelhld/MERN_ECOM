const express = require("express");
const { Auth, authorizeRoles } = require("../middleware/auth.middleware");
const { orderModel } = require("../models/orderModel");

const orderRouter = express.Router();

// Add new order
orderRouter.post("/new", Auth, async (req, res) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  try {
    const order = new orderModel({
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
      user: req.user._id,
    });

    await order.save();
    res.status(200).send({message:"new order is succesfully Added",order})

  } catch (error) {
    res.status(401).send(error.message);
  }
});

//Get single order
//get single order with user Info
orderRouter.get("/:id", Auth, async (req, res) => {

  try {
    const order = await orderModel.findById(req.params.id).populate(
      "user",
      "name email"
    )

    if(!order){
      return res.status(401).send({message:"Order not found with this Id"})
    }

    res.status(200).send(order)
    
  } catch (error) {
    res.status(404).send(error.message);
  }
})

//get loged in user Orders
orderRouter.get("/me", Auth, async (req, res) => {

  try {
    const orders = await orderModel.find({user:req.user._id});

    res.status(200).send(orders)
    
  } catch (error) {
    res.status(404).send(error.message);
  }
})

//get All Orders ---admin
orderRouter.get("/admin/get", Auth, authorizeRoles("admin"),async (req, res) => {

      try {
        const orders = await orderModel.find()
        let totalAmount = 0

        orders.forEach((order) => {
          totalAmount += order.totalPrice
        })
        
        res.status(200).json({
          success: true,
          totalAmount,
          orders,
        });

      } catch (error) {
        res.status(404).send(error.message);
      }
})

//update Order Status--- Admin
orderRouter.put("/admin/:id", Auth,authorizeRoles("admin"), async (req, res) => {
      try {
        const order = await orderModel.findById(req.params.id);
        if(!order){
          return res.status(401).send({message:"Order not found with this Id"})
        }

        if(order.orderStatus==="Delivered"){
          return res.status(401).send({message:"You have already delivered this order"})
        }
        
        if(req.body.status=="Shipped"){
          order.orderItems.forEach(async(o)=>{
            await updateStock(o.product, o.quantity)
          });
        }
        order.orderStatus = req.body.status;

        if(req.body.status=="Delivered"){
          order.deliveredAt = Date.now();
        }

        await order.save({validateBeforeSave: false});

        res.status(200).send(order)

      } catch (error) {
        res.status(404).send(error.message);
      }
})

async function updateStock(id,quantity){
  const product = await productModel.findById(id);
  console.log(`Updating stock for product ID: ${id}, Quantity: ${quantity}`);
  product.Stock -= quantity;

  await product.save({validateBeforeSave:false})
  console.log(`Stock updated. New stock for product ID ${id}: ${product.stock}`);
}

//delete Order--- Admin 
orderRouter.delete("/admin/:id", Auth,authorizeRoles("admin"), async (req, res) => {
      try {
        const order = await orderModel.findByIdAndDelete(req.params.id);
        if(!order){
          return res.status(404).send({message: "Order not found With this Id"})
        }
        // await order.remove();
        res.status(200).send({message: "Order successfully removed"})
        
      } catch (error) {
        res.status(404).send(error.message);
      }
})

module.exports = { orderRouter };
