import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec8Page() {
  return (
    <article className="doc-content">
      <h1>SEC 8 — 저장 데이터를 어떻게 보호합니까?</h1>

      <p>
        저장 데이터(Data at Rest)를 암호화하고 액세스를 제어하여
        무단 접근과 데이터 유출을 방지합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>SEC08-BP01:</strong> 저장 데이터 암호화 구현<br />
          <span>S3, EBS, RDS, DynamoDB 등 모든 스토리지 서비스에서 저장 데이터 암호화를 활성화합니다.</span>
        </li>
        <li>
          <strong>SEC08-BP02:</strong> 액세스 제어 적용<br />
          <span>IAM 정책, S3 버킷 정책, 리소스 기반 정책을 사용하여 저장 데이터에 대한 접근을 최소 권한 원칙에 따라 제어합니다.</span>
        </li>
        <li>
          <strong>SEC08-BP03:</strong> AWS Key Management Service(KMS) 사용<br />
          <span>AWS KMS를 사용하여 암호화 키를 중앙에서 관리하고 키 사용 감사 로그를 유지합니다.</span>
        </li>
        <li>
          <strong>SEC08-BP04:</strong> 데이터 분류 스키마 적용<br />
          <span>데이터 민감도에 따라 분류하고, 분류 수준에 맞는 보호 제어를 적용합니다.</span>
        </li>
        <li>
          <strong>SEC08-BP05:</strong> Amazon Macie를 사용한 민감 데이터 탐지<br />
          <span>Amazon Macie를 사용하여 S3에 저장된 민감한 데이터(PII, 신용카드 번호 등)를 자동으로 발견하고 보호합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
