import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function CostCloudFinancialPage() {
  return (
    <article className="doc-content">
      <h1>비용 최적화 — 클라우드 기반 재무 관리</h1>

      <p>
        클라우드 재무 관리(CFM)는 비용 투명성, 제어, 계획, 최적화를 통해 AWS 환경을 관리하기 위해
        기존 재무 프로세스를 발전시키는 것입니다.
      </p>

      <h2>CFM 4가지 기둥</h2>

      <h3>See (가시성)</h3>
      <p>비용의 출처를 파악하고 팀별 지출 책임을 부여합니다.</p>
      <p>관련 서비스: AWS Cost Explorer, Cost and Usage Report, Cost Categories</p>

      <h3>Save (절약)</h3>
      <p>RI/Savings Plans, Spot 인스턴스, Auto Scaling 등을 활용하여 비용을 최적화합니다.</p>

      <h3>Plan (계획)</h3>
      <p>동적 예측 및 예산 책정 프로세스를 구축합니다.</p>
      <p>관련 서비스: AWS Budgets, Cost Explorer</p>

      <h3>Run (실행)</h3>
      <p>가드레일 및 거버넌스를 설정하여 지출이 예산 내에 유지되도록 합니다.</p>
      <p>관련 서비스: AWS Cost Anomaly Detection, Service Control Policies</p>

      <h2>주요 모범 사례</h2>
      <ul>
        <li><strong>COST01-BP01:</strong> 비용 최적화 소유권 수립</li>
        <li><strong>COST01-BP02:</strong> 재무-기술 파트너십 구축</li>
        <li><strong>COST01-BP03:</strong> 예산 및 예측 수립</li>
        <li><strong>COST01-BP04:</strong> 비용 인식 문화 조성</li>
        <li><strong>COST01-BP05:</strong> 비용 최적화 목표 및 KPI 정의</li>
        <li><strong>COST01-BP06:</strong> 비용 최적화 게이트웨이 구현</li>
        <li><strong>COST01-BP07:</strong> 비용 최적화 팀 구성</li>
        <li><strong>COST01-BP08:</strong> 비용 효율성 챔피언 프로그램 개발</li>
        <li><strong>COST01-BP09:</strong> 비용 최적화 교육 및 게임화 구현</li>
      </ul>

      <PageNav />
    </article>
  );
}
