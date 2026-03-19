import { useLocation, Link } from "react-router-dom";
import "../components/DocContent.css";

export default function PlaceholderPage({ title }) {
  const location = useLocation();

  return (
    <article className="doc-content">
      <h1>{title || location.pathname}</h1>
      <p>
        This page is under construction. Content will be added soon.
      </p>
      <div className="doc-note">
        <div className="doc-note-title">Coming Soon</div>
        <p>
          This section will contain the full documentation for this topic,
          translated into Korean.
        </p>
      </div>
      <Link to="/">← Back to Welcome</Link>
    </article>
  );
}
