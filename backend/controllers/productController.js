const Products = require("../model/productSchema");

let productController = (req, res) => {
  let { name, description, variant } = req.body;

  let product = new Products({
    name: name,
    description: description,
    variant: variant,
  });
  product.save();
  console.log(product);
};

module.exports = productController;
