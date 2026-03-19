import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Page() {
  return (
    <article className="doc-content">
      <h1>PERF 1 — 최적의 아키텍처를 어떻게 선택합니까?</h1>

      <p>
        데이터 기반의 접근 방식을 통해 워크로드에 적합한 아키텍처 패턴과
        AWS 서비스를 선택합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf1/bp01">PERF01-BP01: 데이터 기반 아키텍처 결정 수행</Link></strong><br />
          <span>성능 요구사항을 정량화하고 다양한 옵션을 벤치마킹하여 데이터에 기반한 아키텍처 결정을 내립니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf1/bp02">PERF01-BP02: 참조 아키텍처 평가</Link></strong><br />
          <span>AWS 솔루션 아키텍트, AWS Solutions, AWS Quick Starts를 참고하여 검증된 아키텍처 패턴을 활용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf1/bp03">PERF01-BP03: 목표 성능 수치 정의</Link></strong><br />
          <span>응답 시간, 처리량, 가용성 등 측정 가능한 성능 목표를 정의합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf1/bp04">PERF01-BP04: 성능 아키텍처 선택 분석</Link></strong><br />
          <span>다양한 아키텍처 옵션을 비교하고 성능, 비용, 복잡성 간의 트레이드오프를 평가합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf1/bp05">PERF01-BP05: 상용 및 오픈소스 솔루션 평가</Link></strong><br />
          <span>AWS Marketplace의 상용 솔루션과 오픈소스 옵션을 평가하여 직접 구축 대비 장단점을 비교합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
