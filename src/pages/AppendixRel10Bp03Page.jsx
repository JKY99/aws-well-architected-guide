import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel10Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL10-BP03 — 벌크헤드 아키텍처를 사용하여 영향 범위 제한</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 하나의 구성 요소나 고객 그룹의 문제가 전체 워크로드로 확산될 수 있습니다.</p>
      </div>
      <p>
        벌크헤드(Bulkhead) 패턴은 선박의 격벽처럼 시스템을 독립된 파티션(셀)으로 분리하여
        하나의 파티션 장애가 다른 파티션에 전파되지 않도록 합니다.
        이를 통해 장애의 영향 범위(blast radius)를 제한합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드가 여러 격리된 셀로 분리되어 있으며, 하나의 셀에서 장애가 발생해도
        다른 셀의 서비스는 영향받지 않습니다. 각 셀은 독립적인 리소스 풀을 보유합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 고객이 동일한 데이터베이스 커넥션 풀이나 스레드 풀을 공유하여 하나의 고객 요청 급증이 전체에 영향을 미치는 경우</li>
        <li>공유 캐시 계층이 단일 장애 지점이 되는 경우</li>
        <li>마이크로서비스가 독립적인 배포 단위이지만 공유 데이터베이스를 사용하여 격리가 불완전한 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 영향 범위 제한으로 전체 서비스 중단 방지</li>
        <li>테넌트 간 성능 격리로 "noisy neighbor" 문제 해결</li>
        <li>셀 단위의 독립적인 배포 및 테스트 가능</li>
        <li>셀 기반 아키텍처(Cell-based Architecture)로 운영 복잡성 관리</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>멀티 테넌트 애플리케이션에서 테넌트 그룹별로 독립된 컴퓨팅 리소스(EC2 Auto Scaling 그룹, ECS 클러스터)를 사용합니다.</li>
        <li>서비스별로 독립된 데이터베이스나 스키마를 사용하여 데이터 계층을 격리합니다.</li>
        <li>Amazon SQS를 사용하여 각 셀에 독립된 메시지 큐를 할당합니다.</li>
        <li>AWS 계정 단위의 격리를 사용하여 강력한 셀 경계를 구현합니다 (AWS Organizations 활용).</li>
        <li>셀 기반 라우팅을 구현하여 요청이 항상 올바른 셀로 전달되도록 합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling — 셀별 독립 컴퓨팅 리소스</li>
        <li>Amazon SQS — 셀별 독립 메시지 큐</li>
        <li>Amazon RDS — 셀별 독립 데이터베이스 인스턴스</li>
        <li>AWS Organizations — 계정 단위의 강력한 셀 격리</li>
        <li>AWS Service Quotas — 셀별 할당량 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
