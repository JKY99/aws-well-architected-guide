import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP03 — 클라우드 재무 팀 구성</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>재무, IT, 비즈니스 부서가 협력하는 FinOps 팀 또는 클라우드 재무 팀을 구성하여 지속적인 비용 최적화를 추진합니다.</p>
      <h2>원하는 결과</h2>
      <p>부서 간 협력을 통한 효과적인 클라우드 재무 관리 체계를 구축합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>팀 구조가 사일로화되어 있습니다.</li>
        <li>재무와 IT가 분리 운영됩니다.</li>
        <li>비용 책임이 불명확합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>빠른 의사결정이 가능해집니다.</li>
        <li>전문성이 결합됩니다.</li>
        <li>조직 전반의 비용 최적화가 실현됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>FinOps 팀을 구성합니다(재무+IT+비즈니스).</li>
        <li>역할과 책임을 정의합니다.</li>
        <li>정기 회의 체계를 수립합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Organizations</li>
        <li>AWS Cost and Usage Report</li>
        <li>AWS Cost Explorer</li>
      </ul>
      <PageNav />
    </article>
  );
}
