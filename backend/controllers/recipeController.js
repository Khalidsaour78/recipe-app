const Recipe = require("../models/Recipe");
const { validationResult } = require("express-validator");

exports.createRecipe = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, ingredients, instructions } = req.body;

  try {
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      user: req.user.id,
    });

    const recipe = await newRecipe.save();
    res.json(recipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.user.id }).sort({ date: -1 });
    res.json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
