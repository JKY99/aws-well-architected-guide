import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Page() {
  return (
    <article className="doc-content">
      <h1>SEC 3 — 머신의 신원을 어떻게 관리합니까?</h1>

      <p>
        애플리케이션, 서비스, AWS 서비스 등 머신(비사람) 신원을 안전하게 관리하여
        서비스 간 통신과 리소스 접근을 안전하게 합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec3/bp01">SEC03-BP01: 액세스 요건 정의</Link></strong><br />
          <span>EC2 인스턴스 프로파일, ECS 태스크 역할 등 임시 자격 증명을 사용하여 정적 자격 증명을 코드에 내장하지 않습니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp02">SEC03-BP02: 최소 권한 액세스 부여</Link></strong><br />
          <span>AWS 서비스가 다른 서비스에 접근할 때 IAM 서비스 역할을 사용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp03">SEC03-BP03: 긴급 액세스 프로세스 수립</Link></strong><br />
          <span>OpenID Connect(OIDC), SAML 등 외부 자격 증명 공급자를 통해 AWS 리소스에 접근합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp04">SEC03-BP04: 지속적인 권한 최소화</Link></strong><br />
          <span>AWS Secrets Manager를 사용하여 데이터베이스 자격 증명, API 키 등 시크릿을 안전하게 저장하고 자동으로 순환합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp05">SEC03-BP05: 조직 권한 가드레일 정의</Link></strong><br />
          <span>AWS Organizations SCPs를 사용하여 조직 전체에 적용되는 권한 경계와 제어를 정의합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp06">SEC03-BP06: 수명 주기에 따른 액세스 관리</Link></strong><br />
          <span>직원의 입사, 역할 변경, 퇴사 등 수명 주기에 따라 액세스를 자동으로 관리합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp07">SEC03-BP07: 퍼블릭 및 교차 계정 액세스 분석</Link></strong><br />
          <span>IAM Access Analyzer를 사용하여 외부에 노출된 리소스와 교차 계정 액세스를 지속적으로 식별합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp08">SEC03-BP08: 조직 내 리소스 안전하게 공유</Link></strong><br />
          <span>AWS Resource Access Manager(RAM)를 사용하여 조직 내에서 리소스를 안전하게 공유합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec3/bp09">SEC03-BP09: 제3자와 리소스 안전하게 공유</Link></strong><br />
          <span>외부 파트너 및 제3자에게 리소스를 공유할 때 최소 권한 원칙과 명시적 신뢰 관계를 적용합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
