import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function PerfBestPracticesPage() {
  return (
    <article className="doc-content">
      <h1>성능 효율성 — 모범 사례</h1>

      <p>
        클라우드에서의 성능 효율성을 위한 다섯 가지 모범 사례 영역이 있습니다:
      </p>

      <ul>
        <li><Link to="/pillars/performance-efficiency/architecture-selection">아키텍처 선택 (Architecture Selection)</Link></li>
        <li><Link to="/pillars/performance-efficiency/compute-hardware">컴퓨팅 및 하드웨어 (Compute and Hardware)</Link></li>
        <li><Link to="/pillars/performance-efficiency/data-management">데이터 관리 (Data Management)</Link></li>
        <li><Link to="/pillars/performance-efficiency/networking">네트워킹 및 콘텐츠 전달 (Networking and Content Delivery)</Link></li>
        <li><Link to="/pillars/performance-efficiency/process-culture">프로세스와 문화 (Process and Culture)</Link></li>
      </ul>

      <p>
        특정 워크로드에 대한 최적의 솔루션은 다양하며, 솔루션은 종종 여러 접근 방식을 결합합니다.
        잘 설계된 시스템은 여러 솔루션을 사용하고 다양한 기능을 활성화하여 성능을 향상시킵니다.
      </p>

      <PageNav />
    </article>
  );
}
