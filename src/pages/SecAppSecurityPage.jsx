import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SecAppSecurityPage() {
  return (
    <article className="doc-content">
      <h1>보안 — 애플리케이션 보안</h1>

      <p>
        애플리케이션 보안(AppSec)은 개발하는 워크로드의 보안 속성을 설계·구축·테스트하는
        전반적인 프로세스를 의미합니다. 소프트웨어 개발 생명주기(SDLC) 및 릴리스 후 프로세스의
        정기적인 일부로 AppSec 테스팅을 채택하면, 애플리케이션 보안 문제가 프로덕션 환경에 유입되는
        것을 식별·수정·방지하는 구조화된 메커니즘을 확보할 수 있습니다.
      </p>

      <p>
        결함 해결 비용과 복잡성은 SDLC의 초기 단계일수록 낮습니다.
        AppSec 프로그램이 성숙해질수록 자동화 테스트 비중을 높이고, 개발자 피드백의 정확도를 높이며,
        보안 검토에 소요되는 시간을 줄일 수 있습니다.
      </p>

      <h2>4가지 구현 영역</h2>
      <ol>
        <li><strong>조직과 문화 (Organization and Culture)</strong></li>
        <li><strong>파이프라인의 보안 (Security of the Pipeline)</strong></li>
        <li><strong>파이프라인 내 보안 (Security in the Pipeline)</strong></li>
        <li><strong>의존성 관리 (Dependency Management)</strong></li>
      </ol>

      <h2>모범 사례</h2>
      <ul>
        <li><strong>SEC11-BP01:</strong> 애플리케이션 보안 교육 실시</li>
        <li><strong>SEC11-BP02:</strong> 개발 및 릴리스 생명주기 전반에 걸쳐 테스팅 자동화</li>
        <li><strong>SEC11-BP03:</strong> 정기적인 침투 테스트 수행</li>
        <li><strong>SEC11-BP04:</strong> 코드 리뷰 수행</li>
        <li><strong>SEC11-BP05:</strong> 패키지 및 의존성 서비스 중앙화</li>
        <li><strong>SEC11-BP06:</strong> 프로그래밍 방식으로 소프트웨어 배포</li>
        <li><strong>SEC11-BP07:</strong> 파이프라인의 보안 속성 정기 평가</li>
        <li><strong>SEC11-BP08:</strong> 워크로드 팀에 보안 오너십을 내재화하는 프로그램 구축</li>
      </ul>

      <PageNav />
    </article>
  );
}
