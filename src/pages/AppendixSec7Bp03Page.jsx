import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec7Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC07-BP03 — 데이터 수명 주기 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        데이터 생성부터 삭제까지의 전체 수명 주기를 자동화하여 데이터 보존, 보관, 삭제 정책을
        일관되게 적용합니다. 불필요하게 오래 보관된 민감 데이터는 불필요한 보안 위험을 초래하므로,
        비즈니스 및 규정 요구 사항에 따른 데이터 보존 기간을 자동으로 관리합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 데이터 저장소에 보존 정책이 정의되고 자동으로 적용됩니다. 보존 기간이 지난 데이터는
        자동으로 아카이브되거나 삭제되며, 규정 준수 요구 사항에 따라 데이터가 최소 필요 기간만큼
        보관되고 그 이후에는 안전하게 파기됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터 보존 정책 없이 모든 데이터를 무기한 보관하여 불필요한 민감 데이터 노출</li>
        <li>삭제된 데이터를 실제로 안전하게 파기하지 않고 소프트 삭제만 수행함</li>
        <li>백업 데이터에 원본과 동일한 보존 정책을 적용하지 않아 불필요한 복사본 존재</li>
        <li>데이터 보존 정책을 수동으로 관리하여 일관성 없이 적용됨</li>
        <li>규제상 삭제 의무가 있는 개인정보를 기간 경과 후에도 보관함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>불필요한 민감 데이터 보관으로 인한 데이터 침해 위험 및 규제 위반 리스크 감소</li>
        <li>GDPR "잊혀질 권리", HIPAA 보존 요구 등 규제 준수 자동화</li>
        <li>불필요한 데이터 보관 비용 절감 및 스토리지 효율화</li>
        <li>법적 보존 의무 데이터는 삭제 방지, 기간 경과 데이터는 자동 파기로 리스크 균형</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>S3 Lifecycle 정책을 사용하여 데이터를 자동으로 S3 Standard → S3 Infrequent Access → S3 Glacier로 전환하고, 보존 기간 만료 시 자동 삭제합니다.</li>
        <li>AWS Backup을 사용하여 RDS, EBS, DynamoDB 등의 백업 보존 정책을 중앙에서 관리하고, 만료된 백업이 자동으로 삭제되도록 구성합니다.</li>
        <li>S3 Object Lock(WORM)을 사용하여 규정 준수 및 법적 보존이 필요한 데이터는 보존 기간 내 삭제나 변경을 방지합니다.</li>
        <li>DynamoDB TTL(Time to Live)을 설정하여 만료된 레코드가 자동으로 삭제되도록 구성합니다.</li>
        <li>CloudTrail 로그 및 S3 액세스 로그는 보안 조사 요구 사항(최소 1년 이상)에 맞는 보존 정책을 설정합니다.</li>
        <li>데이터 보존 정책을 IaC(CloudFormation/Terraform)로 코드화하여 모든 환경에 일관되게 적용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 Lifecycle — 데이터 자동 전환 및 만료 삭제</li>
        <li>Amazon S3 Glacier — 장기 보관 데이터 아카이브</li>
        <li>AWS Backup — 다양한 서비스 백업 보존 정책 중앙 관리</li>
        <li>Amazon S3 Object Lock — 규정 준수 데이터 삭제 방지(WORM)</li>
        <li>Amazon DynamoDB TTL — 레코드 자동 만료 삭제</li>
      </ul>
      <PageNav />
    </article>
  );
}
