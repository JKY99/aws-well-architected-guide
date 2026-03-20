import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost2Bp06Page() {
  return (
    <article className="doc-content">
      <h1>COST02-BP06 — 프로젝트 수명 주기 추적</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>프로젝트의 시작부터 종료까지 전체 수명 주기 동안 리소스 및 비용을 추적하면 불필요한 지출을 방지하고 예산 관리를 개선할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 프로젝트의 수명 주기가 명확히 정의되고 추적되어, 프로젝트 종료 시 관련 리소스가 신속하게 정리됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>프로젝트 종료 후 관련 리소스가 계속 실행됩니다.</li>
        <li>프로젝트 소유자가 변경되어도 리소스 책임 소재가 불명확합니다.</li>
        <li>임시 프로젝트용 리소스가 영구적으로 실행됩니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>프로젝트 종료 후 불필요한 리소스 비용을 제거합니다.</li>
        <li>리소스 소유권과 비용 책임이 명확해집니다.</li>
        <li>프로젝트 예산 추적 및 보고가 정확해집니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>프로젝트별 태그(project, owner, end-date)를 모든 리소스에 적용합니다.</li>
        <li>프로젝트 종료 시 리소스 정리를 위한 표준 운영 절차(SOP)를 수립합니다.</li>
        <li>AWS Config 규칙을 사용하여 태그 없는 리소스를 감지하고 알림을 보냅니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Resource Tagging</li>
        <li>AWS Config</li>
        <li>AWS Systems Manager</li>
        <li>AWS Cost Explorer</li>
      </ul>
      <PageNav />
    </article>
  );
}
