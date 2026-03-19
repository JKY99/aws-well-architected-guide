import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL09-BP04 — 복구 목표 설정</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 명확한 복구 목표 없이 재해 복구 전략을 수립하게 되어 비즈니스 요구사항을 충족하지 못하거나 불필요하게 과도한 비용이 발생합니다.</p>
      </div>
      <p>복구 목표는 재해 복구 전략의 근간입니다. 비즈니스 연속성을 위해 각 워크로드의 RTO(복구 시간 목표)와 RPO(복구 시점 목표)를 명확히 정의하고, 이를 달성하기 위한 기술적·운영적 전략을 수립합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 중요 워크로드에 대해 비즈니스 영향 분석에 기반한 RTO/RPO가 정의되어 있습니다. 정의된 목표를 달성하기 위한 재해 복구 전략이 구현되고, 정기적인 테스트를 통해 목표 달성 가능성이 검증됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>RTO/RPO를 정의하지 않고 "가능한 빨리 복구"라는 모호한 목표로 운영</li>
        <li>기술팀이 임의로 RTO/RPO를 설정하고 비즈니스 이해관계자의 검토 없이 확정</li>
        <li>모든 워크로드에 동일한 RTO/RPO를 적용하여 비용 과다 또는 중요 서비스 미보호</li>
        <li>RTO/RPO를 설정했지만 달성 가능성을 테스트하지 않아 유사 목표임에도 실제 달성 불가</li>
        <li>비즈니스 성장에 따라 RTO/RPO를 재검토하지 않아 시대에 뒤떨어진 목표 유지</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비즈니스 요구사항에 맞는 DR 투자 수준 결정으로 불필요한 과투자 방지</li>
        <li>명확한 복구 목표로 재해 발생 시 팀 간 공통된 대응 기준 마련</li>
        <li>워크로드별 차별화된 목표로 중요 서비스에 투자를 집중하고 비용 최적화</li>
        <li>규정 준수 요구사항 충족 — 금융, 의료 등 규제 산업의 법적 의무 이행</li>
        <li>이해관계자와의 명확한 기대치 정렬로 재해 시 혼란 최소화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 영향 분석(BIA)을 수행하여 각 워크로드의 중단 시 시간당 비용(비즈니스 손실)을 정량화</li>
        <li>중단 비용과 DR 구현 비용을 비교하여 워크로드별 최적 RTO/RPO 도출</li>
        <li>RTO/RPO를 기반으로 4가지 DR 전략(백업-복원, 파일럿 라이트, 웜 스탠바이, 멀티 사이트 액티브-액티브) 중 적합한 전략 선택</li>
        <li>AWS Resilience Hub를 사용하여 현재 아키텍처의 RTO/RPO를 자동으로 평가하고 목표 대비 갭 파악</li>
        <li>정의된 RTO/RPO를 SLA에 문서화하고 비즈니스 리더십의 승인을 받아 공식화</li>
        <li>연간 검토 주기를 설정하여 비즈니스 변화에 따라 RTO/RPO 목표를 업데이트</li>
        <li>AWS Elastic Disaster Recovery로 서버 복제를 구성하여 낮은 RPO 달성</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Resilience Hub — RTO/RPO 자동 평가 및 개선 권고</li>
        <li>AWS Elastic Disaster Recovery — 낮은 RPO를 위한 지속적 서버 복제</li>
        <li>Amazon Route 53 — 장애 조치를 위한 DNS 기반 트래픽 전환</li>
        <li>AWS Global Accelerator — 멀티 리전 액티브-액티브 트래픽 분산</li>
        <li>Amazon Aurora Global Database — 낮은 RPO의 글로벌 데이터베이스 복제</li>
        <li>AWS Well-Architected Tool — DR 전략 평가 및 권고사항</li>
      </ul>
      <PageNav />
    </article>
  );
}
