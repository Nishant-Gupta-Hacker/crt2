import { Link } from "react-router-dom";
import { ArrowRight, ChefHat, Heart, Sparkles } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../context/RecipeContext";

export default function Home() {
  const { recipes, favorites } = useRecipes();

  return (
    <main className="container">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow"><Sparkles size={14} /> YOUR PERSONAL RECIPE COLLECTION</span>
          <h1>Good food brings<br />people <span>together.</span></h1>
          <p>Discover new favourites, organize your best recipes and make every meal a little more special.</p>
          <div className="hero-actions">
            <Link to="/recipes" className="button primary">Explore Recipes <ArrowRight size={17} /></Link>
            <Link to="/add-recipe" className="button secondary"><ChefHat size={17} /> Add Your Recipe</Link>
          </div>
          <div className="stats">
            <div><strong>{recipes.length}</strong><span>Recipes saved</span></div>
            <div><strong>6</strong><span>Food categories</span></div>
            <div><strong>{favorites.length}</strong><span>Favorites</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=90" alt="Fresh colourful food bowl" />
          <div className="floating-note">
            <span className="note-icon"><Heart size={21} /></span>
            <div><strong>Made with love</strong><p>Your next favourite meal awaits</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><span className="eyebrow">HANDPICKED FOR YOU</span><h2>Recipe inspiration</h2><p>A little inspiration for your next meal.</p></div>
          <Link to="/recipes" className="view-all">View all <ArrowRight size={16} /></Link>
        </div>
        <div className="recipe-grid">
          {recipes.slice(0, 3).map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
      </section>
    </main>
  );
}
