import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL01-BP04 — 네트워크 토폴로지 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        신뢰할 수 있는 워크로드를 위해서는 IP 주소 공간, VPC 피어링, 서브넷 설계 등
        네트워크 토폴로지를 체계적으로 계획하고 관리해야 합니다.
        무계획적인 네트워크 설계는 IP 충돌, 확장 불가, 연결성 문제로 이어질 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        전체 AWS 환경의 IP 주소 공간이 체계적으로 관리되며, 향후 확장 시에도 IP 충돌 없이
        새로운 VPC, 서브넷, 피어링 관계를 추가할 수 있습니다.
        네트워크 토폴로지 다이어그램이 최신 상태로 유지되고, 모든 변경은 검토 후 적용됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>VPC CIDR 블록을 중복 할당하여 피어링이나 Transit Gateway 연결 시 충돌이 발생하는 경우</li>
        <li>IP 주소 할당 계획 없이 즉흥적으로 VPC와 서브넷을 생성하는 경우</li>
        <li>온프레미스 네트워크와의 IP 주소 공간 충돌을 고려하지 않는 경우</li>
        <li>멀티 계정, 멀티 리전 환경에서 중앙화된 IP 관리 체계가 없는 경우</li>
        <li>네트워크 토폴로지 변경 이력을 추적하지 않아 문제 발생 시 원인 파악이 어려운 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>멀티 VPC, 멀티 계정 환경에서도 원활한 네트워크 연결 유지</li>
        <li>온프레미스와의 하이브리드 연결 구성 용이</li>
        <li>네트워크 보안 정책의 일관성 있는 적용</li>
        <li>향후 아키텍처 확장 시 네트워크 재설계 비용 절감</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>RFC 1918 프라이빗 IP 주소 공간을 체계적으로 분할하고 IP 주소 관리(IPAM) 계획을 수립합니다.</li>
        <li>Amazon VPC IP Address Manager(IPAM)를 사용하여 중앙에서 IP 주소 공간을 관리합니다.</li>
        <li>각 환경(개발/스테이징/프로덕션)과 리전별로 고유한 CIDR 블록을 할당합니다.</li>
        <li>AWS Transit Gateway를 사용하여 복잡한 VPC 피어링 대신 허브-스포크 토폴로지를 구현합니다.</li>
        <li>네트워크 토폴로지를 Infrastructure as Code로 관리하고, 변경 시 코드 리뷰를 의무화합니다.</li>
        <li>AWS Network Manager를 사용하여 전체 네트워크 토폴로지를 시각화하고 모니터링합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC IP Address Manager (IPAM) — IP 주소 공간 중앙 관리</li>
        <li>AWS Transit Gateway — 대규모 VPC 간 연결 허브</li>
        <li>AWS Network Manager — 네트워크 토폴로지 시각화 및 모니터링</li>
        <li>AWS Resource Access Manager — 멀티 계정 리소스 공유</li>
        <li>AWS Config — 네트워크 리소스 구성 변경 추적</li>
      </ul>
      <PageNav />
    </article>
  );
}
