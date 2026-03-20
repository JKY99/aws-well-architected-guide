import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function OEBestPracticesPage() {
  return (
    <article className="doc-content">
      <h1>운영 우수성 — 모범 사례</h1>

      <p>
        클라우드에서의 운영 우수성을 위한 네 가지 모범 사례 영역이 있습니다:
      </p>

      <ul>
        <li><Link to="/pillars/operational-excellence/organization">조직 (Organization)</Link></li>
        <li><Link to="/pillars/operational-excellence/prepare">준비 (Prepare)</Link></li>
        <li><Link to="/pillars/operational-excellence/operate">운영 (Operate)</Link></li>
        <li><Link to="/pillars/operational-excellence/evolve">발전 (Evolve)</Link></li>
      </ul>

      <p>
        운영 우수성에는 팀이 비즈니스 목표를 이해하고, 구성원의 역할과 책임을 이해하며,
        모든 구성원이 성공적인 운영을 지원하도록 지원받는 것이 포함됩니다.
        팀은 업무 우선순위를 정하고 리소스를 최대로 활용하기 위해 지속적으로 개선합니다.
      </p>

      <PageNav />
    </article>
  );
}
