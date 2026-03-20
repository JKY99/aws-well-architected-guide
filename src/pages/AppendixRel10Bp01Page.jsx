import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel10Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL10-BP01 — 워크로드를 여러 위치에 배포</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 단일 데이터 센터나 가용 영역의 장애로 전체 워크로드가 중단될 수 있습니다.</p>
      </div>
      <p>
        단일 위치에 워크로드를 배포하면 해당 위치의 장애가 전체 서비스 중단으로 이어집니다.
        여러 AWS 가용 영역(AZ) 또는 리전에 워크로드를 분산 배포하여 장애 격리 경계를
        넓히고 고가용성을 달성합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드가 최소 2개 이상의 가용 영역에 배포되어 있으며, 하나의 AZ가 완전히
        실패해도 나머지 AZ에서 서비스가 지속됩니다. 비즈니스 요구사항에 따라 멀티 리전
        배포도 고려합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>단일 AZ에만 EC2 인스턴스나 RDS 인스턴스를 배포하는 경우</li>
        <li>하드코딩된 서브넷 ID를 사용하여 항상 같은 AZ에 리소스가 생성되는 경우</li>
        <li>멀티 AZ 배포는 했지만 AZ 간 트래픽 분산이 불균형한 경우</li>
        <li>데이터 계층은 단일 AZ이면서 컴퓨팅 계층만 멀티 AZ로 구성하는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>AZ 수준의 장애에도 서비스 연속성 유지</li>
        <li>AWS 관리형 유지보수로 인한 서비스 중단 최소화</li>
        <li>가용성 SLA 달성에 필요한 기반 구축</li>
        <li>장애 격리 경계 확장으로 전체 장애 위험 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>VPC를 최소 2개(권장 3개)의 AZ에 걸쳐 구성하고 각 AZ에 서브넷을 생성합니다.</li>
        <li>Elastic Load Balancing을 사용하여 여러 AZ의 인스턴스에 트래픽을 분산합니다.</li>
        <li>RDS, ElastiCache 등은 Multi-AZ 옵션을 활성화합니다.</li>
        <li>Auto Scaling 그룹을 멀티 AZ로 구성하고 AZ 리밸런싱을 활성화합니다.</li>
        <li>Amazon Route 53 지연 기반 라우팅 또는 지리적 라우팅으로 멀티 리전 트래픽을 관리합니다.</li>
        <li>AWS Global Accelerator를 사용하여 글로벌 가용성과 성능을 동시에 개선합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC — 멀티 AZ 네트워크 구성</li>
        <li>Elastic Load Balancing — 멀티 AZ 트래픽 분산</li>
        <li>Amazon RDS Multi-AZ — 데이터베이스 자동 장애 조치</li>
        <li>Amazon Route 53 — DNS 기반 글로벌 트래픽 라우팅</li>
        <li>AWS Global Accelerator — 글로벌 트래픽 가속 및 장애 조치</li>
      </ul>
      <PageNav />
    </article>
  );
}
