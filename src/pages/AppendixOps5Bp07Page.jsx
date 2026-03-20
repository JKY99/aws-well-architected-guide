import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp07Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP07 — 코드 품질 향상을 위한 관행 구현</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 중간입니다.</p>
      </div>

      <p>
        테스트 주도 개발, 코드 리뷰, 표준 채택, 페어 프로그래밍 등의 기법을 채택하여 코드 품질을
        향상하고 결함을 최소화하는 관행을 구현합니다. 이 관행들을 지속적인 통합 및 전달 프로세스에
        통합하여 개발자와 운영자가 소프트웨어 개발 수명 주기의 일부로 코드 품질 모범 사례를
        채택하도록 합니다.
      </p>

      <h2>원하는 결과</h2>
      <ul>
        <li>프로덕션에 도입되는 문제를 최소화합니다.</li>
        <li>코드 검토와 협업을 통해 전체 소프트웨어 품질을 향상합니다.</li>
        <li>AI 생산성 도구를 활용하여 코드 품질 감지 및 수정을 향상합니다.</li>
        <li>배포 전 결함을 줄입니다.</li>
      </ul>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>코드 검토 없이 주 브랜치에 코드를 커밋하여 자동 프로덕션 배포와 중단을 유발하는 경우</li>
        <li>단위, 엔드투엔드, 통합 테스트 없이 새 애플리케이션을 개발하여 배포 전 테스트를 불가능하게 하는 경우</li>
        <li>테스트, 코드 검토 또는 CI/CD 프로세스 로깅 없이 결함을 해결하기 위해 프로덕션을 수동으로 변경하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>프로덕션에 도입되는 문제를 최소화합니다.</li>
        <li>코드 검토와 협업을 통해 전체 소프트웨어 품질을 향상합니다.</li>
        <li>AI 생산성 도구를 활용하여 코드 품질 감지 및 수정을 향상합니다.</li>
        <li>배포 전 결함을 줄입니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>CI/CD 프로세스에 코드 품질 관행을 채택합니다: 표준으로 테스트 주도 개발(TDD) 구현, 통합 전 시니어 개발자의 코드 검토 요구, 새 기능을 위한 페어 프로그래밍 활용, 배포 전 모든 풀 리퀘스트가 검토를 거치도록 요구합니다.</li>
        <li>Amazon Q Developer를 활용하여 단위 테스트(경계 조건 포함) 생성, 보안 취약점 감지, 코드형 인프라 스캔, 코드 문서화를 수행합니다.</li>
        <li>Amazon CodeGuru Reviewer를 사용하여 Java 및 Python 코드에 대한 머신 러닝 기반 프로그래밍 권장 사항을 받습니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Q Developer — 코드 품질, 테스트, 보안을 위한 생성형 AI 도구</li>
        <li>Amazon CodeGuru Reviewer — ML 기반 코드 검토 자동화</li>
        <li>Amazon CodeGuru Profiler — 성능 분석 및 최적화</li>
      </ul>

      <PageNav />
    </article>
  );
}
