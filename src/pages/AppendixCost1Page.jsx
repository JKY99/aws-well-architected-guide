import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Page() {
  return (
    <article className="doc-content">
      <h1>COST 1 — 클라우드 재무 관리를 어떻게 구현합니까?</h1>

      <p>
        클라우드 재무 관리(CFM)는 클라우드 지출을 이해하고 비용을 최적화하며
        비즈니스 가치를 극대화하는 조직 역량입니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp01">COST01-BP01: 클라우드 재무 관리 이해 증진 및 시행</Link></strong><br />
          <span>CFM 원칙과 모범 사례를 조직 전체에 교육하고 재무 책임 문화를 구축합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp02">COST01-BP02: 비용 최적화에 대한 경영진 후원 확보</Link></strong><br />
          <span>임원 레벨의 후원자를 확보하여 비용 최적화 이니셔티브에 대한 조직 전체의 지원을 얻습니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp03">COST01-BP03: 클라우드 재무 팀 구성</Link></strong><br />
          <span>재무, 기술, 비즈니스 이해관계자를 포함하는 클라우드 재무 관리 팀(FinOps팀)을 구성합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp04">COST01-BP04: 비용 인식 프로세스 구현</Link></strong><br />
          <span>비용 데이터를 관련 팀에게 정기적으로 제공하여 비용에 대한 인식을 높입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp05">COST01-BP05: 비용 보고 및 쇼백(Chargeback) 구현</Link></strong><br />
          <span>비용을 팀, 프로젝트, 워크로드별로 할당하여 책임감을 부여합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp06">COST01-BP06: 비용 최적화 역량 구축</Link></strong><br />
          <span>개발팀이 비용을 고려한 설계 결정을 내릴 수 있도록 역량을 강화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost1/bp07">COST01-BP07: 새로운 서비스 릴리스 최신 정보 유지</Link></strong><br />
          <span>AWS의 새로운 서비스 및 기능을 지속적으로 모니터링하여 비용 절감 기회를 발굴합니다.</span>
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
