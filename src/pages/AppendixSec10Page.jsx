import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec10Page() {
  return (
    <article className="doc-content">
      <h1>SEC 10 — 보안 사고를 어떻게 예상하고, 대응하고, 복구합니까?</h1>

      <p>
        보안 사고에 효과적으로 대응하려면 사전에 준비된 프로세스, 도구, 훈련된 인력이 필요합니다.
        사고 발생 전에 대응 계획을 수립하고, 포렌식 역량을 갖추며, 시뮬레이션을 통해 대응 능력을
        지속적으로 검증하고 개선합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec10/bp01">SEC10-BP01: 핵심 인력 및 외부 리소스 식별</Link></strong><br />
          <span>사고 대응에 필요한 내부 핵심 인력과 외부 지원 리소스(AWS Support, 법률팀 등)를 사전에 식별합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp02">SEC10-BP02: 사고 관리 계획 개발</Link></strong><br />
          <span>보안 사고 발생 시 따를 공식적인 사고 관리 계획을 문서화하고 최신 상태로 유지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp03">SEC10-BP03: 포렌식 역량 준비</Link></strong><br />
          <span>사고 조사를 위한 포렌식 도구, 프로세스, 훈련된 인력을 사전에 준비합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp04">SEC10-BP04: 보안 사고 대응 플레이북 개발 및 테스트</Link></strong><br />
          <span>주요 보안 시나리오에 대한 상세한 대응 절차를 플레이북으로 작성하고 정기적으로 테스트합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp05">SEC10-BP05: 액세스 사전 프로비저닝</Link></strong><br />
          <span>사고 대응에 필요한 도구와 권한을 사전에 준비하여 사고 발생 시 신속하게 대응합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp06">SEC10-BP06: 도구 사전 배포</Link></strong><br />
          <span>사고 대응에 필요한 도구를 사전에 배포하여 사고 발생 시 즉시 활용할 수 있도록 준비합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp07">SEC10-BP07: 시뮬레이션 실행</Link></strong><br />
          <span>게임데이(Game Day), 레드팀 훈련 등 시뮬레이션을 통해 사고 대응 역량을 정기적으로 검증합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec10/bp08">SEC10-BP08: 사고에서 학습하는 프레임워크 수립</Link></strong><br />
          <span>모든 보안 사고와 훈련에서 교훈을 도출하고 지속적인 개선에 반영하는 프로세스를 수립합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
