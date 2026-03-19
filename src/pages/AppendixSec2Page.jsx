import { Link } from "react-router-dom";
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
          <strong><Link to="/appendix/security/sec2/bp01">SEC02-BP01: 강력한 로그인 메커니즘 사용</Link></strong><br />
          <span>MFA(다단계 인증)를 모든 사용자, 특히 권한이 높은 사용자에게 적용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec2/bp02">SEC02-BP02: 임시 자격 증명 사용</Link></strong><br />
          <span>IAM 사용자의 장기 액세스 키 대신 IAM 역할과 임시 자격 증명을 사용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec2/bp03">SEC02-BP03: 비밀 안전하게 저장 및 사용</Link></strong><br />
          <span>AWS Secrets Manager를 사용하여 데이터베이스 자격 증명, API 키 등 비밀을 안전하게 관리합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec2/bp04">SEC02-BP04: 중앙 집중식 자격 증명 관리</Link></strong><br />
          <span>AWS IAM Identity Center(SSO)를 사용하여 중앙에서 사용자 액세스를 관리합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec2/bp05">SEC02-BP05: 자격 증명 주기적 감사 및 교체</Link></strong><br />
          <span>IAM Credential Report와 Access Analyzer를 사용하여 자격 증명을 정기적으로 감사합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec2/bp06">SEC02-BP06: 사용자 그룹 및 속성 활용</Link></strong><br />
          <span>개별 권한 대신 그룹과 역할을 사용하여 권한 관리를 효율화합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
