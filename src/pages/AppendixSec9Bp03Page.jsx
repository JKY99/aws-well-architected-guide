import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec9Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC09-BP03 — 네트워크 통신 인증</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비인가 접근이 워크로드의 일부에 미치는 영향 범위가 확대될 수 있습니다.</p>
      </div>
      <p>
        TLS 또는 IPsec과 같이 인증을 지원하는 프로토콜을 사용하여 통신의 ID를 검증합니다. 서비스, 애플리케이션 간 또는 사용자에게 통신할 때 보안하고 인증된 네트워크 프로토콜을 사용하도록 워크로드를 설계합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>서비스 간 데이터 플레인 및 컨트롤 플레인 트래픽 흐름이 잘 정의된 워크로드</li>
        <li>기술적으로 실현 가능한 경우 인증되고 암호화된 네트워크 프로토콜을 사용하는 트래픽 흐름</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>워크로드 내 암호화되지 않거나 인증되지 않은 트래픽 흐름</li>
        <li>여러 사용자 또는 엔티티 간에 인증 자격 증명 재사용</li>
        <li>접근 제어 메커니즘으로 네트워크 제어에만 전적으로 의존</li>
        <li>산업 표준 인증 메커니즘 대신 맞춤형 인증 메커니즘 생성</li>
        <li>서비스 구성 요소 또는 VPC의 다른 리소스 간 지나치게 허용적인 트래픽 흐름</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드의 한 부분에 대한 비인가 접근의 영향 범위 제한</li>
        <li>인증된 엔티티만 작업을 수행한다는 높은 수준의 보증 제공</li>
        <li>의도한 데이터 전송 인터페이스를 명확하게 정의하고 강제하여 서비스 디커플링 개선</li>
        <li>요청 귀속 및 잘 정의된 통신 인터페이스를 통한 모니터링, 로깅, 인시던트 대응 강화</li>
        <li>네트워크 제어와 인증 및 권한 부여 제어를 결합하여 워크로드에 심층 방어 제공</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>서비스 간 데이터 전송을 명확하게 정의하는 데이터 흐름 다이어그램을 작성합니다. 개발 및 테스트 단계에서 워크로드를 계측하여 다이어그램의 정확성을 검증하고 위협 모델링의 기반으로 활용합니다.</li>
        <li>보안 그룹을 사용하여 리소스 간 데이터 흐름을 정의하고 제한합니다. AWS PrivateLink를 사용하여 AWS 및 서드파티 서비스와 통신하고, 데이터가 공개 인터넷을 통하지 않고 AWS 네트워크 백본 내에 유지되도록 합니다.</li>
        <li>Amazon VPC Lattice를 사용하여 SigV4 인증과 인증 정책을 결합한 서비스 간 보안 통신을 구현합니다. API Gateway의 mTLS 인증이나 Application Load Balancer의 mTLS 지원을 활용하여 상호 인증을 구현합니다.</li>
        <li>AWS Private CA를 사용하여 프라이빗 CA 계층을 구축하고 mTLS에 사용할 인증서를 발급합니다. API Gateway JWT 인증자를 사용하여 OIDC 또는 OAuth 2.0 공급자의 JWT로 접근을 제어합니다.</li>
        <li>VPC Lattice 액세스 로그를 모니터링하여 요청 엔티티, 네트워크 정보, 요청 메타데이터를 추적합니다. VPC Flow Logs를 활성화하여 네트워크 흐름의 메타데이터를 캡처하고 이상 징후를 검토합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC Lattice — SigV4 인증을 사용한 서비스 간 보안 통신</li>
        <li>Amazon API Gateway — mTLS 인증 및 JWT 인증자</li>
        <li>AWS Identity and Access Management(IAM) Roles Anywhere — 온프레미스 워크로드에 임시 IAM 자격 증명 제공</li>
        <li>AWS Private Certificate Authority(AWS Private CA) — mTLS용 프라이빗 CA 계층 구축</li>
        <li>Application Load Balancer — 내부 또는 외부 워크로드용 mTLS 지원</li>
        <li>AWS PrivateLink — 인터넷을 통하지 않는 AWS 및 서드파티 서비스 통신</li>
        <li>보안 그룹 — 리소스 간 데이터 흐름 정의 및 제한</li>
        <li>AWS IoT Core — IoT 장치 네트워크 트래픽 암호화 및 인증</li>
        <li>VPC Flow Logs — 네트워크 흐름 메타데이터 캡처 및 이상 탐지</li>
      </ul>
      <PageNav />
    </article>
  );
}
