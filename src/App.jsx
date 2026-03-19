import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import WelcomePage from "./pages/WelcomePage";
import AbstractPage from "./pages/AbstractPage";
import AbstractDefinitionsPage from "./pages/AbstractDefinitionsPage";
import AbstractOnArchitecturePage from "./pages/AbstractOnArchitecturePage";
import AbstractGeneralDesignPrinciplesPage from "./pages/AbstractGeneralDesignPrinciplesPage";
import PillarsPage from "./pages/PillarsPage";
import OperationalExcellencePage from "./pages/OperationalExcellencePage";
import OEDesignPrinciplesPage from "./pages/OEDesignPrinciplesPage";
import OEDefinitionPage from "./pages/OEDefinitionPage";
import OEBestPracticesPage from "./pages/OEBestPracticesPage";
import OEOrganizationPage from "./pages/OEOrganizationPage";
import OEPreparePage from "./pages/OEPreparePage";
import OEOperatePage from "./pages/OEOperatePage";
import OEEvolvePage from "./pages/OEEvolvePage";
import OEResourcesPage from "./pages/OEResourcesPage";
import SecurityPage from "./pages/SecurityPage";
import SecDesignPrinciplesPage from "./pages/SecDesignPrinciplesPage";
import SecDefinitionPage from "./pages/SecDefinitionPage";
import SecBestPracticesPage from "./pages/SecBestPracticesPage";
import SecFoundationsPage from "./pages/SecFoundationsPage";
import SecIAMPage from "./pages/SecIAMPage";
import SecDetectionPage from "./pages/SecDetectionPage";
import SecInfraProtectionPage from "./pages/SecInfraProtectionPage";
import SecDataProtectionPage from "./pages/SecDataProtectionPage";
import SecIncidentResponsePage from "./pages/SecIncidentResponsePage";
import SecAppSecurityPage from "./pages/SecAppSecurityPage";
import SecResourcesPage from "./pages/SecResourcesPage";
import ReliabilityPage from "./pages/ReliabilityPage";
import RelDesignPrinciplesPage from "./pages/RelDesignPrinciplesPage";
import RelDefinitionPage from "./pages/RelDefinitionPage";
import RelBestPracticesPage from "./pages/RelBestPracticesPage";
import RelFoundationsPage from "./pages/RelFoundationsPage";
import RelWorkloadArchPage from "./pages/RelWorkloadArchPage";
import RelChangeManagementPage from "./pages/RelChangeManagementPage";
import RelFailureManagementPage from "./pages/RelFailureManagementPage";
import RelResourcesPage from "./pages/RelResourcesPage";
import PerformanceEfficiencyPage from "./pages/PerformanceEfficiencyPage";
import PerfDesignPrinciplesPage from "./pages/PerfDesignPrinciplesPage";
import PerfDefinitionPage from "./pages/PerfDefinitionPage";
import PerfBestPracticesPage from "./pages/PerfBestPracticesPage";
import PerfArchSelectionPage from "./pages/PerfArchSelectionPage";
import PerfComputeHardwarePage from "./pages/PerfComputeHardwarePage";
import PerfDataManagementPage from "./pages/PerfDataManagementPage";
import PerfNetworkingPage from "./pages/PerfNetworkingPage";
import PerfProcessCulturePage from "./pages/PerfProcessCulturePage";
import PerfResourcesPage from "./pages/PerfResourcesPage";
import CostOptimizationPage from "./pages/CostOptimizationPage";
import CostDesignPrinciplesPage from "./pages/CostDesignPrinciplesPage";
import CostDefinitionPage from "./pages/CostDefinitionPage";
import CostBestPracticesPage from "./pages/CostBestPracticesPage";
import CostCloudFinancialPage from "./pages/CostCloudFinancialPage";
import CostExpenditurePage from "./pages/CostExpenditurePage";
import CostEffectiveResourcesPage from "./pages/CostEffectiveResourcesPage";
import CostManageDemandPage from "./pages/CostManageDemandPage";
import CostOptimizeOverTimePage from "./pages/CostOptimizeOverTimePage";
import CostResourcesPage from "./pages/CostResourcesPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import SusDesignPrinciplesPage from "./pages/SusDesignPrinciplesPage";
import SusDefinitionPage from "./pages/SusDefinitionPage";
import SusBestPracticesPage from "./pages/SusBestPracticesPage";
import SusRegionSelectionPage from "./pages/SusRegionSelectionPage";
import SusAlignmentPage from "./pages/SusAlignmentPage";
import SusSoftwareArchPage from "./pages/SusSoftwareArchPage";
import SusDataManagementPage from "./pages/SusDataManagementPage";
import SusHardwareServicesPage from "./pages/SusHardwareServicesPage";
import SusProcessCulturePage from "./pages/SusProcessCulturePage";
import SusResourcesPage from "./pages/SusResourcesPage";
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
          <Route path="/abstract/definitions" element={<AbstractDefinitionsPage />} />
          <Route path="/abstract/on-architecture" element={<AbstractOnArchitecturePage />} />
          <Route path="/abstract/general-design-principles" element={<AbstractGeneralDesignPrinciplesPage />} />
          <Route path="/pillars" element={<PillarsPage />} />

          {/* Operational Excellence */}
          <Route path="/pillars/operational-excellence" element={<OperationalExcellencePage />} />
          <Route path="/pillars/operational-excellence/design-principles" element={<OEDesignPrinciplesPage />} />
          <Route path="/pillars/operational-excellence/definition" element={<OEDefinitionPage />} />
          <Route path="/pillars/operational-excellence/best-practices" element={<OEBestPracticesPage />} />
          <Route path="/pillars/operational-excellence/organization" element={<OEOrganizationPage />} />
          <Route path="/pillars/operational-excellence/prepare" element={<OEPreparePage />} />
          <Route path="/pillars/operational-excellence/operate" element={<OEOperatePage />} />
          <Route path="/pillars/operational-excellence/evolve" element={<OEEvolvePage />} />
          <Route path="/pillars/operational-excellence/resources" element={<OEResourcesPage />} />

          {/* Security */}
          <Route path="/pillars/security" element={<SecurityPage />} />
          <Route path="/pillars/security/design-principles" element={<SecDesignPrinciplesPage />} />
          <Route path="/pillars/security/definition" element={<SecDefinitionPage />} />
          <Route path="/pillars/security/best-practices" element={<SecBestPracticesPage />} />
          <Route path="/pillars/security/security-foundations" element={<SecFoundationsPage />} />
          <Route path="/pillars/security/iam" element={<SecIAMPage />} />
          <Route path="/pillars/security/detection" element={<SecDetectionPage />} />
          <Route path="/pillars/security/infrastructure-protection" element={<SecInfraProtectionPage />} />
          <Route path="/pillars/security/data-protection" element={<SecDataProtectionPage />} />
          <Route path="/pillars/security/incident-response" element={<SecIncidentResponsePage />} />
          <Route path="/pillars/security/application-security" element={<SecAppSecurityPage />} />
          <Route path="/pillars/security/resources" element={<SecResourcesPage />} />

          {/* Reliability */}
          <Route path="/pillars/reliability" element={<ReliabilityPage />} />
          <Route path="/pillars/reliability/design-principles" element={<RelDesignPrinciplesPage />} />
          <Route path="/pillars/reliability/definition" element={<RelDefinitionPage />} />
          <Route path="/pillars/reliability/best-practices" element={<RelBestPracticesPage />} />
          <Route path="/pillars/reliability/foundations" element={<RelFoundationsPage />} />
          <Route path="/pillars/reliability/workload-architecture" element={<RelWorkloadArchPage />} />
          <Route path="/pillars/reliability/change-management" element={<RelChangeManagementPage />} />
          <Route path="/pillars/reliability/failure-management" element={<RelFailureManagementPage />} />
          <Route path="/pillars/reliability/resources" element={<RelResourcesPage />} />

          {/* Performance Efficiency */}
          <Route path="/pillars/performance-efficiency" element={<PerformanceEfficiencyPage />} />
          <Route path="/pillars/performance-efficiency/design-principles" element={<PerfDesignPrinciplesPage />} />
          <Route path="/pillars/performance-efficiency/definition" element={<PerfDefinitionPage />} />
          <Route path="/pillars/performance-efficiency/best-practices" element={<PerfBestPracticesPage />} />
          <Route path="/pillars/performance-efficiency/architecture-selection" element={<PerfArchSelectionPage />} />
          <Route path="/pillars/performance-efficiency/compute-hardware" element={<PerfComputeHardwarePage />} />
          <Route path="/pillars/performance-efficiency/data-management" element={<PerfDataManagementPage />} />
          <Route path="/pillars/performance-efficiency/networking" element={<PerfNetworkingPage />} />
          <Route path="/pillars/performance-efficiency/process-culture" element={<PerfProcessCulturePage />} />
          <Route path="/pillars/performance-efficiency/resources" element={<PerfResourcesPage />} />

          {/* Cost Optimization */}
          <Route path="/pillars/cost-optimization" element={<CostOptimizationPage />} />
          <Route path="/pillars/cost-optimization/design-principles" element={<CostDesignPrinciplesPage />} />
          <Route path="/pillars/cost-optimization/definition" element={<CostDefinitionPage />} />
          <Route path="/pillars/cost-optimization/best-practices" element={<CostBestPracticesPage />} />
          <Route path="/pillars/cost-optimization/cloud-financial-management" element={<CostCloudFinancialPage />} />
          <Route path="/pillars/cost-optimization/expenditure-awareness" element={<CostExpenditurePage />} />
          <Route path="/pillars/cost-optimization/cost-effective-resources" element={<CostEffectiveResourcesPage />} />
          <Route path="/pillars/cost-optimization/manage-demand-supply" element={<CostManageDemandPage />} />
          <Route path="/pillars/cost-optimization/optimize-over-time" element={<CostOptimizeOverTimePage />} />
          <Route path="/pillars/cost-optimization/resources" element={<CostResourcesPage />} />

          {/* Sustainability */}
          <Route path="/pillars/sustainability" element={<SustainabilityPage />} />
          <Route path="/pillars/sustainability/design-principles" element={<SusDesignPrinciplesPage />} />
          <Route path="/pillars/sustainability/definition" element={<SusDefinitionPage />} />
          <Route path="/pillars/sustainability/best-practices" element={<SusBestPracticesPage />} />
          <Route path="/pillars/sustainability/region-selection" element={<SusRegionSelectionPage />} />
          <Route path="/pillars/sustainability/alignment-to-demand" element={<SusAlignmentPage />} />
          <Route path="/pillars/sustainability/software-architecture" element={<SusSoftwareArchPage />} />
          <Route path="/pillars/sustainability/data-management" element={<SusDataManagementPage />} />
          <Route path="/pillars/sustainability/hardware-services" element={<SusHardwareServicesPage />} />
          <Route path="/pillars/sustainability/process-culture" element={<SusProcessCulturePage />} />
          <Route path="/pillars/sustainability/resources" element={<SusResourcesPage />} />

          <Route path="/review-process" element={<ReviewProcessPage />} />
          <Route path="/conclusion" element={<ConclusionPage />} />
          <Route path="/contributors" element={<ContributorsPage />} />
          <Route path="/further-reading" element={<FurtherReadingPage />} />
          <Route path="/document-revisions" element={<DocumentRevisionsPage />} />
          <Route path="/appendix" element={<AppendixPage />} />
          <Route path="/appendix/operational-excellence" element={<PlaceholderPage title="부록: 운영 우수성 질문" />} />
          <Route path="/appendix/security" element={<PlaceholderPage title="부록: 보안 질문" />} />
          <Route path="/appendix/reliability" element={<PlaceholderPage title="부록: 안정성 질문" />} />
          <Route path="/appendix/performance-efficiency" element={<PlaceholderPage title="부록: 성능 효율성 질문" />} />
          <Route path="/appendix/cost-optimization" element={<PlaceholderPage title="부록: 비용 최적화 질문" />} />
          <Route path="/appendix/sustainability" element={<PlaceholderPage title="부록: 지속 가능성 질문" />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/aws-glossary" element={<PlaceholderPage title="AWS 용어집" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
