import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp07Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP07 — 가용성 목표 및 SLA를 충족하도록 제품 아키텍처 설계</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 아키텍처가 가용성 목표를 달성하지 못하여 SLA 위반이 발생합니다.</p>
      </div>
      <p>
        가용성 목표(SLA, SLO)를 먼저 정의한 후, 해당 목표를 달성할 수 있는 아키텍처를
        설계합니다. 각 구성 요소의 가용성이 전체 시스템 가용성에 미치는 영향을 계산하고,
        필요한 중복성(redundancy)을 구현합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        정의된 가용성 목표(예: 99.9%, 99.99%)를 달성하기 위한 아키텍처 결정이
        데이터에 기반하여 이루어지고, 가용성 목표 달성 여부를 지속적으로 측정합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>가용성 목표를 정의하지 않고 아키텍처를 설계하는 경우</li>
        <li>각 구성 요소의 가용성이 전체 시스템 가용성에 미치는 영향을 계산하지 않는 경우</li>
        <li>단일 장애 지점(SPOF)을 식별하지 않는 경우</li>
        <li>가용성 SLA를 측정하고 보고하지 않아 목표 달성 여부를 알 수 없는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비즈니스 요구사항에 기반한 아키텍처 설계</li>
        <li>단일 장애 지점 식별 및 제거</li>
        <li>투자 대비 효과적인 가용성 달성</li>
        <li>SLA 준수 및 고객 신뢰 유지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 영향 분석(BIA)을 통해 각 워크로드의 가용성 요구사항을 정의합니다.</li>
        <li>직렬 의존성을 고려하여 전체 시스템 가용성을 계산합니다 (각 구성 요소 가용성의 곱).</li>
        <li>단일 장애 지점(SPOF)을 식별하고 멀티 AZ/리전 배포로 제거합니다.</li>
        <li>Amazon CloudWatch를 사용하여 가용성 메트릭(성공률, 에러율)을 수집하고 SLA 대시보드를 구성합니다.</li>
        <li>AWS Well-Architected Tool로 정기적으로 아키텍처를 검토하고 가용성 위험을 식별합니다.</li>
        <li>정기적인 게임 데이를 통해 가용성 목표 달성 여부를 검증합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool — 아키텍처 위험 평가 및 가이드</li>
        <li>Amazon CloudWatch — 가용성 메트릭 수집 및 대시보드</li>
        <li>AWS Fault Injection Service — 가용성 시뮬레이션 테스트</li>
        <li>Amazon Route 53 — 가용성 모니터링 및 장애 조치</li>
      </ul>
      <PageNav />
    </article>
  );
}
