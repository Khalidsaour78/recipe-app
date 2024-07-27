const Recipe = require("../models/Recipe"); // Import the Recipe model
const { validationResult } = require("express-validator"); // Import validationResult to handle validation errors

// Export the createRecipe function for creating a new recipe
exports.createRecipe = async (req, res) => {
  // Validate the request and return errors if validation fails
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Destructure title, ingredients, and instructions from the request body
  const { title, ingredients, instructions } = req.body;

  try {
    // Create a new recipe instance with the provided details
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      user: req.user.id, // Set the user id from the request
    });

    // Save the new recipe to the database
    const recipe = await newRecipe.save();
    res.json(recipe); // Send the saved recipe as a response
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error"); // Send a server error response if an exception occurs
  }
};

// Export the getRecipes function for retrieving recipes
exports.getRecipes = async (req, res) => {
  try {
    // Find all recipes created by the logged-in user and sort them by date in descending order
    const recipes = await Recipe.find({ user: req.user.id }).sort({ date: -1 });
    res.json(recipes); // Send the retrieved recipes as a response
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error"); // Send a server error response if an exception occurs
  }
};
