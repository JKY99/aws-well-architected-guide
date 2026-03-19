import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP01 — 클라우드 재무 관리 이해 증진 및 시행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>클라우드 재무 관리(CFM) 역량을 조직 내에 구축하여 클라우드 지출을 전략적 투자로 관리하고 비즈니스 가치를 극대화합니다.</p>
      <h2>원하는 결과</h2>
      <p>클라우드 비용이 비즈니스 가치와 연계되어 관리되는 성숙한 CFM 체계를 구축합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 의식 없이 클라우드를 사용합니다.</li>
        <li>IT 부서만 비용 책임을 집니다.</li>
        <li>FinOps 문화가 부재합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비용 책임 문화를 조성합니다.</li>
        <li>불필요한 지출이 감소합니다.</li>
        <li>투자 대비 효과가 개선됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>FinOps 원칙을 도입합니다.</li>
        <li>비용 거버넌스 정책을 수립합니다.</li>
        <li>클라우드 경제학 교육을 실시합니다.</li>
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
