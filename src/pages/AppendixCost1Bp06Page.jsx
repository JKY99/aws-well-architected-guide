import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp06Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP06 — 비용 최적화 역량 구축</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>클라우드 비용 최적화에 필요한 기술과 지식을 조직 내에 체계적으로 구축하고 지속적으로 발전시킵니다.</p>
      <h2>원하는 결과</h2>
      <p>자체적으로 비용을 분석하고 최적화할 수 있는 내부 역량을 보유합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 최적화를 외부에 의존합니다.</li>
        <li>교육 없이 비용 최적화를 기대합니다.</li>
        <li>FinOps 전문성이 부재합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>내부 전문성을 확보합니다.</li>
        <li>문제를 빠르게 해결할 수 있습니다.</li>
        <li>지속적인 개선 역량이 갖춰집니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS 비용 최적화 교육을 수강합니다.</li>
        <li>AWS 자격증 취득을 지원합니다.</li>
        <li>FinOps Foundation 참여를 장려합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Training</li>
        <li>AWS Well-Architected Tool</li>
        <li>AWS Trusted Advisor</li>
      </ul>
      <PageNav />
    </article>
  );
}
