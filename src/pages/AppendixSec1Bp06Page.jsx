import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Bp06Page() {
  return (
    <article className="doc-content">
      <h1>SEC01-BP06 — 표준 보안 제어 배포 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>보안 기준선을 코드로 정의하고 자동화를 통해 모든 환경에 일관되게 적용합니다. 수동 설정은 인적 오류와 일관성 부재를 초래하므로, IaC(Infrastructure as Code) 기반의 자동화된 보안 제어 배포가 필수적입니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 AWS 계정과 리소스에 표준화된 보안 제어가 자동으로 적용됩니다. 보안 기준선은 버전 관리되는 코드로 관리되며, 신규 계정이나 리소스 생성 시 자동으로 보안 설정이 적용됩니다. 기준에서 벗어난 구성은 자동으로 탐지되고 수정됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>콘솔에서 수동으로 보안 설정을 적용하여 환경 간 구성 불일치 발생</li>
        <li>보안 제어 설정을 문서화하지 않고 담당자 기억에 의존하여 재현 및 감사 불가</li>
        <li>신규 계정 생성 시 보안 설정을 누락하여 초기부터 취약한 상태로 운영 시작</li>
        <li>보안 구성 변경 이력 관리 없이 현재 상태만 파악하여 변경 추적 불가</li>
        <li>개발/스테이징/프로덕션 환경에 서로 다른 보안 설정을 적용하여 환경 간 보안 격차 발생</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>모든 환경에 일관된 보안 제어 적용으로 구성 불일치로 인한 취약점 제거</li>
        <li>IaC 기반 보안 설정의 버전 관리, 코드 리뷰, 변경 이력 추적 가능</li>
        <li>신규 계정 및 리소스에 보안 기준선 자동 적용으로 보안 공백 시간(Time-to-Secure) 최소화</li>
        <li>사람의 개입 없이 보안 제어를 대규모로 적용하여 운영 효율성 향상</li>
        <li>드리프트 탐지 및 자동 수정으로 보안 기준선 지속 유지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CloudFormation 또는 Terraform을 사용하여 보안 기준선(VPC 구성, 보안 그룹, IAM 정책 등)을 코드로 정의하고 버전 관리합니다.</li>
        <li>AWS Control Tower의 Customizations for Control Tower(CfCT)를 활용하여 신규 계정 생성 시 표준 보안 제어를 자동 배포합니다.</li>
        <li>AWS Service Catalog를 통해 승인된 보안 기준선 템플릿만 사용하도록 팀에 제공합니다.</li>
        <li>AWS Config의 자동 수정(Auto-Remediation) 기능으로 비규정 준수 리소스를 자동으로 정상화합니다.</li>
        <li>CI/CD 파이프라인에 보안 정책 검사(cfn-nag, Checkov, tfsec)를 통합하여 배포 전 보안 검증을 수행합니다.</li>
        <li>AWS CloudFormation StackSets를 사용하여 여러 계정과 리전에 동일한 보안 제어를 동시에 배포합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation — 인프라 및 보안 제어를 코드로 정의하고 배포</li>
        <li>AWS Control Tower — 멀티계정 보안 기준선 자동 적용 및 관리</li>
        <li>AWS Service Catalog — 승인된 보안 템플릿의 셀프서비스 제공</li>
        <li>AWS Config Auto-Remediation — 비규정 준수 구성 자동 수정</li>
        <li>AWS CloudFormation StackSets — 다수 계정/리전 동시 배포</li>
      </ul>
      <PageNav />
    </article>
  );
}
