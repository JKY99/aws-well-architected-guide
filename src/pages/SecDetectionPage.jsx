import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SecDetectionPage() {
  return (
    <article className="doc-content">
      <h1>보안 — 탐지</h1>

      <p>
        탐지는 잠재적 보안 오구성, 위협, 예상치 못한 동작을 식별할 수 있게 합니다.
        보안 생명주기의 필수 요소로서 품질 프로세스, 법적·규정 준수 의무,
        위협 식별 및 대응을 지원합니다.
      </p>

      <h2>두 가지 탐지 영역</h2>

      <h3>1. 예기치 않은 구성 변경 탐지</h3>
      <p>
        CI/CD 파이프라인 또는 소스 제어 단계에서 IaC(CloudFormation 템플릿 등)를 통해
        배포 전 잘못된 구성을 확인하고, 운영 환경에서는 AWS 네이티브·오픈소스·파트너 도구로
        지속적으로 검사합니다.
      </p>

      <h3>2. 예기치 않은 동작 탐지</h3>
      <p>
        특정 API 호출 증가에 대한 알림 설정, Amazon GuardDuty를 활용한 비인가·악의적 활동 감지,
        보안 태세를 변경하는 API 호출을 모니터링합니다.
      </p>

      <p>
        자동화된 알림과 알람은 팀 또는 도구가 이상 활동의 범위를 신속하게 파악하고
        대응하는 데 핵심적인 역할을 합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li><strong>SEC04-BP01:</strong> 서비스 및 애플리케이션 로깅 구성</li>
        <li><strong>SEC04-BP02:</strong> 표준화된 위치에 로그·결과·메트릭 수집</li>
        <li><strong>SEC04-BP03:</strong> 보안 알림 상관관계 분석 및 보강</li>
        <li><strong>SEC04-BP04:</strong> 비준수 리소스에 대한 자동 교정 시작</li>
      </ul>

      <PageNav />
    </article>
  );
}
