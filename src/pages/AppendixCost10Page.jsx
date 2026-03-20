import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost10Page() {
  return (
    <article className="doc-content">
      <h1>COST 10 — 새로운 서비스를 어떻게 평가합니까?</h1>

      <p>
        AWS가 새로운 서비스와 기능을 출시함에 따라, 기존 아키텍처 결정이 여전히
        가장 비용 효율적인지 검토하는 것이 모범 사례입니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost10/bp01">COST10-BP01: 워크로드 검토 프로세스 개발</Link></strong><br />
          <span>새로운 AWS 서비스 및 기능을 정기적으로 검토하고 기존 아키텍처에 적용 가능성을 평가하는 프로세스를 수립합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost10/bp02">COST10-BP02: 정기적으로 이 워크로드를 검토 및 분석</Link></strong><br />
          <span>정기적인 Well-Architected 검토를 통해 비용 최적화 기회를 발굴하고 최신 AWS 서비스 활용을 평가합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
