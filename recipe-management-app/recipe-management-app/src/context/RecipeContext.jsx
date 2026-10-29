import { createContext, useContext, useEffect, useState } from "react";

const RecipeContext = createContext(null);

const starterRecipes = [
  {
    id: 1,
    title: "Creamy Garden Pasta",
    category: "Dinner",
    time: "25 min",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",
    description: "Comforting pasta with fresh herbs and delicious flavours.",
    ingredients: ["Pasta", "Olive oil", "Garlic", "Fresh herbs", "Salt and pepper"],
    instructions: ["Boil the pasta according to the packet.", "Warm oil and garlic in a pan.", "Toss the pasta with herbs and seasoning.", "Serve warm."],
  },
  {
    id: 2,
    title: "Healthy Breakfast Bowl",
    category: "Breakfast",
    time: "15 min",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85",
    description: "A colourful, fresh breakfast to start your day.",
    ingredients: ["Seasonal vegetables", "Eggs or beans", "Toast", "Salt and pepper"],
    instructions: ["Wash and prepare the vegetables.", "Cook the eggs or beans if using.", "Arrange everything in a bowl and season."],
  },
  {
    id: 3,
    title: "Fresh Green Salad",
    category: "Lunch",
    time: "10 min",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
    description: "A refreshing salad packed with colourful vegetables.",
    ingredients: ["Lettuce", "Tomatoes", "Cucumber", "Avocado", "Lemon dressing"],
    instructions: ["Wash and chop the vegetables.", "Mix in a bowl.", "Add lemon dressing and serve fresh."],
  },
];

function readSaved(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState(() => readSaved("recipebook-recipes", starterRecipes));
  const [favorites, setFavorites] = useState(() => readSaved("recipebook-favorites", []));

  useEffect(() => {
    localStorage.setItem("recipebook-recipes", JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem("recipebook-favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addRecipe(recipe) {
    setRecipes((previous) => [{ ...recipe, id: Date.now() }, ...previous]);
  }

  function toggleFavorite(id) {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function deleteRecipe(id) {
    setRecipes((previous) => previous.filter((recipe) => recipe.id !== id));
    setFavorites((previous) => previous.filter((item) => item !== id));
  }

  return (
    <RecipeContext.Provider value={{ recipes, favorites, addRecipe, toggleFavorite, deleteRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipeContext);
  if (!context) throw new Error("useRecipes must be used inside RecipeProvider");
  return context;
}
