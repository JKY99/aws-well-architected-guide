import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost5Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST05-BP03 — 비용 이상 탐지 평가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>머신러닝 기반 비용 이상 탐지를 활용하여 예상치 못한 지출 증가를 자동으로 식별하고 근본 원인을 분석합니다.</p>
      <h2>원하는 결과</h2>
      <p>비정상적인 비용 증가를 자동으로 감지하고 신속하게 원인을 파악하여 불필요한 지출을 차단합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수동으로만 이상을 감지하여 탐지에 지연이 발생</li>
        <li>이상 탐지 기능을 설정하지 않아 비용 급증을 놓침</li>
        <li>이상이 감지된 후 근본 원인을 분석하지 않아 재발</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자동화된 이상 감지로 24시간 비용 모니터링 가능</li>
        <li>비용 낭비를 신속히 차단하여 예산 손실 최소화</li>
        <li>ML 기반 탐지로 임계값 없이도 이상 패턴 자동 식별</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Cost Anomaly Detection에서 서비스·연결 계정·비용 범주별 모니터 구성</li>
        <li>이상 임계값(절대값 또는 비율)을 설정하여 알림 노이즈 조정</li>
        <li>알림 수신 후 Cost Explorer 드릴다운으로 원인 분석 워크플로우 수립</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Anomaly Detection</li>
        <li>AWS Cost Explorer</li>
        <li>Amazon SNS</li>
      </ul>
      <PageNav />
    </article>
  );
}
