import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP02 — 정상 리소스로 장애 조치</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 구성 요소 장애 시 수동 개입이 필요하여 서비스 중단 시간이 길어집니다.</p>
      </div>
      <p>
        비정상 리소스에서 정상 리소스로의 자동 장애 조치(failover)를 구현하여
        수동 개입 없이 서비스를 지속합니다. 로드 밸런서, DNS 장애 조치,
        데이터베이스 Multi-AZ 등을 활용합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        구성 요소 장애 발생 시 수초에서 수분 내에 트래픽이 정상 리소스로 자동 전환되며,
        사용자 영향이 최소화됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>장애 조치를 위해 수동으로 DNS를 변경하거나 로드 밸런서 설정을 수정하는 경우</li>
        <li>장애 조치 이후 정상 리소스를 복구하지 않아 이중 장애 위험이 증가하는 경우</li>
        <li>장애 조치 테스트를 수행하지 않아 실제 장애 시 예상대로 작동하지 않는 경우</li>
        <li>장애 조치 시간(RTO)을 측정하지 않아 SLA 달성 여부를 알 수 없는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자동 장애 조치로 가용성 향상 및 MTTR 단축</li>
        <li>야간이나 주말 장애 시에도 자동 복구</li>
        <li>운영팀이 복구보다 근본 원인 분석에 집중 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Elastic Load Balancing의 상태 확인을 구성하여 비정상 인스턴스를 자동으로 제외합니다.</li>
        <li>RDS Multi-AZ를 활성화하여 데이터베이스 장애 시 자동으로 스탠바이로 전환합니다.</li>
        <li>Amazon Route 53 장애 조치 라우팅 정책과 상태 확인을 사용하여 DNS 수준 장애 조치를 구성합니다.</li>
        <li>Amazon ElastiCache Multi-AZ를 활성화하여 캐시 노드 장애 시 자동 복제본 승격을 수행합니다.</li>
        <li>장애 조치 절차를 정기적으로 테스트하고 RTO를 측정하여 목표 달성 여부를 확인합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Elastic Load Balancing — 자동 비정상 인스턴스 제외</li>
        <li>Amazon RDS Multi-AZ — 데이터베이스 자동 장애 조치</li>
        <li>Amazon Route 53 — DNS 기반 장애 조치 라우팅</li>
        <li>Amazon ElastiCache — 캐시 자동 장애 조치</li>
        <li>Amazon Aurora Global Database — 리전 간 장애 조치</li>
      </ul>
      <PageNav />
    </article>
  );
}
