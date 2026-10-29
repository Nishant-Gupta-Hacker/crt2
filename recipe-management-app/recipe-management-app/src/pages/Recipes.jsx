import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../context/RecipeContext";

export default function Recipes() {
  const { recipes } = useRecipes();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredRecipes = useMemo(() => recipes.filter((recipe) => {
    const matchesSearch = `${recipe.title} ${recipe.description}`.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || recipe.category === category;
    return matchesSearch && matchesCategory;
  }), [recipes, search, category]);

  return (
    <main className="container page-content">
      <span className="eyebrow"><SlidersHorizontal size={14} /> YOUR COLLECTION</span>
      <h1 className="page-title">All recipes</h1>
      <p className="page-description">Find something delicious to make today.</p>

      <div className="recipe-tools">
        <div className="search-box"><Search size={18} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search recipes..." /></div>
        <select aria-label="Filter by category" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option>All</option><option>Breakfast</option><option>Lunch</option><option>Dinner</option><option>Dessert</option><option>Snacks</option><option>Drinks</option>
        </select>
      </div>

      {filteredRecipes.length ? (
        <div className="recipe-grid">{filteredRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}</div>
      ) : (
        <div className="empty-state"><Search size={34} /><h2>No recipes found</h2><p>Try another search or category.</p></div>
      )}
    </main>
  );
}
