const express = require("express");
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const fileUpload = require("express-file-upload");

const cloudinary = require("cloudinary");

const { connected } = require("./db");
const { productRoute } = require("./routes/product.route");
const { userRouter } = require("./routes/user.route");
const { orderRouter } = require("./routes/orderRouter");
const fileUpload = require("express-fileupload");
const { cartRoutes } = require("./routes/cartRoutes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/users", userRouter);
app.use("/product", productRoute);
app.use("/order", orderRouter);
app.use("/cart", cartRoutes);

app.get("/", (req, res) => {
    res.send("okkkk");
});

app.listen(process.env.PORT, async (req, res) => {
    try {
        await connected;
        console.log("db is connected");
    } catch (error) {
        console.log(error.message);
    }
    console.log(`server is connected at ${process.env.PORT}`);
});

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
});
