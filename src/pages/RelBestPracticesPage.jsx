import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function RelBestPracticesPage() {
  return (
    <article className="doc-content">
      <h1>안정성 — 모범 사례</h1>

      <p>
        클라우드에서의 안정성을 위한 네 가지 모범 사례 영역이 있습니다:
      </p>

      <ul>
        <li><Link to="/pillars/reliability/foundations">기초 (Foundations)</Link></li>
        <li><Link to="/pillars/reliability/workload-architecture">워크로드 아키텍처 (Workload Architecture)</Link></li>
        <li><Link to="/pillars/reliability/change-management">변화 관리 (Change Management)</Link></li>
        <li><Link to="/pillars/reliability/failure-management">실패 관리 (Failure Management)</Link></li>
      </ul>

      <p>
        안정적인 워크로드를 구현하려면 여러 영역에서 강력한 기초가 필요합니다.
        예를 들어, 워크로드가 증가하는 수요를 처리할 수 있도록 잘 계획된 네트워크 토폴로지가 있어야 합니다.
      </p>

      <PageNav />
    </article>
  );
}
