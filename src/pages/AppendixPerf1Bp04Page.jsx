import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Bp04Page() {
  return (
    <article className="doc-content">
      <h1>PERF01-BP04 — 성능 아키텍처 선택 분석</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>여러 아키텍처 옵션의 성능, 비용, 복잡도를 분석하고 워크로드의 특성에 가장 적합한 아키텍처를 선택합니다.</p>
      <h2>원하는 결과</h2>
      <p>성능과 비용 목표를 모두 충족하는 최적 아키텍처를 선택합니다. 아키텍처 결정은 체계적인 트레이드오프 분석을 통해 이루어지며, 선택의 근거가 명확히 문서화됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>단일 아키텍처 옵션만 고려하여 대안 미검토</li>
        <li>성능, 비용, 복잡도 간 트레이드오프 분석 없음</li>
        <li>과거에 사용했던 아키텍처를 새로운 워크로드에 그대로 반복 적용</li>
        <li>단기 비용만 고려하고 장기적인 운영 비용 미고려</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최적화된 성능/비용 균형 달성</li>
        <li>근거 있는 아키텍처 결정으로 리스크 감소</li>
        <li>미래 확장성과 변경 용이성 고려</li>
        <li>팀 내 아키텍처 결정 투명성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Well-Architected Framework 기준으로 복수의 아키텍처 옵션 검토</li>
        <li>소규모 Proof of Concept(PoC)으로 핵심 가정 검증</li>
        <li>AWS Pricing Calculator로 각 옵션의 비용 추정 및 비교</li>
        <li>성능-비용 트레이드오프를 문서화하고 이해관계자와 공유</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool — 아키텍처 검토 및 위험 식별</li>
        <li>AWS Pricing Calculator — 아키텍처 옵션별 비용 추정</li>
        <li>AWS Compute Optimizer — 컴퓨팅 리소스 최적화 권고</li>
        <li>AWS Trusted Advisor — 아키텍처 모범 사례 점검</li>
      </ul>
      <PageNav />
    </article>
  );
}
