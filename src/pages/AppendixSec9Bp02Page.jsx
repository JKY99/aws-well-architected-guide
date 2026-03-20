import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec9Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC09-BP02 — 전송 중 암호화 강제</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 전송 중 데이터가 도청이나 변조에 노출될 수 있습니다.</p>
      </div>
      <p>
        조직 정책, 규제 의무 및 표준에 따라 정의된 암호화 요구 사항을 강제합니다. VPC 외부로 민감한 데이터를 전송할 때는 암호화가 포함된 프로토콜만 사용합니다. 암호화는 신뢰할 수 없는 네트워크를 통해 데이터가 전송되는 경우에도 데이터 기밀성을 유지합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>인터넷과 리소스 간의 네트워크 트래픽을 암호화하여 데이터에 대한 비인가 접근 완화</li>
        <li>보안 요구 사항에 따라 내부 AWS 환경 내 네트워크 트래픽 암호화</li>
        <li>안전한 TLS 프로토콜 및 암호화 스위트를 사용한 전송 중 데이터 암호화</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>더 이상 사용되지 않는 SSL, TLS 및 암호화 스위트 구성 요소 사용(예: SSL v3.0, 1024비트 RSA 키, RC4 암호화)</li>
        <li>공개적으로 노출된 리소스에서 암호화되지 않은 HTTP 트래픽 허용</li>
        <li>X.509 인증서 만료 전 모니터링 및 교체 미실시</li>
        <li>TLS에 자체 서명 X.509 인증서 사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>중간자 공격 및 도청으로부터 전송 중 데이터 보호</li>
        <li>GDPR, PCI-DSS 등 규제의 전송 중 데이터 암호화 요구 사항 충족</li>
        <li>최신 TLS 버전과 강력한 암호화 스위트로 알려진 취약점 방어</li>
        <li>관리형 서비스를 통한 자동화된 HTTP에서 HTTPS로의 리다이렉트</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>조직 정책에 따라 암호화 요구 사항을 정의하고 최신 표준과 모범 사례를 기반으로 안전한 프로토콜만 허용합니다. AWS는 2024년 2월부로 TLS 1.2 이전 버전 사용을 중단했으며, TLS 1.3 사용을 권장합니다.</li>
        <li>Amazon CloudFront에서 HTTPS를 구성하고 보안 태세와 사용 사례에 맞는 보안 프로파일을 선택합니다. CloudFront에서 HTTP에서 HTTPS로의 자동 리다이렉트를 활성화합니다.</li>
        <li>Application Load Balancer에 HTTPS 리스너를 생성하고, 클라이언트가 지원하는 가장 강력한 암호화 스위트를 포함하는 보안 정책을 선택합니다.</li>
        <li>S3 버킷 정책에 aws:SecureTransport 조건을 추가하여 HTTPS를 통해서만 객체를 업로드할 수 있도록 제한합니다.</li>
        <li>Amazon RDS 및 Amazon Redshift에서 SSL/TLS 연결을 요구하도록 구성합니다.</li>
        <li>외부 연결에 IPsec VPN 사용을 고려하여 데이터 개인 정보 보호와 무결성을 모두 제공합니다. 공개 TLS 인증서에는 AWS Certificate Manager(ACM)를, 프라이빗 PKI 요구 사항에는 AWS Private CA를 사용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Certificate Manager(ACM) — 공개 TLS 인증서 프로비저닝 및 관리</li>
        <li>AWS Private Certificate Authority — 프라이빗 PKI 요구 사항 및 엔드-엔티티 X.509 인증서 발급</li>
        <li>Amazon CloudFront — HTTPS 구성 및 HTTP에서 HTTPS로의 자동 리다이렉트</li>
        <li>Application Load Balancer(ALB) — HTTPS 리스너 및 프로토콜 강제</li>
        <li>AWS Virtual Private Network(VPN) — 외부 연결을 위한 IPsec VPN</li>
        <li>AWS Direct Connect — 암호화 기능이 있는 전용 네트워크 연결</li>
        <li>Amazon S3 — HTTPS 전용 접근을 강제하는 버킷 정책</li>
        <li>보안 그룹 — VPC에서 안전하지 않은 HTTP 프로토콜 감사 및 차단</li>
      </ul>
      <PageNav />
    </article>
  );
}
