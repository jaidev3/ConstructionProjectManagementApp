require("dotenv").config();
const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(process.env.DB);
};

module.exports = connect;
