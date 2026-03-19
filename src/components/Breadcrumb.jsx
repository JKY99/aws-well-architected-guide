import { Link, useLocation } from "react-router-dom";
import { navigationData } from "../data/navigation";
import "./Breadcrumb.css";

function findBreadcrumb(items, pathname, trail = []) {
  for (const item of items) {
    const current = [...trail, { title: item.title, path: item.path }];
    if (item.path === pathname) return current;
    if (item.children) {
      const found = findBreadcrumb(item.children, pathname, current);
      if (found) return found;
    }
  }
  return null;
}

export default function Breadcrumb() {
  const location = useLocation();
  const crumbs = findBreadcrumb(navigationData, location.pathname);

  const baseCrumbs = [
    { title: "AWS", path: "https://aws.amazon.com", external: true },
    { title: "Documentation", path: "https://docs.aws.amazon.com", external: true },
    { title: "AWS Well-Architected", path: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html", external: true },
  ];

  const allCrumbs = crumbs ? [...baseCrumbs, ...crumbs] : baseCrumbs;

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {allCrumbs.map((crumb, idx) => {
          const isLast = idx === allCrumbs.length - 1;
          return (
            <li key={idx} className="breadcrumb-item">
              {!isLast ? (
                <>
                  {crumb.external ? (
                    <a
                      href={crumb.path}
                      className="breadcrumb-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {crumb.title}
                    </a>
                  ) : (
                    <Link to={crumb.path} className="breadcrumb-link">
                      {crumb.title}
                    </Link>
                  )}
                  <span className="breadcrumb-sep" aria-hidden="true">›</span>
                </>
              ) : (
                <span className="breadcrumb-current" aria-current="page">
                  {crumb.title}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
