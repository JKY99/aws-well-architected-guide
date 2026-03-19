import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationData } from "../data/navigation";
import "./Sidebar.css";

function NavItem({ item, depth = 0 }) {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const hasChildren = item.children && item.children.length > 0;

  // Auto-expand if active or has active child
  const isChildActive = (node) => {
    if (node.path === location.pathname) return true;
    if (node.children) return node.children.some(isChildActive);
    return false;
  };

  const [expanded, setExpanded] = useState(() => {
    if (!hasChildren) return false;
    return isChildActive(item);
  });

  return (
    <li className={`nav-item depth-${depth}`}>
      <div className={`nav-item-row ${isActive ? "active" : ""}`}>
        {hasChildren && (
          <button
            className={`nav-expand-btn ${expanded ? "expanded" : ""}`}
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            <svg viewBox="0 0 16 16" width="12" height="12">
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        {!hasChildren && <span className="nav-spacer" />}
        <Link
          to={item.path}
          className={`nav-link ${isActive ? "active" : ""}`}
        >
          {item.title}
        </Link>
      </div>

      {hasChildren && expanded && (
        <ul className="nav-children">
          {item.children.map((child) => (
            <NavItem key={child.id} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose} aria-hidden="true" />
      )}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">AWS Well-Architected</span>
          <button className="sidebar-close-btn" onClick={onClose} aria-label="메뉴 닫기">
            ×
          </button>
        </div>

        <nav className="sidebar-nav" aria-label="Document navigation">
          <ul className="nav-list">
            {navigationData.map((item) => (
              <NavItem key={item.id} item={item} depth={0} />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
