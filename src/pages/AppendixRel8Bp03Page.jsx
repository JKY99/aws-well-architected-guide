import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL08-BP03 — 복원력 테스트를 배포의 일부로 통합</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        복원력 테스트는 프로덕션에서 성능 저하를 견디는 시스템의 능력에 대한 신뢰도를 높입니다.
        실험을 통해 장애로 이어질 수 있는 약점을 파악하고, 시스템이 자동으로 효율적으로
        장애 및 성능 저하를 완화하도록 개선합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        복원력 테스트가 프로덕션에서 성능 저하를 견디는 시스템의 능력에 대한 신뢰도를 높입니다.
        실험이 장애로 이어질 수 있는 약점을 파악하고, 이를 통해 시스템이 자동으로 효율적으로
        장애 및 성능 저하를 완화하도록 개선합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>배포 프로세스에 관측 가능성 및 모니터링 부족</li>
        <li>시스템 장애를 해결하기 위해 사람에게 의존</li>
        <li>불량한 품질 분석 메커니즘</li>
        <li>시스템의 알려진 문제에만 집중하고 알려지지 않은 것을 파악하기 위한 실험 부족</li>
        <li>장애를 식별하지만 해결하지 않음</li>
        <li>발견 사항 및 런북 문서화 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>그렇지 않으면 발견되지 않을 시스템의 알려지지 않은 문제를 식별하여 프로덕션 중단 방지</li>
        <li>발견 사항 문서화로 테스트를 CI/CD 프로세스에 통합</li>
        <li>효율적이고 반복 가능한 메커니즘을 통한 완화를 단순화하는 런북 구축</li>
        <li>시스템 복원력 기능에 대한 신뢰도 형성</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>재해 복구 테스트: 중요한 배포와 함께 재해 복구 계획 및 표준 운영 절차(SOP)에 대한 업데이트 포함, RTO 및 RPO를 테스트 전에 정의, 다양한 재해 복구 전략(백업 및 복원, 파일럿 라이트, 웜 스탠바이, 핫 스탠바이, 액티브-액티브) 시뮬레이션</li>
        <li>CI/CD 파이프라인에 통합: 지속적인 복원력 평가를 위해 AWS Resilience Hub를 CI/CD 파이프라인에 통합, 모든 배포의 일부로 복원력을 자동으로 평가</li>
        <li>카오스 엔지니어링: 제어된 중단(네트워크 중단, 서비스 장애) 도입, 주입된 장애의 영향을 제한하면서 시스템 취약점 발견, 프로덕션 배포 전 비프로덕션 환경에서 먼저 테스트, AWS Fault Injection Service(FIS)를 사용하여 제어된 장애 시뮬레이션 수행</li>
        <li>게임 데이: 프로덕션에서 복원력 테스트를 게임 데이 연습의 일부로 구현하는 것을 목표로 설정, 프로덕션으로 이동하기 전에 사전 프로덕션 통합으로 안전하게 시작</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Resilience Hub (복원력 평가 및 CI/CD 파이프라인 통합)</li>
        <li>AWS Fault Injection Service (카오스 엔지니어링 및 제어된 장애 시뮬레이션)</li>
        <li>AWS Elastic Disaster Recovery (재해 복구 계획 및 테스트)</li>
        <li>AWS Systems Manager (자동화 문서를 통한 복구 절차 문서화)</li>
        <li>Amazon CloudWatch (복원력 평가를 위한 모니터링 및 경보)</li>
        <li>AWS CodePipeline (지속적 평가를 위한 CI/CD 파이프라인 통합)</li>
      </ul>
      <PageNav />
    </article>
  );
}
