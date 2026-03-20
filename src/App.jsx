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

// Appendix Question Pages - OPS
import AppendixOps1Page from "./pages/AppendixOps1Page";
import AppendixOps2Page from "./pages/AppendixOps2Page";
import AppendixOps3Page from "./pages/AppendixOps3Page";
import AppendixOps4Page from "./pages/AppendixOps4Page";
import AppendixOps5Page from "./pages/AppendixOps5Page";
import AppendixOps6Page from "./pages/AppendixOps6Page";
import AppendixOps7Page from "./pages/AppendixOps7Page";
import AppendixOps8Page from "./pages/AppendixOps8Page";
import AppendixOps9Page from "./pages/AppendixOps9Page";
import AppendixOps10Page from "./pages/AppendixOps10Page";
import AppendixOps11Page from "./pages/AppendixOps11Page";

// Appendix Question Pages - SEC
import AppendixSec1Page from "./pages/AppendixSec1Page";
import AppendixSec2Page from "./pages/AppendixSec2Page";
import AppendixSec3Page from "./pages/AppendixSec3Page";
import AppendixSec4Page from "./pages/AppendixSec4Page";
import AppendixSec5Page from "./pages/AppendixSec5Page";
import AppendixSec6Page from "./pages/AppendixSec6Page";
import AppendixSec7Page from "./pages/AppendixSec7Page";
import AppendixSec8Page from "./pages/AppendixSec8Page";
import AppendixSec9Page from "./pages/AppendixSec9Page";
import AppendixSec10Page from "./pages/AppendixSec10Page";
import AppendixSec11Page from "./pages/AppendixSec11Page";

// Appendix Question Pages - REL
import AppendixRel1Page from "./pages/AppendixRel1Page";
import AppendixRel2Page from "./pages/AppendixRel2Page";
import AppendixRel3Page from "./pages/AppendixRel3Page";
import AppendixRel4Page from "./pages/AppendixRel4Page";
import AppendixRel5Page from "./pages/AppendixRel5Page";
import AppendixRel6Page from "./pages/AppendixRel6Page";
import AppendixRel7Page from "./pages/AppendixRel7Page";
import AppendixRel8Page from "./pages/AppendixRel8Page";
import AppendixRel9Page from "./pages/AppendixRel9Page";
import AppendixRel10Page from "./pages/AppendixRel10Page";
import AppendixRel11Page from "./pages/AppendixRel11Page";
import AppendixRel12Page from "./pages/AppendixRel12Page";
import AppendixRel13Page from "./pages/AppendixRel13Page";

// Appendix Question Pages - PERF
import AppendixPerf1Page from "./pages/AppendixPerf1Page";
import AppendixPerf2Page from "./pages/AppendixPerf2Page";
import AppendixPerf3Page from "./pages/AppendixPerf3Page";
import AppendixPerf4Page from "./pages/AppendixPerf4Page";
import AppendixPerf5Page from "./pages/AppendixPerf5Page";

// Appendix Question Pages - COST
import AppendixCost1Page from "./pages/AppendixCost1Page";
import AppendixCost2Page from "./pages/AppendixCost2Page";
import AppendixCost3Page from "./pages/AppendixCost3Page";
import AppendixCost4Page from "./pages/AppendixCost4Page";
import AppendixCost5Page from "./pages/AppendixCost5Page";
import AppendixCost6Page from "./pages/AppendixCost6Page";
import AppendixCost7Page from "./pages/AppendixCost7Page";
import AppendixCost8Page from "./pages/AppendixCost8Page";
import AppendixCost9Page from "./pages/AppendixCost9Page";
import AppendixCost10Page from "./pages/AppendixCost10Page";
import AppendixCost11Page from "./pages/AppendixCost11Page";

// Appendix Question Pages - SUS
import AppendixSus1Page from "./pages/AppendixSus1Page";
import AppendixSus2Page from "./pages/AppendixSus2Page";
import AppendixSus3Page from "./pages/AppendixSus3Page";
import AppendixSus4Page from "./pages/AppendixSus4Page";
import AppendixSus5Page from "./pages/AppendixSus5Page";
import AppendixSus6Page from "./pages/AppendixSus6Page";

// Appendix BP Pages - OPS1
import AppendixOps1Bp01Page from "./pages/AppendixOps1Bp01Page";
import AppendixOps1Bp02Page from "./pages/AppendixOps1Bp02Page";
import AppendixOps1Bp03Page from "./pages/AppendixOps1Bp03Page";
import AppendixOps1Bp04Page from "./pages/AppendixOps1Bp04Page";
import AppendixOps1Bp05Page from "./pages/AppendixOps1Bp05Page";
import AppendixOps1Bp06Page from "./pages/AppendixOps1Bp06Page";

// Appendix BP Pages - OPS2
import AppendixOps2Bp01Page from "./pages/AppendixOps2Bp01Page";
import AppendixOps2Bp02Page from "./pages/AppendixOps2Bp02Page";
import AppendixOps2Bp03Page from "./pages/AppendixOps2Bp03Page";
import AppendixOps2Bp04Page from "./pages/AppendixOps2Bp04Page";
import AppendixOps2Bp05Page from "./pages/AppendixOps2Bp05Page";
import AppendixOps2Bp06Page from "./pages/AppendixOps2Bp06Page";

// Appendix BP Pages - OPS3
import AppendixOps3Bp01Page from "./pages/AppendixOps3Bp01Page";
import AppendixOps3Bp02Page from "./pages/AppendixOps3Bp02Page";
import AppendixOps3Bp03Page from "./pages/AppendixOps3Bp03Page";
import AppendixOps3Bp04Page from "./pages/AppendixOps3Bp04Page";
import AppendixOps3Bp05Page from "./pages/AppendixOps3Bp05Page";
import AppendixOps3Bp06Page from "./pages/AppendixOps3Bp06Page";
import AppendixOps3Bp07Page from "./pages/AppendixOps3Bp07Page";

// Appendix BP Pages - OPS4
import AppendixOps4Bp01Page from "./pages/AppendixOps4Bp01Page";
import AppendixOps4Bp02Page from "./pages/AppendixOps4Bp02Page";
import AppendixOps4Bp03Page from "./pages/AppendixOps4Bp03Page";
import AppendixOps4Bp04Page from "./pages/AppendixOps4Bp04Page";
import AppendixOps4Bp05Page from "./pages/AppendixOps4Bp05Page";

// Appendix BP Pages - OPS5
import AppendixOps5Bp01Page from "./pages/AppendixOps5Bp01Page";
import AppendixOps5Bp02Page from "./pages/AppendixOps5Bp02Page";
import AppendixOps5Bp03Page from "./pages/AppendixOps5Bp03Page";
import AppendixOps5Bp04Page from "./pages/AppendixOps5Bp04Page";
import AppendixOps5Bp05Page from "./pages/AppendixOps5Bp05Page";
import AppendixOps5Bp06Page from "./pages/AppendixOps5Bp06Page";
import AppendixOps5Bp07Page from "./pages/AppendixOps5Bp07Page";
import AppendixOps5Bp08Page from "./pages/AppendixOps5Bp08Page";
import AppendixOps5Bp09Page from "./pages/AppendixOps5Bp09Page";
import AppendixOps5Bp10Page from "./pages/AppendixOps5Bp10Page";

// Appendix BP Pages - OPS6
import AppendixOps6Bp01Page from "./pages/AppendixOps6Bp01Page";
import AppendixOps6Bp02Page from "./pages/AppendixOps6Bp02Page";
import AppendixOps6Bp03Page from "./pages/AppendixOps6Bp03Page";
import AppendixOps6Bp04Page from "./pages/AppendixOps6Bp04Page";

// Appendix BP Pages - OPS7
import AppendixOps7Bp01Page from "./pages/AppendixOps7Bp01Page";
import AppendixOps7Bp02Page from "./pages/AppendixOps7Bp02Page";
import AppendixOps7Bp03Page from "./pages/AppendixOps7Bp03Page";
import AppendixOps7Bp04Page from "./pages/AppendixOps7Bp04Page";
import AppendixOps7Bp05Page from "./pages/AppendixOps7Bp05Page";
import AppendixOps7Bp06Page from "./pages/AppendixOps7Bp06Page";

// Appendix BP Pages - OPS8
import AppendixOps8Bp01Page from "./pages/AppendixOps8Bp01Page";
import AppendixOps8Bp02Page from "./pages/AppendixOps8Bp02Page";
import AppendixOps8Bp03Page from "./pages/AppendixOps8Bp03Page";
import AppendixOps8Bp04Page from "./pages/AppendixOps8Bp04Page";
import AppendixOps8Bp05Page from "./pages/AppendixOps8Bp05Page";

// Appendix BP Pages - OPS9
import AppendixOps9Bp01Page from "./pages/AppendixOps9Bp01Page";
import AppendixOps9Bp02Page from "./pages/AppendixOps9Bp02Page";
import AppendixOps9Bp03Page from "./pages/AppendixOps9Bp03Page";

// Appendix BP Pages - OPS10
import AppendixOps10Bp01Page from "./pages/AppendixOps10Bp01Page";
import AppendixOps10Bp02Page from "./pages/AppendixOps10Bp02Page";
import AppendixOps10Bp03Page from "./pages/AppendixOps10Bp03Page";
import AppendixOps10Bp04Page from "./pages/AppendixOps10Bp04Page";
import AppendixOps10Bp05Page from "./pages/AppendixOps10Bp05Page";
import AppendixOps10Bp06Page from "./pages/AppendixOps10Bp06Page";
import AppendixOps10Bp07Page from "./pages/AppendixOps10Bp07Page";

// Appendix BP Pages - OPS11
import AppendixOps11Bp01Page from "./pages/AppendixOps11Bp01Page";
import AppendixOps11Bp02Page from "./pages/AppendixOps11Bp02Page";
import AppendixOps11Bp03Page from "./pages/AppendixOps11Bp03Page";
import AppendixOps11Bp04Page from "./pages/AppendixOps11Bp04Page";
import AppendixOps11Bp05Page from "./pages/AppendixOps11Bp05Page";
import AppendixOps11Bp06Page from "./pages/AppendixOps11Bp06Page";
import AppendixOps11Bp07Page from "./pages/AppendixOps11Bp07Page";
import AppendixOps11Bp08Page from "./pages/AppendixOps11Bp08Page";
import AppendixOps11Bp09Page from "./pages/AppendixOps11Bp09Page";

// Appendix BP Pages - SEC1
import AppendixSec1Bp01Page from "./pages/AppendixSec1Bp01Page";
import AppendixSec1Bp02Page from "./pages/AppendixSec1Bp02Page";
import AppendixSec1Bp03Page from "./pages/AppendixSec1Bp03Page";
import AppendixSec1Bp04Page from "./pages/AppendixSec1Bp04Page";
import AppendixSec1Bp05Page from "./pages/AppendixSec1Bp05Page";
import AppendixSec1Bp06Page from "./pages/AppendixSec1Bp06Page";
import AppendixSec1Bp07Page from "./pages/AppendixSec1Bp07Page";
import AppendixSec1Bp08Page from "./pages/AppendixSec1Bp08Page";

// Appendix BP Pages - SEC2
import AppendixSec2Bp01Page from "./pages/AppendixSec2Bp01Page";
import AppendixSec2Bp02Page from "./pages/AppendixSec2Bp02Page";
import AppendixSec2Bp03Page from "./pages/AppendixSec2Bp03Page";
import AppendixSec2Bp04Page from "./pages/AppendixSec2Bp04Page";
import AppendixSec2Bp05Page from "./pages/AppendixSec2Bp05Page";
import AppendixSec2Bp06Page from "./pages/AppendixSec2Bp06Page";

// Appendix BP Pages - SEC3
import AppendixSec3Bp01Page from "./pages/AppendixSec3Bp01Page";
import AppendixSec3Bp02Page from "./pages/AppendixSec3Bp02Page";
import AppendixSec3Bp03Page from "./pages/AppendixSec3Bp03Page";
import AppendixSec3Bp04Page from "./pages/AppendixSec3Bp04Page";
import AppendixSec3Bp05Page from "./pages/AppendixSec3Bp05Page";
import AppendixSec3Bp06Page from "./pages/AppendixSec3Bp06Page";
import AppendixSec3Bp07Page from "./pages/AppendixSec3Bp07Page";
import AppendixSec3Bp08Page from "./pages/AppendixSec3Bp08Page";
import AppendixSec3Bp09Page from "./pages/AppendixSec3Bp09Page";

// Appendix BP Pages - SEC4
import AppendixSec4Bp01Page from "./pages/AppendixSec4Bp01Page";
import AppendixSec4Bp02Page from "./pages/AppendixSec4Bp02Page";
import AppendixSec4Bp03Page from "./pages/AppendixSec4Bp03Page";
import AppendixSec4Bp04Page from "./pages/AppendixSec4Bp04Page";

// Appendix BP Pages - SEC5
import AppendixSec5Bp01Page from "./pages/AppendixSec5Bp01Page";
import AppendixSec5Bp02Page from "./pages/AppendixSec5Bp02Page";
import AppendixSec5Bp03Page from "./pages/AppendixSec5Bp03Page";
import AppendixSec5Bp04Page from "./pages/AppendixSec5Bp04Page";

// Appendix BP Pages - SEC6
import AppendixSec6Bp01Page from "./pages/AppendixSec6Bp01Page";
import AppendixSec6Bp02Page from "./pages/AppendixSec6Bp02Page";
import AppendixSec6Bp03Page from "./pages/AppendixSec6Bp03Page";
import AppendixSec6Bp04Page from "./pages/AppendixSec6Bp04Page";
import AppendixSec6Bp05Page from "./pages/AppendixSec6Bp05Page";

// Appendix BP Pages - SEC7
import AppendixSec7Bp01Page from "./pages/AppendixSec7Bp01Page";
import AppendixSec7Bp02Page from "./pages/AppendixSec7Bp02Page";
import AppendixSec7Bp03Page from "./pages/AppendixSec7Bp03Page";
import AppendixSec7Bp04Page from "./pages/AppendixSec7Bp04Page";

// Appendix BP Pages - SEC8
import AppendixSec8Bp01Page from "./pages/AppendixSec8Bp01Page";
import AppendixSec8Bp02Page from "./pages/AppendixSec8Bp02Page";
import AppendixSec8Bp03Page from "./pages/AppendixSec8Bp03Page";
import AppendixSec8Bp04Page from "./pages/AppendixSec8Bp04Page";

// Appendix BP Pages - SEC9
import AppendixSec9Bp01Page from "./pages/AppendixSec9Bp01Page";
import AppendixSec9Bp02Page from "./pages/AppendixSec9Bp02Page";
import AppendixSec9Bp03Page from "./pages/AppendixSec9Bp03Page";

// Appendix BP Pages - SEC10
import AppendixSec10Bp01Page from "./pages/AppendixSec10Bp01Page";
import AppendixSec10Bp02Page from "./pages/AppendixSec10Bp02Page";
import AppendixSec10Bp03Page from "./pages/AppendixSec10Bp03Page";
import AppendixSec10Bp04Page from "./pages/AppendixSec10Bp04Page";
import AppendixSec10Bp05Page from "./pages/AppendixSec10Bp05Page";
import AppendixSec10Bp06Page from "./pages/AppendixSec10Bp06Page";
import AppendixSec10Bp07Page from "./pages/AppendixSec10Bp07Page";
import AppendixSec10Bp08Page from "./pages/AppendixSec10Bp08Page";

// Appendix BP Pages - SEC11
import AppendixSec11Bp01Page from "./pages/AppendixSec11Bp01Page";
import AppendixSec11Bp02Page from "./pages/AppendixSec11Bp02Page";
import AppendixSec11Bp03Page from "./pages/AppendixSec11Bp03Page";
import AppendixSec11Bp04Page from "./pages/AppendixSec11Bp04Page";
import AppendixSec11Bp05Page from "./pages/AppendixSec11Bp05Page";
import AppendixSec11Bp06Page from "./pages/AppendixSec11Bp06Page";
import AppendixSec11Bp07Page from "./pages/AppendixSec11Bp07Page";
import AppendixSec11Bp08Page from "./pages/AppendixSec11Bp08Page";

// Appendix BP Pages - REL1
import AppendixRel1Bp01Page from "./pages/AppendixRel1Bp01Page";
import AppendixRel1Bp02Page from "./pages/AppendixRel1Bp02Page";
import AppendixRel1Bp03Page from "./pages/AppendixRel1Bp03Page";
import AppendixRel1Bp04Page from "./pages/AppendixRel1Bp04Page";
import AppendixRel1Bp05Page from "./pages/AppendixRel1Bp05Page";
import AppendixRel1Bp06Page from "./pages/AppendixRel1Bp06Page";

// Appendix BP Pages - REL2
import AppendixRel2Bp01Page from "./pages/AppendixRel2Bp01Page";
import AppendixRel2Bp02Page from "./pages/AppendixRel2Bp02Page";
import AppendixRel2Bp03Page from "./pages/AppendixRel2Bp03Page";
import AppendixRel2Bp04Page from "./pages/AppendixRel2Bp04Page";
import AppendixRel2Bp05Page from "./pages/AppendixRel2Bp05Page";

// Appendix BP Pages - REL3
import AppendixRel3Bp01Page from "./pages/AppendixRel3Bp01Page";
import AppendixRel3Bp02Page from "./pages/AppendixRel3Bp02Page";
import AppendixRel3Bp03Page from "./pages/AppendixRel3Bp03Page";

// Appendix BP Pages - REL4
import AppendixRel4Bp01Page from "./pages/AppendixRel4Bp01Page";
import AppendixRel4Bp02Page from "./pages/AppendixRel4Bp02Page";
import AppendixRel4Bp03Page from "./pages/AppendixRel4Bp03Page";
import AppendixRel4Bp04Page from "./pages/AppendixRel4Bp04Page";

// Appendix BP Pages - REL5
import AppendixRel5Bp01Page from "./pages/AppendixRel5Bp01Page";
import AppendixRel5Bp02Page from "./pages/AppendixRel5Bp02Page";
import AppendixRel5Bp03Page from "./pages/AppendixRel5Bp03Page";
import AppendixRel5Bp04Page from "./pages/AppendixRel5Bp04Page";
import AppendixRel5Bp05Page from "./pages/AppendixRel5Bp05Page";
import AppendixRel5Bp06Page from "./pages/AppendixRel5Bp06Page";
import AppendixRel5Bp07Page from "./pages/AppendixRel5Bp07Page";

// Appendix BP Pages - REL6
import AppendixRel6Bp01Page from "./pages/AppendixRel6Bp01Page";
import AppendixRel6Bp02Page from "./pages/AppendixRel6Bp02Page";
import AppendixRel6Bp03Page from "./pages/AppendixRel6Bp03Page";
import AppendixRel6Bp04Page from "./pages/AppendixRel6Bp04Page";
import AppendixRel6Bp05Page from "./pages/AppendixRel6Bp05Page";
import AppendixRel6Bp06Page from "./pages/AppendixRel6Bp06Page";
import AppendixRel6Bp07Page from "./pages/AppendixRel6Bp07Page";

// Appendix BP Pages - REL7
import AppendixRel7Bp01Page from "./pages/AppendixRel7Bp01Page";
import AppendixRel7Bp02Page from "./pages/AppendixRel7Bp02Page";
import AppendixRel7Bp03Page from "./pages/AppendixRel7Bp03Page";
import AppendixRel7Bp04Page from "./pages/AppendixRel7Bp04Page";

// Appendix BP Pages - REL8
import AppendixRel8Bp01Page from "./pages/AppendixRel8Bp01Page";
import AppendixRel8Bp02Page from "./pages/AppendixRel8Bp02Page";
import AppendixRel8Bp03Page from "./pages/AppendixRel8Bp03Page";
import AppendixRel8Bp04Page from "./pages/AppendixRel8Bp04Page";
import AppendixRel8Bp05Page from "./pages/AppendixRel8Bp05Page";

// Appendix BP Pages - REL9
import AppendixRel9Bp01Page from "./pages/AppendixRel9Bp01Page";
import AppendixRel9Bp02Page from "./pages/AppendixRel9Bp02Page";
import AppendixRel9Bp03Page from "./pages/AppendixRel9Bp03Page";
import AppendixRel9Bp04Page from "./pages/AppendixRel9Bp04Page";

// Appendix BP Pages - REL10
import AppendixRel10Bp01Page from "./pages/AppendixRel10Bp01Page";
import AppendixRel10Bp02Page from "./pages/AppendixRel10Bp02Page";
import AppendixRel10Bp03Page from "./pages/AppendixRel10Bp03Page";

// Appendix BP Pages - REL11
import AppendixRel11Bp01Page from "./pages/AppendixRel11Bp01Page";
import AppendixRel11Bp02Page from "./pages/AppendixRel11Bp02Page";
import AppendixRel11Bp03Page from "./pages/AppendixRel11Bp03Page";
import AppendixRel11Bp04Page from "./pages/AppendixRel11Bp04Page";
import AppendixRel11Bp05Page from "./pages/AppendixRel11Bp05Page";
import AppendixRel11Bp06Page from "./pages/AppendixRel11Bp06Page";
import AppendixRel11Bp07Page from "./pages/AppendixRel11Bp07Page";

// Appendix BP Pages - REL12
import AppendixRel12Bp01Page from "./pages/AppendixRel12Bp01Page";
import AppendixRel12Bp02Page from "./pages/AppendixRel12Bp02Page";
import AppendixRel12Bp03Page from "./pages/AppendixRel12Bp03Page";
import AppendixRel12Bp04Page from "./pages/AppendixRel12Bp04Page";
import AppendixRel12Bp05Page from "./pages/AppendixRel12Bp05Page";

// Appendix BP Pages - REL13
import AppendixRel13Bp01Page from "./pages/AppendixRel13Bp01Page";
import AppendixRel13Bp02Page from "./pages/AppendixRel13Bp02Page";
import AppendixRel13Bp03Page from "./pages/AppendixRel13Bp03Page";
import AppendixRel13Bp04Page from "./pages/AppendixRel13Bp04Page";
import AppendixRel13Bp05Page from "./pages/AppendixRel13Bp05Page";

// Appendix BP Pages - PERF1
import AppendixPerf1Bp01Page from "./pages/AppendixPerf1Bp01Page";
import AppendixPerf1Bp02Page from "./pages/AppendixPerf1Bp02Page";
import AppendixPerf1Bp03Page from "./pages/AppendixPerf1Bp03Page";
import AppendixPerf1Bp04Page from "./pages/AppendixPerf1Bp04Page";
import AppendixPerf1Bp05Page from "./pages/AppendixPerf1Bp05Page";
import AppendixPerf1Bp06Page from "./pages/AppendixPerf1Bp06Page";
import AppendixPerf1Bp07Page from "./pages/AppendixPerf1Bp07Page";

// Appendix BP Pages - PERF2
import AppendixPerf2Bp01Page from "./pages/AppendixPerf2Bp01Page";
import AppendixPerf2Bp02Page from "./pages/AppendixPerf2Bp02Page";
import AppendixPerf2Bp03Page from "./pages/AppendixPerf2Bp03Page";
import AppendixPerf2Bp04Page from "./pages/AppendixPerf2Bp04Page";
import AppendixPerf2Bp05Page from "./pages/AppendixPerf2Bp05Page";
import AppendixPerf2Bp06Page from "./pages/AppendixPerf2Bp06Page";

// Appendix BP Pages - PERF3
import AppendixPerf3Bp01Page from "./pages/AppendixPerf3Bp01Page";
import AppendixPerf3Bp02Page from "./pages/AppendixPerf3Bp02Page";
import AppendixPerf3Bp03Page from "./pages/AppendixPerf3Bp03Page";
import AppendixPerf3Bp04Page from "./pages/AppendixPerf3Bp04Page";
import AppendixPerf3Bp05Page from "./pages/AppendixPerf3Bp05Page";

// Appendix BP Pages - PERF4
import AppendixPerf4Bp01Page from "./pages/AppendixPerf4Bp01Page";
import AppendixPerf4Bp02Page from "./pages/AppendixPerf4Bp02Page";
import AppendixPerf4Bp03Page from "./pages/AppendixPerf4Bp03Page";
import AppendixPerf4Bp04Page from "./pages/AppendixPerf4Bp04Page";
import AppendixPerf4Bp05Page from "./pages/AppendixPerf4Bp05Page";
import AppendixPerf4Bp06Page from "./pages/AppendixPerf4Bp06Page";
import AppendixPerf4Bp07Page from "./pages/AppendixPerf4Bp07Page";

// Appendix BP Pages - PERF5
import AppendixPerf5Bp01Page from "./pages/AppendixPerf5Bp01Page";
import AppendixPerf5Bp02Page from "./pages/AppendixPerf5Bp02Page";
import AppendixPerf5Bp03Page from "./pages/AppendixPerf5Bp03Page";
import AppendixPerf5Bp04Page from "./pages/AppendixPerf5Bp04Page";
import AppendixPerf5Bp05Page from "./pages/AppendixPerf5Bp05Page";
import AppendixPerf5Bp06Page from "./pages/AppendixPerf5Bp06Page";
import AppendixPerf5Bp07Page from "./pages/AppendixPerf5Bp07Page";

// Appendix BP Pages - COST1
import AppendixCost1Bp01Page from "./pages/AppendixCost1Bp01Page";
import AppendixCost1Bp02Page from "./pages/AppendixCost1Bp02Page";
import AppendixCost1Bp03Page from "./pages/AppendixCost1Bp03Page";
import AppendixCost1Bp04Page from "./pages/AppendixCost1Bp04Page";
import AppendixCost1Bp05Page from "./pages/AppendixCost1Bp05Page";
import AppendixCost1Bp06Page from "./pages/AppendixCost1Bp06Page";
import AppendixCost1Bp07Page from "./pages/AppendixCost1Bp07Page";
import AppendixCost1Bp08Page from "./pages/AppendixCost1Bp08Page";
import AppendixCost1Bp09Page from "./pages/AppendixCost1Bp09Page";

// Appendix BP Pages - COST2
import AppendixCost2Bp01Page from "./pages/AppendixCost2Bp01Page";
import AppendixCost2Bp02Page from "./pages/AppendixCost2Bp02Page";
import AppendixCost2Bp03Page from "./pages/AppendixCost2Bp03Page";
import AppendixCost2Bp04Page from "./pages/AppendixCost2Bp04Page";
import AppendixCost2Bp05Page from "./pages/AppendixCost2Bp05Page";
import AppendixCost2Bp06Page from "./pages/AppendixCost2Bp06Page";

// Appendix BP Pages - COST3
import AppendixCost3Bp01Page from "./pages/AppendixCost3Bp01Page";
import AppendixCost3Bp02Page from "./pages/AppendixCost3Bp02Page";
import AppendixCost3Bp03Page from "./pages/AppendixCost3Bp03Page";
import AppendixCost3Bp04Page from "./pages/AppendixCost3Bp04Page";
import AppendixCost3Bp05Page from "./pages/AppendixCost3Bp05Page";
import AppendixCost3Bp06Page from "./pages/AppendixCost3Bp06Page";

// Appendix BP Pages - COST4
import AppendixCost4Bp01Page from "./pages/AppendixCost4Bp01Page";
import AppendixCost4Bp02Page from "./pages/AppendixCost4Bp02Page";
import AppendixCost4Bp03Page from "./pages/AppendixCost4Bp03Page";
import AppendixCost4Bp04Page from "./pages/AppendixCost4Bp04Page";
import AppendixCost4Bp05Page from "./pages/AppendixCost4Bp05Page";

// Appendix BP Pages - COST5
import AppendixCost5Bp01Page from "./pages/AppendixCost5Bp01Page";
import AppendixCost5Bp02Page from "./pages/AppendixCost5Bp02Page";
import AppendixCost5Bp03Page from "./pages/AppendixCost5Bp03Page";
import AppendixCost5Bp04Page from "./pages/AppendixCost5Bp04Page";
import AppendixCost5Bp05Page from "./pages/AppendixCost5Bp05Page";
import AppendixCost5Bp06Page from "./pages/AppendixCost5Bp06Page";

// Appendix BP Pages - COST6
import AppendixCost6Bp01Page from "./pages/AppendixCost6Bp01Page";
import AppendixCost6Bp02Page from "./pages/AppendixCost6Bp02Page";
import AppendixCost6Bp03Page from "./pages/AppendixCost6Bp03Page";
import AppendixCost6Bp04Page from "./pages/AppendixCost6Bp04Page";

// Appendix BP Pages - COST7
import AppendixCost7Bp01Page from "./pages/AppendixCost7Bp01Page";
import AppendixCost7Bp02Page from "./pages/AppendixCost7Bp02Page";
import AppendixCost7Bp03Page from "./pages/AppendixCost7Bp03Page";
import AppendixCost7Bp04Page from "./pages/AppendixCost7Bp04Page";
import AppendixCost7Bp05Page from "./pages/AppendixCost7Bp05Page";

// Appendix BP Pages - COST8
import AppendixCost8Bp01Page from "./pages/AppendixCost8Bp01Page";
import AppendixCost8Bp02Page from "./pages/AppendixCost8Bp02Page";
import AppendixCost8Bp03Page from "./pages/AppendixCost8Bp03Page";

// Appendix BP Pages - COST9
import AppendixCost9Bp01Page from "./pages/AppendixCost9Bp01Page";
import AppendixCost9Bp02Page from "./pages/AppendixCost9Bp02Page";
import AppendixCost9Bp03Page from "./pages/AppendixCost9Bp03Page";

// Appendix BP Pages - COST10
import AppendixCost10Bp01Page from "./pages/AppendixCost10Bp01Page";
import AppendixCost10Bp02Page from "./pages/AppendixCost10Bp02Page";

// Appendix BP Pages - COST11
import AppendixCost11Bp01Page from "./pages/AppendixCost11Bp01Page";

// Appendix BP Pages - SUS1
import AppendixSus1Bp01Page from "./pages/AppendixSus1Bp01Page";

// Appendix BP Pages - SUS2
import AppendixSus2Bp01Page from "./pages/AppendixSus2Bp01Page";
import AppendixSus2Bp02Page from "./pages/AppendixSus2Bp02Page";
import AppendixSus2Bp03Page from "./pages/AppendixSus2Bp03Page";
import AppendixSus2Bp04Page from "./pages/AppendixSus2Bp04Page";
import AppendixSus2Bp05Page from "./pages/AppendixSus2Bp05Page";
import AppendixSus2Bp06Page from "./pages/AppendixSus2Bp06Page";

// Appendix BP Pages - SUS3
import AppendixSus3Bp01Page from "./pages/AppendixSus3Bp01Page";
import AppendixSus3Bp02Page from "./pages/AppendixSus3Bp02Page";
import AppendixSus3Bp03Page from "./pages/AppendixSus3Bp03Page";
import AppendixSus3Bp04Page from "./pages/AppendixSus3Bp04Page";
import AppendixSus3Bp05Page from "./pages/AppendixSus3Bp05Page";

// Appendix BP Pages - SUS4
import AppendixSus4Bp01Page from "./pages/AppendixSus4Bp01Page";
import AppendixSus4Bp02Page from "./pages/AppendixSus4Bp02Page";
import AppendixSus4Bp03Page from "./pages/AppendixSus4Bp03Page";
import AppendixSus4Bp04Page from "./pages/AppendixSus4Bp04Page";
import AppendixSus4Bp05Page from "./pages/AppendixSus4Bp05Page";
import AppendixSus4Bp06Page from "./pages/AppendixSus4Bp06Page";
import AppendixSus4Bp07Page from "./pages/AppendixSus4Bp07Page";
import AppendixSus4Bp08Page from "./pages/AppendixSus4Bp08Page";

// Appendix BP Pages - SUS5
import AppendixSus5Bp01Page from "./pages/AppendixSus5Bp01Page";
import AppendixSus5Bp02Page from "./pages/AppendixSus5Bp02Page";
import AppendixSus5Bp03Page from "./pages/AppendixSus5Bp03Page";
import AppendixSus5Bp04Page from "./pages/AppendixSus5Bp04Page";

// Appendix BP Pages - SUS6
import AppendixSus6Bp01Page from "./pages/AppendixSus6Bp01Page";
import AppendixSus6Bp02Page from "./pages/AppendixSus6Bp02Page";
import AppendixSus6Bp03Page from "./pages/AppendixSus6Bp03Page";
import AppendixSus6Bp04Page from "./pages/AppendixSus6Bp04Page";
import AppendixSus6Bp05Page from "./pages/AppendixSus6Bp05Page";

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

          {/* Appendix */}
          <Route path="/appendix" element={<AppendixPage />} />

          {/* Appendix - Operational Excellence */}
          <Route path="/appendix/operational-excellence" element={<PlaceholderPage title="부록: 운영 우수성 질문" />} />
          <Route path="/appendix/operational-excellence/ops1" element={<AppendixOps1Page />} />
          <Route path="/appendix/operational-excellence/ops2" element={<AppendixOps2Page />} />
          <Route path="/appendix/operational-excellence/ops3" element={<AppendixOps3Page />} />
          <Route path="/appendix/operational-excellence/ops4" element={<AppendixOps4Page />} />
          <Route path="/appendix/operational-excellence/ops5" element={<AppendixOps5Page />} />
          <Route path="/appendix/operational-excellence/ops6" element={<AppendixOps6Page />} />
          <Route path="/appendix/operational-excellence/ops7" element={<AppendixOps7Page />} />
          <Route path="/appendix/operational-excellence/ops8" element={<AppendixOps8Page />} />
          <Route path="/appendix/operational-excellence/ops9" element={<AppendixOps9Page />} />
          <Route path="/appendix/operational-excellence/ops10" element={<AppendixOps10Page />} />
          <Route path="/appendix/operational-excellence/ops11" element={<AppendixOps11Page />} />
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
          <Route path="/appendix/operational-excellence/ops2/bp06" element={<AppendixOps2Bp06Page />} />
          <Route path="/appendix/operational-excellence/ops3/bp01" element={<AppendixOps3Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops3/bp02" element={<AppendixOps3Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops3/bp03" element={<AppendixOps3Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops3/bp04" element={<AppendixOps3Bp04Page />} />
          <Route path="/appendix/operational-excellence/ops3/bp05" element={<AppendixOps3Bp05Page />} />
          <Route path="/appendix/operational-excellence/ops3/bp06" element={<AppendixOps3Bp06Page />} />
          <Route path="/appendix/operational-excellence/ops3/bp07" element={<AppendixOps3Bp07Page />} />
          <Route path="/appendix/operational-excellence/ops4/bp01" element={<AppendixOps4Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops4/bp02" element={<AppendixOps4Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops4/bp03" element={<AppendixOps4Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops4/bp04" element={<AppendixOps4Bp04Page />} />
          <Route path="/appendix/operational-excellence/ops4/bp05" element={<AppendixOps4Bp05Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp01" element={<AppendixOps5Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp02" element={<AppendixOps5Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp03" element={<AppendixOps5Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp04" element={<AppendixOps5Bp04Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp05" element={<AppendixOps5Bp05Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp06" element={<AppendixOps5Bp06Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp07" element={<AppendixOps5Bp07Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp08" element={<AppendixOps5Bp08Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp09" element={<AppendixOps5Bp09Page />} />
          <Route path="/appendix/operational-excellence/ops5/bp10" element={<AppendixOps5Bp10Page />} />
          <Route path="/appendix/operational-excellence/ops6/bp01" element={<AppendixOps6Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops6/bp02" element={<AppendixOps6Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops6/bp03" element={<AppendixOps6Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops6/bp04" element={<AppendixOps6Bp04Page />} />
          <Route path="/appendix/operational-excellence/ops7/bp01" element={<AppendixOps7Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops7/bp02" element={<AppendixOps7Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops7/bp03" element={<AppendixOps7Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops7/bp04" element={<AppendixOps7Bp04Page />} />
          <Route path="/appendix/operational-excellence/ops7/bp05" element={<AppendixOps7Bp05Page />} />
          <Route path="/appendix/operational-excellence/ops7/bp06" element={<AppendixOps7Bp06Page />} />
          <Route path="/appendix/operational-excellence/ops8/bp01" element={<AppendixOps8Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops8/bp02" element={<AppendixOps8Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops8/bp03" element={<AppendixOps8Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops8/bp04" element={<AppendixOps8Bp04Page />} />
          <Route path="/appendix/operational-excellence/ops8/bp05" element={<AppendixOps8Bp05Page />} />
          <Route path="/appendix/operational-excellence/ops9/bp01" element={<AppendixOps9Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops9/bp02" element={<AppendixOps9Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops9/bp03" element={<AppendixOps9Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops10/bp01" element={<AppendixOps10Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops10/bp02" element={<AppendixOps10Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops10/bp03" element={<AppendixOps10Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops10/bp04" element={<AppendixOps10Bp04Page />} />
          <Route path="/appendix/operational-excellence/ops10/bp05" element={<AppendixOps10Bp05Page />} />
          <Route path="/appendix/operational-excellence/ops10/bp06" element={<AppendixOps10Bp06Page />} />
          <Route path="/appendix/operational-excellence/ops10/bp07" element={<AppendixOps10Bp07Page />} />
          <Route path="/appendix/operational-excellence/ops11/bp01" element={<AppendixOps11Bp01Page />} />
          <Route path="/appendix/operational-excellence/ops11/bp02" element={<AppendixOps11Bp02Page />} />
          <Route path="/appendix/operational-excellence/ops11/bp03" element={<AppendixOps11Bp03Page />} />
          <Route path="/appendix/operational-excellence/ops11/bp04" element={<AppendixOps11Bp04Page />} />
          <Route path="/appendix/operational-excellence/ops11/bp05" element={<AppendixOps11Bp05Page />} />
          <Route path="/appendix/operational-excellence/ops11/bp06" element={<AppendixOps11Bp06Page />} />
          <Route path="/appendix/operational-excellence/ops11/bp07" element={<AppendixOps11Bp07Page />} />
          <Route path="/appendix/operational-excellence/ops11/bp08" element={<AppendixOps11Bp08Page />} />
          <Route path="/appendix/operational-excellence/ops11/bp09" element={<AppendixOps11Bp09Page />} />

          {/* Appendix - Security */}
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
          <Route path="/appendix/security/sec10" element={<AppendixSec10Page />} />
          <Route path="/appendix/security/sec11" element={<AppendixSec11Page />} />
          <Route path="/appendix/security/sec1/bp01" element={<AppendixSec1Bp01Page />} />
          <Route path="/appendix/security/sec1/bp02" element={<AppendixSec1Bp02Page />} />
          <Route path="/appendix/security/sec1/bp03" element={<AppendixSec1Bp03Page />} />
          <Route path="/appendix/security/sec1/bp04" element={<AppendixSec1Bp04Page />} />
          <Route path="/appendix/security/sec1/bp05" element={<AppendixSec1Bp05Page />} />
          <Route path="/appendix/security/sec1/bp06" element={<AppendixSec1Bp06Page />} />
          <Route path="/appendix/security/sec1/bp07" element={<AppendixSec1Bp07Page />} />
          <Route path="/appendix/security/sec1/bp08" element={<AppendixSec1Bp08Page />} />
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
          <Route path="/appendix/security/sec3/bp06" element={<AppendixSec3Bp06Page />} />
          <Route path="/appendix/security/sec3/bp07" element={<AppendixSec3Bp07Page />} />
          <Route path="/appendix/security/sec3/bp08" element={<AppendixSec3Bp08Page />} />
          <Route path="/appendix/security/sec3/bp09" element={<AppendixSec3Bp09Page />} />
          <Route path="/appendix/security/sec4/bp01" element={<AppendixSec4Bp01Page />} />
          <Route path="/appendix/security/sec4/bp02" element={<AppendixSec4Bp02Page />} />
          <Route path="/appendix/security/sec4/bp03" element={<AppendixSec4Bp03Page />} />
          <Route path="/appendix/security/sec4/bp04" element={<AppendixSec4Bp04Page />} />
          <Route path="/appendix/security/sec5/bp01" element={<AppendixSec5Bp01Page />} />
          <Route path="/appendix/security/sec5/bp02" element={<AppendixSec5Bp02Page />} />
          <Route path="/appendix/security/sec5/bp03" element={<AppendixSec5Bp03Page />} />
          <Route path="/appendix/security/sec5/bp04" element={<AppendixSec5Bp04Page />} />
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
          <Route path="/appendix/security/sec9/bp01" element={<AppendixSec9Bp01Page />} />
          <Route path="/appendix/security/sec9/bp02" element={<AppendixSec9Bp02Page />} />
          <Route path="/appendix/security/sec9/bp03" element={<AppendixSec9Bp03Page />} />
          <Route path="/appendix/security/sec10/bp01" element={<AppendixSec10Bp01Page />} />
          <Route path="/appendix/security/sec10/bp02" element={<AppendixSec10Bp02Page />} />
          <Route path="/appendix/security/sec10/bp03" element={<AppendixSec10Bp03Page />} />
          <Route path="/appendix/security/sec10/bp04" element={<AppendixSec10Bp04Page />} />
          <Route path="/appendix/security/sec10/bp05" element={<AppendixSec10Bp05Page />} />
          <Route path="/appendix/security/sec10/bp06" element={<AppendixSec10Bp06Page />} />
          <Route path="/appendix/security/sec10/bp07" element={<AppendixSec10Bp07Page />} />
          <Route path="/appendix/security/sec10/bp08" element={<AppendixSec10Bp08Page />} />
          <Route path="/appendix/security/sec11/bp01" element={<AppendixSec11Bp01Page />} />
          <Route path="/appendix/security/sec11/bp02" element={<AppendixSec11Bp02Page />} />
          <Route path="/appendix/security/sec11/bp03" element={<AppendixSec11Bp03Page />} />
          <Route path="/appendix/security/sec11/bp04" element={<AppendixSec11Bp04Page />} />
          <Route path="/appendix/security/sec11/bp05" element={<AppendixSec11Bp05Page />} />
          <Route path="/appendix/security/sec11/bp06" element={<AppendixSec11Bp06Page />} />
          <Route path="/appendix/security/sec11/bp07" element={<AppendixSec11Bp07Page />} />
          <Route path="/appendix/security/sec11/bp08" element={<AppendixSec11Bp08Page />} />

          {/* Appendix - Reliability */}
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
          <Route path="/appendix/reliability/rel10" element={<AppendixRel10Page />} />
          <Route path="/appendix/reliability/rel11" element={<AppendixRel11Page />} />
          <Route path="/appendix/reliability/rel12" element={<AppendixRel12Page />} />
          <Route path="/appendix/reliability/rel13" element={<AppendixRel13Page />} />
          <Route path="/appendix/reliability/rel1/bp01" element={<AppendixRel1Bp01Page />} />
          <Route path="/appendix/reliability/rel1/bp02" element={<AppendixRel1Bp02Page />} />
          <Route path="/appendix/reliability/rel1/bp03" element={<AppendixRel1Bp03Page />} />
          <Route path="/appendix/reliability/rel1/bp04" element={<AppendixRel1Bp04Page />} />
          <Route path="/appendix/reliability/rel1/bp05" element={<AppendixRel1Bp05Page />} />
          <Route path="/appendix/reliability/rel1/bp06" element={<AppendixRel1Bp06Page />} />
          <Route path="/appendix/reliability/rel2/bp01" element={<AppendixRel2Bp01Page />} />
          <Route path="/appendix/reliability/rel2/bp02" element={<AppendixRel2Bp02Page />} />
          <Route path="/appendix/reliability/rel2/bp03" element={<AppendixRel2Bp03Page />} />
          <Route path="/appendix/reliability/rel2/bp04" element={<AppendixRel2Bp04Page />} />
          <Route path="/appendix/reliability/rel2/bp05" element={<AppendixRel2Bp05Page />} />
          <Route path="/appendix/reliability/rel3/bp01" element={<AppendixRel3Bp01Page />} />
          <Route path="/appendix/reliability/rel3/bp02" element={<AppendixRel3Bp02Page />} />
          <Route path="/appendix/reliability/rel3/bp03" element={<AppendixRel3Bp03Page />} />
          <Route path="/appendix/reliability/rel4/bp01" element={<AppendixRel4Bp01Page />} />
          <Route path="/appendix/reliability/rel4/bp02" element={<AppendixRel4Bp02Page />} />
          <Route path="/appendix/reliability/rel4/bp03" element={<AppendixRel4Bp03Page />} />
          <Route path="/appendix/reliability/rel4/bp04" element={<AppendixRel4Bp04Page />} />
          <Route path="/appendix/reliability/rel5/bp01" element={<AppendixRel5Bp01Page />} />
          <Route path="/appendix/reliability/rel5/bp02" element={<AppendixRel5Bp02Page />} />
          <Route path="/appendix/reliability/rel5/bp03" element={<AppendixRel5Bp03Page />} />
          <Route path="/appendix/reliability/rel5/bp04" element={<AppendixRel5Bp04Page />} />
          <Route path="/appendix/reliability/rel5/bp05" element={<AppendixRel5Bp05Page />} />
          <Route path="/appendix/reliability/rel5/bp06" element={<AppendixRel5Bp06Page />} />
          <Route path="/appendix/reliability/rel5/bp07" element={<AppendixRel5Bp07Page />} />
          <Route path="/appendix/reliability/rel6/bp01" element={<AppendixRel6Bp01Page />} />
          <Route path="/appendix/reliability/rel6/bp02" element={<AppendixRel6Bp02Page />} />
          <Route path="/appendix/reliability/rel6/bp03" element={<AppendixRel6Bp03Page />} />
          <Route path="/appendix/reliability/rel6/bp04" element={<AppendixRel6Bp04Page />} />
          <Route path="/appendix/reliability/rel6/bp05" element={<AppendixRel6Bp05Page />} />
          <Route path="/appendix/reliability/rel6/bp06" element={<AppendixRel6Bp06Page />} />
          <Route path="/appendix/reliability/rel6/bp07" element={<AppendixRel6Bp07Page />} />
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
          <Route path="/appendix/reliability/rel10/bp01" element={<AppendixRel10Bp01Page />} />
          <Route path="/appendix/reliability/rel10/bp02" element={<AppendixRel10Bp02Page />} />
          <Route path="/appendix/reliability/rel10/bp03" element={<AppendixRel10Bp03Page />} />
          <Route path="/appendix/reliability/rel11/bp01" element={<AppendixRel11Bp01Page />} />
          <Route path="/appendix/reliability/rel11/bp02" element={<AppendixRel11Bp02Page />} />
          <Route path="/appendix/reliability/rel11/bp03" element={<AppendixRel11Bp03Page />} />
          <Route path="/appendix/reliability/rel11/bp04" element={<AppendixRel11Bp04Page />} />
          <Route path="/appendix/reliability/rel11/bp05" element={<AppendixRel11Bp05Page />} />
          <Route path="/appendix/reliability/rel11/bp06" element={<AppendixRel11Bp06Page />} />
          <Route path="/appendix/reliability/rel11/bp07" element={<AppendixRel11Bp07Page />} />
          <Route path="/appendix/reliability/rel12/bp01" element={<AppendixRel12Bp01Page />} />
          <Route path="/appendix/reliability/rel12/bp02" element={<AppendixRel12Bp02Page />} />
          <Route path="/appendix/reliability/rel12/bp03" element={<AppendixRel12Bp03Page />} />
          <Route path="/appendix/reliability/rel12/bp04" element={<AppendixRel12Bp04Page />} />
          <Route path="/appendix/reliability/rel12/bp05" element={<AppendixRel12Bp05Page />} />
          <Route path="/appendix/reliability/rel13/bp01" element={<AppendixRel13Bp01Page />} />
          <Route path="/appendix/reliability/rel13/bp02" element={<AppendixRel13Bp02Page />} />
          <Route path="/appendix/reliability/rel13/bp03" element={<AppendixRel13Bp03Page />} />
          <Route path="/appendix/reliability/rel13/bp04" element={<AppendixRel13Bp04Page />} />
          <Route path="/appendix/reliability/rel13/bp05" element={<AppendixRel13Bp05Page />} />

          {/* Appendix - Performance Efficiency */}
          <Route path="/appendix/performance-efficiency" element={<PlaceholderPage title="부록: 성능 효율성 질문" />} />
          <Route path="/appendix/performance-efficiency/perf1" element={<AppendixPerf1Page />} />
          <Route path="/appendix/performance-efficiency/perf2" element={<AppendixPerf2Page />} />
          <Route path="/appendix/performance-efficiency/perf3" element={<AppendixPerf3Page />} />
          <Route path="/appendix/performance-efficiency/perf4" element={<AppendixPerf4Page />} />
          <Route path="/appendix/performance-efficiency/perf5" element={<AppendixPerf5Page />} />
          <Route path="/appendix/performance-efficiency/perf1/bp01" element={<AppendixPerf1Bp01Page />} />
          <Route path="/appendix/performance-efficiency/perf1/bp02" element={<AppendixPerf1Bp02Page />} />
          <Route path="/appendix/performance-efficiency/perf1/bp03" element={<AppendixPerf1Bp03Page />} />
          <Route path="/appendix/performance-efficiency/perf1/bp04" element={<AppendixPerf1Bp04Page />} />
          <Route path="/appendix/performance-efficiency/perf1/bp05" element={<AppendixPerf1Bp05Page />} />
          <Route path="/appendix/performance-efficiency/perf1/bp06" element={<AppendixPerf1Bp06Page />} />
          <Route path="/appendix/performance-efficiency/perf1/bp07" element={<AppendixPerf1Bp07Page />} />
          <Route path="/appendix/performance-efficiency/perf2/bp01" element={<AppendixPerf2Bp01Page />} />
          <Route path="/appendix/performance-efficiency/perf2/bp02" element={<AppendixPerf2Bp02Page />} />
          <Route path="/appendix/performance-efficiency/perf2/bp03" element={<AppendixPerf2Bp03Page />} />
          <Route path="/appendix/performance-efficiency/perf2/bp04" element={<AppendixPerf2Bp04Page />} />
          <Route path="/appendix/performance-efficiency/perf2/bp05" element={<AppendixPerf2Bp05Page />} />
          <Route path="/appendix/performance-efficiency/perf2/bp06" element={<AppendixPerf2Bp06Page />} />
          <Route path="/appendix/performance-efficiency/perf3/bp01" element={<AppendixPerf3Bp01Page />} />
          <Route path="/appendix/performance-efficiency/perf3/bp02" element={<AppendixPerf3Bp02Page />} />
          <Route path="/appendix/performance-efficiency/perf3/bp03" element={<AppendixPerf3Bp03Page />} />
          <Route path="/appendix/performance-efficiency/perf3/bp04" element={<AppendixPerf3Bp04Page />} />
          <Route path="/appendix/performance-efficiency/perf3/bp05" element={<AppendixPerf3Bp05Page />} />
          <Route path="/appendix/performance-efficiency/perf4/bp01" element={<AppendixPerf4Bp01Page />} />
          <Route path="/appendix/performance-efficiency/perf4/bp02" element={<AppendixPerf4Bp02Page />} />
          <Route path="/appendix/performance-efficiency/perf4/bp03" element={<AppendixPerf4Bp03Page />} />
          <Route path="/appendix/performance-efficiency/perf4/bp04" element={<AppendixPerf4Bp04Page />} />
          <Route path="/appendix/performance-efficiency/perf4/bp05" element={<AppendixPerf4Bp05Page />} />
          <Route path="/appendix/performance-efficiency/perf4/bp06" element={<AppendixPerf4Bp06Page />} />
          <Route path="/appendix/performance-efficiency/perf4/bp07" element={<AppendixPerf4Bp07Page />} />
          <Route path="/appendix/performance-efficiency/perf5/bp01" element={<AppendixPerf5Bp01Page />} />
          <Route path="/appendix/performance-efficiency/perf5/bp02" element={<AppendixPerf5Bp02Page />} />
          <Route path="/appendix/performance-efficiency/perf5/bp03" element={<AppendixPerf5Bp03Page />} />
          <Route path="/appendix/performance-efficiency/perf5/bp04" element={<AppendixPerf5Bp04Page />} />
          <Route path="/appendix/performance-efficiency/perf5/bp05" element={<AppendixPerf5Bp05Page />} />
          <Route path="/appendix/performance-efficiency/perf5/bp06" element={<AppendixPerf5Bp06Page />} />
          <Route path="/appendix/performance-efficiency/perf5/bp07" element={<AppendixPerf5Bp07Page />} />

          {/* Appendix - Cost Optimization */}
          <Route path="/appendix/cost-optimization" element={<PlaceholderPage title="부록: 비용 최적화 질문" />} />
          <Route path="/appendix/cost-optimization/cost1" element={<AppendixCost1Page />} />
          <Route path="/appendix/cost-optimization/cost2" element={<AppendixCost2Page />} />
          <Route path="/appendix/cost-optimization/cost3" element={<AppendixCost3Page />} />
          <Route path="/appendix/cost-optimization/cost4" element={<AppendixCost4Page />} />
          <Route path="/appendix/cost-optimization/cost5" element={<AppendixCost5Page />} />
          <Route path="/appendix/cost-optimization/cost6" element={<AppendixCost6Page />} />
          <Route path="/appendix/cost-optimization/cost7" element={<AppendixCost7Page />} />
          <Route path="/appendix/cost-optimization/cost8" element={<AppendixCost8Page />} />
          <Route path="/appendix/cost-optimization/cost9" element={<AppendixCost9Page />} />
          <Route path="/appendix/cost-optimization/cost10" element={<AppendixCost10Page />} />
          <Route path="/appendix/cost-optimization/cost11" element={<AppendixCost11Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp01" element={<AppendixCost1Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp02" element={<AppendixCost1Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp03" element={<AppendixCost1Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp04" element={<AppendixCost1Bp04Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp05" element={<AppendixCost1Bp05Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp06" element={<AppendixCost1Bp06Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp07" element={<AppendixCost1Bp07Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp08" element={<AppendixCost1Bp08Page />} />
          <Route path="/appendix/cost-optimization/cost1/bp09" element={<AppendixCost1Bp09Page />} />
          <Route path="/appendix/cost-optimization/cost2/bp01" element={<AppendixCost2Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost2/bp02" element={<AppendixCost2Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost2/bp03" element={<AppendixCost2Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost2/bp04" element={<AppendixCost2Bp04Page />} />
          <Route path="/appendix/cost-optimization/cost2/bp05" element={<AppendixCost2Bp05Page />} />
          <Route path="/appendix/cost-optimization/cost2/bp06" element={<AppendixCost2Bp06Page />} />
          <Route path="/appendix/cost-optimization/cost3/bp01" element={<AppendixCost3Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost3/bp02" element={<AppendixCost3Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost3/bp03" element={<AppendixCost3Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost3/bp04" element={<AppendixCost3Bp04Page />} />
          <Route path="/appendix/cost-optimization/cost3/bp05" element={<AppendixCost3Bp05Page />} />
          <Route path="/appendix/cost-optimization/cost3/bp06" element={<AppendixCost3Bp06Page />} />
          <Route path="/appendix/cost-optimization/cost4/bp01" element={<AppendixCost4Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost4/bp02" element={<AppendixCost4Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost4/bp03" element={<AppendixCost4Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost4/bp04" element={<AppendixCost4Bp04Page />} />
          <Route path="/appendix/cost-optimization/cost4/bp05" element={<AppendixCost4Bp05Page />} />
          <Route path="/appendix/cost-optimization/cost5/bp01" element={<AppendixCost5Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost5/bp02" element={<AppendixCost5Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost5/bp03" element={<AppendixCost5Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost5/bp04" element={<AppendixCost5Bp04Page />} />
          <Route path="/appendix/cost-optimization/cost5/bp05" element={<AppendixCost5Bp05Page />} />
          <Route path="/appendix/cost-optimization/cost5/bp06" element={<AppendixCost5Bp06Page />} />
          <Route path="/appendix/cost-optimization/cost6/bp01" element={<AppendixCost6Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost6/bp02" element={<AppendixCost6Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost6/bp03" element={<AppendixCost6Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost6/bp04" element={<AppendixCost6Bp04Page />} />
          <Route path="/appendix/cost-optimization/cost7/bp01" element={<AppendixCost7Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost7/bp02" element={<AppendixCost7Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost7/bp03" element={<AppendixCost7Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost7/bp04" element={<AppendixCost7Bp04Page />} />
          <Route path="/appendix/cost-optimization/cost7/bp05" element={<AppendixCost7Bp05Page />} />
          <Route path="/appendix/cost-optimization/cost8/bp01" element={<AppendixCost8Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost8/bp02" element={<AppendixCost8Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost8/bp03" element={<AppendixCost8Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost9/bp01" element={<AppendixCost9Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost9/bp02" element={<AppendixCost9Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost9/bp03" element={<AppendixCost9Bp03Page />} />
          <Route path="/appendix/cost-optimization/cost10/bp01" element={<AppendixCost10Bp01Page />} />
          <Route path="/appendix/cost-optimization/cost10/bp02" element={<AppendixCost10Bp02Page />} />
          <Route path="/appendix/cost-optimization/cost11/bp01" element={<AppendixCost11Bp01Page />} />

          {/* Appendix - Sustainability */}
          <Route path="/appendix/sustainability" element={<PlaceholderPage title="부록: 지속 가능성 질문" />} />
          <Route path="/appendix/sustainability/sus1" element={<AppendixSus1Page />} />
          <Route path="/appendix/sustainability/sus2" element={<AppendixSus2Page />} />
          <Route path="/appendix/sustainability/sus3" element={<AppendixSus3Page />} />
          <Route path="/appendix/sustainability/sus4" element={<AppendixSus4Page />} />
          <Route path="/appendix/sustainability/sus5" element={<AppendixSus5Page />} />
          <Route path="/appendix/sustainability/sus6" element={<AppendixSus6Page />} />
          <Route path="/appendix/sustainability/sus1/bp01" element={<AppendixSus1Bp01Page />} />
          <Route path="/appendix/sustainability/sus2/bp01" element={<AppendixSus2Bp01Page />} />
          <Route path="/appendix/sustainability/sus2/bp02" element={<AppendixSus2Bp02Page />} />
          <Route path="/appendix/sustainability/sus2/bp03" element={<AppendixSus2Bp03Page />} />
          <Route path="/appendix/sustainability/sus2/bp04" element={<AppendixSus2Bp04Page />} />
          <Route path="/appendix/sustainability/sus2/bp05" element={<AppendixSus2Bp05Page />} />
          <Route path="/appendix/sustainability/sus2/bp06" element={<AppendixSus2Bp06Page />} />
          <Route path="/appendix/sustainability/sus3/bp01" element={<AppendixSus3Bp01Page />} />
          <Route path="/appendix/sustainability/sus3/bp02" element={<AppendixSus3Bp02Page />} />
          <Route path="/appendix/sustainability/sus3/bp03" element={<AppendixSus3Bp03Page />} />
          <Route path="/appendix/sustainability/sus3/bp04" element={<AppendixSus3Bp04Page />} />
          <Route path="/appendix/sustainability/sus3/bp05" element={<AppendixSus3Bp05Page />} />
          <Route path="/appendix/sustainability/sus4/bp01" element={<AppendixSus4Bp01Page />} />
          <Route path="/appendix/sustainability/sus4/bp02" element={<AppendixSus4Bp02Page />} />
          <Route path="/appendix/sustainability/sus4/bp03" element={<AppendixSus4Bp03Page />} />
          <Route path="/appendix/sustainability/sus4/bp04" element={<AppendixSus4Bp04Page />} />
          <Route path="/appendix/sustainability/sus4/bp05" element={<AppendixSus4Bp05Page />} />
          <Route path="/appendix/sustainability/sus4/bp06" element={<AppendixSus4Bp06Page />} />
          <Route path="/appendix/sustainability/sus4/bp07" element={<AppendixSus4Bp07Page />} />
          <Route path="/appendix/sustainability/sus4/bp08" element={<AppendixSus4Bp08Page />} />
          <Route path="/appendix/sustainability/sus5/bp01" element={<AppendixSus5Bp01Page />} />
          <Route path="/appendix/sustainability/sus5/bp02" element={<AppendixSus5Bp02Page />} />
          <Route path="/appendix/sustainability/sus5/bp03" element={<AppendixSus5Bp03Page />} />
          <Route path="/appendix/sustainability/sus5/bp04" element={<AppendixSus5Bp04Page />} />
          <Route path="/appendix/sustainability/sus6/bp01" element={<AppendixSus6Bp01Page />} />
          <Route path="/appendix/sustainability/sus6/bp02" element={<AppendixSus6Bp02Page />} />
          <Route path="/appendix/sustainability/sus6/bp03" element={<AppendixSus6Bp03Page />} />
          <Route path="/appendix/sustainability/sus6/bp04" element={<AppendixSus6Bp04Page />} />
          <Route path="/appendix/sustainability/sus6/bp05" element={<AppendixSus6Bp05Page />} />

          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/aws-glossary" element={<PlaceholderPage title="AWS 용어집" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
