import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import WelcomePage from "./pages/WelcomePage";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/abstract-and-introduction"
            element={<PlaceholderPage title="Abstract and Introduction" />}
          />
          <Route
            path="/pillars"
            element={<PlaceholderPage title="The Pillars of the Framework" />}
          />
          <Route
            path="/pillars/operational-excellence"
            element={<PlaceholderPage title="Operational Excellence" />}
          />
          <Route
            path="/pillars/security"
            element={<PlaceholderPage title="Security" />}
          />
          <Route
            path="/pillars/reliability"
            element={<PlaceholderPage title="Reliability" />}
          />
          <Route
            path="/pillars/performance-efficiency"
            element={<PlaceholderPage title="Performance Efficiency" />}
          />
          <Route
            path="/pillars/cost-optimization"
            element={<PlaceholderPage title="Cost Optimization" />}
          />
          <Route
            path="/pillars/sustainability"
            element={<PlaceholderPage title="Sustainability" />}
          />
          <Route
            path="/review-process"
            element={<PlaceholderPage title="The Review Process" />}
          />
          <Route
            path="/conclusion"
            element={<PlaceholderPage title="Conclusion" />}
          />
          <Route
            path="/contributors"
            element={<PlaceholderPage title="Contributors" />}
          />
          <Route
            path="/further-reading"
            element={<PlaceholderPage title="Further Reading" />}
          />
          <Route
            path="/document-revisions"
            element={<PlaceholderPage title="Document Revisions" />}
          />
          <Route
            path="/appendix"
            element={<PlaceholderPage title="Appendix: Questions and Best Practices" />}
          />
          <Route
            path="/appendix/*"
            element={<PlaceholderPage title="Appendix" />}
          />
          <Route
            path="/notices"
            element={<PlaceholderPage title="Notices" />}
          />
          <Route
            path="/aws-glossary"
            element={<PlaceholderPage title="AWS Glossary" />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
