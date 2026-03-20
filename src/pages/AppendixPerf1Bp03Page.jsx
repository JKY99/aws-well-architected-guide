import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Bp03Page() {
  return (
    <article className="doc-content">
      <h1>PERF01-BP03 — 아키텍처 결정 시 비용 고려</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>아키텍처 결정 시 성능뿐만 아니라 비용을 중요한 요소로 반영합니다. 성능과 비용 간의 적절한 균형을 찾아 비용 효율적인 고성능 아키텍처를 설계합니다.</p>
      <h2>원하는 결과</h2>
      <p>성능 목표를 달성하면서 비용을 최적화하는 아키텍처를 선택합니다. 과도한 프로비저닝을 피하고 워크로드 특성에 맞는 비용 효율적인 솔루션을 구현합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>성능만 고려하고 비용 영향을 무시한 아키텍처 결정</li>
        <li>실제 성능 요구사항보다 과도하게 프로비저닝</li>
        <li>단기 비용만 고려하고 장기적인 운영 비용 미고려</li>
        <li>다양한 가격 옵션(예약, 스팟 등)을 검토하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최적화된 성능/비용 균형 달성</li>
        <li>과도한 프로비저닝 방지로 비용 절감</li>
        <li>비즈니스 ROI 향상</li>
        <li>지속 가능한 비용 구조로 장기적인 운영 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Pricing Calculator로 각 아키텍처 옵션의 비용 추정 및 비교</li>
        <li>AWS Cost Explorer로 실제 사용 비용을 분석하고 최적화 기회 식별</li>
        <li>예약 인스턴스, Savings Plans으로 장기 비용 절감</li>
        <li>AWS Compute Optimizer를 사용하여 과도 프로비저닝된 리소스 식별</li>
        <li>성능 요구사항 대비 비용 트레이드오프를 문서화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Pricing Calculator — 아키텍처 옵션별 비용 추정</li>
        <li>AWS Cost Explorer — 비용 분석 및 최적화</li>
        <li>AWS Compute Optimizer — 리소스 최적화 권고</li>
        <li>AWS Trusted Advisor — 비용 최적화 권고</li>
      </ul>
      <PageNav />
    </article>
  );
}
