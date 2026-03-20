import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost7Page() {
  return (
    <article className="doc-content">
      <h1>COST 7 — 시간 경과에 따라 비용을 어떻게 최적화합니까?</h1>

      <p>
        AWS는 지속적으로 새로운 서비스와 기능을 출시하므로
        기존 아키텍처 결정이 여전히 비용 효율적인지 정기적으로 검토합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost7/bp01">COST07-BP01: 정기적인 워크로드 검토 프로세스 개발</Link></strong><br />
          <span>분기별 또는 연간 Well-Architected Review를 통해 비용 최적화 기회를 체계적으로 발굴합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost7/bp02">COST07-BP02: 운영 비용 대비 효과 측정</Link></strong><br />
          <span>클라우드 운영 비용이 창출하는 비즈니스 가치를 측정하여 투자 우선순위를 결정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost7/bp03">COST07-BP03: 클라우드 운영 검토 및 자동화</Link></strong><br />
          <span>반복적인 운영 작업을 자동화하여 인력 비용을 절감하고 효율성을 높입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost7/bp04">COST07-BP04: 새로운 서비스 평가</Link></strong><br />
          <span>새로 출시된 AWS 서비스나 기능이 비용을 절감하거나 성능을 향상시킬 수 있는지 정기적으로 평가합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost7/bp05">COST07-BP05: 관리 계정 수준에서 요금 모델 분석 수행</Link></strong><br />
          <span>AWS Organizations 관리 계정에서 전체 조직의 사용량을 분석하여 Savings Plans를 최적화합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
