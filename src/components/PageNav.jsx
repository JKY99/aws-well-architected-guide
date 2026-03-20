import { Link, useLocation } from "react-router-dom";
import { pageOrder } from "../data/pageOrder";
import "../components/DocContent.css";

export default function PageNav() {
  const location = useLocation();
  const idx = pageOrder.findIndex((p) => p.path === location.pathname);
  const prev = idx > 0 ? pageOrder[idx - 1] : null;
  const next = idx < pageOrder.length - 1 ? pageOrder[idx + 1] : null;

  if (!prev && !next) return null;

  return (
    <div className="doc-pagination">
      {prev ? (
        <Link to={prev.path} className="doc-pagination-btn prev">
          <span className="doc-pagination-label">← 이전</span>
          <span className="doc-pagination-title">{prev.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link to={next.path} className="doc-pagination-btn next">
          <span className="doc-pagination-label">다음 →</span>
          <span className="doc-pagination-title">{next.title}</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
