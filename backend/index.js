const express = require('express')
var cookieParser = require('cookie-parser')
const { connected } = require('./db')
const { productRoute } = require('./routes/product.route')
const { userRouter } = require('./routes/user.route')

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/users",userRouter)
app.use("/product",productRoute)


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