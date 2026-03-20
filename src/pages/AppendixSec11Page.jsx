import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec11Page() {
  return (
    <article className="doc-content">
      <h1>SEC 11 — 설계, 개발, 배포 수명 주기 전반에 걸쳐 애플리케이션의 보안 속성을 어떻게 통합하고 검증합니까?</h1>

      <p>
        애플리케이션 보안은 설계, 개발, 테스트, 배포 수명 주기 전반에 통합되어야 합니다. 빌더에게 보안 교육을 제공하고, 개발 및 릴리스 수명 주기 전반에 걸쳐 보안 테스트를 자동화하며, 침투 테스트 및 코드 검토를 수행합니다. 또한 패키지와 의존성을 위한 서비스를 중앙화하고, 소프트웨어를 프로그래밍 방식으로 배포하며, 파이프라인 보안을 정기적으로 평가하고, 워크로드 팀에 보안 소유권을 심는 프로그램을 구축합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec11/bp01">SEC11-BP01: 애플리케이션 보안 교육</Link></strong><br />
          <span>빌더에게 위협 모델링, 안전한 코딩 방법, 일반적인 보안 취약점에 대한 교육을 제공하고 자가 학습 리소스를 지원합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp02">SEC11-BP02: 개발 및 배포 수명 주기 전반에 걸쳐 테스트 자동화</Link></strong><br />
          <span>개발 및 릴리스 수명 주기 전반에 걸쳐 SAST, DAST, SBOM 스캔 등 보안 속성에 대한 테스트를 자동화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp03">SEC11-BP03: 정기적인 침투 테스트 수행</Link></strong><br />
          <span>자동화된 테스트나 수동 코드 검토로 탐지하기 어려운 잠재적 보안 문제를 식별하기 위해 정기적인 침투 테스트를 수행합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp04">SEC11-BP04: 코드 검토 수행</Link></strong><br />
          <span>개발 중인 소프트웨어의 품질과 보안을 검증하기 위해 코드 검토를 구현하고 자동화된 도구를 활용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp05">SEC11-BP05: 패키지 및 의존성을 위한 서비스 중앙화</Link></strong><br />
          <span>팀이 소프트웨어 패키지 및 의존성을 얻을 수 있는 중앙 집중식 서비스를 제공하여 공급망 보안을 강화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp06">SEC11-BP06: 소프트웨어 프로그래밍 방식으로 배포</Link></strong><br />
          <span>인적 오류를 줄이기 위해 가능한 한 프로그래밍 방식으로 소프트웨어를 배포하고 프로덕션 환경에서 지속적인 인간 접근을 제거합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp07">SEC11-BP07: 파이프라인의 보안 속성 정기적 평가</Link></strong><br />
          <span>CI/CD 파이프라인의 보안 속성을 정기적으로 평가합니다. 파이프라인 침해는 워크로드 소프트웨어만큼 위험할 수 있습니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp08">SEC11-BP08: 워크로드 팀에 보안 소유권을 심는 프로그램 구축</Link></strong><br />
          <span>Security Guardians, Security Champions와 같은 프로그램을 통해 빌더가 보안 소유권을 갖도록 커뮤니티와 온보딩 프로그램을 구축합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
