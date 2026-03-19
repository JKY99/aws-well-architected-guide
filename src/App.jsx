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
import AppendixOps1Page from "./pages/AppendixOps1Page";
import AppendixOps2Page from "./pages/AppendixOps2Page";
import AppendixOps3Page from "./pages/AppendixOps3Page";
import AppendixOps4Page from "./pages/AppendixOps4Page";
import AppendixOps5Page from "./pages/AppendixOps5Page";
import AppendixSec1Page from "./pages/AppendixSec1Page";
import AppendixSec2Page from "./pages/AppendixSec2Page";
import AppendixSec3Page from "./pages/AppendixSec3Page";
import AppendixSec4Page from "./pages/AppendixSec4Page";
import AppendixSec5Page from "./pages/AppendixSec5Page";
import AppendixSec6Page from "./pages/AppendixSec6Page";
import AppendixSec7Page from "./pages/AppendixSec7Page";
import AppendixSec8Page from "./pages/AppendixSec8Page";
import AppendixSec9Page from "./pages/AppendixSec9Page";
import AppendixRel1Page from "./pages/AppendixRel1Page";
import AppendixRel2Page from "./pages/AppendixRel2Page";
import AppendixRel3Page from "./pages/AppendixRel3Page";
import AppendixRel4Page from "./pages/AppendixRel4Page";
import AppendixRel5Page from "./pages/AppendixRel5Page";
import AppendixRel6Page from "./pages/AppendixRel6Page";
import AppendixRel7Page from "./pages/AppendixRel7Page";
import AppendixRel8Page from "./pages/AppendixRel8Page";
import AppendixRel9Page from "./pages/AppendixRel9Page";
import AppendixRel1Bp01Page from "./pages/AppendixRel1Bp01Page";
import AppendixRel1Bp02Page from "./pages/AppendixRel1Bp02Page";
import AppendixRel1Bp03Page from "./pages/AppendixRel1Bp03Page";
import AppendixRel1Bp04Page from "./pages/AppendixRel1Bp04Page";
import AppendixRel1Bp05Page from "./pages/AppendixRel1Bp05Page";
import AppendixRel2Bp01Page from "./pages/AppendixRel2Bp01Page";
import AppendixRel2Bp02Page from "./pages/AppendixRel2Bp02Page";
import AppendixRel2Bp03Page from "./pages/AppendixRel2Bp03Page";
import AppendixRel2Bp04Page from "./pages/AppendixRel2Bp04Page";
import AppendixRel2Bp05Page from "./pages/AppendixRel2Bp05Page";
import AppendixRel3Bp01Page from "./pages/AppendixRel3Bp01Page";
import AppendixRel3Bp02Page from "./pages/AppendixRel3Bp02Page";
import AppendixRel3Bp03Page from "./pages/AppendixRel3Bp03Page";
import AppendixRel3Bp04Page from "./pages/AppendixRel3Bp04Page";
import AppendixRel4Bp01Page from "./pages/AppendixRel4Bp01Page";
import AppendixRel4Bp02Page from "./pages/AppendixRel4Bp02Page";
import AppendixRel4Bp03Page from "./pages/AppendixRel4Bp03Page";
import AppendixRel4Bp04Page from "./pages/AppendixRel4Bp04Page";
import AppendixRel4Bp05Page from "./pages/AppendixRel4Bp05Page";
import AppendixRel5Bp01Page from "./pages/AppendixRel5Bp01Page";
import AppendixRel5Bp02Page from "./pages/AppendixRel5Bp02Page";
import AppendixRel5Bp03Page from "./pages/AppendixRel5Bp03Page";
import AppendixRel5Bp04Page from "./pages/AppendixRel5Bp04Page";
import AppendixRel6Bp01Page from "./pages/AppendixRel6Bp01Page";
import AppendixRel6Bp02Page from "./pages/AppendixRel6Bp02Page";
import AppendixRel6Bp03Page from "./pages/AppendixRel6Bp03Page";
import AppendixRel6Bp04Page from "./pages/AppendixRel6Bp04Page";
import AppendixRel7Bp01Page from "./pages/AppendixRel7Bp01Page";
import AppendixRel7Bp02Page from "./pages/AppendixRel7Bp02Page";
import AppendixRel7Bp03Page from "./pages/AppendixRel7Bp03Page";
import AppendixRel7Bp04Page from "./pages/AppendixRel7Bp04Page";
import AppendixRel8Bp01Page from "./pages/AppendixRel8Bp01Page";
import AppendixRel8Bp02Page from "./pages/AppendixRel8Bp02Page";
import AppendixRel8Bp03Page from "./pages/AppendixRel8Bp03Page";
import AppendixRel8Bp04Page from "./pages/AppendixRel8Bp04Page";
import AppendixRel8Bp05Page from "./pages/AppendixRel8Bp05Page";
import AppendixRel9Bp01Page from "./pages/AppendixRel9Bp01Page";
import AppendixRel9Bp02Page from "./pages/AppendixRel9Bp02Page";
import AppendixRel9Bp03Page from "./pages/AppendixRel9Bp03Page";
import AppendixRel9Bp04Page from "./pages/AppendixRel9Bp04Page";
import AppendixPerf1Page from "./pages/AppendixPerf1Page";
import AppendixPerf2Page from "./pages/AppendixPerf2Page";
import AppendixPerf3Page from "./pages/AppendixPerf3Page";
import AppendixPerf4Page from "./pages/AppendixPerf4Page";
import AppendixPerf5Page from "./pages/AppendixPerf5Page";
import AppendixPerf6Page from "./pages/AppendixPerf6Page";
import AppendixPerf7Page from "./pages/AppendixPerf7Page";
import AppendixPerf8Page from "./pages/AppendixPerf8Page";
import AppendixPerf1Bp01Page from "./pages/AppendixPerf1Bp01Page";
import AppendixPerf1Bp02Page from "./pages/AppendixPerf1Bp02Page";
import AppendixPerf1Bp03Page from "./pages/AppendixPerf1Bp03Page";
import AppendixPerf1Bp04Page from "./pages/AppendixPerf1Bp04Page";
import AppendixPerf1Bp05Page from "./pages/AppendixPerf1Bp05Page";
import AppendixPerf2Bp01Page from "./pages/AppendixPerf2Bp01Page";
import AppendixPerf2Bp02Page from "./pages/AppendixPerf2Bp02Page";
import AppendixPerf2Bp03Page from "./pages/AppendixPerf2Bp03Page";
import AppendixPerf2Bp04Page from "./pages/AppendixPerf2Bp04Page";
import AppendixPerf2Bp05Page from "./pages/AppendixPerf2Bp05Page";
import AppendixPerf3Bp01Page from "./pages/AppendixPerf3Bp01Page";
import AppendixPerf3Bp02Page from "./pages/AppendixPerf3Bp02Page";
import AppendixPerf3Bp03Page from "./pages/AppendixPerf3Bp03Page";
import AppendixPerf3Bp04Page from "./pages/AppendixPerf3Bp04Page";
import AppendixPerf4Bp01Page from "./pages/AppendixPerf4Bp01Page";
import AppendixPerf4Bp02Page from "./pages/AppendixPerf4Bp02Page";
import AppendixPerf4Bp03Page from "./pages/AppendixPerf4Bp03Page";
import AppendixPerf4Bp04Page from "./pages/AppendixPerf4Bp04Page";
import AppendixPerf5Bp01Page from "./pages/AppendixPerf5Bp01Page";
import AppendixPerf5Bp02Page from "./pages/AppendixPerf5Bp02Page";
import AppendixPerf5Bp03Page from "./pages/AppendixPerf5Bp03Page";
import AppendixPerf5Bp04Page from "./pages/AppendixPerf5Bp04Page";
import AppendixPerf5Bp05Page from "./pages/AppendixPerf5Bp05Page";
import AppendixPerf6Bp01Page from "./pages/AppendixPerf6Bp01Page";
import AppendixPerf6Bp02Page from "./pages/AppendixPerf6Bp02Page";
import AppendixPerf6Bp03Page from "./pages/AppendixPerf6Bp03Page";
import AppendixPerf6Bp04Page from "./pages/AppendixPerf6Bp04Page";
import AppendixPerf7Bp01Page from "./pages/AppendixPerf7Bp01Page";
import AppendixPerf7Bp02Page from "./pages/AppendixPerf7Bp02Page";
import AppendixPerf7Bp03Page from "./pages/AppendixPerf7Bp03Page";
import AppendixPerf7Bp04Page from "./pages/AppendixPerf7Bp04Page";
import AppendixPerf7Bp05Page from "./pages/AppendixPerf7Bp05Page";
import AppendixPerf8Bp01Page from "./pages/AppendixPerf8Bp01Page";
import AppendixPerf8Bp02Page from "./pages/AppendixPerf8Bp02Page";
import AppendixPerf8Bp03Page from "./pages/AppendixPerf8Bp03Page";
import AppendixPerf8Bp04Page from "./pages/AppendixPerf8Bp04Page";
import AppendixPerf8Bp05Page from "./pages/AppendixPerf8Bp05Page";
import AppendixCost1Page from "./pages/AppendixCost1Page";
import AppendixCost2Page from "./pages/AppendixCost2Page";
import AppendixCost3Page from "./pages/AppendixCost3Page";
import AppendixCost4Page from "./pages/AppendixCost4Page";
import AppendixCost5Page from "./pages/AppendixCost5Page";
import AppendixCost6Page from "./pages/AppendixCost6Page";
import AppendixCost7Page from "./pages/AppendixCost7Page";
import AppendixCost1Bp01Page from "./pages/AppendixCost1Bp01Page";
import AppendixCost1Bp02Page from "./pages/AppendixCost1Bp02Page";
import AppendixCost1Bp03Page from "./pages/AppendixCost1Bp03Page";
import AppendixCost1Bp04Page from "./pages/AppendixCost1Bp04Page";
import AppendixCost1Bp05Page from "./pages/AppendixCost1Bp05Page";
import AppendixCost1Bp06Page from "./pages/AppendixCost1Bp06Page";
import AppendixCost2Bp01Page from "./pages/AppendixCost2Bp01Page";
import AppendixCost2Bp02Page from "./pages/AppendixCost2Bp02Page";
import AppendixCost2Bp03Page from "./pages/AppendixCost2Bp03Page";
import AppendixCost2Bp04Page from "./pages/AppendixCost2Bp04Page";
import AppendixCost3Bp01Page from "./pages/AppendixCost3Bp01Page";
import AppendixCost3Bp02Page from "./pages/AppendixCost3Bp02Page";
import AppendixCost3Bp03Page from "./pages/AppendixCost3Bp03Page";
import AppendixCost3Bp04Page from "./pages/AppendixCost3Bp04Page";
import AppendixCost3Bp05Page from "./pages/AppendixCost3Bp05Page";
import AppendixCost4Bp01Page from "./pages/AppendixCost4Bp01Page";
import AppendixCost4Bp02Page from "./pages/AppendixCost4Bp02Page";
import AppendixCost4Bp03Page from "./pages/AppendixCost4Bp03Page";
import AppendixCost4Bp04Page from "./pages/AppendixCost4Bp04Page";
import AppendixCost5Bp01Page from "./pages/AppendixCost5Bp01Page";
import AppendixCost5Bp02Page from "./pages/AppendixCost5Bp02Page";
import AppendixCost5Bp03Page from "./pages/AppendixCost5Bp03Page";
import AppendixCost5Bp04Page from "./pages/AppendixCost5Bp04Page";
import AppendixCost5Bp05Page from "./pages/AppendixCost5Bp05Page";
import AppendixCost6Bp01Page from "./pages/AppendixCost6Bp01Page";
import AppendixCost6Bp02Page from "./pages/AppendixCost6Bp02Page";
import AppendixCost6Bp03Page from "./pages/AppendixCost6Bp03Page";
import AppendixCost7Bp01Page from "./pages/AppendixCost7Bp01Page";
import AppendixCost7Bp02Page from "./pages/AppendixCost7Bp02Page";
import AppendixCost7Bp03Page from "./pages/AppendixCost7Bp03Page";
import AppendixCost7Bp04Page from "./pages/AppendixCost7Bp04Page";
import AppendixSus1Page from "./pages/AppendixSus1Page";
import AppendixSus2Page from "./pages/AppendixSus2Page";
import AppendixSus3Page from "./pages/AppendixSus3Page";
import AppendixSus4Page from "./pages/AppendixSus4Page";
import AppendixSus5Page from "./pages/AppendixSus5Page";
import AppendixSus6Page from "./pages/AppendixSus6Page";
import AppendixOps1Bp01Page from "./pages/AppendixOps1Bp01Page";
import AppendixOps1Bp02Page from "./pages/AppendixOps1Bp02Page";
import AppendixOps1Bp03Page from "./pages/AppendixOps1Bp03Page";
import AppendixOps1Bp04Page from "./pages/AppendixOps1Bp04Page";
import AppendixOps1Bp05Page from "./pages/AppendixOps1Bp05Page";
import AppendixOps1Bp06Page from "./pages/AppendixOps1Bp06Page";
import AppendixOps2Bp01Page from "./pages/AppendixOps2Bp01Page";
import AppendixOps2Bp02Page from "./pages/AppendixOps2Bp02Page";
import AppendixOps2Bp03Page from "./pages/AppendixOps2Bp03Page";
import AppendixOps2Bp04Page from "./pages/AppendixOps2Bp04Page";
import AppendixOps2Bp05Page from "./pages/AppendixOps2Bp05Page";
import AppendixOps3Bp01Page from "./pages/AppendixOps3Bp01Page";
import AppendixOps3Bp02Page from "./pages/AppendixOps3Bp02Page";
import AppendixOps3Bp03Page from "./pages/AppendixOps3Bp03Page";
import AppendixOps3Bp04Page from "./pages/AppendixOps3Bp04Page";
import AppendixOps3Bp05Page from "./pages/AppendixOps3Bp05Page";
import AppendixOps4Bp01Page from "./pages/AppendixOps4Bp01Page";
import AppendixOps4Bp02Page from "./pages/AppendixOps4Bp02Page";
import AppendixOps4Bp03Page from "./pages/AppendixOps4Bp03Page";
import AppendixOps4Bp04Page from "./pages/AppendixOps4Bp04Page";
import AppendixOps4Bp05Page from "./pages/AppendixOps4Bp05Page";
import AppendixOps4Bp06Page from "./pages/AppendixOps4Bp06Page";
import AppendixOps5Bp01Page from "./pages/AppendixOps5Bp01Page";
import AppendixOps5Bp02Page from "./pages/AppendixOps5Bp02Page";
import AppendixOps5Bp03Page from "./pages/AppendixOps5Bp03Page";
import AppendixOps5Bp04Page from "./pages/AppendixOps5Bp04Page";
import AppendixOps5Bp05Page from "./pages/AppendixOps5Bp05Page";
import AppendixOps5Bp06Page from "./pages/AppendixOps5Bp06Page";
import AppendixOps5Bp07Page from "./pages/AppendixOps5Bp07Page";
import AppendixSec1Bp01Page from "./pages/AppendixSec1Bp01Page";
import AppendixSec1Bp02Page from "./pages/AppendixSec1Bp02Page";
import AppendixSec1Bp03Page from "./pages/AppendixSec1Bp03Page";
import AppendixSec1Bp04Page from "./pages/AppendixSec1Bp04Page";
import AppendixSec1Bp05Page from "./pages/AppendixSec1Bp05Page";
import AppendixSec1Bp06Page from "./pages/AppendixSec1Bp06Page";
import AppendixSec2Bp01Page from "./pages/AppendixSec2Bp01Page";
import AppendixSec2Bp02Page from "./pages/AppendixSec2Bp02Page";
import AppendixSec2Bp03Page from "./pages/AppendixSec2Bp03Page";
import AppendixSec2Bp04Page from "./pages/AppendixSec2Bp04Page";
import AppendixSec2Bp05Page from "./pages/AppendixSec2Bp05Page";
import AppendixSec2Bp06Page from "./pages/AppendixSec2Bp06Page";
import AppendixSec3Bp01Page from "./pages/AppendixSec3Bp01Page";
import AppendixSec3Bp02Page from "./pages/AppendixSec3Bp02Page";
import AppendixSec3Bp03Page from "./pages/AppendixSec3Bp03Page";
import AppendixSec3Bp04Page from "./pages/AppendixSec3Bp04Page";
import AppendixSec3Bp05Page from "./pages/AppendixSec3Bp05Page";
import AppendixSec4Bp01Page from "./pages/AppendixSec4Bp01Page";
import AppendixSec4Bp02Page from "./pages/AppendixSec4Bp02Page";
import AppendixSec4Bp03Page from "./pages/AppendixSec4Bp03Page";
import AppendixSec4Bp04Page from "./pages/AppendixSec4Bp04Page";
import AppendixSec5Bp01Page from "./pages/AppendixSec5Bp01Page";
import AppendixSec5Bp02Page from "./pages/AppendixSec5Bp02Page";
import AppendixSec5Bp03Page from "./pages/AppendixSec5Bp03Page";
import AppendixSec5Bp04Page from "./pages/AppendixSec5Bp04Page";
import AppendixSec5Bp05Page from "./pages/AppendixSec5Bp05Page";
import AppendixSec6Bp01Page from "./pages/AppendixSec6Bp01Page";
import AppendixSec6Bp02Page from "./pages/AppendixSec6Bp02Page";
import AppendixSec6Bp03Page from "./pages/AppendixSec6Bp03Page";
import AppendixSec6Bp04Page from "./pages/AppendixSec6Bp04Page";
import AppendixSec6Bp05Page from "./pages/AppendixSec6Bp05Page";
import AppendixSec7Bp01Page from "./pages/AppendixSec7Bp01Page";
import AppendixSec7Bp02Page from "./pages/AppendixSec7Bp02Page";
import AppendixSec7Bp03Page from "./pages/AppendixSec7Bp03Page";
import AppendixSec7Bp04Page from "./pages/AppendixSec7Bp04Page";
import AppendixSec8Bp01Page from "./pages/AppendixSec8Bp01Page";
import AppendixSec8Bp02Page from "./pages/AppendixSec8Bp02Page";
import AppendixSec8Bp03Page from "./pages/AppendixSec8Bp03Page";
import AppendixSec8Bp04Page from "./pages/AppendixSec8Bp04Page";
import AppendixSec8Bp05Page from "./pages/AppendixSec8Bp05Page";
import AppendixSec9Bp01Page from "./pages/AppendixSec9Bp01Page";
import AppendixSec9Bp02Page from "./pages/AppendixSec9Bp02Page";
import AppendixSec9Bp03Page from "./pages/AppendixSec9Bp03Page";
import AppendixSec9Bp04Page from "./pages/AppendixSec9Bp04Page";

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
          <Route path="/appendix/operational-excellence/ops1" element={<AppendixOps1Page />} />
          <Route path="/appendix/operational-excellence/ops2" element={<AppendixOps2Page />} />
          <Route path="/appendix/operational-excellence/ops3" element={<AppendixOps3Page />} />
          <Route path="/appendix/operational-excellence/ops4" element={<AppendixOps4Page />} />
          <Route path="/appendix/operational-excellence/ops5" element={<AppendixOps5Page />} />
          <Route path="/appendix/operational-excellence/ops1/bp01" element={<AppendixOps1Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops1/bp02" element={<AppendixOps1Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops1/bp03" element={<AppendixOps1Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops1/bp04" element={<AppendixOps1Bp04Page />} />
          <Route path="/appendix/operational-excellence/ops1/bp05" element={<AppendixOps1Bp05Page />} />
          <Route path="/appendix/operational-excellence/ops1/bp06" element={<AppendixOps1Bp06Page />} />
          <Route path="/appendix/operational-excellence/ops2/bp01" element={<AppendixOps2Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops2/bp02" element={<AppendixOps2Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops2/bp03" element={<AppendixOps2Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops2/bp04" element={<AppendixOps2Bp04Page />} />
          <Route path="/appendix/operational-excellence/ops2/bp05" element={<AppendixOps2Bp05Page />} />
          <Route path="/appendix/operational-excellence/ops3/bp01" element={<AppendixOps3Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops3/bp02" element={<AppendixOps3Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops3/bp03" element={<AppendixOps3Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops3/bp04" element={<AppendixOps3Bp04Page />} />
          <Route path="/appendix/operational-excellence/ops3/bp05" element={<AppendixOps3Bp05Page />} />
          <Route path="/appendix/operational-excellence/ops4/bp01" element={<AppendixOps4Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops4/bp02" element={<AppendixOps4Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops4/bp03" element={<AppendixOps4Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops4/bp04" element={<AppendixOps4Bp04Page />} />
          <Route path="/appendix/operational-excellence/ops4/bp05" element={<AppendixOps4Bp05Page />} />
          <Route path="/appendix/operational-excellence/ops4/bp06" element={<AppendixOps4Bp06Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp01" element={<AppendixOps5Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp02" element={<AppendixOps5Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp03" element={<AppendixOps5Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp04" element={<AppendixOps5Bp04Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp05" element={<AppendixOps5Bp05Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp06" element={<AppendixOps5Bp06Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp07" element={<AppendixOps5Bp07Page />} />
          <Route path="/appendix/security" element={<PlaceholderPage title="부록: 보안 질문" />} />
          <Route path="/appendix/security/sec1" element={<AppendixSec1Page />} />
          <Route path="/appendix/security/sec2" element={<AppendixSec2Page />} />
          <Route path="/appendix/security/sec3" element={<AppendixSec3Page />} />
          <Route path="/appendix/security/sec4" element={<AppendixSec4Page />} />
          <Route path="/appendix/security/sec5" element={<AppendixSec5Page />} />
          <Route path="/appendix/security/sec6" element={<AppendixSec6Page />} />
          <Route path="/appendix/security/sec7" element={<AppendixSec7Page />} />
          <Route path="/appendix/security/sec8" element={<AppendixSec8Page />} />
          <Route path="/appendix/security/sec9" element={<AppendixSec9Page />} />
          <Route path="/appendix/security/sec1/bp01" element={<AppendixSec1Bp01Page />} />
          <Route path="/appendix/security/sec1/bp02" element={<AppendixSec1Bp02Page />} />
          <Route path="/appendix/security/sec1/bp03" element={<AppendixSec1Bp03Page />} />
          <Route path="/appendix/security/sec1/bp04" element={<AppendixSec1Bp04Page />} />
          <Route path="/appendix/security/sec1/bp05" element={<AppendixSec1Bp05Page />} />
          <Route path="/appendix/security/sec1/bp06" element={<AppendixSec1Bp06Page />} />
          <Route path="/appendix/security/sec2/bp01" element={<AppendixSec2Bp01Page />} />
          <Route path="/appendix/security/sec2/bp02" element={<AppendixSec2Bp02Page />} />
          <Route path="/appendix/security/sec2/bp03" element={<AppendixSec2Bp03Page />} />
          <Route path="/appendix/security/sec2/bp04" element={<AppendixSec2Bp04Page />} />
          <Route path="/appendix/security/sec2/bp05" element={<AppendixSec2Bp05Page />} />
          <Route path="/appendix/security/sec2/bp06" element={<AppendixSec2Bp06Page />} />
          <Route path="/appendix/security/sec3/bp01" element={<AppendixSec3Bp01Page />} />
          <Route path="/appendix/security/sec3/bp02" element={<AppendixSec3Bp02Page />} />
          <Route path="/appendix/security/sec3/bp03" element={<AppendixSec3Bp03Page />} />
          <Route path="/appendix/security/sec3/bp04" element={<AppendixSec3Bp04Page />} />
          <Route path="/appendix/security/sec3/bp05" element={<AppendixSec3Bp05Page />} />
          <Route path="/appendix/security/sec4/bp01" element={<AppendixSec4Bp01Page />} />
          <Route path="/appendix/security/sec4/bp02" element={<AppendixSec4Bp02Page />} />
          <Route path="/appendix/security/sec4/bp03" element={<AppendixSec4Bp03Page />} />
          <Route path="/appendix/security/sec4/bp04" element={<AppendixSec4Bp04Page />} />
          <Route path="/appendix/security/sec5/bp01" element={<AppendixSec5Bp01Page />} />
          <Route path="/appendix/security/sec5/bp02" element={<AppendixSec5Bp02Page />} />
          <Route path="/appendix/security/sec5/bp03" element={<AppendixSec5Bp03Page />} />
          <Route path="/appendix/security/sec5/bp04" element={<AppendixSec5Bp04Page />} />
          <Route path="/appendix/security/sec5/bp05" element={<AppendixSec5Bp05Page />} />
          <Route path="/appendix/security/sec6/bp01" element={<AppendixSec6Bp01Page />} />
          <Route path="/appendix/security/sec6/bp02" element={<AppendixSec6Bp02Page />} />
          <Route path="/appendix/security/sec6/bp03" element={<AppendixSec6Bp03Page />} />
          <Route path="/appendix/security/sec6/bp04" element={<AppendixSec6Bp04Page />} />
          <Route path="/appendix/security/sec6/bp05" element={<AppendixSec6Bp05Page />} />
          <Route path="/appendix/security/sec7/bp01" element={<AppendixSec7Bp01Page />} />
          <Route path="/appendix/security/sec7/bp02" element={<AppendixSec7Bp02Page />} />
          <Route path="/appendix/security/sec7/bp03" element={<AppendixSec7Bp03Page />} />
          <Route path="/appendix/security/sec7/bp04" element={<AppendixSec7Bp04Page />} />
          <Route path="/appendix/security/sec8/bp01" element={<AppendixSec8Bp01Page />} />
          <Route path="/appendix/security/sec8/bp02" element={<AppendixSec8Bp02Page />} />
          <Route path="/appendix/security/sec8/bp03" element={<AppendixSec8Bp03Page />} />
          <Route path="/appendix/security/sec8/bp04" element={<AppendixSec8Bp04Page />} />
          <Route path="/appendix/security/sec8/bp05" element={<AppendixSec8Bp05Page />} />
          <Route path="/appendix/security/sec9/bp01" element={<AppendixSec9Bp01Page />} />
          <Route path="/appendix/security/sec9/bp02" element={<AppendixSec9Bp02Page />} />
          <Route path="/appendix/security/sec9/bp03" element={<AppendixSec9Bp03Page />} />
          <Route path="/appendix/security/sec9/bp04" element={<AppendixSec9Bp04Page />} />
          <Route path="/appendix/reliability" element={<PlaceholderPage title="부록: 안정성 질문" />} />
          <Route path="/appendix/reliability/rel1" element={<AppendixRel1Page />} />
          <Route path="/appendix/reliability/rel2" element={<AppendixRel2Page />} />
          <Route path="/appendix/reliability/rel3" element={<AppendixRel3Page />} />
          <Route path="/appendix/reliability/rel4" element={<AppendixRel4Page />} />
          <Route path="/appendix/reliability/rel5" element={<AppendixRel5Page />} />
          <Route path="/appendix/reliability/rel6" element={<AppendixRel6Page />} />
          <Route path="/appendix/reliability/rel7" element={<AppendixRel7Page />} />
          <Route path="/appendix/reliability/rel8" element={<AppendixRel8Page />} />
          <Route path="/appendix/reliability/rel9" element={<AppendixRel9Page />} />
          <Route path="/appendix/reliability/rel1/bp01" element={<AppendixRel1Bp01Page />} />
          <Route path="/appendix/reliability/rel1/bp02" element={<AppendixRel1Bp02Page />} />
          <Route path="/appendix/reliability/rel1/bp03" element={<AppendixRel1Bp03Page />} />
          <Route path="/appendix/reliability/rel1/bp04" element={<AppendixRel1Bp04Page />} />
          <Route path="/appendix/reliability/rel1/bp05" element={<AppendixRel1Bp05Page />} />
          <Route path="/appendix/reliability/rel2/bp01" element={<AppendixRel2Bp01Page />} />
          <Route path="/appendix/reliability/rel2/bp02" element={<AppendixRel2Bp02Page />} />
          <Route path="/appendix/reliability/rel2/bp03" element={<AppendixRel2Bp03Page />} />
          <Route path="/appendix/reliability/rel2/bp04" element={<AppendixRel2Bp04Page />} />
          <Route path="/appendix/reliability/rel2/bp05" element={<AppendixRel2Bp05Page />} />
          <Route path="/appendix/reliability/rel3/bp01" element={<AppendixRel3Bp01Page />} />
          <Route path="/appendix/reliability/rel3/bp02" element={<AppendixRel3Bp02Page />} />
          <Route path="/appendix/reliability/rel3/bp03" element={<AppendixRel3Bp03Page />} />
          <Route path="/appendix/reliability/rel3/bp04" element={<AppendixRel3Bp04Page />} />
          <Route path="/appendix/reliability/rel4/bp01" element={<AppendixRel4Bp01Page />} />
          <Route path="/appendix/reliability/rel4/bp02" element={<AppendixRel4Bp02Page />} />
          <Route path="/appendix/reliability/rel4/bp03" element={<AppendixRel4Bp03Page />} />
          <Route path="/appendix/reliability/rel4/bp04" element={<AppendixRel4Bp04Page />} />
          <Route path="/appendix/reliability/rel4/bp05" element={<AppendixRel4Bp05Page />} />
          <Route path="/appendix/reliability/rel5/bp01" element={<AppendixRel5Bp01Page />} />
          <Route path="/appendix/reliability/rel5/bp02" element={<AppendixRel5Bp02Page />} />
          <Route path="/appendix/reliability/rel5/bp03" element={<AppendixRel5Bp03Page />} />
          <Route path="/appendix/reliability/rel5/bp04" element={<AppendixRel5Bp04Page />} />
          <Route path="/appendix/reliability/rel6/bp01" element={<AppendixRel6Bp01Page />} />
          <Route path="/appendix/reliability/rel6/bp02" element={<AppendixRel6Bp02Page />} />
          <Route path="/appendix/reliability/rel6/bp03" element={<AppendixRel6Bp03Page />} />
          <Route path="/appendix/reliability/rel6/bp04" element={<AppendixRel6Bp04Page />} />
          <Route path="/appendix/reliability/rel7/bp01" element={<AppendixRel7Bp01Page />} />
          <Route path="/appendix/reliability/rel7/bp02" element={<AppendixRel7Bp02Page />} />
          <Route path="/appendix/reliability/rel7/bp03" element={<AppendixRel7Bp03Page />} />
          <Route path="/appendix/reliability/rel7/bp04" element={<AppendixRel7Bp04Page />} />
          <Route path="/appendix/reliability/rel8/bp01" element={<AppendixRel8Bp01Page />} />
          <Route path="/appendix/reliability/rel8/bp02" element={<AppendixRel8Bp02Page />} />
          <Route path="/appendix/reliability/rel8/bp03" element={<AppendixRel8Bp03Page />} />
          <Route path="/appendix/reliability/rel8/bp04" element={<AppendixRel8Bp04Page />} />
          <Route path="/appendix/reliability/rel8/bp05" element={<AppendixRel8Bp05Page />} />
          <Route path="/appendix/reliability/rel9/bp01" element={<AppendixRel9Bp01Page />} />
          <Route path="/appendix/reliability/rel9/bp02" element={<AppendixRel9Bp02Page />} />
          <Route path="/appendix/reliability/rel9/bp03" element={<AppendixRel9Bp03Page />} />
          <Route path="/appendix/reliability/rel9/bp04" element={<AppendixRel9Bp04Page />} />
          <Route path="/appendix/performance-efficiency" element={<PlaceholderPage title="부록: 성능 효율성 질문" />} />
          <Route path="/appendix/performance-efficiency/perf1" element={<AppendixPerf1Page />} />
          <Route path="/appendix/performance-efficiency/perf2" element={<AppendixPerf2Page />} />
          <Route path="/appendix/performance-efficiency/perf3" element={<AppendixPerf3Page />} />
          <Route path="/appendix/performance-efficiency/perf4" element={<AppendixPerf4Page />} />
          <Route path="/appendix/performance-efficiency/perf5" element={<AppendixPerf5Page />} />
          <Route path="/appendix/performance-efficiency/perf6" element={<AppendixPerf6Page />} />
          <Route path="/appendix/performance-efficiency/perf7" element={<AppendixPerf7Page />} />
          <Route path="/appendix/performance-efficiency/perf8" element={<AppendixPerf8Page />} />
          <Route path="/appendix/performance-efficiency/perf1/bp01" element={<AppendixPerf1Bp01Page />} />
          <Route path="/appendix/performance-efficiency/perf1/bp02" element={<AppendixPerf1Bp02Page />} />
          <Route path="/appendix/performance-efficiency/perf1/bp03" element={<AppendixPerf1Bp03Page />} />
          <Route path="/appendix/performance-efficiency/perf1/bp04" element={<AppendixPerf1Bp04Page />} />
          <Route path="/appendix/performance-efficiency/perf1/bp05" element={<AppendixPerf1Bp05Page />} />
          <Route path="/appendix/performance-efficiency/perf2/bp01" element={<AppendixPerf2Bp01Page />} />
          <Route path="/appendix/performance-efficiency/perf2/bp02" element={<AppendixPerf2Bp02Page />} />
          <Route path="/appendix/performance-efficiency/perf2/bp03" element={<AppendixPerf2Bp03Page />} />
          <Route path="/appendix/performance-efficiency/perf2/bp04" element={<AppendixPerf2Bp04Page />} />
          <Route path="/appendix/performance-efficiency/perf2/bp05" element={<AppendixPerf2Bp05Page />} />
          <Route path="/appendix/performance-efficiency/perf3/bp01" element={<AppendixPerf3Bp01Page />} />
          <Route path="/appendix/performance-efficiency/perf3/bp02" element={<AppendixPerf3Bp02Page />} />
          <Route path="/appendix/performance-efficiency/perf3/bp03" element={<AppendixPerf3Bp03Page />} />
          <Route path="/appendix/performance-efficiency/perf3/bp04" element={<AppendixPerf3Bp04Page />} />
          <Route path="/appendix/performance-efficiency/perf4/bp01" element={<AppendixPerf4Bp01Page />} />
          <Route path="/appendix/performance-efficiency/perf4/bp02" element={<AppendixPerf4Bp02Page />} />
          <Route path="/appendix/performance-efficiency/perf4/bp03" element={<AppendixPerf4Bp03Page />} />
          <Route path="/appendix/performance-efficiency/perf4/bp04" element={<AppendixPerf4Bp04Page />} />
          <Route path="/appendix/performance-efficiency/perf5/bp01" element={<AppendixPerf5Bp01Page />} />
          <Route path="/appendix/performance-efficiency/perf5/bp02" element={<AppendixPerf5Bp02Page />} />
          <Route path="/appendix/performance-efficiency/perf5/bp03" element={<AppendixPerf5Bp03Page />} />
          <Route path="/appendix/performance-efficiency/perf5/bp04" element={<AppendixPerf5Bp04Page />} />
          <Route path="/appendix/performance-efficiency/perf5/bp05" element={<AppendixPerf5Bp05Page />} />
          <Route path="/appendix/performance-efficiency/perf6/bp01" element={<AppendixPerf6Bp01Page />} />
          <Route path="/appendix/performance-efficiency/perf6/bp02" element={<AppendixPerf6Bp02Page />} />
          <Route path="/appendix/performance-efficiency/perf6/bp03" element={<AppendixPerf6Bp03Page />} />
          <Route path="/appendix/performance-efficiency/perf6/bp04" element={<AppendixPerf6Bp04Page />} />
          <Route path="/appendix/performance-efficiency/perf7/bp01" element={<AppendixPerf7Bp01Page />} />
          <Route path="/appendix/performance-efficiency/perf7/bp02" element={<AppendixPerf7Bp02Page />} />
          <Route path="/appendix/performance-efficiency/perf7/bp03" element={<AppendixPerf7Bp03Page />} />
          <Route path="/appendix/performance-efficiency/perf7/bp04" element={<AppendixPerf7Bp04Page />} />
          <Route path="/appendix/performance-efficiency/perf7/bp05" element={<AppendixPerf7Bp05Page />} />
          <Route path="/appendix/performance-efficiency/perf8/bp01" element={<AppendixPerf8Bp01Page />} />
          <Route path="/appendix/performance-efficiency/perf8/bp02" element={<AppendixPerf8Bp02Page />} />
          <Route path="/appendix/performance-efficiency/perf8/bp03" element={<AppendixPerf8Bp03Page />} />
          <Route path="/appendix/performance-efficiency/perf8/bp04" element={<AppendixPerf8Bp04Page />} />
          <Route path="/appendix/performance-efficiency/perf8/bp05" element={<AppendixPerf8Bp05Page />} />
          <Route path="/appendix/cost-optimization" element={<PlaceholderPage title="부록: 비용 최적화 질문" />} />
          <Route path="/appendix/cost-optimization/cost1" element={<AppendixCost1Page />} />
          <Route path="/appendix/cost-optimization/cost2" element={<AppendixCost2Page />} />
          <Route path="/appendix/cost-optimization/cost3" element={<AppendixCost3Page />} />
          <Route path="/appendix/cost-optimization/cost4" element={<AppendixCost4Page />} />
          <Route path="/appendix/cost-optimization/cost5" element={<AppendixCost5Page />} />
          <Route path="/appendix/cost-optimization/cost6" element={<AppendixCost6Page />} />
          <Route path="/appendix/cost-optimization/cost7" element={<AppendixCost7Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp01" element={<AppendixCost1Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp02" element={<AppendixCost1Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp03" element={<AppendixCost1Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp04" element={<AppendixCost1Bp04Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp05" element={<AppendixCost1Bp05Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp06" element={<AppendixCost1Bp06Page />} />
          <Route path="/appendix/cost-optimization/cost2/bp01" element={<AppendixCost2Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost2/bp02" element={<AppendixCost2Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost2/bp03" element={<AppendixCost2Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost2/bp04" element={<AppendixCost2Bp04Page />} />
          <Route path="/appendix/cost-optimization/cost3/bp01" element={<AppendixCost3Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost3/bp02" element={<AppendixCost3Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost3/bp03" element={<AppendixCost3Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost3/bp04" element={<AppendixCost3Bp04Page />} />
          <Route path="/appendix/cost-optimization/cost3/bp05" element={<AppendixCost3Bp05Page />} />
          <Route path="/appendix/cost-optimization/cost4/bp01" element={<AppendixCost4Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost4/bp02" element={<AppendixCost4Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost4/bp03" element={<AppendixCost4Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost4/bp04" element={<AppendixCost4Bp04Page />} />
          <Route path="/appendix/cost-optimization/cost5/bp01" element={<AppendixCost5Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost5/bp02" element={<AppendixCost5Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost5/bp03" element={<AppendixCost5Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost5/bp04" element={<AppendixCost5Bp04Page />} />
          <Route path="/appendix/cost-optimization/cost5/bp05" element={<AppendixCost5Bp05Page />} />
          <Route path="/appendix/cost-optimization/cost6/bp01" element={<AppendixCost6Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost6/bp02" element={<AppendixCost6Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost6/bp03" element={<AppendixCost6Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost7/bp01" element={<AppendixCost7Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost7/bp02" element={<AppendixCost7Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost7/bp03" element={<AppendixCost7Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost7/bp04" element={<AppendixCost7Bp04Page />} />
          <Route path="/appendix/sustainability" element={<PlaceholderPage title="부록: 지속 가능성 질문" />} />
          <Route path="/appendix/sustainability/sus1" element={<AppendixSus1Page />} />
          <Route path="/appendix/sustainability/sus2" element={<AppendixSus2Page />} />
          <Route path="/appendix/sustainability/sus3" element={<AppendixSus3Page />} />
          <Route path="/appendix/sustainability/sus4" element={<AppendixSus4Page />} />
          <Route path="/appendix/sustainability/sus5" element={<AppendixSus5Page />} />
          <Route path="/appendix/sustainability/sus6" element={<AppendixSus6Page />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/aws-glossary" element={<PlaceholderPage title="AWS 용어집" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
