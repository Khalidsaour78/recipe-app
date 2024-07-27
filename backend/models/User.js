const mongoose = require("mongoose");

// Define the schema for a user
const UserSchema = new mongoose.Schema({
  // The user's name, which is a required string
  name: {
    type: String,
    required: true,
  },
  // The user's email, which is a required and unique string
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // The user's password, which is a required string
  password: {
    type: String,
    required: true,
  },
});

// Create a model from the schema and export it
module.exports = mongoose.model("User", UserSchema);
