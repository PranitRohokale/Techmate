const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Load ENV vars
dotenv.config();

//Load DB
const Product = require("./src/models/product.model");
const Category = require("./src/models/Category.model");
const Admin = require("./src/models/admin.model");

// here load data from admin.js

mongoose
  .connect(
    "mongodb+srv://avishkar:mayuri@cluster0.c4hj8.mongodb.net/Ganges?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then((response) => {
    console.log("db connectseed");
    // return response.json()
  })
  .catch((err) => console.log("dbconnectionerror"));



//Import into DB
const ImportDB = async () => {
  try {
    const createdUsers = await Admin.insertMany(users)
    console.log("Data Imported");
    process.exit();
  } catch (err) {
    console.log("avishkartrycatch");
    console.error(err);
  }
};

//Delete data from DB
const DeleteDB = async () => {
  try {
    await Product.deleteMany();
    await Category.deleteMany();
    await Admin.deleteMany();
    console.log("Data Destroyed...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  console.log("processing import");
  ImportDB();
} else if (process.argv[2] === "-d") {
  console.log("processing delete");
  DeleteDB();
} else {
  console.log("-i failed");
}
