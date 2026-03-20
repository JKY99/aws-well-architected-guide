import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL09-BP03 — 데이터 백업 자동 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        RPO 또는 데이터 세트의 변경에 따라 설정된 주기로 데이터 소스의 백업을 생성하는
        자동화 프로세스를 구축합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        RPO 또는 데이터 세트의 변경에 따라 설정된 주기로 데이터 소스의 백업을 생성하는
        자동화 프로세스가 운영됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수동으로 백업 수행</li>
        <li>백업 기능이 있는 리소스를 사용하지만 자동화에 백업을 포함하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>RPO에 따라 정기적으로 백업이 수행되는지 확인</li>
        <li>예약된 대로 백업이 수행되지 않을 경우 알림 수신</li>
        <li>인적 오류 감소 및 일관성 보장</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>현재 수동으로 백업되는 데이터 소스 파악</li>
        <li>워크로드에 대한 RPO 결정</li>
        <li>자동화 백업 솔루션 또는 관리형 서비스 사용: AWS Backup(여러 AWS 서비스를 위한 중앙화된 정책 기반 솔루션), 네이티브 서비스 기능(RDS, DynamoDB, S3 등)</li>
        <li>지원되지 않는 데이터 소스의 경우: 서드파티 솔루션, AWS Lambda 또는 Amazon EventBridge와 함께 AWS Step Functions 사용</li>
        <li>백업 빈도: Amazon RDS 5분마다 PITR, Amazon S3 15분마다 버전 관리/복제, Amazon EBS/DynamoDB/FSx 1시간마다 자동 스냅샷, Amazon DynamoDB 연속 PITR</li>
        <li>AWS Backup 보고서를 활성화하여 백업 작업 완료/실패 현황을 정기적으로 검토</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Backup (완전 관리형 백업 솔루션)</li>
        <li>Amazon RDS (PITR을 포함한 자동화 백업)</li>
        <li>Amazon DynamoDB (PITR을 포함한 연속 백업)</li>
        <li>Amazon S3 (버전 관리 및 복제)</li>
        <li>Amazon Data Lifecycle Manager (EBS 스냅샷 관리 자동화)</li>
        <li>AWS Elastic Disaster Recovery (연속 블록 수준 복제)</li>
        <li>AWS Lambda/Step Functions (사용자 정의 자동화)</li>
        <li>Amazon EventBridge (일정 기반 호출)</li>
      </ul>
      <PageNav />
    </article>
  );
}
