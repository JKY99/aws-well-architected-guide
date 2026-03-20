import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function CostExpenditurePage() {
  return (
    <article className="doc-content">
      <h1>비용 최적화 — 지출 및 사용량 인식</h1>

      <p>
        조직의 비용과 비용 동인을 이해하는 것은 효과적인 비용·사용량 관리와 절감 기회 발굴에 필수적입니다.
        여러 팀이 운영하는 다수의 워크로드에 리소스 비용을 귀속시키는 능력은
        효율적인 사용 행동을 유도하고 낭비를 줄입니다.
      </p>

      <h2>핵심 접근 방식</h2>
      <p>데이터 수집 → 분석 → 보고의 다각적 접근을 사용합니다.</p>

      <h2>거버넌스</h2>
      <p>비용 제어 정책 및 구조를 수립합니다.</p>

      <h2>비용 및 사용량 모니터링</h2>
      <p>실시간 가시성을 확보합니다.</p>
      <ul>
        <li>AWS Cost Explorer로 비용 패턴 시각화 및 분석</li>
        <li>AWS Cost and Usage Report로 상세 사용량 데이터 수집</li>
        <li>AWS Budgets으로 예산 알림 설정</li>
        <li>AWS Cost Anomaly Detection으로 비정상적인 지출 감지</li>
      </ul>

      <h2>리소스 폐기</h2>
      <p>미사용 리소스를 식별하고 제거합니다.</p>
      <ul>
        <li>유휴 인스턴스, 미연결 EBS 볼륨, 오래된 스냅샷 정리</li>
        <li>AWS Trusted Advisor로 사용되지 않는 리소스 식별</li>
      </ul>

      <PageNav />
    </article>
  );
}
