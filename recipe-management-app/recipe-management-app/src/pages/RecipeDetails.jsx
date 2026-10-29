import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Heart, Trash2 } from "lucide-react";
import { useRecipes } from "../context/RecipeContext";
import NotFound from "./NotFound";

export default function RecipeDetails() {
  const { id } = useParams();
  const { recipes, favorites, toggleFavorite, deleteRecipe } = useRecipes();
  const recipe = recipes.find((item) => String(item.id) === id);

  if (!recipe) return <NotFound />;

  const liked = favorites.includes(recipe.id);
  const ingredients = Array.isArray(recipe.ingredients) ? recipe.ingredients : [];
  const instructions = Array.isArray(recipe.instructions) ? recipe.instructions : [];

  function handleDelete() {
    if (window.confirm(`Delete "${recipe.title}"?`)) {
      deleteRecipe(recipe.id);
      window.location.href = "/recipes";
    }
  }

  return (
    <main className="container page-content">
      <Link to="/recipes" className="back-link"><ArrowLeft size={16} /> Back to recipes</Link>
      <article className="detail-layout">
        <img className="detail-image" src={recipe.image} alt={recipe.title} />
        <div className="detail-content">
          <span className="eyebrow">{recipe.category.toUpperCase()}</span>
          <h1 className="page-title">{recipe.title}</h1>
          <p className="page-description">{recipe.description}</p>
          <p className="detail-time"><Clock size={17} /> Ready in {recipe.time}</p>
          <div className="detail-actions">
            <button className={`button ${liked ? "secondary" : "primary"}`} onClick={() => toggleFavorite(recipe.id)}>
              <Heart size={17} fill={liked ? "currentColor" : "none"} /> {liked ? "Saved to favorites" : "Add to favorites"}
            </button>
            <button className="button danger-button" onClick={handleDelete}><Trash2 size={17} /> Delete</button>
          </div>
        </div>
      </article>

      <div className="detail-sections">
        <section className="detail-panel"><h2>Ingredients</h2>
          {ingredients.length ? <ul>{ingredients.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}</ul> : <p className="page-description">No ingredients added yet.</p>}
        </section>
        <section className="detail-panel"><h2>Instructions</h2>
          {instructions.length ? <ol>{instructions.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}</ol> : <p className="page-description">No instructions added yet.</p>}
        </section>
      </div>
    </main>
  );
}
