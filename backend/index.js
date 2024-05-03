require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./config/dbConfig");
const route = require("./routes");
const path = require("path");

app.use(cors());


app.use(express.json());
dbConnection();
app.use(route);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(8000, function () {
  console.log("Server Is Running");
});

// citmern2202
// 5i6vG9AgWWkIPfbo
