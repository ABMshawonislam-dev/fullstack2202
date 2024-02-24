const Category = require("../model/categoryModel");

let editEategoryController = async (req, res) => {
  let { name, id } = req.body;
  console.log("ami", name, id);

  await Category.findByIdAndUpdate({ _id: id }, { name: name });

  res.send({ success: "Edit Successfull" });
};

module.exports = editEategoryController;
