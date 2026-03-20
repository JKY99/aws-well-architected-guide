import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf5Page() {
  return (
    <article className="doc-content">
      <h1>PERF 5 — 조직의 관행과 문화는 워크로드의 성능 효율성에 어떻게 기여합니까?</h1>

      <p>
        성능 효율성을 지속적으로 개선하기 위해 조직 차원의 프로세스와 문화를 갖추는 것이 중요합니다.
        팀이 성능을 우선시하고 지속적으로 개선할 수 있는 환경을 조성합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf5/bp01">PERF05-BP01: 워크로드 상태 및 성능 측정을 위한 KPI 수립</Link></strong><br />
          <span>워크로드 상태와 성능을 측정하기 위한 핵심 성과 지표(KPI)를 수립합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf5/bp02">PERF05-BP02: 모니터링 솔루션을 통한 성능 중요 영역 파악</Link></strong><br />
          <span>모니터링 솔루션을 사용하여 성능이 가장 중요한 영역을 파악합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf5/bp03">PERF05-BP03: 워크로드 성능 개선 프로세스 정의</Link></strong><br />
          <span>워크로드 성능을 지속적으로 개선하기 위한 프로세스를 정의합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf5/bp04">PERF05-BP04: 워크로드 부하 테스트</Link></strong><br />
          <span>워크로드에 대한 부하 테스트를 수행하여 성능 한계를 파악합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf5/bp05">PERF05-BP05: 자동화를 통한 성능 관련 문제 사전 해결</Link></strong><br />
          <span>자동화를 활용하여 성능 관련 문제를 사전에 감지하고 해결합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf5/bp06">PERF05-BP06: 워크로드 및 서비스 최신 상태 유지</Link></strong><br />
          <span>워크로드와 서비스를 최신 상태로 유지하여 성능 개선 사항을 활용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf5/bp07">PERF05-BP07: 정기적인 메트릭 검토</Link></strong><br />
          <span>정기적으로 메트릭을 검토하여 성능 추세와 개선 기회를 파악합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
