import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost2Bp05Page() {
  return (
    <article className="doc-content">
      <h1>COST02-BP05 — 비용 제어 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>비용이 예산을 초과하지 않도록 하는 가드레일과 제어 메커니즘을 구현합니다. 자동화된 제어를 통해 예상치 못한 비용 발생을 방지합니다.</p>
      <h2>원하는 결과</h2>
      <p>자동화된 비용 제어 메커니즘이 구현되어 있어 예산 초과를 방지하고 비용 거버넌스를 강화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>예산 초과 시 자동 조치가 없습니다.</li>
        <li>비용 제한 없이 리소스를 무제한으로 생성할 수 있습니다.</li>
        <li>비용 이상 상황을 사전에 감지하지 못합니다.</li>
        <li>인적 오류로 인한 예상치 못한 대규모 지출이 발생합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>예상치 못한 비용 발생이 방지됩니다.</li>
        <li>예산 내에서 클라우드 사용이 유지됩니다.</li>
        <li>비용 거버넌스가 자동화됩니다.</li>
        <li>재무 리스크가 감소합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Service Control Policies: SCP를 사용하여 계정 수준에서 특정 서비스나 리전 사용을 제한합니다.</li>
        <li>AWS Budgets Actions: 예산 임계값 초과 시 자동으로 IAM 정책을 적용하거나 EC2/RDS 인스턴스를 중지합니다.</li>
        <li>태그 정책: 태그 없이 리소스 생성을 방지하는 정책을 시행합니다.</li>
        <li>비용 할당 태그: 모든 리소스에 비용 할당 태그를 의무화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Budgets Actions</li>
        <li>Service Control Policies (SCP)</li>
        <li>AWS Config</li>
        <li>AWS Lambda</li>
        <li>Amazon EventBridge</li>
      </ul>
      <PageNav />
    </article>
  );
}
