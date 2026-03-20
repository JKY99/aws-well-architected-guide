import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Bp04Page() {
  return (
    <article className="doc-content">
      <h1>PERF01-BP04 — 트레이드오프가 고객과 아키텍처 효율성에 미치는 영향 평가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 보통</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 보통입니다.</p>
      </div>
      <p>아키텍처 결정 시 발생하는 트레이드오프가 고객 경험과 아키텍처 효율성에 미치는 영향을 평가합니다. 일관성 대 가용성, 지연 시간 대 처리량 등의 트레이드오프를 명확히 분석합니다.</p>
      <h2>원하는 결과</h2>
      <p>트레이드오프를 명확히 이해하고, 비즈니스 목표와 고객 요구사항을 기반으로 최적의 균형 지점을 선택합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>트레이드오프를 분석하지 않고 단일 지표(성능만 또는 비용만)로 결정</li>
        <li>고객 영향을 고려하지 않은 아키텍처 최적화</li>
        <li>단기 최적화로 인한 장기 유지보수 부채 발생</li>
        <li>트레이드오프 결정을 문서화하지 않아 향후 이해 어려움</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비즈니스 목표와 기술 목표의 균형 달성</li>
        <li>고객 경험을 최우선으로 한 아키텍처 설계</li>
        <li>아키텍처 결정의 투명성 및 이해관계자 동의 확보</li>
        <li>의도하지 않은 부작용 최소화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>각 아키텍처 결정에 대한 트레이드오프 매트릭스 작성</li>
        <li>AWS Well-Architected Framework의 6가지 기둥 간 균형 검토</li>
        <li>고객 영향도(지연 시간, 가용성, 데이터 일관성) 평가</li>
        <li>PoC를 통해 트레이드오프의 실제 영향 측정 및 검증</li>
        <li>트레이드오프 결정을 아키텍처 결정 기록(ADR)으로 문서화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool — 아키텍처 트레이드오프 검토</li>
        <li>Amazon CloudWatch — 트레이드오프 영향 측정 및 모니터링</li>
        <li>AWS X-Ray — 아키텍처 변경의 성능 영향 분석</li>
        <li>AWS Fault Injection Service — 아키텍처 복원력 검증</li>
      </ul>
      <PageNav />
    </article>
  );
}
