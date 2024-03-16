const Variant = require("../model/varinatSchema");

let variantController = (req, res) => {
  let { name } = req.body;
  console.log(req.files);

  let variant = new Variant({
    name: name,
    // image: `/uploads/${req.file.filename}`,
  });
  variant.save();

  res.send({ success: "Variant Created" });
};

module.exports = variantController;
