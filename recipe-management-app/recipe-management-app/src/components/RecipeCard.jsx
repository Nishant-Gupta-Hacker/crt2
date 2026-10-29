import { Link } from "react-router-dom";
import { Heart, Clock, ArrowUpRight } from "lucide-react";
import { useRecipes } from "../context/RecipeContext";

export default function RecipeCard({ recipe }) {
  const { favorites, toggleFavorite } = useRecipes();
  const liked = favorites.includes(recipe.id);

  return (
    <article className="recipe-card">
      <div className="recipe-image">
        <Link to={`/recipe/${recipe.id}`} aria-label={`View ${recipe.title}`}>
          <img src={recipe.image} alt={recipe.title} loading="lazy" />
        </Link>
        <span className="category-badge">{recipe.category}</span>
        <button
          className={`favorite-button ${liked ? "liked" : ""}`}
          onClick={() => toggleFavorite(recipe.id)}
          aria-label={liked ? "Remove from favorites" : "Add to favorites"}
          title={liked ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart size={19} fill={liked ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="recipe-info">
        <div className="recipe-time"><Clock size={15} /> {recipe.time}</div>
        <Link to={`/recipe/${recipe.id}`} className="recipe-title-link">
          <h3>{recipe.title}</h3>
        </Link>
        <p>{recipe.description}</p>
        <div className="recipe-bottom">
          <span>Made with love ♡</span>
          <Link to={`/recipe/${recipe.id}`} aria-label={`Open ${recipe.title}`}>
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
    </article>
  );
}
