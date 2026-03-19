import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import "./Layout.css";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Header onMenuToggle={() => setSidebarOpen((v) => !v)} />

      <div className="layout-body">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="layout-main">
          <div className="layout-content">
            <Breadcrumb />
            {children}
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
