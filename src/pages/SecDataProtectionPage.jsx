import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SecDataProtectionPage() {
  return (
    <article className="doc-content">
      <h1>보안 — 데이터 보호</h1>

      <p>
        워크로드 설계 전, 보안에 영향을 미치는 기본 관행을 먼저 확립해야 합니다.
        데이터 분류는 민감도 수준에 따라 데이터를 범주화하는 방법을 제공하며,
        암호화는 무단 접근에 대해 데이터를 판독 불가 상태로 만들어 보호합니다.
        이 방법들은 데이터 오취급 방지 및 규제 의무 준수를 위해 중요합니다.
      </p>

      <h2>데이터 분류 (Data Classification)</h2>
      <p>
        데이터를 중요도와 민감도에 따라 분류하여 적절한 보호·보존 제어를 결정합니다.
      </p>
      <ul>
        <li><strong>SEC07-BP01:</strong> 데이터 분류 체계 이해</li>
        <li><strong>SEC07-BP02:</strong> 데이터 민감도에 따른 보호 제어 적용</li>
        <li><strong>SEC07-BP03:</strong> 자동화된 식별 및 분류</li>
        <li><strong>SEC07-BP04:</strong> 확장 가능한 데이터 수명 주기 관리 정의</li>
      </ul>

      <h2>저장 데이터 보호 (Protecting Data at Rest)</h2>
      <p>
        저장 상태의 데이터를 암호화 및 접근 제어를 통해 보호합니다.
        AWS Key Management Service(KMS)를 사용하여 암호화 키를 중앙에서 관리합니다.
      </p>

      <h2>전송 중 데이터 보호 (Protecting Data in Transit)</h2>
      <p>
        네트워크를 통해 이동 중인 데이터를 TLS/SSL을 사용하여 암호화합니다.
        Certificate Manager를 사용하여 TLS 인증서를 관리합니다.
      </p>

      <PageNav />
    </article>
  );
}
