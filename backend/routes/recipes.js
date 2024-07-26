const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const recipeController = require("../controllers/recipeController");
const auth = require("../middlewares/auth");

// @route    POST api/recipes
// @desc     Create a recipe
// @access   Private
router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("ingredients", "Ingredients are required").not().isEmpty(),
      check("instructions", "Instructions are required").not().isEmpty(),
    ],
  ],
  recipeController.createRecipe
);

// @route    GET api/recipes
// @desc     Get all recipes
// @access   Private
router.get("/", auth, recipeController.getRecipes);

module.exports = router;
