import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps6Bp02Page() {
  return (
    <article className="doc-content">
      <h1>OPS06-BP02 — 배포 테스트</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        조직은 배포를 포함한 테스트 주도 개발 문화를 채택합니다. 팀이 릴리스 관리보다는
        비즈니스 가치 제공에 집중할 수 있도록 합니다. 배포 위험이 식별되면 팀이 조기에 참여하여
        적절한 완화 방법을 결정합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        조직이 배포를 포함한 테스트 주도 개발 문화를 채택합니다.
        팀은 릴리스 관리보다는 비즈니스 가치 제공에 집중합니다.
        배포 위험이 식별되면 팀이 조기에 참여하여 적절한 완화 방법을 결정합니다.
        사전 프로덕션에서의 광범위한 테스트로 프로덕션 영향을 최소화합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>프로덕션 릴리스 중 테스트되지 않은 배포로 인해 문제가 자주 발생하여 에스컬레이션이 필요한 경우</li>
        <li>기존 리소스를 업데이트하는 IaC가 포함된 릴리스이지만 IaC가 성공적으로 실행되는지 확인하지 못하는 경우</li>
        <li>의도한 대로 작동하지 않는 새로운 기능을 배포하여 영향을 받은 사용자가 보고할 때까지 가시성이 없는 경우</li>
        <li>인증서를 업데이트하고 실수로 잘못된 구성 요소에 설치하여 안전한 연결을 설정할 수 없는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사전 프로덕션에서의 광범위한 테스트로 잠재적 프로덕션 영향 최소화</li>
        <li>불완전하거나 잘못된 배포 단계, 잘못된 구성 등의 일반적인 문제를 프로덕션 전에 발견</li>
        <li>복구 단계를 사전에 테스트 가능</li>
        <li>프로덕션 릴리스 중 신뢰도 향상</li>
        <li>변경 속도를 늦추지 않으면서 운영 지원 최소화</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>프로덕션에 최대한 가깝게 미러링한 사전 프로덕션 환경에서 배포 단계를 테스트합니다.</li>
        <li>드리프트 감지를 사용하여 CloudFormation 외부에서 변경된 사항을 탐지합니다.</li>
        <li>변경 세트를 사용하여 스택 업데이트 의도가 실제 CloudFormation 작업과 일치하는지 검증합니다.</li>
        <li>기능, 보안, 회귀, 통합, 부하 테스트를 자동화합니다.</li>
        <li>CloudWatch, CloudTrail, SNS 이벤트 알림으로 모니터링합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodePipeline — CI/CD 파이프라인 자동화</li>
        <li>AWS CodeDeploy — 자동화된 배포 관리</li>
        <li>AWS CloudFormation — 인프라 변경 감지 및 검증</li>
        <li>Amazon CloudWatch — 배포 모니터링</li>
        <li>AWS CloudTrail — 감사 로깅</li>
      </ul>

      <PageNav />
    </article>
  );
}
