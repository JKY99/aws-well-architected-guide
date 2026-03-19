import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec9Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC09-BP03 — 네트워크 통신 보안</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        VPC 내부 서비스 간 통신, AWS 서비스와의 통신, 온프레미스와의 연결을 포함한 모든 네트워크
        통신에 암호화를 적용합니다. 내부 네트워크도 신뢰하지 않는 제로 트러스트 원칙에 따라
        서비스 간 통신에도 TLS 및 인증을 적용합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 네트워크 통신(내부/외부)에 암호화가 적용됩니다. 인터넷 경유 없이 AWS 서비스에
        접근하기 위해 VPC 엔드포인트를 사용하고, 온프레미스 연결은 VPN 또는 Direct Connect를
        통해 암호화됩니다. 마이크로서비스 간 통신은 서비스 메시(App Mesh)로 mTLS가 자동 적용됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>VPC 내부 서비스 간 통신을 평문 HTTP로 구성하여 내부 네트워크를 암묵적으로 신뢰함</li>
        <li>AWS 서비스(S3, DynamoDB 등)에 인터넷 게이트웨이를 통해 접근하여 트래픽이 AWS 외부로 나감</li>
        <li>온프레미스와의 연결에 VPN 없이 퍼블릭 인터넷을 사용함</li>
        <li>내부 마이크로서비스 간 통신에 인증 없이 서비스 이름만으로 신뢰함</li>
        <li>Direct Connect 연결에 추가 암호화(MACsec) 없이 물리적 연결만으로 보안을 신뢰함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>내부 네트워크 침해 시에도 동서(East-West) 트래픽 도청 및 변조 방지</li>
        <li>VPC 엔드포인트로 AWS 서비스 접근 트래픽이 AWS 네트워크 내에서만 이동</li>
        <li>mTLS로 마이크로서비스 간 상호 인증하여 내부 서비스 위장 공격 방지</li>
        <li>MACsec으로 Direct Connect 물리적 링크 수준에서도 암호화 보장</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS PrivateLink를 사용하여 VPC 간 서비스 통신과 AWS 관리형 서비스 접근을 인터넷 경유 없이 AWS 내부 네트워크로 처리합니다.</li>
        <li>AWS App Mesh 또는 Amazon ECS 서비스 메시를 사용하여 마이크로서비스 간 통신에 mTLS를 자동으로 적용하고 ACM Private CA에서 발급한 인증서를 사용합니다.</li>
        <li>온프레미스와 AWS 간 연결은 AWS Site-to-Site VPN(IKEv2/AES-256)을 사용하거나, Direct Connect에 MACsec(802.1AE)을 활성화하여 레이어 2 수준의 암호화를 적용합니다.</li>
        <li>VPC 인터페이스 엔드포인트를 생성하여 EC2, Lambda 등이 S3, DynamoDB, Secrets Manager 등 AWS 서비스에 인터넷 없이 접근하도록 구성합니다.</li>
        <li>Amazon VPC Lattice를 활용하여 여러 VPC와 계정에 걸친 서비스 간 통신에 중앙화된 접근 제어와 TLS 암호화를 적용합니다.</li>
        <li>VPC Flow Logs를 활성화하여 내부 네트워크 트래픽을 모니터링하고 비정상적인 통신 패턴을 탐지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS PrivateLink — 인터넷 경유 없는 AWS 서비스 비공개 접근</li>
        <li>AWS App Mesh — 마이크로서비스 간 mTLS 자동화</li>
        <li>AWS Site-to-Site VPN — 온프레미스 연결 암호화</li>
        <li>AWS Direct Connect MACsec — 전용 회선 레이어 2 암호화</li>
        <li>Amazon VPC Lattice — 멀티 VPC 서비스 간 보안 통신</li>
      </ul>
      <PageNav />
    </article>
  );
}
