import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel13Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL13-BP03 — DR 구현을 검증하기 위한 재해 복구 구현 테스트</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        복구 사이트로의 장애 조치를 정기적으로 테스트하여 올바르게 작동하고
        RTO 및 RPO 요구사항을 충족하는지 확인합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        복구 사이트로의 장애 조치를 정기적으로 테스트하여 올바르게 작동하고
        RTO 및 RPO 요구사항을 충족하는지 확인합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>프로덕션에서 장애 조치를 한 번도 연습하지 않음</li>
        <li>거의 연습하지 않는 복구 경로 개발(예: 정기적인 장애 조치 테스트 없이 읽기 전용 쿼리에만 사용되는 보조 데이터 스토어)</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>재해 복구 계획이 필요할 때 작동함을 검증</li>
        <li>팀이 복구 전략을 실행하는 방법을 숙지</li>
        <li>보조 시스템에 대한 잘못된 가정 식별(예: 용량, 기능)</li>
        <li>실제 재해 시에만 장애를 발견하는 것을 방지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>복구를 위한 설계 특성 포함: 격리 및 중복성, 시스템 전체 롤백 능력, 상태 모니터링 및 진단 기능, 자동화된 복구, 모듈식 설계, 재시작 기능</li>
        <li>정기적으로 복구 경로 연습하여 RTO/RPO 목표 검증</li>
        <li>복구 연습 중 런북 사용</li>
        <li>향후 테스트를 위해 문제와 해결책 문서화</li>
        <li>EC2 기반 워크로드에 AWS Elastic Disaster Recovery 사용: 프로덕션 트래픽을 리디렉션하지 않고 효율적으로 훈련 실행 및 테스트 인스턴스 시작</li>
        <li>DR 테스트 계획 수립 및 연간 일정에 포함</li>
        <li>테스트 중 RTO와 RPO 측정 및 목표 달성 여부 기록</li>
        <li>테스트 후 회고를 통해 개선 항목 식별 및 추적</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Elastic Disaster Recovery (DR 테스트 자동화 및 테스트 인스턴스 시작)</li>
        <li>AWS Fault Injection Service (FIS) (카오스 엔지니어링 및 장애 테스트)</li>
        <li>AWS Resilience Hub (DR 테스트 계획 및 평가)</li>
        <li>Amazon CloudWatch (DR 테스트 중 메트릭 수집)</li>
      </ul>
      <PageNav />
    </article>
  );
}
