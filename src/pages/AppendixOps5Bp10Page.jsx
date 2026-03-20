import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp10Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP10 — 통합 및 배포 완전 자동화</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 낮습니다.</p>
      </div>

      <p>
        워크로드의 빌드, 배포, 테스트를 자동화하여 수동 프로세스로 인한 오류를 줄이고 변경을
        배포하는 노력을 감소시킵니다. 개발자들이 AWS Management Console에 접근할 필요 없이
        도구를 통해 코드를 프로덕션까지 전달할 수 있어야 합니다.
      </p>

      <h2>원하는 결과</h2>
      <ul>
        <li>개발자들이 AWS Management Console에 로그인하지 않고 도구를 사용하여 코드를 전달하고 프로덕션까지 프로모션합니다.</li>
        <li>거버넌스 및 규정 준수 요구 사항을 충족하는 변경 및 구성의 완전한 감사 추적이 존재합니다.</li>
        <li>팀 전체에서 반복 가능하고 표준화된 프로세스로 개발자들이 비즈니스 가치 제공에 집중할 수 있습니다.</li>
      </ul>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>금요일에 코드를 완료하고 주말에 테스트하여 다음 예약 릴리스를 위해 코드를 체크인하는 경우</li>
        <li>중요한 수정 사항을 커밋하고 프로덕션 배포 승인을 위해 변경 관리팀에 이메일을 보내는 경우</li>
        <li>개발자들이 비표준 방법으로 개발 환경을 생성하기 위해 AWS Management Console에 로그인하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수동 프로세스로 인한 오류를 줄입니다.</li>
        <li>변경 배포를 위한 노력을 줄입니다.</li>
        <li>팀원들이 비즈니스 가치 제공에 집중할 수 있습니다.</li>
        <li>프로덕션 프로모션을 통한 배포 속도가 향상됩니다.</li>
        <li>리드 타임 단축, 변경 빈도 증가, 시장 출시 시간 가속화됩니다.</li>
        <li>코드가 파이프라인을 통해 검증되어 보안이 강화됩니다.</li>
        <li>거버넌스 및 규정 준수를 위한 전체 감사 추적을 지원합니다.</li>
        <li>팀 전체에서 프로세스를 표준화하고 반복합니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>빌드 및 배포 관리 시스템을 사용하여 변경을 자동으로 추적하고 구현합니다.</li>
        <li>코드 체크인부터 빌드, 테스트, 배포, 검증까지 파이프라인을 완전히 자동화합니다.</li>
        <li>일관된 태깅 전략을 사용하여 리소스 태그 및 AWS 리소스 그룹을 통해 메타데이터를 적용합니다.</li>
        <li>리드 타임과 노력 수준을 줄이고 시장 출시 속도와 보안 태세를 향상합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeBuild — 빌드 및 테스트 자동화</li>
        <li>AWS CodeDeploy — 배포 자동화</li>
        <li>AWS CodePipeline — 전체 CI/CD 파이프라인 오케스트레이션</li>
        <li>AWS Resource Groups — 리소스 구성 및 태깅</li>
      </ul>

      <PageNav />
    </article>
  );
}
