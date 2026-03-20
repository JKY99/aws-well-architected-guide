import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Page() {
  return (
    <article className="doc-content">
      <h1>SEC 1 — 워크로드를 안전하게 운영하려면 어떻게 해야 합니까?</h1>
      <p>
        워크로드를 안전하게 운영하려면 보안의 모든 영역에 포괄적인 모범 사례를 적용해야 합니다. 조직 및 워크로드 수준의 운영 우수성 요건을 모든 보안 영역에 적용하고, AWS 및 업계 권고 사항과 위협 인텔리전스를 최신 상태로 유지하며, 보안 프로세스·테스트·유효성 검사를 자동화하여 보안 운영을 확장합니다.
      </p>
      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec1/bp01">SEC01-BP01: 계정으로 워크로드 분리</Link></strong><br />
          <span>AWS 다중 계정 전략을 통해 워크로드와 환경을 별도 계정으로 분리하여 보안 격리 경계를 구축합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec1/bp02">SEC01-BP02: 계정 루트 사용자 및 속성 보호</Link></strong><br />
          <span>루트 사용자의 프로그래밍 방식 액세스를 비활성화하고, MFA를 설정하며, 루트 자격 증명의 사용을 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec1/bp03">SEC01-BP03: 제어 목표 식별 및 검증</Link></strong><br />
          <span>규정 준수 요건과 위협 모델에서 도출한 제어 목표를 정의하고, 자동화를 통해 통제의 효과성을 지속적으로 측정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec1/bp04">SEC01-BP04: 보안 위협 및 권고 사항 최신 상태 유지</Link></strong><br />
          <span>업계 위협 인텔리전스 간행물과 데이터 피드를 모니터링하고, 최신 위협 데이터를 자동으로 업데이트하는 관리형 서비스를 활용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec1/bp05">SEC01-BP05: 보안 관리 범위 축소</Link></strong><br />
          <span>AWS 관리형 서비스를 활용하여 인프라 프로비저닝, 소프트웨어 설정, 패치, 백업 등 보안 관리 작업의 범위를 줄입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec1/bp06">SEC01-BP06: 표준 보안 제어의 배포 자동화</Link></strong><br />
          <span>IaC 템플릿으로 표준 보안 제어를 정의하고, CI/CD 파이프라인을 통해 자동으로 테스트하고 배포합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec1/bp07">SEC01-BP07: 위협 모델을 사용하여 위협 식별 및 완화 우선순위 지정</Link></strong><br />
          <span>체계적인 위협 모델링을 수행하여 잠재적 위협을 식별하고, 완화 전략의 우선순위를 정해 보안 자원을 효과적으로 배분합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec1/bp08">SEC01-BP08: 새로운 보안 서비스 및 기능을 정기적으로 평가하고 구현</Link></strong><br />
          <span>AWS 및 AWS 파트너의 신규 보안 서비스와 기능을 정기적으로 평가하여 워크로드의 보안 태세를 발전시킵니다.</span>
        </li>
      </ul>
      <PageNav />
    </article>
  );
}
