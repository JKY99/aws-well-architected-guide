import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import WelcomePage from "./pages/WelcomePage";
import AbstractPage from "./pages/AbstractPage";
import PillarsPage from "./pages/PillarsPage";
import OperationalExcellencePage from "./pages/OperationalExcellencePage";
import SecurityPage from "./pages/SecurityPage";
import ReliabilityPage from "./pages/ReliabilityPage";
import PerformanceEfficiencyPage from "./pages/PerformanceEfficiencyPage";
import CostOptimizationPage from "./pages/CostOptimizationPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import ReviewProcessPage from "./pages/ReviewProcessPage";
import ConclusionPage from "./pages/ConclusionPage";
import ContributorsPage from "./pages/ContributorsPage";
import FurtherReadingPage from "./pages/FurtherReadingPage";
import DocumentRevisionsPage from "./pages/DocumentRevisionsPage";
import AppendixPage from "./pages/AppendixPage";
import NoticesPage from "./pages/NoticesPage";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/abstract-and-introduction" element={<AbstractPage />} />
          <Route path="/pillars" element={<PillarsPage />} />
          <Route path="/pillars/operational-excellence" element={<OperationalExcellencePage />} />
          <Route path="/pillars/security" element={<SecurityPage />} />
          <Route path="/pillars/reliability" element={<ReliabilityPage />} />
          <Route path="/pillars/performance-efficiency" element={<PerformanceEfficiencyPage />} />
          <Route path="/pillars/cost-optimization" element={<CostOptimizationPage />} />
          <Route path="/pillars/sustainability" element={<SustainabilityPage />} />
          <Route path="/review-process" element={<ReviewProcessPage />} />
          <Route path="/conclusion" element={<ConclusionPage />} />
          <Route path="/contributors" element={<ContributorsPage />} />
          <Route path="/further-reading" element={<FurtherReadingPage />} />
          <Route path="/document-revisions" element={<DocumentRevisionsPage />} />
          <Route path="/appendix" element={<AppendixPage />} />
          <Route path="/appendix/operational-excellence" element={<PlaceholderPage title="Appendix: Operational Excellence Questions" />} />
          <Route path="/appendix/security" element={<PlaceholderPage title="Appendix: Security Questions" />} />
          <Route path="/appendix/reliability" element={<PlaceholderPage title="Appendix: Reliability Questions" />} />
          <Route path="/appendix/performance-efficiency" element={<PlaceholderPage title="Appendix: Performance Efficiency Questions" />} />
          <Route path="/appendix/cost-optimization" element={<PlaceholderPage title="Appendix: Cost Optimization Questions" />} />
          <Route path="/appendix/sustainability" element={<PlaceholderPage title="Appendix: Sustainability Questions" />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/aws-glossary" element={<PlaceholderPage title="AWS Glossary" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
