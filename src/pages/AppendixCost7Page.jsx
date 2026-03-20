import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost7Page() {
  return (
    <article className="doc-content">
      <h1>COST 7 — 최적의 가격 모델을 어떻게 선택합니까?</h1>

      <p>
        AWS는 사용 방식에 따라 다양한 가격 모델을 제공합니다. 각 워크로드의 특성에 맞는
        가격 모델을 선택하여 온디맨드 대비 최대 90%까지 비용을 절감합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost7/bp01">COST07-BP01: 가격 모델 분석 수행</Link></strong><br />
          <span>온디맨드, RI, Savings Plans, 스팟 인스턴스 등 다양한 가격 모델의 비용-이점을 분석합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost7/bp02">COST07-BP02: 비용 기반 리전 선택</Link></strong><br />
          <span>데이터 주권, 지연 시간, 서비스 가용성 요구사항을 충족하면서 비용이 낮은 리전을 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost7/bp03">COST07-BP03: 비용 효율적인 조건의 서드파티 계약 선택</Link></strong><br />
          <span>서드파티 소프트웨어나 서비스 계약 시 비용 효율적인 조건을 협상하고 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost7/bp04">COST07-BP04: 워크로드의 모든 구성 요소에 가격 모델 구현</Link></strong><br />
          <span>분석을 바탕으로 워크로드의 모든 구성 요소에 최적의 가격 모델을 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost7/bp05">COST07-BP05: 관리 계정 수준에서 가격 모델 분석 수행</Link></strong><br />
          <span>AWS Organizations의 관리 계정 수준에서 통합 비용을 분석하고 최적화된 가격 모델을 적용합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
