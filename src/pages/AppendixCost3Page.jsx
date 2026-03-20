import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost3Page() {
  return (
    <article className="doc-content">
      <h1>COST 3 — 비용 및 사용량을 어떻게 모니터링합니까?</h1>

      <p>
        워크로드에 대한 상세한 가시성을 통해 팀이 비용 및 사용량에 대한 조치를 취할 수 있도록
        합니다. 비용 최적화는 비용 및 사용량의 세부적인 파악, 미래 지출과 사용량 예측 능력,
        비용과 사용량을 조직 목표에 맞추는 충분한 메커니즘 구현으로부터 시작됩니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost3/bp01">COST03-BP01: 상세 정보 소스 구성</Link></strong><br />
          <span>향상된 분석과 투명성을 위한 비용 관리 및 보고 도구를 설정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost3/bp02">COST03-BP02: 비용 및 사용량에 조직 정보 추가</Link></strong><br />
          <span>비용 데이터에 조직 정보를 추가하여 정확한 비용 귀속을 가능하게 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost3/bp03">COST03-BP03: 비용 귀속 범주 식별</Link></strong><br />
          <span>비용 귀속을 위한 범주를 정의하여 조직 구조와 연계합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost3/bp04">COST03-BP04: 조직 지표 수립</Link></strong><br />
          <span>비용 및 사용량을 비즈니스 성과와 연계하는 조직 수준의 지표를 수립합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost3/bp05">COST03-BP05: 청구 및 비용 관리 도구 구성</Link></strong><br />
          <span>조직 정책에 맞는 비용 관리 도구를 구성하여 클라우드 지출을 관리하고 최적화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost3/bp06">COST03-BP06: 워크로드 지표 기반 비용 할당</Link></strong><br />
          <span>워크로드 지표를 사용하여 공유 리소스의 비용을 적절히 할당합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
