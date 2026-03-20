import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost10Page() {
  return (
    <article className="doc-content">
      <h1>COST 10 — 새로운 서비스를 어떻게 평가합니까?</h1>

      <p>
        AWS에서 시간이 지남에 따라 새로운 서비스와 기능을 검토하고 워크로드에 구현합니다.
        AWS가 새로운 서비스와 기능을 출시함에 따라, 기존 아키텍처 결정이 여전히 비용 효율적인지
        검토하는 것이 모범 사례입니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost10/bp01">COST10-BP01: 워크로드 검토 프로세스 개발</Link></strong><br />
          <span>워크로드 검토 기준과 프로세스를 정의합니다. 검토 노력은 잠재적 이점을 반영해야 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost10/bp02">COST10-BP02: 워크로드 정기 검토 및 분석</Link></strong><br />
          <span>정의된 프로세스에 따라 기존 워크로드를 정기적으로 검토하여 개선 기회를 찾습니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
