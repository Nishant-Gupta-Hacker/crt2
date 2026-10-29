import { NavLink, Link } from "react-router-dom";
import { ChefHat, Heart, House, BookOpen, Plus } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand" aria-label="RecipeBook home">
        <span className="brand-icon"><ChefHat size={22} /></span>
        <span>RecipeBook</span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end><House size={16} /> Home</NavLink>
        <NavLink to="/recipes"><BookOpen size={16} /> Recipes</NavLink>
        <NavLink to="/favorites"><Heart size={16} /> Favorites</NavLink>
      </nav>

      <Link to="/add-recipe" className="button primary nav-add">
        <Plus size={17} /> Add Recipe
      </Link>
    </header>
  );
}
