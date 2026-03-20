import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp04Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP04 — 빌드 및 배포 관리 시스템 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 중간입니다.</p>
      </div>

      <p>
        빌드 및 배포 관리 시스템은 통합 및 배포 파이프라인을 자동화하여 수동 프로세스로 인한 오류를 줄이고
        안전한 배포에 필요한 노력을 감소시킵니다. 이 시스템은 변경을 추적하고, CI/CD 기능을 구현하며,
        올바른 구성으로 안전한 배포를 가능하게 합니다.
      </p>

      <h2>원하는 결과</h2>
      <ul>
        <li>수동 프로세스로 인한 오류를 줄입니다.</li>
        <li>반복적인 배포 작업을 위한 노력을 줄입니다.</li>
        <li>팀 구성원이 높은 가치의 창의적인 작업에 집중할 수 있도록 합니다.</li>
        <li>리드 타임과 배포 비용을 줄입니다.</li>
        <li>변경 빈도를 높입니다.</li>
        <li>팀 협업을 강화합니다.</li>
      </ul>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>누락된 의존성으로 실패하는 프로덕션 시스템에 실행 파일을 수동으로 복사하는 경우</li>
        <li>성공적인 개발 빌드 후 정적 자산 누락으로 QA에서 애플리케이션이 실패하는 경우</li>
        <li>수동적이고 문서화되지 않은 프로세스로 인해 성공적인 빌드를 재현하지 못하는 경우</li>
        <li>광범위한 수동 테스트 설정 후 성능 회귀가 뒤늦게 발견되는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수동 프로세스로 인한 오류를 줄입니다.</li>
        <li>반복적인 배포 작업을 위한 노력을 줄입니다.</li>
        <li>팀 구성원이 높은 가치의 창의적인 작업에 집중할 수 있도록 합니다.</li>
        <li>리드 타임과 배포 비용을 줄입니다.</li>
        <li>변경 빈도를 장려합니다.</li>
        <li>팀 협업을 높입니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>자산(소스 코드, 문서, 바이너리 파일)을 저장하고 관리하는 버전 관리 시스템을 사용합니다.</li>
        <li>AWS CodeBuild를 사용하여 소스 코드를 컴파일하고, 단위 테스트를 실행하며, 배포 준비 아티팩트를 생성합니다.</li>
        <li>AWS CodeDeploy를 사용하여 EC2, 온프레미스 인스턴스, AWS Lambda 또는 Amazon ECS에 애플리케이션 배포를 자동화합니다.</li>
        <li>배포를 모니터링하여 성공을 추적하고 문제를 파악합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeBuild — 코드 컴파일 및 테스트 실행</li>
        <li>AWS CodePipeline — CI/CD 파이프라인 오케스트레이션</li>
        <li>AWS CodeDeploy — 배포 자동화</li>
        <li>Amazon EC2, Lambda, ECS — 배포 대상</li>
      </ul>

      <PageNav />
    </article>
  );
}
