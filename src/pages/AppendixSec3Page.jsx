import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Page() {
  return (
    <article className="doc-content">
      <h1>SEC 3 — 사람과 시스템의 권한을 어떻게 관리합니까?</h1>

      <p>
        사람과 시스템 모두에 대한 권한을 안전하게 관리하여 최소 권한 원칙을 적용하고 올바른 ID가 올바른 리소스에만 접근할 수 있도록 합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec3/bp01">SEC03-BP01: 액세스 요건 정의</Link></strong><br />
          <span>각 구성 요소 또는 리소스에 누가/무엇이 접근해야 하는지 명확히 정의합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp02">SEC03-BP02: 최소 권한 액세스 부여</Link></strong><br />
          <span>사용자가 특정 직무를 수행하는 데 필요한 최소한의 권한만 부여합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp03">SEC03-BP03: 긴급 액세스 프로세스 수립</Link></strong><br />
          <span>일반 접근 시스템 장애 시 긴급 접근을 위한 프로세스를 수립하고 문서화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp04">SEC03-BP04: 지속적인 권한 최소화</Link></strong><br />
          <span>IAM Access Analyzer를 활용하여 미사용 권한을 지속적으로 식별하고 제거합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp05">SEC03-BP05: 조직 권한 가드레일 정의</Link></strong><br />
          <span>SCP와 권한 경계를 사용하여 조직 전체의 최대 권한 범위를 정의합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp06">SEC03-BP06: 수명 주기에 따른 액세스 관리</Link></strong><br />
          <span>직원의 입사, 역할 변경, 퇴사 등 생명주기 전반에 걸쳐 권한을 모니터링하고 조정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp07">SEC03-BP07: 퍼블릭 및 교차 계정 액세스 분석</Link></strong><br />
          <span>어떤 AWS 리소스가 공유되고 누구와 공유되는지 파악하고 지속적으로 감사합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp08">SEC03-BP08: 조직 내 리소스 안전하게 공유</Link></strong><br />
          <span>AWS Organizations와 AWS RAM을 사용하여 조직 내에서만 리소스를 안전하게 공유합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp09">SEC03-BP09: 제3자와 리소스 안전하게 공유</Link></strong><br />
          <span>교차 계정 역할과 외부 ID를 사용하여 제3자와 안전하게 리소스를 공유합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
