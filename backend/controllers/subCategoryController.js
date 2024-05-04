const SubCategory = require("../model/subCategorySchema");
const Category = require("../model/categoryModel");

let subCategoryController = async (req, res) => {
    let { name, categoryId } = req.body;

    let subCategory = new SubCategory({
        name: name,
        categoryId: categoryId,
    });
    subCategory.save();

    await Category.findOneAndUpdate(
        { _id: categoryId },
        { $push: { subCategoryId: subCategory._id } },
        { new: true }
      );

    res.send({success:"Subcategory Created Successfull"})
};

module.exports = subCategoryController;
