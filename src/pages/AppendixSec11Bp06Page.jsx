import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec11Bp06Page() {
  return (
    <article className="doc-content">
      <h1>SEC11-BP06 — 소프트웨어 프로그래밍 방식으로 배포</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 수동 배포로 인한 인적 오류가 보안 사고나 예상치 못한 문제로 이어질 수 있습니다.</p>
      </div>
      <p>
        인적 오류로 인한 배포 실패 또는 예상치 못한 문제가 발생할 가능성을 줄이기 위해 가능한 한 프로그래밍 방식으로 소프트웨어 배포를 수행합니다. 이 모범 사례는 자동화된 CI/CD 도구 및 프로세스를 위해 프로덕션 환경에서의 지속적인 인간 접근을 제거합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>테스트한 워크로드 버전이 배포되는 버전</li>
        <li>매번 일관되게 배포 수행</li>
        <li>구성이 외부화되어 변경 없이 다른 환경에 배포 가능</li>
        <li>환경 간 무결성을 확인하는 소프트웨어 패키지의 암호화 서명</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>프로덕션에 소프트웨어를 수동으로 배포</li>
        <li>다른 환경에 맞추기 위해 소프트웨어를 수동으로 변경</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>소프트웨어 릴리스 프로세스에 대한 신뢰도 향상</li>
        <li>실패한 변경이 비즈니스 기능에 미치는 영향 위험 감소</li>
        <li>변경 위험 감소로 릴리스 주기 향상</li>
        <li>배포 중 예상치 못한 이벤트에 대한 자동 롤백 기능</li>
        <li>테스트된 소프트웨어가 배포된 소프트웨어임을 암호화적으로 증명 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CodeBuild 및 AWS CodePipeline과 같은 CI/CD 도구를 사용하여 자동화된 배포를 구현합니다. 프로덕션 환경에서 지속적인 인간 접근을 제거합니다. 환경 특정 데이터를 AWS Systems Manager Parameter Store에 저장하여 구성을 외부화합니다.</li>
        <li>AWS Signer 또는 AWS KMS를 사용하여 테스트된 패키지에 서명하고 대상 환경에 배포하기 전에 검증을 구성합니다.</li>
        <li>AWS CloudFormation 또는 AWS CDK를 사용하여 인프라를 코드로 정의하고 CI/CD 파이프라인에 통합합니다. 코드 변경 → 빌드 → 보안 스캔 → 스테이징 배포 → 승인 → 프로덕션 배포의 표준 파이프라인을 구성합니다.</li>
        <li>AWS CodeDeploy 또는 AWS ECS를 사용하여 카나리 배포를 구현합니다. 먼저 일부 인스턴스/사용자에게 변경 사항을 롤아웃하고 감지된 문제에 대한 롤백 메커니즘을 구현합니다.</li>
        <li>Amazon CloudWatch로 모니터링 및 지표를 설정하고 AWS CloudTrail로 감사 로깅을 수행합니다. 보안 모범 사례 준수 여부를 정기적으로 검토합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeBuild — 코드 빌드 및 테스트</li>
        <li>AWS CodePipeline — 빌드, 테스트, 배포 자동화</li>
        <li>AWS CodeDeploy — 애플리케이션 배포</li>
        <li>AWS Signer — 애플리케이션 패키지 서명</li>
        <li>AWS Key Management Service(KMS) — 암호화 서명 작업</li>
        <li>AWS Systems Manager Parameter Store — 구성 데이터 저장</li>
        <li>AWS CloudFormation / AWS CDK — 인프라를 코드로 정의</li>
        <li>AWS ECS — 카나리 배포를 지원하는 컨테이너 오케스트레이션</li>
      </ul>
      <PageNav />
    </article>
  );
}
