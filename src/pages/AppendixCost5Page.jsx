import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost5Page() {
  return (
    <article className="doc-content">
      <h1>COST 5 — 서비스 선택 시 비용을 어떻게 평가합니까?</h1>

      <p>
        워크로드에 적합한 서비스, 리소스, 구성을 선택하는 것은 비용 절감의 핵심입니다.
        워크로드의 모든 구성 요소를 분석하고 각각에 대해 철저한 비용 분석을 수행합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost5/bp01">COST05-BP01: 비용에 대한 조직 요구사항 식별</Link></strong><br />
          <span>서비스 선택 전 비용에 관한 조직의 요구사항을 파악합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost5/bp02">COST05-BP02: 워크로드의 모든 구성 요소 분석</Link></strong><br />
          <span>워크로드의 모든 구성 요소를 파악하고 각각의 비용 영향을 분석합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost5/bp03">COST05-BP03: 각 구성 요소의 철저한 분석 수행</Link></strong><br />
          <span>각 구성 요소에 대해 사용 가능한 옵션과 비용을 철저하게 분석합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost5/bp04">COST05-BP04: 비용 효율적인 라이선스의 소프트웨어 선택</Link></strong><br />
          <span>소프트웨어 라이선스 비용을 최소화하는 옵션을 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost5/bp05">COST05-BP05: 조직 우선순위에 맞게 비용 최적화를 위한 워크로드 구성 요소 선택</Link></strong><br />
          <span>조직의 우선순위와 제약을 고려하여 비용을 최적화하는 구성 요소를 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost5/bp06">COST05-BP06: 시간에 따른 다양한 사용 패턴에 대한 비용 분석 수행</Link></strong><br />
          <span>다양한 사용 시나리오와 시간에 따른 사용 패턴 변화를 고려하여 비용을 분석합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
