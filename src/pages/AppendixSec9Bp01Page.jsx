import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec9Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC09-BP01 — 전송 중 데이터 암호화 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        클라이언트와 서버 간, 서비스 간 모든 데이터 전송에 TLS/HTTPS 암호화를 적용합니다.
        암호화되지 않은 HTTP, FTP, Telnet 등의 프로토콜 사용을 차단하고, 안전하지 않은 TLS
        버전(TLS 1.0, 1.1)과 취약한 암호화 스위트 사용을 금지합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 외부 및 내부 트래픽이 TLS 1.2 이상으로 암호화됩니다. HTTP 요청은 자동으로 HTTPS로
        리다이렉트되고, 클라이언트는 HSTS를 통해 항상 HTTPS를 사용합니다. 취약한 TLS 버전과
        암호화 스위트 사용이 로드 밸런서와 API 게이트웨이 수준에서 차단됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>ALB 리스너를 HTTP(포트 80)만으로 구성하거나 HTTPS로 리다이렉트하지 않음</li>
        <li>TLS 1.0, 1.1 등 구식 프로토콜이 호환성 이유로 허용된 상태</li>
        <li>자체 서명 인증서를 사용하거나 인증서 유효성 검사를 비활성화함</li>
        <li>내부 서비스 간 통신에 평문 HTTP를 사용하여 내부 네트워크를 신뢰함</li>
        <li>S3에 대한 접근 시 HTTP 요청을 허용하는 버킷 정책 유지</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>네트워크 도청(중간자 공격, 패킷 스니핑)으로부터 전송 데이터 보호</li>
        <li>TLS 클라이언트 인증서로 통신 양 끝단의 신원을 검증</li>
        <li>GDPR, PCI-DSS 등 규제의 전송 중 데이터 암호화 요구 사항 충족</li>
        <li>최신 TLS 버전과 강력한 암호화 스위트로 알려진 취약점 방어</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Certificate Manager(ACM)를 사용하여 TLS 인증서를 무료로 발급·갱신하고, ALB/CloudFront/API Gateway에 적용합니다. ACM의 자동 갱신으로 인증서 만료 위험을 제거합니다.</li>
        <li>ALB 보안 정책을 ELBSecurityPolicy-TLS13-1-2-2021-06 이상으로 설정하여 TLS 1.2 미만 및 취약한 암호화 스위트를 차단합니다.</li>
        <li>ALB HTTP 리스너(포트 80)에서 HTTPS(포트 443)로의 301 영구 리다이렉트를 구성하고, CloudFront에서 HTTP to HTTPS 리다이렉트를 활성화합니다.</li>
        <li>S3 버킷 정책에 aws:SecureTransport 조건을 추가하여 HTTP를 통한 S3 접근을 거부합니다.</li>
        <li>CloudFront 배포에 HSTS(HTTP Strict Transport Security) 헤더를 추가하여 클라이언트가 항상 HTTPS를 사용하도록 강제합니다.</li>
        <li>AWS Config 규칙(alb-http-to-https-redirection-check, cloudfront-viewer-policy-https)으로 HTTPS 강제 적용 여부를 지속적으로 모니터링합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Certificate Manager(ACM) — TLS 인증서 무료 발급 및 자동 갱신</li>
        <li>AWS Application Load Balancer — TLS 종료 및 보안 정책 적용</li>
        <li>Amazon CloudFront — HTTPS 강제 및 TLS 설정 관리</li>
        <li>Amazon API Gateway — API 엔드포인트 TLS 암호화</li>
        <li>AWS Config — HTTPS 강제 적용 규정 준수 평가</li>
      </ul>
      <PageNav />
    </article>
  );
}
