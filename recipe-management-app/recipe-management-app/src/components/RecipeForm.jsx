import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext";

const emptyForm = {
  title: "",
  category: "Dinner",
  time: "",
  image: "",
  description: "",
  ingredients: "",
  instructions: "",
};

export default function RecipeForm() {
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    addRecipe({
      ...form,
      image: form.image.trim() || "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80",
      ingredients: form.ingredients.split("\n").map((item) => item.trim()).filter(Boolean),
      instructions: form.instructions.split("\n").map((item) => item.trim()).filter(Boolean),
    });

    navigate("/recipes");
  }

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Recipe name</label>
      <input id="title" name="title" value={form.title} onChange={handleChange} placeholder="e.g. Homemade Pasta" required />

      <label htmlFor="category">Category</label>
      <select id="category" name="category" value={form.category} onChange={handleChange}>
        <option>Dinner</option>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dessert</option>
        <option>Snacks</option>
        <option>Drinks</option>
      </select>

      <label htmlFor="time">Preparation time</label>
      <input id="time" name="time" value={form.time} onChange={handleChange} placeholder="25 min" required />

      <label htmlFor="image">Food image URL (optional)</label>
      <input id="image" name="image" type="url" value={form.image} onChange={handleChange} placeholder="https://example.com/food.jpg" />

      <label htmlFor="description">Short description</label>
      <textarea id="description" name="description" value={form.description} onChange={handleChange} placeholder="What makes this recipe special?" rows={3} required />

      <label htmlFor="ingredients">Ingredients (one per line)</label>
      <textarea id="ingredients" name="ingredients" value={form.ingredients} onChange={handleChange} placeholder={"2 tomatoes\n1 onion\nSalt to taste"} rows={4} />

      <label htmlFor="instructions">Cooking instructions (one step per line)</label>
      <textarea id="instructions" name="instructions" value={form.instructions} onChange={handleChange} placeholder={"Prepare the ingredients\nCook until ready"} rows={4} />

      <button className="button primary submit-button" type="submit">Save Recipe</button>
    </form>
  );
}
