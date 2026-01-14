const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
  city: String,
  gender: String,
  emailId: String,
  password: String,
  photo: String
});

const User = mongoose.model("User", userSchema);
module.exports = User;
