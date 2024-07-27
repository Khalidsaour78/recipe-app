import React, { useState } from "react";
import axios from "axios";

const RecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });

  const { title, ingredients, instructions } = recipe;

  const onChange = (e) =>
    setRecipe({ ...recipe, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/recipes", {
        title,
        ingredients: ingredients.split(","),
        instructions,
      });
      alert("Recipe added successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Add a Recipe</h1>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="ingredients"
        value={ingredients}
        onChange={onChange}
        required
      />
      <textarea
        name="instructions"
        value={instructions}
        onChange={onChange}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
