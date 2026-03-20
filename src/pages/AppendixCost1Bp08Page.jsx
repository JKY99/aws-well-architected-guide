import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp08Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP08 — 비용 인식 문화 조성</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>비용 인식 문화를 조성하면 조직 전반에서 비용 최적화에 적극적으로 참여하고, 불필요한 지출을 줄이는 행동이 자연스럽게 이루어집니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 팀원이 비용에 대한 책임감을 가지고, 비용 효율적인 의사결정을 일상적으로 수행합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 정보가 특정 팀(재무, IT 운영)에만 공유됩니다.</li>
        <li>비용 최적화가 성과 평가에 반영되지 않습니다.</li>
        <li>비용 절감 성과를 인정하거나 보상하는 체계가 없습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>조직 전체의 비용 효율성이 향상됩니다.</li>
        <li>팀이 자율적으로 비용을 최적화하는 문화가 형성됩니다.</li>
        <li>비용 절감 이니셔티브가 지속적으로 발굴됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비용 대시보드를 팀별로 공유하여 가시성을 높입니다.</li>
        <li>비용 절감 게임화(gamification) 또는 인센티브 프로그램을 도입합니다.</li>
        <li>비용 최적화 모범 사례를 사내 교육 과정에 포함시킵니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Explorer</li>
        <li>AWS Budgets</li>
        <li>AWS Cost and Usage Report</li>
      </ul>
      <PageNav />
    </article>
  );
}
