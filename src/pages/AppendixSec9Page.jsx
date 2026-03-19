import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec9Page() {
  return (
    <article className="doc-content">
      <h1>SEC 9 — 전송 중인 데이터를 어떻게 보호합니까?</h1>

      <p>
        네트워크를 통해 전송되는 데이터(Data in Transit)를 암호화하여
        도청과 중간자 공격(Man-in-the-Middle)으로부터 보호합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>SEC09-BP01:</strong> 안전한 키 및 인증서 관리 구현<br />
          <span>AWS Certificate Manager(ACM)를 사용하여 TLS/SSL 인증서를 자동으로 발급, 갱신, 배포합니다.</span>
        </li>
        <li>
          <strong>SEC09-BP02:</strong> 전송 중 암호화 적용<br />
          <span>모든 서비스 간 통신에 TLS 1.2 이상을 사용합니다. HTTP 트래픽을 HTTPS로 자동 리다이렉트합니다.</span>
        </li>
        <li>
          <strong>SEC09-BP03:</strong> 비인증 또는 비암호화 통신 인증<br />
          <span>서비스 메시(AWS App Mesh), mTLS(상호 TLS)를 사용하여 서비스 간 통신을 인증하고 암호화합니다.</span>
        </li>
        <li>
          <strong>SEC09-BP04:</strong> 액세스 패턴 모니터링<br />
          <span>VPC Flow Logs, ELB 액세스 로그를 통해 네트워크 트래픽 패턴을 모니터링하고 비정상적인 통신을 감지합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
