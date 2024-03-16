const Product = require("../model/productSchema");

let allProductController = async (req, res) => {
  let data = await Product.find({});
  res.send(data);
};

module.exports = allProductController;
