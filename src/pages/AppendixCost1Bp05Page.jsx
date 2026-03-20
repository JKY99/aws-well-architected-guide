import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp05Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP05 — 비용 최적화 보고 및 알림</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>비용 최적화 결과를 정기적으로 보고하고, 비용 이상 징후나 예산 초과 시 알림을 제공합니다.</p>
      <h2>원하는 결과</h2>
      <p>조직 전체가 비용 최적화 활동의 진행 상황과 결과를 인식하고 필요시 즉각적인 조치를 취합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 보고가 정기적으로 이루어지지 않습니다.</li>
        <li>비용 이상 징후가 감지되지 않거나 늦게 발견됩니다.</li>
        <li>비용 최적화 성과가 측정되지 않습니다.</li>
        <li>보고서가 관련 이해관계자에게 배포되지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비용 이상 징후를 조기에 발견하여 신속하게 대응합니다.</li>
        <li>비용 최적화 성과를 측정하고 개선 기회를 식별합니다.</li>
        <li>이해관계자들이 클라우드 지출 현황을 파악합니다.</li>
        <li>비용 문화 정착에 기여합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>정기 보고서 작성: 주간, 월간 비용 보고서를 작성하여 관련 팀에 배포합니다.</li>
        <li>이상 탐지 설정: AWS Cost Anomaly Detection을 통해 비정상적인 지출을 자동으로 감지합니다.</li>
        <li>대시보드 구성: 실시간 비용 현황을 보여주는 대시보드를 만듭니다.</li>
        <li>맞춤형 알림: 팀별, 서비스별 예산 임계값에 따른 알림을 설정합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Anomaly Detection</li>
        <li>AWS Budgets</li>
        <li>AWS Cost Explorer</li>
        <li>Amazon CloudWatch</li>
        <li>Amazon SNS</li>
      </ul>
      <PageNav />
    </article>
  );
}
