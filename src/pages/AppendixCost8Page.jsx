import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost8Page() {
  return (
    <article className="doc-content">
      <h1>COST 8 — 데이터 전송 비용을 어떻게 계획합니까?</h1>

      <p>
        데이터 전송 비용을 계획하고 모니터링하여 아키텍처 결정 시 비용을 최소화합니다.
        작은 아키텍처 변경으로도 운영 비용을 크게 절감할 수 있습니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost8/bp01">COST08-BP01: 데이터 전송 비용 모델링 수행</Link></strong><br />
          <span>아키텍처 설계 단계에서 리전 간, AZ 간, 인터넷으로의 데이터 전송 비용을 모델링합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost8/bp02">COST08-BP02: 데이터 전송 비용 최적화를 위한 구성 요소 선택</Link></strong><br />
          <span>데이터 전송 비용을 최소화하는 아키텍처 패턴과 AWS 서비스를 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost8/bp03">COST08-BP03: 데이터 전송 비용 절감 서비스 구현</Link></strong><br />
          <span>CloudFront, VPC 엔드포인트, AWS Direct Connect 등을 활용하여 데이터 전송 비용을 절감합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
