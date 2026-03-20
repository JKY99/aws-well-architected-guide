import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf4Page() {
  return (
    <article className="doc-content">
      <h1>PERF 4 — 워크로드에서 네트워킹 리소스를 어떻게 선택하고 구성합니까?</h1>

      <p>
        최적의 네트워킹 솔루션은 특정 워크로드마다 다릅니다.
        지연 시간, 처리량, 지터, 대역폭 요구사항이 솔루션 선택에 영향을 줍니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf4/bp01">PERF04-BP01: 네트워킹이 성능에 미치는 영향 이해</Link></strong><br />
          <span>네트워킹이 워크로드 성능에 미치는 영향을 이해합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf4/bp02">PERF04-BP02: 사용 가능한 네트워킹 기능 평가</Link></strong><br />
          <span>사용 가능한 네트워킹 기능을 평가하고 최적화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf4/bp03">PERF04-BP03: 워크로드에 적합한 전용 연결 또는 VPN 선택</Link></strong><br />
          <span>워크로드 요구사항에 맞는 전용 연결 또는 VPN을 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf4/bp04">PERF04-BP04: 부하 분산을 사용하여 여러 리소스에 트래픽 분산</Link></strong><br />
          <span>부하 분산을 활용하여 트래픽을 여러 리소스에 효율적으로 분산합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf4/bp05">PERF04-BP05: 성능 향상을 위한 네트워크 프로토콜 선택</Link></strong><br />
          <span>성능 향상에 적합한 네트워크 프로토콜을 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf4/bp06">PERF04-BP06: 네트워크 요구사항에 따른 워크로드 위치 선택</Link></strong><br />
          <span>네트워크 요구사항을 기반으로 워크로드 배치 위치를 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf4/bp07">PERF04-BP07: 메트릭 기반 네트워크 구성 최적화</Link></strong><br />
          <span>메트릭 데이터를 기반으로 네트워크 구성을 최적화합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
