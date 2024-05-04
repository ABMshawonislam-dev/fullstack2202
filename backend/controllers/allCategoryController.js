const Category = require("../model/categoryModel");

let allCategoryController = async (req, res) => {
  let data = await Category.find({}).populate("subCategoryId");

  res.send(data);
  console.log(data);
};

module.exports = allCategoryController;
