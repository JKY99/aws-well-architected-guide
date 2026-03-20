import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec11Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC11-BP05 — 패키지 및 의존성을 위한 서비스 중앙화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 검증되지 않은 패키지가 소프트웨어에 포함되어 공급망 공격에 노출될 수 있습니다.</p>
      </div>
      <p>
        팀이 소프트웨어 패키지 및 기타 의존성을 얻을 수 있는 중앙 집중식 서비스를 제공합니다. 이를 통해 소프트웨어에 포함되기 전에 패키지의 유효성을 검사하고 조직 전체에서 사용되는 소프트웨어를 분석하기 위한 데이터 소스를 제공합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>외부 소프트웨어 패키지와 맞춤형 코드를 함께 사용하여 워크로드 구축</li>
        <li>사용 전 보안팀 검증을 위한 패키지 소스 중앙화</li>
        <li>수동 및 자동화된 테스트 흐름과 함께 중앙화된 검증 구현</li>
        <li>개발된 소프트웨어의 품질에 대한 신뢰도 향상</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>인터넷의 임의 저장소에서 패키지를 가져옴</li>
        <li>빌더에게 제공하기 전에 새 패키지를 테스트하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>구축 중인 소프트웨어에서 사용되는 패키지에 대한 더 나은 이해</li>
        <li>사용량을 기반으로 팀에게 패키지 업데이트 필요 시 알림 가능</li>
        <li>문제가 있는 패키지가 소프트웨어에 포함될 위험 감소</li>
        <li>향상된 공급망 보안</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>모든 개발 환경에서 사용 가능한 논리적으로 중앙화된 저장소 서비스를 구현합니다. 저장소 접근을 AWS 계정 제공 프로세스의 일부로 포함합니다.</li>
        <li>저장소에 게시하기 전에 패키지를 테스트하는 자동화를 구축합니다. 일반적으로 사용되는 패키지, 언어 및 팀에 대한 지표를 유지합니다.</li>
        <li>빌더가 새 패키지를 요청하고 피드백을 제공할 수 있는 자동화된 메커니즘을 제공합니다. 새로 발견된 문제의 영향을 식별하기 위해 패키지를 정기적으로 스캔합니다.</li>
        <li>AWS CodeArtifact를 사용하여 npm, PyPI, Maven, NuGet 패키지를 위한 내부 프록시 저장소를 설정합니다. CodeArtifact 업스트림 연결을 구성하여 내부 저장소에 없는 패키지는 외부 저장소에서 캐싱합니다.</li>
        <li>Amazon Inspector SBOM Generator를 사용하여 소프트웨어 자재 명세서(SBOM)를 추출하고 CycloneDX SBOM 형식으로 생성합니다. 빌드 환경에서 외부 패키지 저장소 직접 접근을 제한합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeArtifact — 중앙 집중식 패키지 저장소 역량 제공을 위한 주요 서비스</li>
        <li>Amazon Inspector — 컨테이너 및 소프트웨어 의존성 취약점 지속 스캔 및 SBOM 생성</li>
        <li>AWS CodeBuild — 내부 저장소를 사용하는 안전한 빌드 환경</li>
        <li>Amazon ECR — 컨테이너 이미지 스캔 및 기본 이미지 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
