const express = require("express");
const _ = express.Router();
const categoryController = require("../../controllers/categoryController");
const allCategoryController = require("../../controllers/allcategoryController");
const subCategoryController = require("../../controllers/subCategoryController");
const allsubCategoryController = require("../../controllers/allSubCategoryControllers");
const productController = require("../../controllers/productController");
const deleteCategory = require("../../controllers/deleteCategory");
const editEategoryController = require("../../controllers/editCategory");


_.get("/allcategory", allCategoryController);
_.get("/allsubcategory", allsubCategoryController);

_.post("/createcategory", categoryController);
_.post("/subcategory", subCategoryController);
_.post("/products", productController);
_.post("/deletecategory", deleteCategory);
_.post("/editcategory", editEategoryController);

module.exports = _;
