import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel2Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL02-BP02 — 클라우드와 온프레미스 환경의 프라이빗 네트워크 간 이중화 연결 프로비저닝</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        클라우드와 온프레미스 환경 간 프라이빗 네트워크 연결에 중복성을 구현하여 두 개 이상의 링크와
        트래픽 경로를 통해 연결 복원력을 달성합니다. 이를 통해 네트워크 장애 발생 시에도 연결이 유지됩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        클라우드와 온프레미스 환경 간 종속 서비스가 안정적으로 통신합니다. 디바이스 장애 및 연결 문제로부터
        보호되며, 전체 위치 중단에 대한 복원력이 있고, 네트워크 장애 중에도 지속적인 가용성이 보장됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>하나의 네트워크 연결에만 의존(단일 장애 지점)</li>
        <li>하나의 VPN 터널만 사용하거나 동일한 가용 영역에서 끝나는 여러 터널 사용</li>
        <li>VPN 연결에 단일 ISP에 의존(ISP 중단 시 완전한 장애)</li>
        <li>트래픽 재라우팅을 위한 BGP와 같은 동적 라우팅 프로토콜 미구현</li>
        <li>VPN 터널 대역폭 제한 무시 및 백업 기능 과대 평가</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>클라우드와 온프레미스 환경 간 종속 서비스의 안정적 통신</li>
        <li>디바이스 장애 및 연결 문제로부터 보호</li>
        <li>전체 위치 중단에 대한 복원력</li>
        <li>네트워크 장애 중 지속적인 가용성</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Direct Connect 접근 방식: 여러 온프레미스 및 AWS Direct Connect 위치에 있는 별개 디바이스에 별도 연결 사용(99.99% SLA) 또는 여러 위치에 두 연결(99.9% SLA)</li>
        <li>Site-to-Site VPN 접근 방식: 다른 가용 영역에 두 개의 VPN 터널을 중복 하드웨어로 구성; AWS Transit Gateway를 엔드포인트로 사용</li>
        <li>ISP 이중화: 별도의 물리적 경로를 가진 다양한 ISP의 여러 인터넷 연결 구현</li>
        <li>BGP 동적 라우팅: 실시간 네트워크 조건에 따른 자동 트래픽 재라우팅을 위해 BGP(Border Gateway Protocol) 구현</li>
        <li>여러 AWS 리전을 사용하는 경우 최소 두 리전에 중복성 생성</li>
        <li>토폴로지 계획을 위해 Direct Connect Resiliency Toolkit 사용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Direct Connect</li>
        <li>AWS Site-to-Site VPN</li>
        <li>AWS Transit Gateway</li>
        <li>Amazon VPC</li>
        <li>AWS PrivateLink (VPC 엔드포인트)</li>
        <li>Direct Connect Resiliency Toolkit</li>
      </ul>
      <PageNav />
    </article>
  );
}
