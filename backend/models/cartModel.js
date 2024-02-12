const mongoose = require("mongoose");

// const carttSchema = mongoose.Schema({
//     name: {
//         type: String,
//         require: [true, "Please provide Product Name"],
//         trim: true
//     },
//     description: {
//         type: String,
//         require: [true, "Please provide Product Description"]
//     },
//     price: {
//         type: Number,
//         require: [true, "Please provide Product Price"],
//         maxLength: [8, "Price cannot exceed 8 numbers"]
//     },
//     ratings: {
//         type: Number,
//         default: 0
//     },
//     images: [
//         {
//             public_id: {
//                 type: String,
//                 require: true
//             },
//             url: {
//                 type: String,
//                 require: true
//             }
//         }
//     ],
//     category: {
//         type: String,
//         require: [true, "Please provide Product Category"],

//     },
//     userEmail: {
//         type: String,
//         require: true
//     },
//     userName: {
//         type: String,
//         require: true
//     },
//     userId: {
//         type: String,
//         require: true
//     },
//     quantity: {
//         type: Number,
//         default: 1
//     },
//     ItemId: {
//         type: String,
//         require: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// })

// const carttModel = mongoose.model("Cart", carttSchema)

// module.exports = { carttModel }

const cartItemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    productName: { type: String },
    price: {
        type: Number,
    },
    Image:{ type: Array },
});

const cartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    items: [cartItemSchema],
});

const carttModel = mongoose.model("Cart", cartSchema);

module.exports = { carttModel };
