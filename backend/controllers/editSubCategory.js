const Subcategory = require("../model/subCategorySchema");

let editEategoryController = async (req, res) => {
  let { name, id } = req.body;
  console.log("ami", name, id);

  await Subcategory.findByIdAndUpdate({ _id: id }, { name: name });

  res.send({ success: "Edit Successfull" });
};

module.exports = editEategoryController;
