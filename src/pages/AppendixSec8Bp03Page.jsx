import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec8Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC08-BP03 — 저장 데이터 보호 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 잘못된 구성이 탐지되지 않아 데이터가 비인가 접근에 노출될 수 있습니다.</p>
      </div>
      <p>
        자동화된 도구를 사용하여 저장 데이터 보호를 지속적으로 모니터링하고 잘못된 구성을 탐지 및 수정합니다. 인프라 코드(IaC)로 암호화 요구 사항을 적용하고, AWS 서비스를 활용하여 데이터 보호 상태를 지속적으로 관리합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>IaC 템플릿을 통한 암호화 구성의 일관된 배포</li>
        <li>잘못된 구성을 자동으로 탐지하고 수정하는 시스템</li>
        <li>데이터 보호 상태에 대한 지속적인 모니터링 및 가시성</li>
        <li>데이터 손실 또는 손상 시 복구 능력 보장</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>암호화 구성을 수동으로 관리하여 일관성 결여 및 오류 발생</li>
        <li>잘못된 구성 탐지를 위한 자동화된 모니터링 부재</li>
        <li>데이터 보호 상태 변경에 대한 알림 미구성</li>
        <li>백업 및 복구 절차를 정기적으로 테스트하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>일관된 암호화 구성 배포로 인적 오류 감소</li>
        <li>잘못된 구성의 신속한 탐지 및 수정</li>
        <li>데이터 보호 상태에 대한 지속적인 가시성 확보</li>
        <li>데이터 손실 사고 발생 시 신속한 복구 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CloudFormation 또는 Terraform과 같은 IaC 도구를 사용하여 암호화 구성을 코드로 정의하고, CloudFormation Guard를 사용하여 암호화 요구 사항을 정책으로 적용합니다.</li>
        <li>AWS Config 규칙을 사용하여 암호화 설정을 지속적으로 모니터링하고, 비준수 리소스에 대해 자동 수정 조치를 구성합니다(예: encrypted-volumes, rds-storage-encrypted, s3-bucket-server-side-encryption-enabled).</li>
        <li>IAM Access Analyzer를 사용하여 저장소 리소스에 대한 과도한 접근 권한을 검토하고 수정합니다.</li>
        <li>Amazon GuardDuty를 활성화하여 EBS 볼륨, S3 버킷, RDS 데이터베이스에 대한 비정상적인 접근 및 잠재적 데이터 침해를 탐지합니다.</li>
        <li>Amazon Macie를 활성화하여 S3 버킷의 민감 데이터를 지속적으로 탐지하고 암호화 상태를 모니터링합니다.</li>
        <li>AWS Backup을 사용하여 암호화된 백업을 자동화하고, 정기적으로 복구 절차를 테스트합니다. AWS Elastic Disaster Recovery를 활용하여 복구 목표(RTO/RPO)를 충족시킵니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation — IaC를 통한 암호화 구성 자동화</li>
        <li>CloudFormation Guard — 암호화 정책 적용을 위한 정책-코드 프레임워크</li>
        <li>AWS Config — 암호화 설정 지속적 모니터링 및 자동 수정</li>
        <li>IAM Access Analyzer — 저장소 리소스 접근 권한 분석</li>
        <li>Amazon GuardDuty — EBS, S3, RDS에 대한 위협 탐지</li>
        <li>Amazon Macie — S3의 민감 데이터 자동 탐지 및 모니터링</li>
        <li>AWS Backup — 암호화된 중앙 집중식 백업 자동화</li>
        <li>AWS Elastic Disaster Recovery — 자동화된 재해 복구</li>
      </ul>
      <PageNav />
    </article>
  );
}
