import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec11Page() {
  return (
    <article className="doc-content">
      <h1>SEC 11 — 설계, 개발, 배포 수명 주기 전반에 걸쳐 애플리케이션의 보안 속성을 어떻게 통합하고 검증합니까?</h1>

      <p>
        보안은 애플리케이션 수명 주기의 모든 단계(설계, 개발, 테스트, 배포)에 통합되어야 합니다.
        "보안을 왼쪽으로(Shift Security Left)" 접근 방식을 통해 개발 초기에 보안 결함을 발견하고
        수정하여 비용과 위험을 줄입니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec11/bp01">SEC11-BP01: 애플리케이션 보안 교육</Link></strong><br />
          <span>개발팀이 일반적인 보안 취약점과 안전한 코딩 방법을 이해하도록 교육합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp02">SEC11-BP02: 개발 및 배포 수명 주기 전반에 걸쳐 테스트 자동화</Link></strong><br />
          <span>SAST, DAST, SCA 등 보안 테스트를 CI/CD 파이프라인에 통합하여 자동으로 실행합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp03">SEC11-BP03: 정기적인 침투 테스트 수행</Link></strong><br />
          <span>외부 전문가를 통한 침투 테스트로 자동화된 도구로 발견하기 어려운 취약점을 식별합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp04">SEC11-BP04: 코드 검토 수행</Link></strong><br />
          <span>보안 관점의 코드 검토를 개발 프로세스에 포함하여 보안 결함을 조기에 발견합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp05">SEC11-BP05: 패키지 및 의존성을 위한 서비스 중앙화</Link></strong><br />
          <span>승인된 패키지 저장소를 중앙화하여 악성 또는 취약한 의존성 사용을 방지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp06">SEC11-BP06: 소프트웨어 프로그래밍 방식으로 배포</Link></strong><br />
          <span>Infrastructure as Code(IaC)와 자동화된 배포 파이프라인을 사용하여 수동 오류를 제거합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp07">SEC11-BP07: 파이프라인의 보안 속성 정기적 평가</Link></strong><br />
          <span>CI/CD 파이프라인 자체의 보안(코드 서명, 파이프라인 권한 등)을 정기적으로 평가합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec11/bp08">SEC11-BP08: 워크로드 팀에 보안 소유권을 심는 프로그램 구축</Link></strong><br />
          <span>개발팀이 자신의 워크로드 보안에 책임감을 갖도록 보안 챔피언 프로그램과 문화를 구축합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
