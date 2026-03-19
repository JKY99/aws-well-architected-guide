import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost4Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST04-BP01 — 사용량 기반 요금제 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>예측이 어렵거나 변동성이 큰 워크로드에는 온디맨드 요금제를 활용하여 불필요한 약정 비용 없이 필요한 만큼만 비용을 지불합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드 특성에 맞는 유연한 요금제로 과도한 약정 비용을 방지합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 워크로드에 온디맨드를 사용하여 절약 기회를 놓칩니다.</li>
        <li>변동성이 높은 워크로드에 약정을 강제합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>유연성을 확보합니다.</li>
        <li>불필요한 약정을 방지합니다.</li>
        <li>워크로드에 최적화된 비용을 실현합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>워크로드 유형별 요금제를 분석합니다.</li>
        <li>안정적/불안정적 워크로드를 분류합니다.</li>
        <li>혼합 요금제 전략을 수립합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 (On-Demand)</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Pricing Calculator</li>
      </ul>
      <PageNav />
    </article>
  );
}
