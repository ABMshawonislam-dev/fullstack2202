const Products = require("../model/productSchema");

let productController = (req, res) => {
  let { name, description, variant, regularprice, salesprice, quantity } =
    req.body;
  console.log(variant);

  let product = new Products({
    name: name,
    description: description,
    variant: variant,
    image: `/uploads/${req.file.filename}`,
    regularprice: regularprice,
    salesprice: salesprice,
    quantity: quantity,
  });
  product.save();
  res.send({ success: "Product Created" });
};

module.exports = productController;
