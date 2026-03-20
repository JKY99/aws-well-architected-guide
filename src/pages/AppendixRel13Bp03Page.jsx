import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel13Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL13-BP03 — DR 구현을 검증하기 위한 테스트</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 실제 재해 발생 시 DR 계획이 작동하지 않아 더 큰 비즈니스 손실이 발생할 수 있습니다.</p>
      </div>
      <p>
        DR 계획은 문서화만으로는 충분하지 않습니다. 정기적인 DR 테스트를 통해
        실제로 RTO/RPO 목표를 달성할 수 있는지 검증하고, 테스트 결과를 바탕으로
        DR 절차를 지속적으로 개선합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        최소 연 1회 이상 DR 테스트를 수행하여 RTO/RPO 목표 달성이 검증됩니다.
        테스트에서 발견된 취약점은 즉시 수정됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>DR 계획을 문서화했지만 한 번도 테스트하지 않는 경우</li>
        <li>DR 테스트를 계획했지만 "지금은 위험하다"는 이유로 계속 연기하는 경우</li>
        <li>부분적인 테스트(데이터 복원만)만 수행하고 전체 복구 절차를 테스트하지 않는 경우</li>
        <li>테스트 후 결과를 문서화하지 않고 개선 조치를 취하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>DR 계획의 실효성 검증</li>
        <li>팀의 DR 절차 숙달</li>
        <li>취약점 발견 및 개선</li>
        <li>규정 준수 요구사항 충족</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>DR 테스트 계획을 수립하고 연간 일정에 포함합니다.</li>
        <li>단계적으로 테스트 범위를 확대합니다: 컴포넌트 테스트 → 통합 테스트 → 전체 DR 테스트.</li>
        <li>실제 DR 훈련을 수행하여 프로덕션 리전에서 DR 리전으로 완전히 전환합니다.</li>
        <li>테스트 중 RTO와 RPO를 측정하고 목표 달성 여부를 기록합니다.</li>
        <li>AWS Elastic Disaster Recovery를 사용하여 DR 테스트를 자동화하고 프로덕션에 영향 없이 수행합니다.</li>
        <li>테스트 후 회고를 통해 개선 항목을 식별하고 추적합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Elastic Disaster Recovery — DR 테스트 자동화</li>
        <li>AWS Fault Injection Service — 재해 시나리오 시뮬레이션</li>
        <li>AWS Resilience Hub — DR 테스트 계획 및 평가</li>
        <li>Amazon CloudWatch — DR 테스트 중 메트릭 수집</li>
      </ul>
      <PageNav />
    </article>
  );
}
