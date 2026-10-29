import { Heart } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../context/RecipeContext";

export default function Favorites() {
  const { recipes, favorites } = useRecipes();
  const savedRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

  return (
    <main className="container page-content">
      <span className="eyebrow"><Heart size={14} /> YOUR COLLECTION</span>
      <h1 className="page-title">Your favorites</h1>
      <p className="page-description">All the recipes you love, in one place.</p>

      {savedRecipes.length ? (
        <div className="recipe-grid">{savedRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}</div>
      ) : (
        <div className="empty-state"><Heart size={35} /><h2>No favorites yet</h2><p>Tap the heart on a recipe to save it here.</p></div>
      )}
    </main>
  );
}
