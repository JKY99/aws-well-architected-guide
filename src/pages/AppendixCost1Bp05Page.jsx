import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp05Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP05 — 비용 보고 및 쇼백(Chargeback) 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>각 팀이나 부서에 실제 클라우드 비용을 할당하고 보고하는 쇼백(Showback) 또는 차지백(Chargeback) 체계를 구현합니다.</p>
      <h2>원하는 결과</h2>
      <p>비용 투명성과 팀별 책임 부여를 통한 효율적인 비용 관리 체계를 구축합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 할당 없이 통합 청구합니다.</li>
        <li>팀별 비용 가시성이 없습니다.</li>
        <li>낭비에 대한 책임이 없습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비용 책임 문화가 형성됩니다.</li>
        <li>불필요한 지출이 감소합니다.</li>
        <li>팀이 자율적으로 최적화를 추진합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>리소스 태깅 전략을 수립합니다.</li>
        <li>Cost and Usage Report로 팀별 비용을 분석합니다.</li>
        <li>월별 비용 보고서를 배포합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost and Usage Report</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Budgets</li>
      </ul>
      <PageNav />
    </article>
  );
}
