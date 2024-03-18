const express = require("express");
const router = express.Router();
const ProductController = require('../controller/product');

router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getProduct);
router.post("/", ProductController.createProduct);
router.patch("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);
exports.router = router;