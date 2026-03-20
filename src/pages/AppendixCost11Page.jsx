import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost11Page() {
  return (
    <article className="doc-content">
      <h1>COST 11 — 노력의 비용을 어떻게 평가합니까?</h1>

      <p>
        클라우드 운영 비용을 평가하고 운영 활동의 자동화에 집중합니다. 시간이 많이 소요되는
        클라우드 운영을 검토하고 자동화하여 인적 노력과 비용을 절감합니다. 관련 AWS 서비스,
        서드파티 제품, 또는 맞춤형 도구를 도입합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost11/bp01">COST11-BP01: 운영 자동화 수행</Link></strong><br />
          <span>관리 작업, 배포, 인적 오류 위험 완화, 컴플라이언스 등의 자동화를 통해 운영 비용을 절감합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
