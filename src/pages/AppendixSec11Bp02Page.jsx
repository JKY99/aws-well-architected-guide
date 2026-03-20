import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec11Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC11-BP02 — 개발 및 배포 수명 주기 전반에 걸쳐 테스트 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 보안 문제가 프로덕션 소프트웨어에 포함될 위험이 증가합니다.</p>
      </div>
      <p>
        개발 및 릴리스 수명 주기 전반에 걸쳐 보안 속성에 대한 테스트를 자동화합니다. 자동화를 통해 릴리스 이전에 소프트웨어의 잠재적인 문제를 일관되고 반복적으로 식별하기가 쉬워지므로 제공되는 소프트웨어의 보안 문제 위험이 줄어듭니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>개발 수명 주기 전반에 걸쳐 잠재적인 문제를 일찍 자주 탐지하는 프로그래밍 방식 제공</li>
        <li>변경 후에도 이전에 테스트한 소프트웨어가 예상대로 작동하는지 확인하는 회귀 테스트 활성화</li>
        <li>일반적인 잘못된 구성(손상/누락된 인증)을 확인하는 보안 단위 테스트 정의</li>
        <li>개발 프로세스 초기에 문제를 식별하고 수정</li>
        <li>보안 검토를 기다리지 않고 자동화된 피드백 수신</li>
        <li>정적 또는 동적 코드 분석을 사용하여 코드 품질을 높이고 잠재적인 소프트웨어 문제를 조기에 탐지</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>자동화된 테스트의 테스트 케이스 및 테스트 결과를 커뮤니케이션하지 않음</li>
        <li>릴리스 직전에만 자동화된 테스트 수행</li>
        <li>자주 변경되는 요구 사항으로 테스트 케이스를 자동화</li>
        <li>보안 테스트 결과를 처리하는 방법에 대한 지침 미제공</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>시스템 보안 속성 평가에 대한 사람 의존도 감소</li>
        <li>여러 워크스트림에서 일관된 결과로 일관성 개선</li>
        <li>프로덕션 소프트웨어에 보안 문제가 도입될 가능성 감소</li>
        <li>문제를 더 일찍 발견하여 탐지와 수정 사이의 간격 단축</li>
        <li>조직 전체 개선을 위한 체계적 또는 반복적인 동작에 대한 가시성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>보안 테스트를 포함하는 일관된 IDE, 코드 검토 및 CI/CD 도구를 구현합니다. 단순히 빌더에게 알리는 대신 파이프라인 차단 전략을 고려합니다.</li>
        <li>Automated Security Helper(ASH) 등 오픈 소스 코드 보안 스캐닝 도구, Amazon Q Developer(통합 IDE 보안 스캐닝), Amazon CodeGuru Security(커밋 시 코드 스캐닝) 등 자동화 도구를 활용합니다.</li>
        <li>SAST(정적 애플리케이션 보안 테스트)는 소스 코드에서 비정상적인 보안 패턴을 분석하고, DAST(동적 분석 보안 테스트)는 실행 중인 애플리케이션에 대해 테스트를 수행합니다.</li>
        <li>Amazon Inspector SBOM Generator를 사용하여 소프트웨어 자재 명세서(SBOM)를 추출합니다. 아카이브, 컨테이너 이미지, 디렉터리, 로컬 시스템 및 컴파일된 바이너리에 대한 SBOM을 CycloneDX SBOM 형식으로 생성합니다.</li>
        <li>소프트웨어 문제의 알림 및 수정을 추적하는 티켓팅 시스템을 구현하고, 보안 테스트 결과에 수정 지침을 연결합니다. 결과를 정기적으로 분석하여 자동화, 교육 또는 인식 캠페인의 우선순위를 지정합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeBuild — CI/CD 파이프라인을 위한 빌드 서비스</li>
        <li>AWS CodePipeline — 릴리스 파이프라인 자동화</li>
        <li>Amazon Q Developer — 코드 권장 사항 및 보안 스캐닝</li>
        <li>Amazon CodeGuru Security — 중요 문제 및 보안 버그 탐지</li>
        <li>Amazon Inspector — 취약점 및 SBOM 스캐닝</li>
        <li>AWS Developer Tools — 통합 보안 테스트 에코시스템</li>
      </ul>
      <PageNav />
    </article>
  );
}
