import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost6Page() {
  return (
    <article className="doc-content">
      <h1>COST 6 — 수요와 공급을 어떻게 관리합니까?</h1>

      <p>
        수요에 맞게 리소스를 동적으로 공급하여 과도한 프로비저닝을 없애고
        비용 효율성을 극대화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost6/bp01">COST06-BP01: 워크로드 수요 분석 수행</Link></strong><br />
          <span>수요 패턴(시간대별, 요일별, 계절별)을 분석하여 리소스 계획에 반영합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost6/bp02">COST06-BP02: 수요 관리를 위한 버퍼 또는 스로틀 구현</Link></strong><br />
          <span>Amazon SQS, API Gateway 스로틀링을 사용하여 수요를 평준화하고 급격한 스파이크를 완화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost6/bp03">COST06-BP03: 동적 리소스 공급</Link></strong><br />
          <span>Auto Scaling을 사용하여 실제 수요에 맞게 리소스를 자동으로 확장/축소합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost6/bp04">COST06-BP04: 공유 리소스 사용 고려</Link></strong><br />
          <span>여러 워크로드 또는 팀이 리소스를 공유하여 총 비용을 절감하고 활용도를 높입니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
