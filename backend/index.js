const express = require('express')
const cookieParser = require('cookie-parser')
const { connected } = require('./db')
const { productRoute } = require('./routes/product.route')
const { userRouter } = require('./routes/user.route')
const { orderRouter } = require('./routes/orderRouter')
const cors = require('cors')
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/users",userRouter)
app.use("/product",productRoute)
app.use("/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("okkkk")
})


app.listen(process.env.PORT,async(req,res)=>{

    try {
        await connected
        console.log("db is connected")
        
    } catch (error) {
        console.log(error.message)
    }
    console.log(`server is connected at ${process.env.PORT}`)
})