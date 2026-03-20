import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost9Page() {
  return (
    <article className="doc-content">
      <h1>COST 9 — 수요를 관리하고 리소스를 공급하는 방법은 무엇입니까?</h1>

      <p>
        균형 잡힌 지출과 성능을 위해 지불하는 모든 리소스가 활용되고 있는지 확인합니다.
        한쪽으로 치우친 활용률은 운영 비용 증가(과활용으로 인한 성능 저하) 또는
        AWS 지출 낭비(과도한 프로비저닝)라는 부작용을 초래합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost9/bp01">COST09-BP01: 워크로드 수요 분석 수행</Link></strong><br />
          <span>워크로드의 수요 패턴을 분석하여 리소스 계획 및 프로비저닝 전략을 수립합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost9/bp02">COST09-BP02: 수요 관리를 위한 버퍼 또는 스로틀 구현</Link></strong><br />
          <span>Amazon SQS, API Gateway 등을 사용하여 수요를 평준화하고 급격한 스파이크를 완화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost9/bp03">COST09-BP03: 동적으로 리소스 공급</Link></strong><br />
          <span>Auto Scaling을 사용하여 실제 수요에 맞게 리소스를 자동으로 확장하고 축소합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
