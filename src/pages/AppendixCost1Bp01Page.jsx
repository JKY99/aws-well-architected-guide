import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP01 — 비용 최적화 소유권 확립</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>비용 최적화를 담당하는 팀(Cloud Business Office, Cloud Center of Excellence 또는 FinOps 팀)을 구성하여 조직 전반에 걸친 비용 인식을 확립하고 유지합니다. 비용 최적화 담당자는 조직 전체와 클라우드 재무를 이해하는 개인 또는 팀(재무, 기술, 비즈니스 팀 인원 필요)이 될 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>조직 전체에 비용 인식 문화를 확립하는 Cloud Business Office(CBO) 또는 Cloud Center of Excellence(CCoE) 기능이나 팀을 구성합니다. 이 기능은 재무, 기술, 비즈니스 팀의 핵심 이해관계자들로 구성됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 책임 없이 클라우드를 사용합니다.</li>
        <li>IT 부서만 비용 책임을 집니다.</li>
        <li>임원 후원 없이 비용 최적화 활동을 진행합니다.</li>
        <li>FinOps 문화가 부재합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비용 책임 문화가 조직 전반에 확립됩니다.</li>
        <li>불필요한 클라우드 지출이 감소합니다.</li>
        <li>비용 최적화 목표에 대한 조직 전체의 지원이 강화됩니다.</li>
        <li>클라우드 투자 대비 비즈니스 가치가 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>핵심 구성원 정의: 재무, 애플리케이션/제품 소유자, 경영진, 기술 팀(DevOps) 등 조직의 모든 관련 부문이 참여합니다.</li>
        <li>목표 및 지표 정의: 조직에 가치를 제공하는 목표를 설정하고, 가치 기반 또는 비용 기반 KPI를 정의합니다.</li>
        <li>정기적인 리뷰 주기 확립: 재무, 기술, 비즈니스 팀이 정기적으로 모여 목표와 지표를 검토합니다.</li>
        <li>임원 후원 확보: 비용 효율적인 클라우드 사용을 위한 챔피언 역할의 후원자를 확보합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Explorer</li>
        <li>AWS Budgets</li>
        <li>AWS Cost and Usage Report</li>
        <li>AWS Organizations</li>
        <li>AWS Control Tower</li>
      </ul>
      <PageNav />
    </article>
  );
}
