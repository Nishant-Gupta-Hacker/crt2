import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="container page-content not-found">
      <span className="eyebrow">404 · WRONG TURN</span>
      <h1 className="page-title">This recipe went missing.</h1>
      <p className="page-description">The page may have moved, or the link may be incorrect.</p>
      <Link to="/" className="button primary"><ArrowLeft size={17} /> Back to home</Link>
    </main>
  );
}
