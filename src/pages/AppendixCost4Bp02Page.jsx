import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost4Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST04-BP02 — 폐기 프로세스 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>불필요한 리소스를 식별하고 안전하게 폐기하는 공식적인 프로세스를 구현합니다. 폐기 절차에는 데이터 보존 정책과 보안 요구사항이 포함되어야 합니다.</p>
      <h2>원하는 결과</h2>
      <p>체계적이고 안전한 리소스 폐기 프로세스가 구현되어 있어 불필요한 비용을 지속적으로 제거합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>폐기 프로세스 없이 리소스를 즉시 삭제합니다.</li>
        <li>폐기 전 데이터 백업 여부를 확인하지 않습니다.</li>
        <li>폐기된 리소스의 의존성을 파악하지 않습니다.</li>
        <li>폐기 승인 프로세스가 없습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>불필요한 리소스가 체계적으로 제거되어 비용이 절감됩니다.</li>
        <li>데이터 손실 위험이 최소화됩니다.</li>
        <li>보안 위험이 감소합니다.</li>
        <li>규정 준수 요구사항이 충족됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>폐기 체크리스트 작성: 데이터 백업, 의존성 확인, 승인 요청 등 단계별 체크리스트를 만듭니다.</li>
        <li>승인 워크플로우: 리소스 폐기 전 필요한 이해관계자의 승인을 받는 프로세스를 구현합니다.</li>
        <li>폐기 기록 유지: 무엇이, 언제, 왜 폐기되었는지 기록을 유지합니다.</li>
        <li>단계적 폐기: 즉시 삭제 전에 먼저 중지 → 검토 기간 → 삭제의 단계적 프로세스를 따릅니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Config</li>
        <li>AWS Service Catalog</li>
        <li>AWS CloudFormation</li>
        <li>Amazon EventBridge</li>
        <li>AWS Systems Manager</li>
      </ul>
      <PageNav />
    </article>
  );
}
