const express = require("express");
const categoryController = require("../../controllers/categoryController");
const allCategoryController = require("../../controllers/allcategoryController");
const _ = express.Router();

_.post("/createcategory", categoryController);
_.get("/allcategory", allCategoryController);

module.exports = _;
