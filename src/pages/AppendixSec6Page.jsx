import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec6Page() {
  return (
    <article className="doc-content">
      <h1>SEC 6 — 네트워크 리소스를 어떻게 보호합니까?</h1>

      <p>
        다층 방어(Defense-in-Depth) 전략을 적용하여 네트워크 인프라를 보호합니다.
        트래픽 흐름을 제어하고 악의적인 네트워크 활동을 차단합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>SEC06-BP01:</strong> 네트워크 레이어 생성<br />
          <span>퍼블릭, 프라이빗 서브넷으로 네트워크를 계층화하여 민감한 리소스를 인터넷에서 격리합니다.</span>
        </li>
        <li>
          <strong>SEC06-BP02:</strong> 모든 네트워크 트래픽 제어<br />
          <span>보안 그룹, 네트워크 ACL을 사용하여 인바운드/아웃바운드 트래픽을 명시적으로 제어합니다.</span>
        </li>
        <li>
          <strong>SEC06-BP03:</strong> 네트워크 경계 자동화 및 구성<br />
          <span>AWS Firewall Manager를 사용하여 여러 계정에 걸쳐 네트워크 방화벽 정책을 중앙에서 관리합니다.</span>
        </li>
        <li>
          <strong>SEC06-BP04:</strong> AWS 네이티브 네트워킹 서비스 활용<br />
          <span>VPC, AWS PrivateLink, VPC 엔드포인트를 사용하여 인터넷을 거치지 않는 안전한 통신 경로를 구성합니다.</span>
        </li>
        <li>
          <strong>SEC06-BP05:</strong> 관리형 보호 서비스 활용<br />
          <span>AWS Shield(DDoS 보호), AWS WAF(웹 방화벽), Amazon CloudFront를 활용하여 엣지에서의 위협을 차단합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
