import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost4Page() {
  return (
    <article className="doc-content">
      <h1>COST 4 — 리소스를 어떻게 폐기합니까?</h1>

      <p>
        시간이 지남에 따라 프로젝트, 직원, 기술 리소스 목록을 관리하면 더 이상 사용되지 않거나
        소유자가 없는 리소스를 식별할 수 있습니다. 불필요한 리소스를 식별하고 제거하여
        비용을 절감합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost4/bp01">COST04-BP01: 수명 동안 리소스 추적</Link></strong><br />
          <span>프로젝트, 직원, 기술 리소스를 시간에 따라 추적합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost4/bp02">COST04-BP02: 폐기 프로세스 구현</Link></strong><br />
          <span>불필요한 리소스를 식별하고 안전하게 폐기하는 공식적인 프로세스를 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost4/bp03">COST04-BP03: 리소스 폐기</Link></strong><br />
          <span>정의된 프로세스에 따라 더 이상 필요하지 않은 리소스를 폐기합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost4/bp04">COST04-BP04: 리소스 자동 폐기</Link></strong><br />
          <span>수명 주기 정책과 자동화를 사용하여 리소스를 자동으로 폐기합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost4/bp05">COST04-BP05: 데이터 보존 정책 적용</Link></strong><br />
          <span>데이터 보존 기간을 정의하고 자동화하여 스토리지 비용을 최적화합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
