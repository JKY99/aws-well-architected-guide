import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp02Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP02 — 변경 사항 테스트 및 검증</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 높습니다.</p>
      </div>

      <p>
        배포되는 모든 변경 사항은 프로덕션의 오류를 방지하기 위해 테스트해야 합니다.
        이 모범 사례는 버전 관리에서 아티팩트 빌드까지 애플리케이션 코드, 인프라, 구성,
        보안 제어, 운영 절차를 포함한 변경 사항 테스트에 초점을 맞춥니다.
      </p>

      <h2>원하는 결과</h2>
      <ul>
        <li>소프트웨어 변경 사항이 전달 전에 테스트됩니다.</li>
        <li>개발자가 테스트 결과와 검증에 액세스할 수 있습니다.</li>
        <li>조직이 모든 소프트웨어 변경 사항에 적용되는 테스트 표준을 보유합니다.</li>
      </ul>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>테스트 없이 새 소프트웨어 변경 사항을 배포하여 프로덕션 중단을 유발하는 경우</li>
        <li>사전 프로덕션 테스트 없이 인프라 변경 사항(예: CloudFormation을 통한 보안 그룹)을 배포하는 경우</li>
        <li>단위 테스트 없이 코드 메서드를 수정하여 프로덕션 장애로 이어지는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>소프트웨어 배포의 변경 실패율이 감소합니다.</li>
        <li>소프트웨어 품질이 향상됩니다.</li>
        <li>코드 실행 가능성에 대한 개발자 인식이 높아집니다.</li>
        <li>규정 준수를 위한 보안 정책을 자신 있게 적용할 수 있습니다.</li>
        <li>인프라 변경 사항을 사전에 테스트하여 트래픽 요구를 충족합니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>이해관계자 참여로 모든 소프트웨어 아티팩트에 대한 조직 테스트 표준을 개발합니다.</li>
        <li>표준에 따라 필요한 테스트로 애플리케이션을 계측합니다(10분 이내 완료 권장).</li>
        <li>자동 실행으로 테스트를 CI/CD 파이프라인에 통합합니다.</li>
        <li>개발자 피드백 루프를 위해 테스트 결과를 게시합니다.</li>
        <li>AWS Deployment Pipeline Reference Architecture를 참조하여 테스트 유형을 파악합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Q Developer — AI 지원 단위 테스트 생성 및 코드 품질</li>
        <li>Amazon CodeGuru Reviewer — 애플리케이션 코드 결함 감지</li>
        <li>AWS CodeBuild — 소프트웨어 아티팩트에서 테스트 수행</li>
        <li>AWS CodePipeline — 소프트웨어 테스트를 파이프라인으로 오케스트레이션</li>
      </ul>

      <PageNav />
    </article>
  );
}
