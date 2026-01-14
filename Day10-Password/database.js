const mongoose = require("mongoose");
require("dotenv").config();

const main = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed ❌");
    console.error(err.message);
    process.exit(1); // stop app
  }
};

module.exports = main;
