import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Page() {
  return (
    <article className="doc-content">
      <h1>COST 1 — 클라우드 재무 관리를 어떻게 구현합니까?</h1>

      <p>
        클라우드 재무 관리(CFM)를 통해 비용 투명성, 제어, 계획, 최적화를 확립하고 운영하기 위해
        기존 재무 프로세스를 발전시킵니다. 재무, 제품, 기술, 비즈니스 조직이 협력하여 AWS 사용량을
        늘리고 규모를 확장하면서 비용을 관리하고 최적화하며 계획합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp01">COST01-BP01: 비용 최적화 소유권 확립</Link></strong><br />
          <span>비용 인식을 확립하고 유지하는 팀(Cloud Business Office, CCoE 또는 FinOps 팀)을 구성합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp02">COST01-BP02: 재무와 기술 간 파트너십 구축</Link></strong><br />
          <span>재무와 기술 팀 간의 파트너십을 구축하여 클라우드 비용을 효과적으로 관리합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp03">COST01-BP03: 클라우드 예산 및 예측 수립</Link></strong><br />
          <span>동적 클라우드 사용에 맞게 예산 및 예측 프로세스를 조정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp04">COST01-BP04: 조직 프로세스에 비용 인식 구현</Link></strong><br />
          <span>비용 인식을 기존 조직 프로세스와 문화에 통합합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp05">COST01-BP05: 비용 최적화 보고 및 알림</Link></strong><br />
          <span>비용 최적화 결과를 정기적으로 보고하고, 비용 이상 징후나 예산 초과 시 알림을 제공합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp06">COST01-BP06: 비용 사전 모니터링</Link></strong><br />
          <span>비용이 발생하기 전에 잠재적인 문제를 사전에 감지하고 대응합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp07">COST01-BP07: 새로운 서비스 릴리스 최신 정보 유지</Link></strong><br />
          <span>AWS의 새로운 서비스와 기능을 지속적으로 모니터링하여 비용 절감 기회를 발굴합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp08">COST01-BP08: 비용 인식 문화 조성</Link></strong><br />
          <span>조직 전반에 비용 인식 문화를 구축하여 모든 팀원이 비용 효율적 의사결정에 참여합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp09">COST01-BP09: 비용 최적화를 통한 비즈니스 가치 정량화</Link></strong><br />
          <span>비용 최적화 활동이 비즈니스에 제공하는 가치를 측정하고 경영진에게 보고합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
