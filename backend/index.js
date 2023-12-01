require('dotenv').config()
const express = require("express");
const app = express();
const dbConnection = require("./config/dbConfig")
const route = require("./routes")



app.use(express.json());
dbConnection()
app.use(route)






app.listen(8000, function () {
  console.log("Server Is Running");
});

// citmern2202
// 5i6vG9AgWWkIPfbo
