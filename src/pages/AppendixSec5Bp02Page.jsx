import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec5Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC05-BP02 — 네트워크 계층 내 트래픽 흐름 제어</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 네트워크 내 비인가 횡적 이동이 발생할 수 있습니다.</p>
      </div>
      <p>
        워크로드 구성 요소가 서로, 클라이언트 및 종속 서비스와 통신하는 데 필요한 네트워크 흐름만 허용합니다. 최소 권한 설계 원칙의 일환으로 네트워크 피어링보다 포인트 투 포인트 흐름을 선호합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>워크로드 구성 요소 간 통신에 필요한 네트워크 흐름만 허용</li>
        <li>퍼블릭 vs 프라이빗 인그레스/이그레스, 데이터 분류, 지역 규정 및 프로토콜 요구 사항을 고려한 설계</li>
        <li>최소 권한 설계 원칙으로 네트워크 피어링보다 포인트 투 포인트 흐름 선호</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>네트워크 경계에서만 트래픽을 제어하는 경계 기반 네트워크 보안 접근 방식 사용</li>
        <li>네트워크 계층 내의 모든 트래픽이 인증 및 권한 부여된 것으로 가정</li>
        <li>인그레스 또는 이그레스 트래픽 중 한 방향에만 제어 적용</li>
        <li>워크로드 구성 요소 및 네트워크 제어에만 전적으로 의존하여 트래픽 인증 및 권한 부여</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>네트워크 내 비인가 이동 위험 감소</li>
        <li>워크로드에 추가적인 권한 부여 계층 추가</li>
        <li>보안 인시던트의 영향 범위 제한</li>
        <li>탐지 및 대응 속도 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>워크로드 구성 요소 간 필요한 데이터 흐름을 식별합니다.</li>
        <li>보안 그룹과 라우팅 테이블을 사용하여 인바운드 및 아웃바운드 트래픽에 대한 다중 제어(심층 방어)를 적용합니다.</li>
        <li>세분화된 제어를 위해 Route 53 Resolver DNS Firewall, AWS Network Firewall, AWS WAF, AWS Firewall Manager(중앙화된 관리)를 사용합니다.</li>
        <li>AWS PrivateLink를 사용하여 VPC 간 포인트 투 포인트 연결을 구현합니다.</li>
        <li>AWS Transit Gateway를 사용하여 다중 VPC 라우팅을 중재합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC — 서브넷을 통한 네트워크 계층 정의</li>
        <li>보안 그룹 — ENI 수준에서의 레이어 4 트래픽 제어</li>
        <li>AWS Transit Gateway — 다중 VPC 라우팅 중재</li>
        <li>AWS PrivateLink — VPC 간 포인트 투 포인트 연결</li>
        <li>Route 53 Resolver DNS Firewall — DNS 도메인 필터링</li>
        <li>AWS Network Firewall — 상태 비저장/상태 저장 패킷 검사</li>
        <li>AWS WAF — 웹 트래픽 필터링</li>
        <li>AWS Firewall Manager — 중앙화된 방화벽 규칙 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
