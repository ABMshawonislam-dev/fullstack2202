const Variant = require("../model/varinatSchema");

let variantController = (req, res) => {
  let { name, productId, regularprice, salesprice, quantity } = req.body;
  console.log(req.file);

  let variant = new Variant({
    name: name,
    productId: productId,
    image: `/uploads/${req.file.filename}`,
    regularprice: regularprice,
    salesprice: salesprice,
    quantity: quantity,
  });
  variant.save();

  res.send({ success: "Variant Created" });
};

module.exports = variantController;
