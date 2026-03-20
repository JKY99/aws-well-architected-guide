import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL09-BP02 — 백업 보안 및 암호화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        인증 및 권한 부여를 사용하여 백업에 대한 접근을 제어하고 감지합니다.
        암호화를 사용하여 백업 데이터의 무결성이 손상되는 것을 방지하고 감지합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        인증 및 권한 부여를 사용하여 백업에 대한 접근을 제어하고 감지합니다.
        암호화를 사용하여 데이터가 노출되더라도 백업 데이터의 무결성이 손상되지 않도록 방지합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>백업 및 복원 자동화에 대해 데이터와 동일한 접근 권한 보유</li>
        <li>백업을 암호화하지 않음</li>
        <li>삭제 또는 변조에 대한 보호를 위한 불변성 구현 없음</li>
        <li>프로덕션 및 백업 시스템에 동일한 보안 도메인 사용</li>
        <li>정기적인 테스트를 통한 백업 무결성 검증 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>변조 방지: 백업 보안으로 변조 방지, 암호화로 데이터 노출 시 무단 접근 방지</li>
        <li>사이버 위협 보호: 랜섬웨어 및 백업 인프라를 표적으로 하는 위협에 대한 강화된 보호</li>
        <li>빠른 복구: 검증된 복구 프로세스를 통한 사이버 인시던트 후 복구 시간 단축</li>
        <li>비즈니스 연속성: 보안 인시던트 중 향상된 대응 능력</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>암호화 방법: Amazon S3 서버 측 암호화 또는 AWS KMS를 사용한 클라이언트 측 암호화 사용, Amazon RDS 암호화된 데이터베이스는 자동으로 백업 암호화, DynamoDB 백업은 항상 암호화됨</li>
        <li>사이버 복원력 제어: AWS Backup Vault Lock 또는 Amazon S3 Object Lock을 사용한 불변성, AWS Backup 논리적 에어갭 볼트를 사용한 논리적 격리, AWS Backup 복원 테스트를 통한 무결성 검증, 중요 작업을 위한 AWS Backup 다자 승인</li>
        <li>데이터 스토어에서 암호화 활성화: RDS, EBS, DynamoDB, EFS, S3</li>
        <li>백업 접근을 위한 최소 권한 IAM 권한 구현</li>
        <li>중요한 백업에 대한 불변성 구성</li>
        <li>백업 환경에 대한 논리적 분리 생성</li>
        <li>백업 검증/복원 테스트 구현</li>
        <li>민감한 복구 작업을 위한 다자 승인 구성</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Identity and Access Management (IAM)</li>
        <li>AWS Key Management Service (AWS KMS)</li>
        <li>Amazon S3 (Object Lock 및 복제)</li>
        <li>Amazon RDS, Amazon DynamoDB, Amazon EBS, Amazon EFS</li>
        <li>AWS Elastic Disaster Recovery</li>
        <li>AWS Backup (Vault Lock, 복원 테스트, 다자 승인)</li>
      </ul>
      <PageNav />
    </article>
  );
}
