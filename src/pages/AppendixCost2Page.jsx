import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost2Page() {
  return (
    <article className="doc-content">
      <h1>COST 2 — 거버넌스를 어떻게 구현합니까?</h1>

      <p>
        클라우드에서 비용을 관리하려면 다음 거버넌스 영역을 통해 사용량을 관리해야 합니다.
        조직 요구사항에 기반한 정책을 수립하고, 목표와 타겟을 구현하며, 적절한 계정 구조와
        그룹 및 역할을 구현합니다. 비용 제어를 시행하고 프로젝트 수명 주기를 추적합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost2/bp01">COST02-BP01: 조직 요구사항에 기반한 정책 개발</Link></strong><br />
          <span>리소스 관리 방법을 정의하는 정책을 개발하고 주기적으로 검토합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost2/bp02">COST02-BP02: 목표 및 타겟 구현</Link></strong><br />
          <span>측정 가능한 비용 최적화 목표와 타겟을 설정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost2/bp03">COST02-BP03: 계정 구조 구현</Link></strong><br />
          <span>워크로드와 조직 구조에 맞는 AWS 계정 구조를 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost2/bp04">COST02-BP04: 그룹 및 역할 구현</Link></strong><br />
          <span>비용 데이터에 대한 적절한 접근을 제공하는 그룹과 역할을 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost2/bp05">COST02-BP05: 비용 제어 구현</Link></strong><br />
          <span>비용이 예산을 초과하지 않도록 가드레일과 제어 메커니즘을 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost2/bp06">COST02-BP06: 프로젝트 수명 주기 추적</Link></strong><br />
          <span>프로젝트, 직원, 기술 리소스를 시간에 따라 관리하여 불필요한 리소스를 식별합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
