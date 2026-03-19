import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec8Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC08-BP01 — 저장 데이터 암호화 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        S3, EBS, RDS, DynamoDB, EFS 등 모든 저장 매체의 데이터에 암호화를 적용합니다.
        암호화는 스토리지 매체의 물리적 도난이나 무단 접근 시에도 데이터를 보호하는 마지막
        방어선으로, 특히 규제 대상 데이터(개인정보, 금융 정보)에는 반드시 적용해야 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        AWS 계정 내 모든 데이터 저장소에 암호화가 기본으로 활성화됩니다. 민감 데이터에는
        고객 관리형 KMS 키(CMK)가 사용되고, 키 접근은 IAM 정책으로 엄격하게 통제됩니다.
        새로운 데이터 저장소 생성 시 암호화가 의무화되어 미암호화 리소스가 생성되지 않습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>S3 버킷 또는 EBS 볼륨 생성 시 암호화를 기본으로 활성화하지 않음</li>
        <li>AWS 관리형 키(aws/s3 등)를 사용하여 키 접근 제어나 감사가 어려운 상황</li>
        <li>RDS 인스턴스 생성 후 암호화를 활성화하려 했으나 기존 인스턴스 재생성 필요성을 인지하지 못함</li>
        <li>백업 스냅샷에 원본과 동일한 암호화를 적용하지 않아 암호화되지 않은 복사본 존재</li>
        <li>데이터 이동(ETL, 복사) 시 목적지 저장소의 암호화를 확인하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>스토리지 매체 도난 또는 물리적 접근 시 데이터 노출 방지</li>
        <li>클라우드 서비스 운영자(AWS 직원)의 데이터 접근으로부터 보호(CMK 사용 시)</li>
        <li>GDPR, HIPAA, PCI-DSS 등 규제의 저장 데이터 암호화 요구 사항 충족</li>
        <li>AWS KMS와의 통합으로 암호화 키 접근 감사 로그 자동 생성</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Organizations SCP를 사용하여 암호화되지 않은 S3 버킷, EBS 볼륨, RDS 인스턴스 생성을 조직 전체에서 차단합니다.</li>
        <li>S3 버킷의 기본 암호화를 SSE-KMS로 설정하고, aws:SecureTransport 조건으로 HTTP 요청을 거부합니다.</li>
        <li>EBS 볼륨은 계정 수준에서 기본 암호화를 활성화하여 새로 생성되는 모든 볼륨에 자동으로 암호화가 적용되도록 합니다.</li>
        <li>RDS 인스턴스는 생성 시 암호화를 활성화하고, 자동 백업 및 스냅샷에도 동일한 KMS 키로 암호화합니다.</li>
        <li>DynamoDB 테이블은 AWS 관리형 키 대신 고객 관리형 KMS 키(CMK)를 사용하여 키 접근 제어와 감사를 강화합니다.</li>
        <li>AWS Config 규칙(encrypted-volumes, rds-storage-encrypted, s3-bucket-server-side-encryption-enabled)으로 미암호화 리소스를 지속적으로 감지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS KMS — 암호화 키 생성, 관리, 감사</li>
        <li>Amazon S3 SSE-KMS — S3 서버 측 암호화</li>
        <li>Amazon EBS 기본 암호화 — 계정 수준 EBS 자동 암호화</li>
        <li>Amazon RDS 암호화 — 데이터베이스 저장 데이터 암호화</li>
        <li>AWS Config — 미암호화 리소스 규정 준수 평가</li>
      </ul>
      <PageNav />
    </article>
  );
}
