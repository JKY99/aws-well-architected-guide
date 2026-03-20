import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost2Bp05Page() {
  return (
    <article className="doc-content">
      <h1>COST02-BP05 — 비용 제어 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>정책 및 자동화를 통해 비용 제어 메커니즘을 구현하면 예상치 못한 지출을 방지하고 예산 내에서 운영할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>예산 초과를 방지하는 자동화된 비용 제어 체계를 갖추어, 비즈니스 목표 내에서 혁신이 이루어집니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 제한 없이 모든 팀에 무제한 AWS 액세스를 제공합니다.</li>
        <li>비용 초과 시 수동으로 대응하여 지연이 발생합니다.</li>
        <li>개발 환경에 프로덕션과 동일한 리소스 크기를 허용합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>예상치 못한 비용 폭증을 사전에 방지합니다.</li>
        <li>팀별 예산 한도 내에서 자율적으로 혁신할 수 있습니다.</li>
        <li>비용 거버넌스 규정 준수가 자동화됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Budgets Actions를 사용하여 예산 초과 시 자동으로 EC2 인스턴스를 중지하거나 IAM 권한을 제한합니다.</li>
        <li>AWS Service Catalog를 사용하여 승인된 서비스 및 구성만 배포 가능하게 합니다.</li>
        <li>SCP(서비스 제어 정책)를 사용하여 특정 리전이나 고비용 서비스 사용을 제한합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Budgets Actions</li>
        <li>AWS Service Catalog</li>
        <li>AWS Organizations SCP</li>
        <li>AWS Config</li>
      </ul>
      <PageNav />
    </article>
  );
}
