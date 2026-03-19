import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL05-BP01 — 장애를 격리하여 복원력 향상</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 단일 장애가 전체 시스템으로 전파되어 광범위한 서비스 중단을 초래할 수 있습니다.</p>
      </div>
      <p>장애 격리는 한 컴포넌트의 문제가 다른 컴포넌트로 번지지 않도록 시스템을 설계하는 원칙입니다. 가용 영역 격리, 셀 기반 아키텍처, 장애 도메인 분리를 통해 폭발 반경(blast radius)을 최소화합니다.</p>
      <h2>원하는 결과</h2>
      <p>단일 컴포넌트 또는 가용 영역의 장애가 전체 워크로드에 영향을 미치지 않으며, 각 장애 도메인이 독립적으로 운영됩니다. 셀 기반 아키텍처를 통해 장애의 영향 범위가 사전에 정의된 경계 내에 제한됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 리소스를 단일 가용 영역에 배치하여 해당 AZ 장애 시 전체 서비스가 중단됨</li>
        <li>공유 데이터베이스나 메시지 큐를 통해 모든 서비스가 강하게 결합됨</li>
        <li>하나의 장애가 연쇄적으로 전파될 수 있는 동기식 체인 호출 구조</li>
        <li>장애 도메인을 고려하지 않은 단일 셀 배포</li>
        <li>공유 라이브러리나 공통 인프라를 통한 암묵적 의존성</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>단일 장애 발생 시 영향 범위를 예측 가능한 수준으로 제한</li>
        <li>하나의 셀 또는 가용 영역에서 발생한 문제를 다른 영역으로 격리</li>
        <li>점진적 배포 시 장애가 전체 플릿으로 확산되는 것을 방지</li>
        <li>독립적인 장애 복구가 가능하여 전체 가용성 향상</li>
        <li>규정 준수 및 데이터 주권 요구사항 충족에 용이</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>멀티 AZ 아키텍처를 기본으로 채택하여 각 가용 영역을 독립된 장애 도메인으로 운영</li>
        <li>셀 기반 아키텍처를 도입하여 특정 고객 또는 파티션을 독립 셀에 할당</li>
        <li>셀 간 공유 자원을 최소화하고, 필요 시 명시적 인터페이스를 통해서만 통신</li>
        <li>Circuit Breaker 패턴을 적용하여 장애 서비스로의 요청을 자동으로 차단</li>
        <li>Bulkhead 패턴을 사용하여 리소스 풀을 분리하고 한 서비스가 전체 리소스를 소진하지 못하도록 제한</li>
        <li>AWS Availability Zone을 활용한 다중 AZ 배포를 Auto Scaling 그룹과 함께 구성</li>
        <li>AWS Local Zones 또는 AWS Outposts를 통해 지리적 격리 수준을 높임</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling — 다중 AZ 자동 복구 및 용량 관리</li>
        <li>Elastic Load Balancing — 가용 영역 간 트래픽 분산</li>
        <li>Amazon Route 53 — 장애 발생 시 DNS 기반 트래픽 페일오버</li>
        <li>AWS Fault Isolation Boundaries — 장애 격리 경계 문서 및 가이드</li>
        <li>AWS Resilience Hub — 복원력 평가 및 권고사항 제공</li>
        <li>Amazon VPC — 네트워크 수준의 격리 구현</li>
      </ul>
      <PageNav />
    </article>
  );
}
