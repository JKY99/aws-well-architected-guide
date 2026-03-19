import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec5Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC05-BP02 — 모든 계층에서 트래픽 제어</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        네트워크의 각 계층(인터넷 경계, VPC 경계, 서브넷, 인스턴스)에서 적절한 트래픽 제어
        메커니즘을 적용합니다. 단일 지점의 네트워크 제어에만 의존하면 해당 제어가 우회될 경우
        전체 네트워크가 노출됩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 네트워크 계층에서 허용된 트래픽만 통과하고, 불필요한 포트와 프로토콜은 기본적으로
        차단됩니다. 웹 애플리케이션 트래픽은 WAF를 통해 애플리케이션 계층 공격으로부터 보호되고,
        보안 그룹과 NACL이 이중으로 적용됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>보안 그룹에서 0.0.0.0/0 (모든 IP)으로 인바운드 트래픽 허용</li>
        <li>NACL을 기본값(모든 트래픽 허용)으로 유지하여 서브넷 수준 제어 미사용</li>
        <li>개발 편의를 위해 프로덕션 환경에서 22번(SSH), 3389번(RDP) 포트를 인터넷에 개방</li>
        <li>보안 그룹 규칙을 점진적으로 추가만 하고 정리하지 않아 불필요한 규칙 누적</li>
        <li>WAF 없이 웹 애플리케이션을 인터넷에 직접 노출</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>다중 계층 트래픽 제어로 단일 실패 지점 없는 방어 체계 구축</li>
        <li>불필요한 포트 차단으로 취약점 스캔 및 무차별 공격(brute force) 위험 감소</li>
        <li>WAF를 통한 OWASP Top 10 공격(SQLi, XSS 등) 차단</li>
        <li>네트워크 트래픽 정책을 코드로 관리하여 변경 추적 및 감사 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>보안 그룹은 최소 허용 원칙(기본 거부)으로 구성하고, IP 대신 보안 그룹 참조를 사용하여 동적 IP 환경에 대응합니다.</li>
        <li>NACL은 서브넷 수준의 추가 방어선으로 활용하고, 알려진 악성 IP 범위를 명시적으로 차단합니다.</li>
        <li>AWS WAF를 ALB, CloudFront, API Gateway에 연결하고 AWS Managed Rules를 기본으로 적용합니다.</li>
        <li>프로덕션 환경의 SSH/RDP 접근은 보안 그룹으로 차단하고, AWS Systems Manager Session Manager를 사용합니다.</li>
        <li>보안 그룹 규칙을 Infrastructure as Code로 관리하고, 정기적으로 미사용 규칙을 정리합니다.</li>
        <li>AWS Firewall Manager를 사용하여 조직 전체의 보안 그룹 및 WAF 정책을 중앙에서 관리합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC 보안 그룹 — 인스턴스 수준 인바운드/아웃바운드 트래픽 제어</li>
        <li>Amazon VPC NACL — 서브넷 수준 트래픽 필터링</li>
        <li>AWS WAF — 웹 애플리케이션 계층 공격 차단</li>
        <li>AWS Firewall Manager — 조직 전체 방화벽 정책 중앙 관리</li>
        <li>AWS Systems Manager Session Manager — 보안 그룹 없이 안전한 인스턴스 접근</li>
      </ul>
      <PageNav />
    </article>
  );
}
