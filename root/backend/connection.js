const mongoose = require("mongoose");

const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});

const uri = process.env.ATLAS_URI;

const connectDB = async () => {
  await mongoose
    .connect(uri)
    .then(() => {
      console.log("MongoDB database connection established successfully");
    })
    .catch((err) => console.log(err));
};

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {});

module.exports = connectDB;
