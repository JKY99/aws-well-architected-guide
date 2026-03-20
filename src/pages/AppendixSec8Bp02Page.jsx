import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec8Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC08-BP02 — 저장 데이터 암호화 강제</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비인가 접근이나 스토리지 매체 도난 시 데이터가 노출될 수 있습니다.</p>
      </div>
      <p>
        저장 시 기본으로 개인 데이터를 암호화하는 메커니즘을 구현합니다. 이러한 메커니즘은 데이터 기밀성을 유지하고 의도치 않은 데이터 공개 또는 유출에 대한 추가적인 보호 계층을 제공합니다. 암호화되지 않은 데이터의 인벤토리를 유지하고 이를 보호하는 제어가 무엇인지 이해합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>저장 시 기본으로 개인 데이터를 암호화하는 메커니즘</li>
        <li>데이터 기밀성 유지 및 의도치 않은 데이터 공개 또는 유출에 대한 추가적인 보호 계층</li>
        <li>암호화되지 않은 데이터의 인벤토리 유지 및 보호 제어 이해</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>기본으로 암호화가 활성화되는 구성 미사용</li>
        <li>복호화 키에 대한 과도하게 허용적인 접근</li>
        <li>암호화 및 복호화 키 사용 모니터링 미실시</li>
        <li>데이터를 암호화되지 않은 상태로 저장</li>
        <li>데이터 사용, 유형 및 분류에 관계없이 모든 데이터에 동일한 암호화 키 사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 기밀성 유지</li>
        <li>의도치 않은 데이터 공개 또는 유출에 대한 추가적인 보호 계층 제공</li>
        <li>복호화 없이는 읽거나 접근할 수 없는 데이터 보호 가능</li>
        <li>성능 영향 없는 향상된 보안(Amazon S3와 같은 서비스의 경우)</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>새로 생성되는 모든 Amazon EBS 볼륨을 AWS 관리형 또는 고객 관리형 키로 암호화하도록 EBS 볼륨의 기본 암호화를 구성합니다.</li>
        <li>루트 볼륨과 스냅샷을 자동으로 암호화하기 위해 암호화 방식으로 AMI를 복사하도록 암호화된 Amazon Machine Images(AMI)를 구성합니다.</li>
        <li>저장 시 RDS 데이터베이스 클러스터와 스냅샷의 암호화를 활성화하도록 Amazon RDS 암호화를 구성합니다.</li>
        <li>암호화 키를 데이터 분류에 매핑하고 프로덕션과 개발/테스트 데이터에 별도의 키를 사용하도록 AWS KMS 키를 정책과 함께 생성하고 구성합니다.</li>
        <li>사용 중인 각 서비스의 보안 설명서를 검토하여 암호화 옵션을 확인하고 추가 AWS 서비스에서 암호화를 구성합니다.</li>
        <li>AWS Config 규칙(encrypted-volumes, rds-storage-encrypted 등)을 사용하여 암호화 설정의 자동화된 규정 준수 검사를 구현합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Key Management Service(AWS KMS) — 기본 암호화 키 관리</li>
        <li>AWS CloudHSM — 관리형 단일 테넌트 HSM(FIPS 140-2 레벨 3)</li>
        <li>AWS Encryption SDK — 봉투 암호화를 사용한 클라이언트 측 암호화</li>
        <li>Amazon EBS — 블록 스토리지 암호화</li>
        <li>Amazon RDS — 관계형 데이터베이스 암호화</li>
        <li>Amazon S3 — 객체 스토리지 암호화(새 객체에 대한 기본값)</li>
        <li>AWS Config 규칙 — 암호화 설정에 대한 자동화된 규정 준수 검사</li>
      </ul>
      <PageNav />
    </article>
  );
}
