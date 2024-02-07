const express = require("express");
const { productModel } = require("../models/product.model");
const ApiFeatures = require("../utils/apiFeatures");
const { Auth, authorizeRoles } = require("../middleware/auth.middleware");

const productRoute = express.Router();

//Creat Product ---Admin
productRoute.post(
  "/admin/new",
  Auth,
  authorizeRoles("admin"),
  async (req, res) => {
    const payload = req.body;
    try {
      req.body.user = req.user.id;
      const product = new productModel(payload);

      await product.save();
      res.status(200).send({ message: "New product is added successfully" });
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
);

//Get All Product

productRoute.get("/all", authorizeRoles("admin"), async (req, res) => {
  console.log("/all")
  const resultPerPage = 5;
  const productCount = await productModel.countDocuments();
  try {
    const apiFeature = new ApiFeatures(productModel.find(), req.query)
      .search()
      .filter()
      .pagination(resultPerPage);

    let products = await apiFeature.query;

    res.status(200).send({ success: true, products, productCount });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Get Product ---Admin
productRoute.get("/", async (req, res) => {
  try {
    const product = await productModel.find();
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Get Single Product

productRoute.get('/:id', async (req,res)=>{
  try {
    const {id} = req.params;

    const product = await productModel.findById(id);
    if (!product) {
      res.status(404).json({message: 'Product not found'});
    }
    res.status(200).json({product});
  } catch (error) {
    res.status(404).send(error.message);
  }
})


//Get Product delatais
productRoute.get(
  "/admin/:id",
  Auth,
  authorizeRoles("admin"),
  async (req, res) => {
    const { id } = req.params;
    try {
      const product = await productModel.findById(id);

      if (!product) {
        return res.status(404).send({ message: "Product not found" });
      }

      res.status(200).send(product);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
);

//Update Product---Admin
productRoute.patch(
  "/admin/:id",
  Auth,
  authorizeRoles("admin"),
  async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
      const product = await productModel.findById(id);

      if (!product) {
        return res.status(404).send({ message: "Product not found" });
      }

      await productModel.findByIdAndUpdate({ _id: id }, payload);
      res.status(200).send({ message: "Product updated" });
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
);

//Delete Product ----admin
productRoute.delete(
  "/admin/:id",
  Auth,
  authorizeRoles("admin"),
  async (req, res) => {
    const { id } = req.params;

    try {
      const product = await productModel.findById(id);

      if (!product) {
        return res.status(404).send({ message: "Product not found" });
      }

      await productModel.findByIdAndDelete({ _id: id });
      res.status(200).send({ message: "Product Deleted" });
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
);

//Create new review or update new review
productRoute.put("/review", Auth, async (req, res) => {
  const { rating, comment, productId } = req.body;
  try {
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };

    const product = await productModel.findById(productId);

    const isReviewed = product.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      product.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      product.reviews.push(review);
      product.numOfReviews = product.reviews.length;
    }

    let avg = 0;

    product.reviews.forEach((rev) => {
      avg += rev.rating;
    });

    product.ratings = avg / product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).send({ message: "Successful create or update review" });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

//Get All reviews of a product
productRoute.get("/reviews", async (req, res) => {
  try {
    const product = await productModel.findById(req.query.id);

    if (!product) {
      return res.status(401).send({ message: "Product is not found" });
    }

    res
      .status(200)
      .send({ message: "Product review", reviews: product.reviews });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

//product review Delete
productRoute.delete("/reviews", Auth, async (req, res) => {
    try {
        const product = await productModel.findById(req.query.productId);
        // we have to give product ID and review ID Both
        if (!product) {
          return res.status(200).send("Product not found");
        }
      
        const reviews = product.reviews.filter(
          (rev) => rev._id.toString() !== req.query.id.toString()
        );
      
        let avg = 0;
      
        reviews.forEach((rev) => {
          avg += rev.rating;
        });
      
        let ratings = 0;
      
        if (reviews.length === 0) {
          ratings = 0;
        } else {
          ratings = avg / reviews.length;
        }
      
        const numOfReviews = reviews.length;
      
        await productModel.findByIdAndUpdate(
          req.query.productId,
          {
            reviews,
            ratings,
            numOfReviews,
          },
          {
            new: true,
            runValidators: true,
            useFindAndModify: false,
          }
        );
      
        res.status(200).send({
          success: true,
          message:"product was deleted successfully"
        });


    } catch (error) {
      res.status(401).send(error.message);
    }
  });



module.exports = { productRoute };
