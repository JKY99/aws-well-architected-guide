import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf8Page() {
  return (
    <article className="doc-content">
      <h1>PERF 8 — 성능 향상을 위해 어떻게 트레이드오프를 활용합니까?</h1>

      <p>
        성능 향상을 위해 일관성, 내구성, 공간 등을 트레이드오프 할 수 있습니다.
        워크로드에 맞는 최적의 트레이드오프를 식별하고 적용합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf8/bp01">PERF08-BP01: 서비스 선택 이해</Link></strong><br />
          <span>각 AWS 서비스가 제공하는 트레이드오프(일관성 vs. 가용성, 지연 시간 vs. 처리량 등)를 이해합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf8/bp02">PERF08-BP02: 성능을 위한 일관성 트레이드오프</Link></strong><br />
          <span>최종적 일관성(Eventual Consistency)을 허용할 수 있는 경우 이를 활용하여 성능을 향상시킵니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf8/bp03">PERF08-BP03: 읽기 성능 향상을 위한 캐싱 활용</Link></strong><br />
          <span>Amazon ElastiCache, Amazon CloudFront를 사용하여 자주 조회되는 데이터를 캐싱합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf8/bp04">PERF08-BP04: 지리적 분산을 통한 성능 개선</Link></strong><br />
          <span>CloudFront, Global Accelerator, 멀티 리전 배포를 통해 전 세계 사용자에게 낮은 지연 시간을 제공합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf8/bp05">PERF08-BP05: 파티셔닝을 통한 성능 향상</Link></strong><br />
          <span>데이터와 처리를 수평으로 파티셔닝하여 단일 노드의 처리 부담을 분산합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
