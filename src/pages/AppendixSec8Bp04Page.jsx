import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec8Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC08-BP04 — 접근 제어 강화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 과도한 접근 권한으로 인해 민감 데이터가 비인가 사용자에게 노출될 수 있습니다.</p>
      </div>
      <p>
        권한 있는 사용자만 필요한 경우에만 저장 데이터에 접근할 수 있도록 확인하고, 중요 데이터를 다른 데이터와 격리합니다. 최소 권한 원칙을 적용하고, 데이터 분류에 따라 별도의 계정과 접근 제어를 사용합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>최소 권한 원칙에 따른 데이터 접근 제어</li>
        <li>데이터 분류에 따른 별도 계정 및 격리 환경</li>
        <li>접근 권한의 지속적인 검토 및 감사</li>
        <li>비인가 접근 시도의 탐지 및 경보</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>여러 민감도 수준의 데이터를 동일한 접근 제어 정책으로 관리</li>
        <li>광범위한 권한을 가진 IAM 역할이나 사용자를 통해 불필요하게 많은 데이터에 접근</li>
        <li>KMS 키 정책이 너무 허용적으로 설정되어 과도한 복호화 권한 부여</li>
        <li>접근 권한 변경 및 이상 접근에 대한 정기적 검토와 모니터링 부재</li>
        <li>다양한 분류의 데이터를 동일한 계정 또는 저장소에 혼합 저장</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최소 권한 적용으로 자격 증명 침해 시 데이터 접근 범위 제한</li>
        <li>데이터 분류별 격리로 규정 준수 요구 사항 충족 용이</li>
        <li>과도한 접근 권한의 자동 탐지로 보안 태세 개선</li>
        <li>데이터 접근 감사 추적으로 규제 준수 입증 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>데이터 분류에 따라 별도의 AWS 계정을 사용하여 민감 데이터를 격리합니다(AWS Organizations 활용). 프로덕션, 개발/테스트, 규정 준수 데이터에 각각 별도 계정을 사용합니다.</li>
        <li>KMS 키 정책을 검토하여 최소 권한 원칙을 적용하고, IAM Access Analyzer의 키 정책 검사를 사용하여 과도하게 허용적인 KMS 정책을 탐지합니다.</li>
        <li>S3 버킷 정책 및 객체 수준 접근 제어를 검토하고, S3 퍼블릭 액세스 차단을 모든 버킷에 적용합니다. IAM Access Analyzer를 사용하여 외부에서 접근 가능한 S3 버킷을 지속적으로 탐지합니다.</li>
        <li>S3 버전 관리와 Object Lock(Governance 또는 Compliance 모드)을 활성화하여 중요 데이터의 무단 삭제 및 변조를 방지합니다. Amazon S3 Glacier Vault Lock을 장기 보관 데이터에 적용합니다.</li>
        <li>S3 Inventory를 사용하여 버킷 내 객체의 암호화 상태, 접근 제어, 버전 관리 설정을 정기적으로 감사합니다.</li>
        <li>공유 EBS 스냅샷 및 AMI를 정기적으로 검토하고, 의도치 않게 공개된 스냅샷을 탐지합니다. AWS Resource Access Manager(RAM) 공유를 감사하여 의도하지 않은 교차 계정 접근을 차단합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Organizations — 데이터 분류별 계정 격리</li>
        <li>AWS KMS — 키 정책을 통한 복호화 접근 제어</li>
        <li>IAM Access Analyzer — S3 및 KMS 키에 대한 외부 접근 탐지</li>
        <li>Amazon S3 퍼블릭 액세스 차단 — S3 데이터 퍼블릭 노출 방지</li>
        <li>Amazon S3 Object Lock — WORM 스토리지로 데이터 변경 불가 보장</li>
        <li>Amazon S3 Glacier Vault Lock — 장기 보관 데이터 변경 불가 정책</li>
        <li>Amazon S3 Inventory — 버킷 객체 감사 및 보고</li>
        <li>AWS Resource Access Manager(RAM) — 교차 계정 리소스 공유 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
