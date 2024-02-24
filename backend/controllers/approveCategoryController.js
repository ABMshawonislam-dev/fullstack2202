const Category = require("../model/categoryModel");

let approveCategoryController = async (req, res) => {
  let { isActive, id } = req.body;
  console.log("ami", isActive, id);

  await Category.findByIdAndUpdate({ _id: id }, { isActive: isActive });

  res.send({ success: "Status Change" });
};

module.exports = approveCategoryController;
