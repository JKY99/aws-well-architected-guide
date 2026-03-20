import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec11Bp06Page() {
  return (
    <article className="doc-content">
      <h1>SEC11-BP06 — 소프트웨어 프로그래밍 방식으로 배포</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        Infrastructure as Code(IaC)와 자동화된 CI/CD 파이프라인을 사용하여 인프라와 소프트웨어를
        배포합니다. 수동 배포 프로세스를 제거하여 구성 오류, 보안 설정 누락, 승인되지 않은
        변경으로 인한 보안 위험을 최소화합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 인프라 변경은 코드 검토와 자동화된 보안 스캔을 거쳐 파이프라인을 통해 배포됩니다.
        수동 콘솔 접근을 통한 프로덕션 변경이 없으며, 모든 배포는 추적 가능하고 재현 가능합니다.
        드리프트(Drift) 탐지를 통해 허가되지 않은 변경이 자동으로 감지됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>긴급한 상황에서 수동 콘솔 변경을 허용하다가 이것이 표준 방식이 됨</li>
        <li>IaC를 사용하지만 실제 환경이 IaC와 달라지는 드리프트를 모니터링하지 않음</li>
        <li>여러 개발자가 직접 AWS 콘솔에 접근하여 일관되지 않은 구성 변경 수행</li>
        <li>배포 파이프라인에 보안 스캔이 포함되지 않아 취약한 구성이 배포됨</li>
        <li>IaC 코드가 버전 관리되지 않아 변경 이력 추적 불가</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>모든 배포가 검토되고 승인된 프로세스를 거쳐 무단 변경 방지</li>
        <li>IaC로 일관된 보안 구성이 적용되어 인적 오류로 인한 설정 오류 제거</li>
        <li>모든 변경의 완전한 감사 추적으로 무엇이 언제 변경되었는지 파악 가능</li>
        <li>롤백 능력 향상으로 보안 문제 발생 시 신속한 복구</li>
        <li>컴플라이언스 증명을 위한 변경 관리 증거 자동 생성</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CloudFormation 또는 AWS CDK를 사용하여 모든 인프라를 코드로 정의하고 Git 저장소에서 관리합니다. 수동 콘솔 변경은 원칙적으로 금지합니다.</li>
        <li>AWS CodePipeline을 사용하여 코드 변경 → 빌드 → 보안 스캔 → 스테이징 배포 → 승인 → 프로덕션 배포의 표준 파이프라인을 구성합니다.</li>
        <li>AWS Config와 CloudFormation Drift Detection을 사용하여 IaC와 실제 환경 간의 드리프트를 자동으로 탐지하고 알림을 발송합니다.</li>
        <li>프로덕션 환경에 대한 직접 IAM 접근을 제한하고, 모든 프로덕션 변경은 파이프라인 역할(Pipeline Role)을 통해서만 이루어지도록 SCP로 강제합니다.</li>
        <li>cfn-nag, Checkov, AWS CloudFormation Guard를 파이프라인에 통합하여 IaC 코드의 보안 정책 위반(퍼블릭 S3 버킷, 암호화 미적용, 과도한 IAM 권한 등)을 배포 전에 차단합니다.</li>
        <li>AWS CodeDeploy의 배포 전략(Blue/Green, Canary)을 활용하여 보안 문제 발생 시 신속하게 이전 버전으로 롤백할 수 있는 기반을 마련합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation / AWS CDK — 인프라를 코드로 정의하고 관리</li>
        <li>AWS CodePipeline — 보안 게이트 포함 CI/CD 파이프라인 자동화</li>
        <li>AWS Config — 인프라 드리프트 탐지 및 구성 준수 모니터링</li>
        <li>AWS CodeDeploy — 안전한 블루/그린 배포 및 롤백</li>
        <li>AWS CloudFormation Guard — IaC 정책 검증 및 보안 규정 준수</li>
      </ul>
      <PageNav />
    </article>
  );
}
