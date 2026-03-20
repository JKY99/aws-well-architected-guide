import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf2Page() {
  return (
    <article className="doc-content">
      <h1>PERF 2 — 워크로드에서 컴퓨팅 리소스를 어떻게 선택하고 사용합니까?</h1>

      <p>
        최적의 솔루션은 특정 워크로드마다 다르며, 솔루션은 종종 여러 접근 방식을 결합합니다.
        컴퓨팅 솔루션은 인스턴스, 컨테이너, 함수 형태로 제공될 수 있습니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf2/bp01">PERF02-BP01: 워크로드에 가장 적합한 컴퓨팅 옵션 선택</Link></strong><br />
          <span>워크로드 특성에 맞는 최적의 컴퓨팅 옵션을 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf2/bp02">PERF02-BP02: 사용 가능한 컴퓨팅 구성 및 기능 이해</Link></strong><br />
          <span>사용 가능한 컴퓨팅 구성 옵션과 기능을 파악하고 이해합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf2/bp03">PERF02-BP03: 컴퓨팅 관련 메트릭 수집</Link></strong><br />
          <span>컴퓨팅 성능과 관련된 메트릭을 수집하고 분석합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf2/bp04">PERF02-BP04: 컴퓨팅 리소스 구성 및 적정 크기 조정</Link></strong><br />
          <span>컴퓨팅 리소스를 올바르게 구성하고 워크로드에 맞게 적정 크기로 조정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf2/bp05">PERF02-BP05: 컴퓨팅 리소스 동적 확장</Link></strong><br />
          <span>수요 변화에 맞춰 컴퓨팅 리소스를 동적으로 확장합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf2/bp06">PERF02-BP06: 최적화된 하드웨어 기반 컴퓨팅 가속기 사용</Link></strong><br />
          <span>GPU, FPGA 등 하드웨어 기반 컴퓨팅 가속기를 활용하여 성능을 향상시킵니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
