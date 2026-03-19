import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost2Page() {
  return (
    <article className="doc-content">
      <h1>COST 2 — 워크로드 비용을 어떻게 관리합니까?</h1>

      <p>
        워크로드의 비용을 구조화하여 추적하고 관리함으로써
        지출을 비즈니스 가치와 연계합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost2/bp01">COST02-BP01: 비용 귀속 태깅 구현</Link></strong><br />
          <span>모든 리소스에 비용 할당 태그를 적용하여 팀, 프로젝트, 환경별로 비용을 추적합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost2/bp02">COST02-BP02: AWS 계정 구조를 통한 비용 구분</Link></strong><br />
          <span>워크로드별로 별도의 AWS 계정을 사용하여 비용을 명확하게 분리합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost2/bp03">COST02-BP03: 비용 및 사용량 보고서 구성</Link></strong><br />
          <span>AWS Cost and Usage Report를 설정하여 상세한 비용 데이터를 S3에 저장하고 분석합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost2/bp04">COST02-BP04: 공유 서비스 비용 할당 방법 결정</Link></strong><br />
          <span>공유 인프라(네트워킹, 공용 서비스)의 비용을 공정하게 각 팀에 할당하는 방법을 정의합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
