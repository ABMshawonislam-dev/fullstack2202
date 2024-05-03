const Variant = require("../model/varinatSchema");
const Product = require("../model/productSchema");

let variantController =async (req, res) => {
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

    await Product.findOneAndUpdate(
      { _id: productId },
      { $push: { variantsId: variant._id } },
      { new: true }
    );


  res.send({ success: "Variant Created" });
};

module.exports = variantController;
