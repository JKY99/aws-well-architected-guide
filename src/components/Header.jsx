import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ onMenuToggle }) {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Mobile menu toggle */}
        <button
          className="header-menu-btn"
          onClick={onMenuToggle}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {/* Logo / Brand */}
        <div className="header-brand">
          <Link to="/" className="header-logo-link">
            <svg
              className="header-aws-logo"
              viewBox="0 0 63 38"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Amazon Web Services"
            >
              <path
                d="M18.05 11.32c-.19 0-.34.02-.46.05-.12.03-.24.08-.36.14l-.22.13v10.52c.28.19.57.33.88.42.31.09.63.14.96.14.74 0 1.34-.26 1.8-.78.46-.52.69-1.25.69-2.2v-5.2c0-1.01-.25-1.78-.75-2.31-.5-.53-1.22-.79-2.15-.79h-.39m.71 12.97c-.46 0-.89-.05-1.29-.16-.4-.11-.75-.26-1.06-.46l-.14-.09v4.98l-1.92.4V9.96h1.73l.11.89c.3-.35.67-.62 1.1-.81.43-.19.92-.28 1.46-.28 1.21 0 2.18.43 2.9 1.28.72.85 1.08 2.02 1.08 3.5v5.2c0 1.52-.38 2.71-1.14 3.56-.76.85-1.8 1.28-3.12 1.28h-.71m10.25-1.28c.6 0 1.12-.09 1.58-.27.46-.18.85-.43 1.18-.75v-6.32c-.33.08-.65.14-.96.18-.31.04-.62.06-.93.06-1.01 0-1.8-.26-2.36-.78-.56-.52-.84-1.25-.84-2.19 0-.97.32-1.71.97-2.22.65-.51 1.56-.76 2.73-.76h.14c.5 0 1.01.07 1.52.22l.73.21V10.1l-.74-.18c-.55-.14-1.14-.21-1.77-.21-.88 0-1.68.15-2.41.46-.73.31-1.36.75-1.89 1.32-.53.57-.94 1.25-1.23 2.02-.29.77-.43 1.63-.43 2.56 0 1.75.48 3.12 1.44 4.1.96.98 2.31 1.47 4.05 1.47h.22m7.48 1.28c-1.14 0-2.06-.34-2.76-1.01-.7-.67-1.05-1.55-1.05-2.62 0-1.15.4-2.07 1.2-2.76.8-.69 1.86-1.04 3.18-1.04.51 0 1.01.06 1.49.19.48.13.88.29 1.19.49v-.97c0-.83-.21-1.49-.62-1.96-.41-.47-.99-.71-1.73-.71-.54 0-1.03.12-1.47.37-.44.25-.77.59-1 1.02l-1.62-.91c.38-.73.94-1.3 1.67-1.72.73-.42 1.56-.63 2.49-.63 1.37 0 2.43.39 3.19 1.17.76.78 1.14 1.88 1.14 3.3v7.34h-1.73l-.11-.9c-.3.37-.69.65-1.16.85-.47.2-.99.3-1.56.3h-.22m.54-1.56c.61 0 1.15-.15 1.6-.44.45-.29.76-.68.92-1.17v-1.44c-.35-.19-.74-.34-1.18-.43-.44-.09-.89-.14-1.35-.14-.76 0-1.37.18-1.82.54-.45.36-.67.86-.67 1.49 0 .57.18 1.01.55 1.32.37.31.88.47 1.52.47h.43"
                fill="#fff"
              />
              <path
                d="M31.5 0C14.1 0 0 8.51 0 19c0 5.29 2.88 10.08 7.56 13.57L6.3 38l6.26-3.13C15.59 36.24 20.37 38 25.5 38h12c8.56 0 15.5-3.58 15.5-8 0-1.11-.41-2.18-1.16-3.18C56.97 24.06 63 21.18 63 19 63 8.51 48.9 0 31.5 0"
                fill="none"
              />
              <text x="4" y="24" fill="#FF9900" fontSize="16" fontWeight="bold" fontFamily="Arial">
                aws
              </text>
            </svg>
            <span className="header-service-name">Documentation</span>
          </Link>
        </div>

        {/* Right area: breadcrumb-like label */}
        <nav className="header-nav" aria-label="Header navigation">
          <span className="header-nav-item">AWS Well-Architected</span>
        </nav>
      </div>
    </header>
  );
}
