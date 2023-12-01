const express = require("express");
const _ = express.Router()
const authRoutes = require("./authRoutes")


_.use("/auth",authRoutes)


module.exports = _;