const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true,"Please provide Product Name"],
        trim:true
    },
    description:{
        type:String,
        require:[true,"Please provide Product Description"]
    },
    price:{
        type:Number,
        require:[true,"Please provide Product Price"],
        maxLength:[8,"Price cannot exceed 8 numbers"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                require:true
            },
            url:{
                type:String,
                require:true
            }
        }
    ],
    category:{
        type:String,
        require:[true,"Please provide Product Category"],
        
    },
    stock:{
        type:Number,
        require:[true,"Please provide Product stock"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                require:true
            },
            rating:{
                type:String,
                require:true
            },
            comment:{
                type:String,
                require:true
            }
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const productModel = mongoose.model("Product",productSchema)

module.exports = {productModel}