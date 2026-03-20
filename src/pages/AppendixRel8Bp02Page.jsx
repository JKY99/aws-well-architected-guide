import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL08-BP02 — 배포 전 테스트</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 검증되지 않은 변경이 운영 환경에 배포되어 서비스 중단을 초래할 수 있습니다.</p>
      </div>
      <p>배포 전 테스트는 변경 사항이 운영에 미치는 영향을 사전에 검증하는 단계입니다. 스테이징 환경에서의 통합 테스트, 자동화된 회귀 테스트, 카나리 배포를 통한 점진적 검증으로 배포 리스크를 최소화합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 코드 변경이 운영 배포 전에 자동화된 테스트 스위트를 통과하며, 스테이징 환경에서 운영과 동일한 조건으로 검증됩니다. 카나리 배포를 통해 소규모 트래픽에서 먼저 검증 후 전체 배포가 진행됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>개발 환경에서만 테스트하고 운영과 유사한 스테이징 환경 미운영</li>
        <li>단위 테스트만 있고 통합·E2E 테스트가 없어 컴포넌트 간 상호작용 미검증</li>
        <li>테스트 커버리지가 낮아 주요 비즈니스 흐름이 자동화 테스트로 검증되지 않음</li>
        <li>스테이징 환경의 데이터·설정이 운영과 달라 테스트 결과를 신뢰할 수 없음</li>
        <li>배포 후 롤백 기준을 정의하지 않아 문제 발생 시 롤백 결정이 지연됨</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>배포로 인한 운영 장애 대폭 감소 — 문제를 운영 전에 차단</li>
        <li>빠른 피드백 루프로 개발자가 조기에 문제를 발견하고 수정</li>
        <li>자신감 있는 배포 — 철저한 테스트로 배포 불안감 해소</li>
        <li>카나리 배포로 잠재적 문제의 폭발 반경을 소수 사용자로 제한</li>
        <li>자동화 테스트 자산이 문서 역할도 수행하여 시스템 동작 명세화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>CI/CD 파이프라인에 단위·통합·E2E 테스트를 단계적으로 구성하고 각 단계 실패 시 다음 단계 진행 차단</li>
        <li>스테이징 환경을 운영과 동일한 IaC 코드로 프로비저닝하여 환경 차이 최소화</li>
        <li>데이터베이스 마이그레이션은 배포 전 스테이징에서 먼저 실행하고 영향 검증</li>
        <li>AWS CodeDeploy의 카나리 배포 설정으로 5-10% 트래픽에서 먼저 검증 후 단계적 확대</li>
        <li>배포 전후 핵심 지표(오류율, 응답 시간, 성공율)를 자동으로 비교하는 배포 검증(bake time) 구현</li>
        <li>자동화 테스트가 실패하거나 지표가 임계값을 초과하면 자동 롤백 트리거 설정</li>
        <li>계약 테스트(Contract Testing)를 도입하여 서비스 간 API 호환성 검증</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeBuild — 자동화 테스트 실행 환경</li>
        <li>AWS CodeDeploy — 카나리·블루/그린 배포 및 자동 롤백</li>
        <li>Amazon CloudWatch Evidently — 기능 플래그 및 실험 관리</li>
        <li>AWS CodePipeline — 테스트 단계 통합 파이프라인</li>
        <li>AWS Fault Injection Service — 스테이징 환경 카오스 테스트</li>
        <li>Amazon CloudWatch Synthetics — 배포 후 가용성 자동 검증</li>
      </ul>
      <PageNav />
    </article>
  );
}
