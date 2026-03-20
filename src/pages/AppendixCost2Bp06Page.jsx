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
      <p>프로젝트, 직원, 기술 리소스를 시간에 따라 관리하여 더 이상 사용되지 않거나 소유자가 없는 리소스를 식별합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 클라우드 리소스가 활성 프로젝트나 소유자와 연결되어 있으며, 수명 주기 종료 시 적절히 폐기됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>직원이 퇴사한 후에도 해당 직원의 리소스가 계속 실행됩니다.</li>
        <li>프로젝트가 종료된 후에도 관련 리소스가 폐기되지 않습니다.</li>
        <li>리소스 소유권이 불명확합니다.</li>
        <li>고아 리소스가 비용을 발생시킵니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사용하지 않는 리소스로 인한 비용 낭비가 줄어듭니다.</li>
        <li>리소스 소유권이 명확해집니다.</li>
        <li>보안 위험이 감소합니다.</li>
        <li>클라우드 환경이 깔끔하게 유지됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>리소스 태깅: 모든 리소스에 소유자, 프로젝트, 만료일 태그를 적용합니다.</li>
        <li>수명 주기 정책: 특정 기간 후 자동으로 리소스를 검토하거나 폐기하는 정책을 설정합니다.</li>
        <li>직원 이탈 프로세스: 직원 이탈 시 해당 직원의 AWS 리소스를 검토하고 이관하는 프로세스를 구현합니다.</li>
        <li>정기 감사: AWS Config와 AWS Trusted Advisor를 사용하여 사용하지 않는 리소스를 정기적으로 식별합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Config</li>
        <li>AWS Resource Groups</li>
        <li>AWS Trusted Advisor</li>
        <li>Amazon EventBridge</li>
        <li>AWS Lambda</li>
      </ul>
      <PageNav />
    </article>
  );
}
