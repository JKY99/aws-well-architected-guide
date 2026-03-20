import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function CostBestPracticesPage() {
  return (
    <article className="doc-content">
      <h1>비용 최적화 — 모범 사례</h1>

      <p>
        클라우드에서의 비용 최적화를 위한 다섯 가지 모범 사례 영역이 있습니다:
      </p>

      <ul>
        <li><Link to="/pillars/cost-optimization/cloud-financial-management">클라우드 기반 재무 관리 (Cloud Financial Management)</Link></li>
        <li><Link to="/pillars/cost-optimization/expenditure-awareness">지출 및 사용량 인식 (Expenditure and Usage Awareness)</Link></li>
        <li><Link to="/pillars/cost-optimization/cost-effective-resources">비용 효율적인 리소스 (Cost-Effective Resources)</Link></li>
        <li><Link to="/pillars/cost-optimization/manage-demand-supply">수요와 공급 자원 관리 (Manage Demand and Supply Resources)</Link></li>
        <li><Link to="/pillars/cost-optimization/optimize-over-time">시간 경과에 따른 최적화 (Optimize Over Time)</Link></li>
      </ul>

      <p>
        비용 최적화는 불필요한 비용을 줄이고 리소스를 최대한 활용하는 것을 목표로 합니다.
        AWS를 사용하면 클라우드에서 비용을 최적화하고 더 많은 비즈니스 가치를 제공할 수 있습니다.
      </p>

      <PageNav />
    </article>
  );
}
