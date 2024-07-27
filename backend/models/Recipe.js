const mongoose = require("mongoose");

// Define the schema for a recipe
const RecipeSchema = new mongoose.Schema({
  // The title of the recipe, which is a required string
  title: {
    type: String,
    required: true,
  },
  // An array of ingredients, each ingredient is a required string
  ingredients: {
    type: [String],
    required: true,
  },
  // The cooking instructions for the recipe, which is a required string
  instructions: {
    type: String,
    required: true,
  },
  // Reference to the user who created the recipe,
  // which is a required ObjectId that refers to a User document
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// Create a model from the schema and export it
module.exports = mongoose.model("Recipe", RecipeSchema);
