const SubCategory = require("../model/subCategorySchema");

let singleCategoryController = async (req, res) => {
    let { slug } = req.query;
  console.log("asdasd", req.query);

    let data = await SubCategory.find({ categoryId: slug });
    console.log("aaaaaaaaaa",data)

    res.send(data);
};

module.exports = singleCategoryController;
