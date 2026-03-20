import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost2Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST02-BP02 — 목표 및 타겟 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>비용 최적화에 대한 측정 가능한 목표와 타겟을 설정하여 조직이 개선을 추적하고 목표를 향해 나아갈 수 있도록 합니다.</p>
      <h2>원하는 결과</h2>
      <p>명확한 비용 최적화 목표가 설정되어 있으며 진행 상황을 지속적으로 추적합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>측정 가능한 비용 목표가 없습니다.</li>
        <li>목표 달성 여부를 추적하는 메커니즘이 없습니다.</li>
        <li>비용 목표가 비즈니스 결과와 연계되지 않습니다.</li>
        <li>목표가 현실적이지 않거나 모호합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비용 최적화 진행 상황을 명확하게 추적합니다.</li>
        <li>팀이 공통 목표를 향해 일관되게 작업합니다.</li>
        <li>비용 개선 기회를 체계적으로 식별합니다.</li>
        <li>비용 최적화 투자의 효과를 측정합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>SMART 목표 설정: 구체적, 측정 가능, 달성 가능, 관련성 있는, 시간 제한 있는 비용 목표를 설정합니다.</li>
        <li>KPI 대시보드 구축: 비용 목표 달성을 실시간으로 추적하는 대시보드를 만듭니다.</li>
        <li>정기 리뷰 회의: 월간 또는 분기별로 목표 달성 현황을 검토하고 조정합니다.</li>
        <li>워크로드 효율성 지표: 워크로드 단위당 비용을 추적하여 효율성 개선을 측정합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Budgets</li>
        <li>AWS Cost Explorer</li>
        <li>Amazon CloudWatch</li>
        <li>AWS Cost and Usage Report</li>
      </ul>
      <PageNav />
    </article>
  );
}
