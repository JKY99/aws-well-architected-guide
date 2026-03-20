import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost4Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST04-BP03 — 리소스 폐기</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>더 이상 필요하지 않은 리소스를 정의된 프로세스에 따라 폐기합니다. 사용되지 않는 리소스로 인한 불필요한 비용을 제거합니다.</p>
      <h2>원하는 결과</h2>
      <p>사용되지 않는 리소스가 정기적으로 식별되고 폐기되어 불필요한 비용이 제거됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사용되지 않는 리소스를 식별하고도 폐기하지 않습니다.</li>
        <li>폐기 프로세스가 너무 복잡하여 실제로 실행되지 않습니다.</li>
        <li>폐기 권한이 없어 불필요한 리소스가 방치됩니다.</li>
        <li>비용 영향을 파악하지 못하고 리소스를 유지합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>불필요한 클라우드 비용이 직접적으로 절감됩니다.</li>
        <li>클라우드 환경이 더 깔끔하고 관리하기 쉬워집니다.</li>
        <li>보안 공격 표면이 감소합니다.</li>
        <li>리소스 인벤토리의 정확성이 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>사용하지 않는 리소스 식별: AWS Trusted Advisor와 Cost Explorer를 사용하여 사용되지 않는 리소스를 정기적으로 파악합니다.</li>
        <li>단계적 실행: 먼저 리소스를 중지하고 일정 기간 모니터링 후 폐기를 진행합니다.</li>
        <li>IaC 업데이트: CloudFormation 또는 Terraform 코드에서 폐기된 리소스를 제거합니다.</li>
        <li>비용 절감 확인: 폐기 후 비용 절감이 실제로 발생했는지 확인합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Trusted Advisor</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Compute Optimizer</li>
        <li>AWS CloudFormation</li>
        <li>Amazon EC2</li>
      </ul>
      <PageNav />
    </article>
  );
}
