import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { RecipeProvider } from "./context/RecipeContext";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import AddRecipe from "./pages/AddRecipe";
import Favorites from "./pages/Favorites";
import RecipeDetails from "./pages/RecipeDetails";
import NotFound from "./pages/NotFound";
import "./style/App.css";

export default function App() {
  return (
    <RecipeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RecipeProvider>
  );
}
