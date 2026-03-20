import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec10Page() {
  return (
    <article className="doc-content">
      <h1>SEC 10 — 보안 사고를 어떻게 예상하고, 대응하고, 복구합니까?</h1>

      <p>
        보안 사고에 효과적으로 대응하려면 사전에 준비된 프로세스, 도구, 훈련된 인력이 필요합니다. 핵심 인력 식별, 사고 관리 계획 수립, 포렌식 역량 준비, 플레이북 개발, 접근 권한 사전 프로비저닝, 도구 사전 배포, 시뮬레이션 실행, 학습 프레임워크 수립을 통해 사고 대응 역량을 지속적으로 강화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec10/bp01">SEC10-BP01: 핵심 인력 및 외부 리소스 식별</Link></strong><br />
          <span>조직이 사고에 대응하는 데 도움이 되는 내부 및 외부 인력, 리소스, 법적 의무를 식별합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp02">SEC10-BP02: 사고 관리 계획 개발</Link></strong><br />
          <span>보안 사고를 적시에 식별, 수정, 대응하기 위한 구조화된 사고 대응 프로그램의 기반이 되는 계획을 수립합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp03">SEC10-BP03: 포렌식 역량 준비</Link></strong><br />
          <span>보안 사고 조사를 지원하기 위해 수집, 검토, 분석, 보고의 4단계 포렌식 방법론을 사전에 준비합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp04">SEC10-BP04: 보안 사고 대응 플레이북 개발 및 테스트</Link></strong><br />
          <span>보안 이벤트 발생 시 따라야 할 규범적인 지침과 단계를 플레이북으로 개발하고 정기적으로 테스트합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp05">SEC10-BP05: 접근 사전 프로비저닝</Link></strong><br />
          <span>사고 대응자가 조사부터 복구까지 필요한 AWS 접근 권한을 사전에 프로비저닝하여 대응 시간을 단축합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp06">SEC10-BP06: 도구 사전 배포</Link></strong><br />
          <span>탐지, 조사, 복구를 위한 도구를 사전에 배포하고 자동화하여 알림 피로를 해소하고 사고 대응 속도를 높입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp07">SEC10-BP07: 시뮬레이션 실행</Link></strong><br />
          <span>테이블탑 연습, 퍼플팀, 레드팀 등 다양한 시뮬레이션을 통해 사고 대응 역량을 정기적으로 검증하고 개선합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp08">SEC10-BP08: 사고에서 학습하는 프레임워크 수립</Link></strong><br />
          <span>교훈 프레임워크와 근본 원인 분석 역량을 구현하여 사고 대응 역량을 개선하고 사고 재발을 방지합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
