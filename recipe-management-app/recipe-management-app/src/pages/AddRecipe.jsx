import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import RecipeForm from "../components/RecipeForm";

export default function AddRecipe() {
  return (
    <main className="container page-content">
      <Link to="/" className="back-link"><ArrowLeft size={16} /> Back home</Link>
      <div className="form-heading">
        <span className="eyebrow">YOUR KITCHEN, YOUR RULES</span>
        <h1>Add a new recipe</h1>
        <p>Save a favourite dish for the next time you cook.</p>
      </div>
      <RecipeForm />
    </main>
  );
}
