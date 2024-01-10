const express = require('express')
const { connected } = require('./db')
const { productRoute } = require('./routes/product.route')

require("dotenv").config()

const app = express()

app.use(express.json())

app.use("/product",productRoute)

app.get("/",(req,res)=>{
    res.send("okkkk")
})


app.listen(process.env.PORT,async(req,res)=>{

    try {
        await connected
        console.log("db is connected")
        
    } catch (error) {
        console.log(error)
    }
    console.log(`server is connected at ${process.env.PORT}`)
})