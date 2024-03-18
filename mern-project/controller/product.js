const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const model = require("../model/product")
const Product = model.Product;

exports.getAll = async(re, res) => {
    const produxts = await Product.find();
    res.status(200).json(produxts);
  };
  exports.getProduct = async (req, res) => {
    const id = req.params.id;
    const result = await Product.findById(id);
    res.status(200).json(result);
  };
  exports.createProduct = async (req, res) => {

    const product = new Product(req.body)
   await product.save()
    // data.push(req.body);
    res.json(req.body);
  };
  exports.updateProduct = async(req, res) => {
    try{
    const id = req.params.id;
    const result = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
    res.status(200).json(result);
    }
    catch(err){
      console.log(err);
    }
  };
  exports.deleteProduct = async(req, res) => {
    const id = req.params.id;
      const result = await Product.findOneAndDelete({_id:id})
    res.status(200).json(result);
  };