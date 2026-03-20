import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec5Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC05-BP03 — 검사 기반 보호 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 정교한 네트워크 공격을 탐지 및 차단하지 못할 수 있습니다.</p>
      </div>
      <p>
        네트워크 계층 간을 통과하는 트래픽을 검사하고 허가합니다. 허가/거부 결정은 명시적 규칙, 위협 인텔리전스 및 기준 행동 편차를 기반으로 하며, 민감한 데이터에 가까워질수록 보호가 더 엄격해집니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>네트워크 계층 간을 통과하는 트래픽이 검사되고 허가됨</li>
        <li>허가/거부 결정이 명시적 규칙, 위협 인텔리전스 및 기준 행동 편차를 기반으로 함</li>
        <li>민감한 데이터에 가까워질수록 보호가 더 엄격해짐</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>지능형 시스템 없이 포트 및 프로토콜 기반 방화벽 규칙에만 전적으로 의존</li>
        <li>변경될 수 있는 특정 현재 위협 패턴을 기반으로 방화벽 규칙 작성</li>
        <li>프라이빗 서브넷에서 퍼블릭 서브넷으로 또는 퍼블릭 서브넷에서 인터넷으로 전환하는 트래픽만 검사</li>
        <li>행동 이상 비교를 위한 네트워크 트래픽 기준선 미설정</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>트래픽 데이터 내의 세분화된 조건으로 지능형 규칙 작성</li>
        <li>최신 위협 인텔리전스를 기반으로 AWS 및 파트너의 관리형 규칙 세트 활용</li>
        <li>규칙 유지 관리 및 침해 지표 조사 오버헤드 감소</li>
        <li>오탐 가능성 최소화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>검사 VPC(광범위한 검사) 또는 VPC별 세분화된 접근 방식 중 검사 범위를 결정합니다.</li>
        <li>인라인 검사 솔루션으로 AWS Network Firewall을 사용하거나 Gateway Load Balancer(GWLB)를 통해 서드파티 어플라이언스를 배포합니다.</li>
        <li>아웃오브밴드 검사 솔루션으로 인터페이스에서 VPC Traffic Mirroring을 활성화하고 Amazon EventBridge를 사용하여 새 리소스에 대한 미러링 활성화를 자동화합니다.</li>
        <li>인바운드 웹 트래픽에 AWS WAF 웹 ACL을 구성하고, 사용자 지정 규칙 또는 AWS 관리형 규칙 그룹을 사용하여 ALB, API Gateway, CloudFront와 연결합니다.</li>
        <li>AWS Firewall Manager를 사용하여 AWS Organizations 전체에서 중앙화된 관리를 구현합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Network Firewall — 상태 저장/상태 비저장 네트워크 트래픽 검사</li>
        <li>AWS WAF — HTTP(S) 트래픽을 위한 웹 애플리케이션 방화벽</li>
        <li>Gateway Load Balancer(GWLB) — 서드파티 어플라이언스 인라인 배포</li>
        <li>VPC Traffic Mirroring — 아웃오브밴드 검사 기능</li>
        <li>AWS Firewall Manager — AWS Organizations 전체 중앙화된 관리</li>
        <li>AWS Shield Advanced — DDoS 보호</li>
        <li>Amazon EventBridge — 트래픽 미러링 자동화</li>
      </ul>
      <PageNav />
    </article>
  );
}
