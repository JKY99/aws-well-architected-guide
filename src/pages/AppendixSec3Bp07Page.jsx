import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp07Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP07 — 퍼블릭 및 교차 계정 액세스 분석</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        S3 버킷, IAM 역할, KMS 키, Lambda 함수 등 리소스가 의도치 않게 인터넷에 공개되거나
        외부 AWS 계정에서 접근 가능한 상태를 지속적으로 탐지하고 수정합니다.
        IAM Access Analyzer를 활용하여 신뢰 영역 외부에서 접근 가능한 리소스를 자동으로 식별합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        의도치 않게 공개된 리소스가 실시간으로 탐지되고 자동으로 알림이 발송됩니다. 모든 퍼블릭 및
        교차 계정 액세스는 비즈니스 요구사항에 따라 명시적으로 승인되고 문서화됩니다. 승인되지 않은
        외부 액세스는 즉시 수정됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>개발 편의를 위해 S3 버킷이나 RDS 인스턴스를 퍼블릭으로 설정하고 프로덕션에 그대로 유지함</li>
        <li>교차 계정 역할의 신뢰 정책에 특정 계정이 아닌 와일드카드("*")를 사용함</li>
        <li>더 이상 사용하지 않는 파트너 계정에 대한 교차 계정 접근 권한을 제거하지 않음</li>
        <li>리소스 기반 정책 변경 시 의도치 않은 퍼블릭 노출을 검토하지 않음</li>
        <li>AWS Config 규칙이나 Security Hub를 통한 지속적인 모니터링 없이 수동 검토에만 의존함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>의도치 않은 데이터 노출로 인한 데이터 침해 위험 방지</li>
        <li>공개된 S3 버킷이나 RDS 데이터베이스로 인한 보안 사고 예방</li>
        <li>외부 신뢰 관계의 지속적인 가시성 확보</li>
        <li>자동화된 탐지로 수동 검토보다 빠른 위험 식별 및 대응</li>
        <li>규정 준수 요건(데이터 레지던시, GDPR 등) 충족 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS IAM Access Analyzer를 각 계정과 조직 수준에서 활성화하여 외부 접근 가능한 리소스(S3, IAM 역할, KMS, Lambda, SQS, SNS 등)를 자동으로 탐지합니다.</li>
        <li>Access Analyzer 결과를 AWS Security Hub로 통합하여 중앙에서 관리하고, 높은 위험도의 결과에 대해 Amazon SNS 알림을 구성합니다.</li>
        <li>AWS Config 규칙(s3-bucket-public-read-prohibited, s3-bucket-public-write-prohibited 등)을 활성화하여 S3 버킷의 퍼블릭 접근을 지속적으로 모니터링합니다.</li>
        <li>S3 계정 수준 퍼블릭 액세스 차단(Block Public Access)을 모든 계정에 기본으로 활성화합니다.</li>
        <li>교차 계정 역할의 신뢰 정책을 정기적으로 검토하여 더 이상 필요하지 않은 신뢰 관계를 제거합니다.</li>
        <li>새로운 리소스 기반 정책 생성 시 Access Analyzer의 정책 검증 기능을 CI/CD 파이프라인에 통합합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM Access Analyzer — 외부 접근 가능 리소스 자동 탐지 및 정책 검증</li>
        <li>AWS Config — 리소스 구성 규정 준수 지속적 모니터링</li>
        <li>Amazon S3 Block Public Access — 계정 및 버킷 수준 퍼블릭 액세스 차단</li>
        <li>AWS Security Hub — 보안 결과 중앙 집계 및 우선순위 관리</li>
        <li>Amazon GuardDuty — 비정상적인 API 호출 및 무단 액세스 시도 탐지</li>
      </ul>
      <PageNav />
    </article>
  );
}
