import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp02Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP02 — 변경 사항 테스트 및 검증</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        운영 환경에 배포하기 전에 변경 사항을 충분히 테스트하고 검증합니다.
        충분한 테스트 없이 배포하면 예상치 못한 장애나 보안 취약점이 도입될 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 변경이 운영 환경과 유사한 테스트 환경에서 자동화된 테스트를 통과합니다.
        테스트 커버리지가 충분하여 회귀 문제를 사전에 감지합니다.
        배포 전 수동 검증 단계가 위험에 비례하여 적용됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>테스트 없이 운영 환경에 직접 배포하는 경우</li>
        <li>로컬 개발 환경과 운영 환경의 차이로 테스트 결과를 신뢰할 수 없는 경우</li>
        <li>자동화 테스트 없이 수동 테스트에만 의존하는 경우</li>
        <li>테스트가 있지만 오래되어 현재 코드를 제대로 검증하지 못하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>배포로 인한 장애 빈도 감소</li>
        <li>문제를 조기에 발견하여 수정 비용 절감</li>
        <li>배포에 대한 자신감 향상으로 배포 빈도 증가</li>
        <li>회귀 문제 방지로 코드 품질 유지</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>단위 테스트, 통합 테스트, E2E 테스트를 포함한 테스트 스위트를 구축합니다.</li>
        <li>CI/CD 파이프라인에 자동화 테스트를 통합하여 모든 변경에 테스트가 실행되도록 합니다.</li>
        <li>카나리 배포, 블루/그린 배포로 운영 환경에서 점진적으로 검증합니다.</li>
        <li>스테이징 환경을 운영 환경과 동일하게 구성합니다.</li>
        <li>테스트 커버리지 목표를 설정하고 측정합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeBuild — CI 파이프라인에서 자동화 테스트 실행</li>
        <li>AWS CodeDeploy — 카나리 및 블루/그린 배포 지원</li>
        <li>Amazon CloudWatch Synthetics — 배포 후 자동 기능 검증</li>
        <li>AWS Fault Injection Simulator — 혼돈 엔지니어링으로 복원력 테스트</li>
      </ul>

      <PageNav />
    </article>
  );
}
