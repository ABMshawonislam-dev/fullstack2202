const mongoose = require("mongoose");
let {USER_NAME,PASSWORD,DATABASE_NAME}=process.env

function dbConnection(){
    mongoose
  .connect(
    `mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.ggnbro5.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`
  )
//  mongodb+srv://citmern2202:5i6vG9AgWWkIPfbo@cluster0.ggnbro5.mongodb.net/ecommerce?retryWrites=true&w=majority
  .then(() => console.log("Database Connected!"));
}

  module.exports = dbConnection;