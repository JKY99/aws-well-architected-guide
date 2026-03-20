import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost9Page() {
  return (
    <article className="doc-content">
      <h1>COST 9 — 수요를 어떻게 관리하고 리소스를 공급합니까?</h1>

      <p>
        균형 잡힌 지출과 성능을 위해 지불하는 모든 리소스가 활용되고 있는지 확인합니다.
        워크로드 수요를 분석하고, 버퍼나 스로틀을 구현하며, 수요에 따라 리소스를 동적으로
        공급합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost9/bp01">COST09-BP01: 워크로드 수요 분석 수행</Link></strong><br />
          <span>워크로드의 수요 패턴을 분석하여 리소스 요구사항을 이해합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost9/bp02">COST09-BP02: 수요 관리를 위한 버퍼 또는 스로틀 구현</Link></strong><br />
          <span>수요의 급격한 변동을 완화하는 버퍼나 스로틀 메커니즘을 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost9/bp03">COST09-BP03: 리소스 동적 공급</Link></strong><br />
          <span>수요 변화에 따라 리소스를 동적으로 공급하고 제거합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
