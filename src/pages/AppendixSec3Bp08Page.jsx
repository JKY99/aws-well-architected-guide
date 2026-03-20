import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp08Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP08 — 조직 내 리소스 안전하게 공유</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 의도치 않은 외부 접근으로 인한 보안 위험이 있습니다.</p>
      </div>
      <p>
        보안 방법을 사용하여 조직 내에서만 리소스를 공유하여 의도치 않은 접근을 최소화합니다. AWS Organizations를 사용하여 여러 AWS 계정을 통합하고 중앙에서 관리합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>보안 방법을 사용하여 조직 내에서만 리소스 공유</li>
        <li>공유된 리소스의 지속적인 모니터링 및 예상치 못한 외부 공유에 대한 자동 알림</li>
        <li>공유해야 할 것과 그렇지 않아야 할 것에 대한 기준선 수립</li>
        <li>필요한 경우에만 명시적으로 공유하는 정책 적용</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>예상치 못한 외부 공유를 지속적으로 모니터링하고 자동 알림하는 프로세스 부재</li>
        <li>공유해야 할 것과 그렇지 않아야 할 것에 대한 기준선 부재</li>
        <li>필요한 경우 명시적으로 공유하는 대신 기본적으로 광범위하게 공개하는 정책 적용</li>
        <li>필요할 때 중복되는 기초 리소스를 수동으로 반복 생성</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>중앙화된 리소스 공유로 중복 방지 및 비용 절감</li>
        <li>조직 경계 외부로의 의도치 않은 공유 방지</li>
        <li>공유 리소스에 대한 가시성 및 거버넌스 확보</li>
        <li>일관된 공유 메커니즘으로 감사 및 규정 준수 관리 단순화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Organizations를 사용하여 여러 AWS 계정을 통합하고 Security Hub, GuardDuty, AWS Backup 등 AWS 서비스와 통합합니다.</li>
        <li>ID 기반 및 네트워크 제어를 결합한 데이터 경계를 구축합니다.</li>
        <li>SCP를 사용하여 외부 주체와의 공유를 방지합니다.</li>
        <li>Amazon S3의 경우 ACL을 비활성화하고 IAM 정책을 사용합니다.</li>
        <li>AWS Resource Access Manager(RAM)를 사용하여 계정 간 리소스를 안전하게 공유합니다.</li>
        <li>VPC 엔드포인트 정책에 AWS:PrincipalOrgId 조건을 적용합니다.</li>
        <li>ram:RequestedAllowsExternalPrincipals 조건을 사용하여 조직 내에서만 공유를 제한합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Organizations — 다중 계정 관리</li>
        <li>AWS Resource Access Manager(RAM) — 계정 간 안전한 리소스 공유</li>
        <li>AWS Security Hub CSPM — 중앙화된 발견사항 관리</li>
        <li>Amazon GuardDuty — 위협 탐지</li>
        <li>AWS Backup — 교차 계정 백업 공유</li>
        <li>AWS KMS — 암호화 키 관리</li>
        <li>VPC 엔드포인트 — 네트워크 기반 접근 제어</li>
      </ul>
      <PageNav />
    </article>
  );
}
