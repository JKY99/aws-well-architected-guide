import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost5Page() {
  return (
    <article className="doc-content">
      <h1>COST 5 — 비용 및 사용량을 어떻게 모니터링합니까?</h1>

      <p>
        비용과 사용량을 지속적으로 모니터링하여 예산 초과를 방지하고
        비용 절감 기회를 발굴합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost5/bp01">COST05-BP01: 지출 및 사용량 보고 구성</Link></strong><br />
          <span>AWS Cost Explorer를 사용하여 비용 트렌드를 시각화하고 이상 지출을 식별합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost5/bp02">COST05-BP02: 비용 및 사용량 알림 수신</Link></strong><br />
          <span>AWS Budgets을 설정하여 예산 초과 또는 예측 초과 시 이메일/SNS 알림을 받습니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost5/bp03">COST05-BP03: 비용 이상 탐지 평가</Link></strong><br />
          <span>AWS Cost Anomaly Detection을 사용하여 비정상적인 지출 패턴을 자동으로 탐지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost5/bp04">COST05-BP04: 팀에 비용 데이터 리포트</Link></strong><br />
          <span>각 팀의 비용 데이터를 정기적으로 공유하여 비용 인식을 높이고 책임감을 부여합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost5/bp05">COST05-BP05: 사용되지 않는 리소스 분석</Link></strong><br />
          <span>AWS Trusted Advisor와 Cost Explorer를 사용하여 유휴 리소스와 과도하게 프로비저닝된 리소스를 식별합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost5/bp06">COST05-BP06: 시간 경과에 따른 다양한 사용량에 대한 비용 분석 수행</Link></strong><br />
          <span>다양한 사용량 시나리오에 따른 비용을 모델링하여 최적의 서비스 구성을 선택합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
