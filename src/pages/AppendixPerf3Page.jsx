import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf3Page() {
  return (
    <article className="doc-content">
      <h1>PERF 3 — 워크로드에서 데이터를 어떻게 저장, 관리 및 액세스합니까?</h1>

      <p>
        최적의 솔루션은 특정 워크로드마다 다르며, 종종 여러 접근 방식을 결합합니다.
        데이터 스토어는 관계형 데이터베이스, 비관계형 데이터베이스, 객체 스토리지 등 다양한 형태로 제공됩니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf3/bp01">PERF03-BP01: 데이터 액세스 및 스토리지 요구사항을 가장 잘 지원하는 목적별 데이터 스토어 사용</Link></strong><br />
          <span>데이터 액세스 패턴과 스토리지 요구사항에 맞는 목적별 데이터 스토어를 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf3/bp02">PERF03-BP02: 데이터 스토어의 사용 가능한 구성 옵션 평가</Link></strong><br />
          <span>데이터 스토어에서 사용 가능한 구성 옵션을 평가하고 최적화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf3/bp03">PERF03-BP03: 데이터 스토어 성능 메트릭 수집 및 기록</Link></strong><br />
          <span>데이터 스토어 성능과 관련된 메트릭을 수집하고 기록합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf3/bp04">PERF03-BP04: 데이터 스토어의 쿼리 성능 향상 전략 구현</Link></strong><br />
          <span>데이터 스토어에서 쿼리 성능을 향상시키는 전략을 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf3/bp05">PERF03-BP05: 캐싱을 활용하는 데이터 액세스 패턴 구현</Link></strong><br />
          <span>캐싱을 활용한 데이터 액세스 패턴을 구현하여 성능을 향상시킵니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
