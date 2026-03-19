import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL09-BP01 — 데이터 백업 확인</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 데이터 손실 발생 시 복구 불가능한 상황이 될 수 있으며, 비즈니스 연속성이 심각하게 위협받습니다.</p>
      </div>
      <p>데이터 백업은 체계적인 정책 수립부터 시작합니다. 어떤 데이터를 얼마나 자주 백업하고, 얼마나 오랫동안 보존하며, 어디에 저장할지를 명확히 정의하고 자동화합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 중요 데이터에 대한 백업 정책이 문서화되고 자동화된 방식으로 실행됩니다. 백업이 정상적으로 완료되고 있는지 모니터링되며, 백업 정책이 비즈니스의 RPO 요구사항을 충족합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>백업 정책 없이 개별 담당자의 판단에 의존하여 일관성 없는 백업 수행</li>
        <li>중요 데이터 분류 없이 모든 데이터에 동일한 백업 정책 적용</li>
        <li>백업이 실패했을 때 알림이 없어 백업 실패가 수일 또는 수주간 감지되지 않음</li>
        <li>보존 기간을 너무 짧게 설정하여 장기 복구가 필요한 경우 백업 미존재</li>
        <li>백업 비용 절감을 위해 보존 기간을 무분별하게 줄여 규정 준수 위반</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>체계적인 백업 정책으로 데이터 손실 위험을 비즈니스가 수용 가능한 수준으로 제어</li>
        <li>규정 준수 요구사항(GDPR, SOC2, ISO27001 등) 충족을 위한 데이터 보존 보장</li>
        <li>백업 모니터링으로 실패한 백업을 즉시 감지하여 복구 준비 상태 유지</li>
        <li>비용 최적화 — 데이터 중요도에 따른 계층화된 백업 전략으로 스토리지 비용 절감</li>
        <li>데이터 분류 체계 수립으로 전체적인 데이터 거버넌스 개선</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 영향 분석(BIA)을 통해 데이터를 중요도별로 분류하고 각 등급에 맞는 RPO 정의</li>
        <li>AWS Backup을 사용하여 EC2, RDS, DynamoDB, EFS, S3 등 여러 서비스의 백업을 중앙에서 관리</li>
        <li>AWS Backup 보고서를 활성화하여 백업 작업 완료/실패 현황을 정기적으로 검토</li>
        <li>CloudWatch Events로 백업 실패 시 SNS 알림을 즉시 전송하도록 구성</li>
        <li>Amazon RDS 자동 백업을 활성화하고 보존 기간을 RPO에 맞게 설정(최대 35일)</li>
        <li>DynamoDB Point-in-Time Recovery(PITR)를 활성화하여 35일 이내 임의 시점으로 복구 가능</li>
        <li>백업 정책을 AWS Backup Vault Lock으로 보호하여 실수 또는 악의적 삭제 방지</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Backup — 중앙화된 백업 관리 및 정책 적용</li>
        <li>Amazon RDS 자동 백업 — 데이터베이스 자동 백업 및 PITR</li>
        <li>Amazon DynamoDB PITR — NoSQL 데이터 시점 복구</li>
        <li>Amazon S3 버전 관리 — 객체 수준 변경 이력 보존</li>
        <li>AWS Backup Audit Manager — 백업 규정 준수 보고</li>
        <li>Amazon CloudWatch — 백업 작업 모니터링 및 알림</li>
      </ul>
      <PageNav />
    </article>
  );
}
