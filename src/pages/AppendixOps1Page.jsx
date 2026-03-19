import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps1Page() {
  return (
    <article className="doc-content">
      <h1>OPS 1 — 우선순위를 어떻게 결정합니까?</h1>

      <p>
        팀은 비즈니스 목표와 고객 니즈에 기반하여 운영 우선순위를 결정해야 합니다.
        공유된 목표와 이해를 바탕으로 팀 간 협업과 의사결정이 이루어져야 합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops1/bp01">OPS01-BP01: 비즈니스 가치와 고객 니즈 평가</Link></strong><br />
          <span>외부 고객과 내부 이해관계자의 요구를 파악하고, 비즈니스 성과에 미치는 영향을 기준으로 운영 활동의 우선순위를 정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops1/bp02">OPS01-BP02: 내부 고객과 이해관계자의 요구 평가</Link></strong><br />
          <span>운영팀의 고객(개발팀, 비즈니스팀 등)과 그들의 운영 요구사항을 파악합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops1/bp03">OPS01-BP03: 규정 요건 수립</Link></strong><br />
          <span>보안, 컴플라이언스, 기술 요건을 파악하고 운영 우선순위에 반영합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops1/bp04">OPS01-BP04: 위협 시나리오 평가</Link></strong><br />
          <span>잠재적인 위협과 그 영향을 분석하여 위험 기반의 우선순위를 결정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops1/bp05">OPS01-BP05: 트레이드오프 관리</Link></strong><br />
          <span>속도, 비용, 품질 간의 트레이드오프를 인식하고 명시적으로 결정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops1/bp06">OPS01-BP06: 이점과 위험 관리</Link></strong><br />
          <span>실험을 통해 새로운 접근 방식을 검증하고 성공적인 방법을 운영에 통합합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
