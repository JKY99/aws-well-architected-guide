import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP02 — 비용 최적화에 대한 경영진 후원 확보</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>경영진의 지원을 확보하여 비용 최적화를 전략적 우선순위로 삼고 조직 전반에 걸친 변화를 이끌어냅니다.</p>
      <h2>원하는 결과</h2>
      <p>경영진 스폰서십을 통한 조직적 비용 최적화 문화를 정착시킵니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>기술팀만의 비용 최적화 노력에 그칩니다.</li>
        <li>경영진의 관심이 없습니다.</li>
        <li>비용 최적화가 KPI와 연계되지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>조직적 변화가 가속됩니다.</li>
        <li>예산 확보가 용이해집니다.</li>
        <li>장기적 비용 절감이 실현됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비용 절감 ROI를 보고합니다.</li>
        <li>경영진 대시보드를 제공합니다.</li>
        <li>정기 비용 검토 회의를 개최합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Explorer</li>
        <li>AWS Budgets</li>
      </ul>
      <PageNav />
    </article>
  );
}
