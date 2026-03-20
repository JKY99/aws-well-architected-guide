import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost11Page() {
  return (
    <article className="doc-content">
      <h1>COST 11 — 노력의 비용을 어떻게 평가합니까?</h1>

      <p>
        클라우드 운영에 투입되는 인력 비용(노력)을 평가하여, 자동화 또는 관리형 서비스를
        통해 효율성을 높이고 총소유비용(TCO)을 최소화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost11/bp01">COST11-BP01: 운영 자동화 수행</Link></strong><br />
          <span>반복적인 운영 작업을 자동화하여 인력 비용을 절감하고 오류를 줄이며 효율성을 높입니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
