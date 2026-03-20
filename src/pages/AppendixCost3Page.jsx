import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost3Page() {
  return (
    <article className="doc-content">
      <h1>COST 3 — 비용 효율적인 리소스를 어떻게 선택합니까?</h1>

      <p>
        워크로드에 적합한 서비스, 리소스, 구성을 선택하여
        과도한 비용 없이 성능 요구사항을 충족합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost3/bp01">COST03-BP01: 서비스 선택 비용 분석</Link></strong><br />
          <span>EC2 vs. Lambda, RDS vs. DynamoDB 등 서비스 선택이 비용에 미치는 영향을 분석합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost3/bp02">COST03-BP02: 올바른 리소스 유형, 크기, 수량 선택</Link></strong><br />
          <span>AWS Compute Optimizer를 사용하여 실제 사용량에 기반한 최적의 인스턴스 크기를 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost3/bp03">COST03-BP03: 데이터 전송 비용 최소화</Link></strong><br />
          <span>리전 간, AZ 간, 인터넷 데이터 전송 비용을 이해하고 아키텍처 설계 시 고려합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost3/bp04">COST03-BP04: 관리형 서비스로 총소유비용(TCO) 줄이기</Link></strong><br />
          <span>자체 관리 대신 AWS 관리형 서비스를 사용하여 운영 비용을 줄입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost3/bp05">COST03-BP05: 지역에 따른 비용 최적화</Link></strong><br />
          <span>동일한 서비스도 리전에 따라 가격이 다르므로, 지연 시간 및 규정 요건 내에서 비용이 낮은 리전을 활용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost3/bp06">COST03-BP06: 워크로드 지표 기반 비용 할당</Link></strong><br />
          <span>공유 리소스의 비용을 워크로드별 실제 사용 지표에 기반하여 공정하고 정확하게 할당합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
