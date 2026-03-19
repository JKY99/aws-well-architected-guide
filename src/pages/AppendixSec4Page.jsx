import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec4Page() {
  return (
    <article className="doc-content">
      <h1>SEC 4 — 사람과 머신에 대한 권한을 어떻게 관리합니까?</h1>

      <p>
        최소 권한 원칙에 따라 사용자와 서비스에 필요한 최소한의 권한만 부여합니다.
        권한을 정기적으로 검토하고 불필요한 권한을 제거합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec4/bp01">SEC04-BP01: 서비스 및 애플리케이션 로깅 구성</Link></strong><br />
          <span>각 역할과 서비스에 필요한 최소한의 권한만 부여합니다. 와일드카드 권한 사용을 피합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec4/bp02">SEC04-BP02: 표준 위치에 로그 및 보안 결과 수집</Link></strong><br />
          <span>SCP, 권한 경계(Permission Boundaries)를 사용하여 최대 권한 한도를 설정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec4/bp03">SEC04-BP03: 보안 경고 상관 분석 및 강화</Link></strong><br />
          <span>액세스 검토를 정기적으로 수행하고 사용하지 않는 권한을 제거합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec4/bp04">SEC04-BP04: 비규정 준수 리소스 자동 수정</Link></strong><br />
          <span>IAM Access Analyzer를 사용하여 외부에 노출된 리소스와 불필요한 액세스를 식별합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
