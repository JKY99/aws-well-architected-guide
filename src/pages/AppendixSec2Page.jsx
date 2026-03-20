import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Page() {
  return (
    <article className="doc-content">
      <h1>SEC 2 — 사람과 시스템의 인증을 어떻게 관리합니까?</h1>

      <p>
        사람과 시스템 모두에 대한 인증을 안전하게 관리하여 올바른 ID가 올바른 리소스에 접근할 수 있도록 합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec2/bp01">SEC02-BP01: 강력한 로그인 메커니즘 사용</Link></strong><br />
          <span>MFA 및 강력한 암호 정책을 적용하여 자격 증명 기반 공격으로부터 보호합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec2/bp02">SEC02-BP02: 임시 자격 증명 사용</Link></strong><br />
          <span>사람과 시스템 ID 모두에 대해 장기 자격 증명 대신 임시 자격 증명을 사용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec2/bp03">SEC02-BP03: 보안 비밀을 안전하게 저장하고 사용</Link></strong><br />
          <span>AWS Secrets Manager를 통해 보안 비밀을 암호화 저장하고 자동 교체합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec2/bp04">SEC02-BP04: 중앙 집중식 자격 증명 공급자 활용</Link></strong><br />
          <span>AWS IAM Identity Center를 사용하여 중앙화된 자격 증명 공급자로 연동합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec2/bp05">SEC02-BP05: 자격 증명 주기적 감사 및 교체</Link></strong><br />
          <span>장기 자격 증명을 정기적으로 감사하고 90일 이내 주기로 교체합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec2/bp06">SEC02-BP06: 사용자 그룹 및 속성 활용</Link></strong><br />
          <span>개별 사용자 권한 관리 대신 그룹과 속성을 활용하여 권한을 효율적으로 관리합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
