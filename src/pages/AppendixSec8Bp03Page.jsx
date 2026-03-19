import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec8Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC08-BP03 — 저장 데이터 액세스 제어</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        저장 데이터에 대한 접근을 최소 권한 원칙에 따라 엄격하게 제어합니다. S3 버킷, 데이터베이스,
        파일 시스템 등 모든 데이터 저장소에 대해 IAM 정책, 리소스 기반 정책, VPC 엔드포인트를
        조합하여 세분화된 접근 제어를 구현합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 데이터 저장소는 명시적 허용 없이 접근이 차단되고, 사용자와 서비스는 필요한 최소한의
        데이터에만 접근합니다. 퍼블릭 인터넷을 통한 데이터 접근이 차단되고, 데이터 저장소 접근은
        VPC 내부 또는 VPC 엔드포인트를 통해서만 이루어집니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>S3 버킷 정책에서 Principal을 "*"(전체 공개)로 설정하여 인터넷에 데이터 노출</li>
        <li>IAM 역할에 S3 전체 버킷 접근 권한(s3:*)을 부여하여 불필요한 버킷까지 접근 가능</li>
        <li>데이터베이스에 인터넷 경유 접근을 허용하여 무차별 대입 공격에 노출</li>
        <li>VPC 엔드포인트 없이 인터넷 게이트웨이를 통해 S3에 접근하여 트래픽이 공개 네트워크를 경유</li>
        <li>교차 계정 접근에 대한 명시적 제어 없이 와일드카드 허용 정책 사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최소 권한 적용으로 자격 증명 침해 시 데이터 접근 범위 제한</li>
        <li>VPC 엔드포인트를 통해 AWS 내부 네트워크에서만 데이터 접근하여 도청 위험 감소</li>
        <li>퍼블릭 액세스 차단으로 설정 오류로 인한 데이터 공개 노출 방지</li>
        <li>세분화된 접근 제어로 데이터 거버넌스 및 규제 준수 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>모든 S3 버킷에 퍼블릭 액세스 차단(Block Public Access)을 활성화하고, S3 계정 수준에서도 동일하게 적용합니다.</li>
        <li>S3 버킷 정책에 aws:SourceVpc 또는 aws:SourceVpce 조건을 사용하여 특정 VPC 또는 VPC 엔드포인트에서만 접근을 허용합니다.</li>
        <li>VPC S3 게이트웨이 엔드포인트를 생성하고, 엔드포인트 정책으로 특정 버킷만 접근 가능하도록 제한합니다.</li>
        <li>Amazon RDS는 프라이빗 서브넷에 배치하고, 보안 그룹으로 애플리케이션 서버에서만 데이터베이스 포트 접근을 허용합니다.</li>
        <li>IAM 역할의 S3 접근 권한을 특정 버킷 ARN과 필요한 작업(s3:GetObject 등)으로만 제한합니다.</li>
        <li>AWS Access Analyzer를 사용하여 외부에서 접근 가능한 S3 버킷, KMS 키, IAM 역할 등을 자동으로 탐지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 퍼블릭 액세스 차단 — 퍼블릭 공개 방지</li>
        <li>VPC 게이트웨이/인터페이스 엔드포인트 — 인터넷 경유 없는 AWS 서비스 접근</li>
        <li>AWS IAM — 최소 권한 접근 정책 관리</li>
        <li>AWS Access Analyzer — 외부 접근 가능 리소스 자동 탐지</li>
        <li>Amazon VPC Security Groups — 데이터베이스 네트워크 접근 제어</li>
      </ul>
      <PageNav />
    </article>
  );
}
