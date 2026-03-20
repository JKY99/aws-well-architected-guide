import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL09-BP05 — 백업 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 수동 백업에 의존하게 되어 담당자 부재나 실수로 인해 백업이 누락될 수 있습니다.</p>
      </div>
      <p>백업 자동화는 수동 개입 없이 일관되고 안정적인 백업을 보장합니다. AWS Backup을 중심으로 백업 플랜을 정의하고, 교차 리전 복사를 포함한 전체 백업 라이프사이클을 자동화합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 중요 데이터가 정의된 스케줄에 따라 자동으로 백업되며, 백업 성공/실패가 모니터링됩니다. 교차 리전 복사가 자동으로 수행되고, 보존 기간이 만료된 백업은 자동으로 삭제되어 비용이 최적화됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수동 스냅샷에만 의존하여 담당자 부재 시 백업 누락</li>
        <li>각 서비스별로 개별 백업 스크립트를 운영하여 관리 복잡성 증가 및 일관성 부족</li>
        <li>백업 성공/실패 알림 없이 운영하여 백업 실패를 인지하지 못함</li>
        <li>보존 기간을 수동으로 관리하여 오래된 백업이 누적되어 스토리지 비용 낭비</li>
        <li>교차 리전 복사를 자동화하지 않아 재해 복구용 백업이 불일치 상태 유지</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>인적 개입 없이 일관된 백업으로 백업 누락 위험 제거</li>
        <li>중앙화된 백업 관리로 여러 AWS 서비스의 백업을 단일 정책으로 제어</li>
        <li>자동 보존 기간 관리로 스토리지 비용 최적화</li>
        <li>교차 리전 자동 복사로 항상 최신 상태의 DR 백업 유지</li>
        <li>백업 컴플라이언스 리포트로 규정 준수 증명 자동화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Backup을 중앙 백업 플랫폼으로 채택하고 모든 워크로드의 백업을 단일 서비스에서 관리</li>
        <li>AWS Backup 백업 플랜(Backup Plan)을 생성하여 백업 스케줄, 보존 기간, 대상 볼트, 교차 리전 복사 규칙 정의</li>
        <li>AWS Organizations와 연계하여 조직 전체에 백업 정책(Backup Policy)을 SCP로 적용</li>
        <li>AWS Backup 보고서를 S3로 내보내도록 구성하여 백업 컴플라이언스 상태를 정기적으로 검토</li>
        <li>CloudWatch Events를 사용하여 백업 작업 실패 시 즉시 SNS 알림 발송</li>
        <li>태그 기반 백업 선택을 활용하여 새로운 리소스가 생성될 때 자동으로 백업 대상에 포함</li>
        <li>AWS Backup Vault Lock으로 백업 볼트를 보호하여 보존 기간 내 삭제 방지</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Backup — 완전 관리형 중앙화 백업 서비스</li>
        <li>AWS Organizations Backup Policy — 조직 단위 백업 정책 적용</li>
        <li>AWS Backup Audit Manager — 백업 규정 준수 자동 보고</li>
        <li>Amazon CloudWatch Events — 백업 작업 모니터링 및 알림</li>
        <li>Amazon S3 — 백업 데이터 스토리지 및 교차 리전 복제</li>
        <li>AWS KMS — 백업 데이터 암호화 키 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
