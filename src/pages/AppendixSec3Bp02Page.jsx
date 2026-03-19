import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP02 — 최소 권한 액세스 부여</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        작업 수행에 필요한 최소한의 권한만 부여하는 최소 권한(Least Privilege) 원칙을 적용합니다.
        과도한 권한은 자격 증명 탈취 시 피해 범위를 확대시키며, 내부자 위협 가능성도 높입니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 IAM 주체(사용자, 역할, 서비스)가 현재 수행 중인 작업에 필요한 권한만 보유합니다.
        권한은 정기적으로 검토되고, 사용하지 않는 권한은 신속히 제거됩니다. Permission Boundary를
        활용하여 권한 위임의 상한선을 명확히 설정합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>와일드카드(*)를 사용한 Action 또는 Resource 정의로 과도한 권한 부여</li>
        <li>개발 편의를 위해 프로덕션 환경에 AdministratorAccess 역할 부여</li>
        <li>권한 검토 없이 장기간 동일한 정책 유지</li>
        <li>Permission Boundary 없이 하위 역할 생성 권한 위임</li>
        <li>모든 S3 버킷에 동일한 광범위한 정책 적용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자격 증명 탈취 시 피해 범위를 최소화하여 침해 영향 축소</li>
        <li>내부자 위협 및 실수로 인한 데이터 손상 가능성 감소</li>
        <li>규정 준수 감사 시 최소 권한 원칙 적용 근거 확보</li>
        <li>불필요한 권한으로 인한 우발적 리소스 변경/삭제 방지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>IAM Access Analyzer의 정책 생성 기능을 활용하여 CloudTrail 로그 기반 최소 권한 정책을 자동 생성합니다.</li>
        <li>Permission Boundary를 설정하여 역할이 위임할 수 있는 최대 권한 범위를 제한합니다.</li>
        <li>서비스 제어 정책(SCP)을 활용하여 계정 또는 OU 수준에서 권한 상한을 설정합니다.</li>
        <li>IAM 정책에서 Resource 필드를 특정 ARN으로 제한하고 와일드카드 사용을 최소화합니다.</li>
        <li>Condition 절을 활용하여 특정 IP, MFA 인증, 태그 등 조건부 액세스를 구현합니다.</li>
        <li>권한 경계(Permission Boundary)를 개발자가 생성하는 모든 역할에 자동 적용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>IAM Access Analyzer — CloudTrail 기반 최소 권한 정책 자동 생성</li>
        <li>IAM Permission Boundaries — 위임 가능한 최대 권한 범위 설정</li>
        <li>AWS Organizations SCPs — 조직/계정 수준 권한 제어</li>
        <li>AWS CloudTrail — API 사용 현황 분석</li>
        <li>AWS Config — IAM 정책 컴플라이언스 모니터링</li>
      </ul>
      <PageNav />
    </article>
  );
}
