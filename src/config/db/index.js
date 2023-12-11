const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
    console.log("Connect OK");
  } catch (error) {
    console.log("Connect not OK");
  }
}

module.exports = { connect };
