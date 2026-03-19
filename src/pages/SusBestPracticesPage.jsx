import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SusBestPracticesPage() {
  return (
    <article className="doc-content">
      <h1>지속 가능성 — 모범 사례</h1>

      <p>
        클라우드에서의 지속 가능성을 위한 여섯 가지 모범 사례 영역이 있습니다:
      </p>

      <ul>
        <li><Link to="/pillars/sustainability/region-selection">지역 선택 (Region Selection)</Link></li>
        <li><Link to="/pillars/sustainability/alignment-to-demand">수요에 맞춘 조정 (Alignment to Demand)</Link></li>
        <li><Link to="/pillars/sustainability/software-architecture">소프트웨어 및 아키텍처 (Software and Architecture)</Link></li>
        <li><Link to="/pillars/sustainability/data-management">데이터 관리 (Data Management)</Link></li>
        <li><Link to="/pillars/sustainability/hardware-services">하드웨어 및 서비스 (Hardware and Services)</Link></li>
        <li><Link to="/pillars/sustainability/process-culture">프로세스와 문화 (Process and Culture)</Link></li>
      </ul>

      <p>
        지속 가능성 기둥의 범위는 클라우드에서 실행되는 워크로드의 비즈니스 활동으로 인한 환경적 영향(특히 에너지 소비와 효율성)에 초점을 맞춥니다.
      </p>

      <PageNav />
    </article>
  );
}
