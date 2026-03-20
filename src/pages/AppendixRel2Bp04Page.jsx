import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel2Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL02-BP04 — 다대다 메시보다 허브 앤 스포크 토폴로지 선호</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        VPC와 온프레미스 네트워크를 중앙 허브를 통해 연결합니다. 허브는 고도로 확장 가능한 클라우드
        라우터 역할을 하며, 복잡한 피어링 관계를 관리할 필요 없이 라우팅이 단순화됩니다. 네트워크 간
        트래픽은 암호화되며 네트워크를 격리할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        VPC와 온프레미스 네트워크가 중앙 허브를 통해 연결되어 있습니다. 허브를 통해 피어링 연결이 구성되고,
        복잡한 피어링 관계 없이 라우팅이 단순화됩니다. 트래픽은 암호화되고 네트워크 격리가 가능합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>복잡한 네트워크 피어링 규칙 구축</li>
        <li>상호 의존성이 없는 별도 워크로드처럼 통신하지 않아야 하는 네트워크 간에 경로 제공</li>
        <li>허브 인스턴스의 비효율적인 거버넌스</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>연결된 네트워크 수가 증가할수록 메시 연결의 관리 및 확장이 점점 더 어려워짐</li>
        <li>메시 아키텍처는 추가 인프라 구성 요소, 구성 요구 사항 및 배포 고려 사항 도입</li>
        <li>허브 앤 스포크 모델은 여러 네트워크에 걸쳐 중앙화된 트래픽 라우팅 수립</li>
        <li>데이터 플레인 및 컨트롤 플레인 구성 요소의 관리 및 모니터링에 더 간단한 접근 방식 제공</li>
        <li>네트워크 복잡성 감소 및 네트워킹 문제 해결 용이</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>네트워크 서비스 계정이 없다면 생성; 중앙 관리를 위해 조직의 네트워크 서비스 계정에 허브 배치</li>
        <li>허브가 VPC와 온프레미스 네트워크 간 트래픽 흐름을 위한 가상 라우터 역할을 함을 이해</li>
        <li>VPC, AWS Direct Connect, Site-to-Site VPN 연결을 포함한 네트워크 설계 고려</li>
        <li>주소 공간을 절약하기 위해 작은 CIDR 블록(예: /28)으로 각 Transit Gateway VPC 연결에 별도 서브넷 사용</li>
        <li>인바운드 및 아웃바운드 방향 모두에서 개방 상태로 유지하여 하나의 네트워크 ACL을 생성하고 모든 허브 관련 서브넷과 연결</li>
        <li>통신해야 하는 네트워크 간에만 경로를 제공하도록 라우팅 테이블 설계</li>
        <li>연결할 네트워크 계획 및 결정; 겹치지 않는 CIDR 범위 확인</li>
        <li>AWS Transit Gateway 생성 및 VPC 연결</li>
        <li>필요한 경우 VPN 연결 또는 Direct Connect 게이트웨이 생성 및 Transit Gateway와 연결</li>
        <li>Transit Gateway 라우팅 테이블 구성을 통해 연결된 VPC 간 트래픽 라우팅 정의</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Transit Gateway</li>
        <li>Amazon VPC</li>
        <li>AWS Direct Connect</li>
        <li>AWS Site-to-Site VPN</li>
        <li>Amazon CloudWatch</li>
      </ul>
      <PageNav />
    </article>
  );
}
