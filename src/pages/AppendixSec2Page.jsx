import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Page() {
  return (
    <article className="doc-content">
      <h1>SEC 2 — 사람의 신원을 어떻게 관리합니까?</h1>

      <p>
        사람(직원, 계약자, 관리자)의 신원을 안전하게 관리하여
        올바른 사람이 올바른 리소스에 접근할 수 있도록 합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>SEC02-BP01:</strong> 강력한 로그인 메커니즘 사용<br />
          <span>MFA(다단계 인증)를 모든 사용자, 특히 권한이 높은 사용자에게 적용합니다.</span>
        </li>
        <li>
          <strong>SEC02-BP02:</strong> 중앙화된 자격 증명 공급자 사용<br />
          <span>AWS IAM Identity Center(SSO)를 사용하여 중앙에서 사용자 액세스를 관리합니다.</span>
        </li>
        <li>
          <strong>SEC02-BP03:</strong> 장기 자격 증명 비활성화<br />
          <span>IAM 사용자의 장기 액세스 키 대신 IAM 역할과 임시 자격 증명을 사용합니다.</span>
        </li>
        <li>
          <strong>SEC02-BP04:</strong> AWS에서 제공하는 도구를 사용한 자격 증명 감사<br />
          <span>IAM Credential Report와 Access Analyzer를 사용하여 자격 증명을 정기적으로 감사합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
