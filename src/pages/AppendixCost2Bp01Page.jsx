import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost2Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST02-BP01 — 비용 귀속 태깅 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>모든 AWS 리소스에 일관된 태그를 적용하여 비용을 프로젝트, 팀, 환경별로 정확하게 추적하고 귀속합니다.</p>
      <h2>원하는 결과</h2>
      <p>태깅을 통한 100% 비용 귀속으로 팀별, 프로젝트별 정확한 비용을 파악합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>태깅 전략이 없습니다.</li>
        <li>태그가 일관성 없이 적용됩니다.</li>
        <li>태그 미적용 리소스가 방치됩니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>정확한 비용 귀속이 가능합니다.</li>
        <li>팀별 비용 책임이 명확해집니다.</li>
        <li>비용 이상을 감지할 수 있습니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>태깅 표준을 정의합니다(환경/팀/프로젝트/소유자).</li>
        <li>AWS Config로 태그 컴플라이언스를 강제합니다.</li>
        <li>AWS Organizations SCP로 태그를 필수화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Explorer (태그 기반 분석)</li>
        <li>AWS Config</li>
        <li>AWS Organizations</li>
        <li>AWS Cost and Usage Report</li>
      </ul>
      <PageNav />
    </article>
  );
}
