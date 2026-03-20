import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost8Page() {
  return (
    <article className="doc-content">
      <h1>COST 8 — 데이터 전송 요금을 어떻게 계획합니까?</h1>

      <p>
        데이터 전송 비용을 모델링하고 최적화합니다. 리전 간, 가용 영역 간, 인터넷으로의
        데이터 전송 비용을 파악하고, 아키텍처 설계 단계에서부터 데이터 전송을 최소화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost8/bp01">COST08-BP01: 데이터 전송 모델링 수행</Link></strong><br />
          <span>워크로드의 데이터 전송 비용을 모델링하여 최적화 기회를 식별합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost8/bp02">COST08-BP02: 데이터 전송 비용 최적화를 위한 구성 요소 선택</Link></strong><br />
          <span>데이터 전송 비용을 최소화하는 구성 요소와 아키텍처 패턴을 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost8/bp03">COST08-BP03: 데이터 전송 비용 감소를 위한 서비스 구현</Link></strong><br />
          <span>CloudFront, VPC 엔드포인트, Direct Connect 등으로 데이터 전송 비용을 줄입니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
