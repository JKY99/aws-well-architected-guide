import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp06Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP06 — 비용 사전 모니터링</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>비용이 발생하기 전에 잠재적인 문제를 사전에 감지하고 대응합니다. 사후 대응 방식에서 사전 예방 방식으로 전환합니다.</p>
      <h2>원하는 결과</h2>
      <p>비용 관련 문제를 사전에 감지하고 조치하여 예상치 못한 비용 발생을 방지합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 문제를 인식한 후에야 대응합니다.</li>
        <li>비용 모니터링이 월간 청구서 검토에만 의존합니다.</li>
        <li>잠재적인 비용 급증에 대한 경고 메커니즘이 없습니다.</li>
        <li>리소스 낭비를 사후에야 발견합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비용 문제를 조기에 발견하여 영향을 최소화합니다.</li>
        <li>불필요한 지출을 예방할 수 있습니다.</li>
        <li>비용 최적화 기회를 신속하게 포착합니다.</li>
        <li>재무 계획의 정확성이 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>실시간 모니터링 설정: AWS Cost Explorer를 통해 일별, 주별 비용 추이를 모니터링합니다.</li>
        <li>예산 경보 구성: 예산 대비 실제 지출을 추적하고 임계값 초과 시 알림을 받습니다.</li>
        <li>이상 탐지 활성화: AWS Cost Anomaly Detection으로 비정상적인 지출 패턴을 자동 감지합니다.</li>
        <li>리소스 최적화 리뷰: AWS Trusted Advisor와 AWS Compute Optimizer를 통해 정기적으로 최적화 권고사항을 검토합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Anomaly Detection</li>
        <li>AWS Budgets</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Trusted Advisor</li>
        <li>AWS Compute Optimizer</li>
      </ul>
      <PageNav />
    </article>
  );
}
