import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Page() {
  return (
    <article className="doc-content">
      <h1>PERF 1 — 워크로드에 적합한 클라우드 리소스와 아키텍처를 어떻게 선택합니까?</h1>

      <p>
        특정 워크로드에 최적화된 솔루션은 다양하며, 여러 접근 방식을 조합하는 경우가 많습니다.
        Well-Architected 워크로드는 다양한 솔루션과 기능을 활용하여 성능을 향상시킵니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf1/bp01">PERF01-BP01: 사용 가능한 클라우드 서비스 및 기능 파악</Link></strong><br />
          <span>사용 가능한 클라우드 서비스와 기능을 파악하고 이해합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf1/bp02">PERF01-BP02: 클라우드 공급자 또는 파트너의 지침 활용</Link></strong><br />
          <span>클라우드 공급자 또는 적합한 파트너의 지침을 통해 아키텍처 패턴과 모범 사례를 학습합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf1/bp03">PERF01-BP03: 아키텍처 결정 시 비용 고려</Link></strong><br />
          <span>아키텍처 결정 시 비용을 중요한 요소로 반영합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf1/bp04">PERF01-BP04: 트레이드오프가 고객과 아키텍처 효율성에 미치는 영향 평가</Link></strong><br />
          <span>트레이드오프가 고객 경험과 아키텍처 효율성에 미치는 영향을 평가합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf1/bp05">PERF01-BP05: 정책 및 참조 아키텍처 활용</Link></strong><br />
          <span>검증된 정책과 참조 아키텍처를 활용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf1/bp06">PERF01-BP06: 벤치마킹을 통한 아키텍처 결정</Link></strong><br />
          <span>벤치마킹을 활용하여 아키텍처 결정을 주도합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf1/bp07">PERF01-BP07: 아키텍처 선택에 데이터 기반 접근 방식 사용</Link></strong><br />
          <span>데이터 기반 접근 방식을 통해 아키텍처를 선택합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
