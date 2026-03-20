import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP02 — 재무와 기술 간 파트너십 구축</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>재무와 기술 팀 간의 파트너십을 구축하여 클라우드 비용을 효과적으로 관리합니다. 재무 팀이 클라우드 비용을 이해하고 기술 팀이 재무적 맥락에서 의사결정을 내릴 수 있도록 협력 체계를 만듭니다.</p>
      <h2>원하는 결과</h2>
      <p>재무와 기술 팀이 협력하여 클라우드 비용을 공동으로 관리하고, 비즈니스 가치와 연계된 비용 최적화 의사결정을 내립니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>재무 팀이 클라우드 지출에 대한 가시성이 없습니다.</li>
        <li>기술 팀이 재무 영향을 고려하지 않고 아키텍처를 설계합니다.</li>
        <li>부서 간 협력 없이 독립적으로 비용을 관리합니다.</li>
        <li>예산 초과가 발생한 후에야 조치를 취합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>재무 팀이 클라우드 비용 출처를 이해하고 책임을 추적할 수 있습니다.</li>
        <li>기술 팀이 리소스 선택, 사용, 최적화에 필요한 재무적 맥락을 갖출 수 있습니다.</li>
        <li>조직 전체에 비용 의식 문화가 형성됩니다.</li>
        <li>예상치 못한 비용 발생을 최소화합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>교육 세션 실시: 재무 팀에 클라우드 비용 모델(가변 비용, 사용량 기반 요금 등)을 교육합니다.</li>
        <li>공통 용어 개발: 양 팀이 동일한 언어로 소통할 수 있도록 공통 용어집을 만듭니다.</li>
        <li>정기 회의 수립: 재무와 기술 팀이 정기적으로 비용 데이터를 검토하는 회의를 설정합니다.</li>
        <li>비용 가시성 제공: 기술 팀이 재무 팀과 비용 데이터를 공유하는 메커니즘을 구축합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Explorer</li>
        <li>AWS Cost and Usage Report</li>
        <li>AWS Budgets</li>
        <li>AWS Cost Categories</li>
      </ul>
      <PageNav />
    </article>
  );
}
