const express = require("express");
const router = express.Router();
const productData = require("../data/products.json");
const { logData } = require("../middlewares/logger");

const {
  returnAllProducts,
  CreateProduct,
  updateProduct,
  singleProduct,
  deleteProduct,
} = require("../controller/ProductController");
// filtering data from json file
router.get("/", logData, returnAllProducts);

router.get("/:productID", singleProduct);
router.post("/", CreateProduct);
router.patch("/:productID", updateProduct);
router.delete("/:productID", deleteProduct);

module.exports = router;
