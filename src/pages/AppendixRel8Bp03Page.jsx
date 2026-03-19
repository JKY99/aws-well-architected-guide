import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL08-BP03 — 변경을 소규모로 배포</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 대규모 변경 배포 시 문제 원인 파악이 어렵고, 롤백 범위가 커져 서비스 중단 시간이 길어집니다.</p>
      </div>
      <p>소규모 점진적 배포는 각 배포의 위험 범위를 제한하고 문제 발생 시 원인을 신속하게 파악할 수 있게 합니다. 피처 플래그와 트렁크 기반 개발을 활용하여 작은 단위로 지속적으로 배포합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 배포가 독립적으로 롤백 가능한 소규모 변경 단위로 구성됩니다. 배포 주기가 짧아 변경 누적이 최소화되고, 문제 발생 시 원인이 되는 변경을 빠르게 식별하여 격리할 수 있습니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>월간 또는 분기 대형 릴리스로 수백 개의 변경 사항을 한 번에 배포</li>
        <li>장기 실행 피처 브랜치로 인한 대규모 병합 충돌 및 통합 위험</li>
        <li>완성되지 않은 기능을 숨기는 메커니즘 없이 코드를 배포 불가 상태로 유지</li>
        <li>배포와 기능 출시를 동일시하여 배포 주기를 비즈니스 의사결정에 종속</li>
        <li>여러 서비스를 동시에 배포하여 장애 시 원인 서비스 특정 불가</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>배포 당 변경 범위 축소로 장애 발생 가능성 및 영향 감소</li>
        <li>문제 발생 시 최근 1-2개의 변경만 검토하면 되어 원인 파악 속도 향상</li>
        <li>피처 플래그로 배포와 기능 출시를 분리하여 비즈니스 유연성 확보</li>
        <li>빠른 피드백 루프로 개발 속도와 품질 동시 향상</li>
        <li>팀의 배포 자신감 향상 — 작은 변경은 리스크가 낮아 배포 불안감 해소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>트렁크 기반 개발(Trunk-Based Development)을 채택하여 짧은 수명의 피처 브랜치 사용</li>
        <li>AWS AppConfig 또는 Amazon CloudWatch Evidently를 활용하여 피처 플래그 구현</li>
        <li>하루에 여러 번 배포할 수 있도록 배포 파이프라인을 최적화하고 배포 시간을 15분 이내로 단축</li>
        <li>데이터베이스 스키마 변경은 하위 호환성을 유지하는 다단계 마이그레이션으로 분리</li>
        <li>서비스 간 API 변경은 버저닝을 통해 기존 버전을 유지하며 새 버전을 점진적으로 전환</li>
        <li>배포 빈도, 변경 실패율, MTTR을 DORA 지표로 측정하고 개선 목표 설정</li>
        <li>새로운 인프라 리소스를 추가하기 전에 기존 코드와 병렬 운영 후 교체하는 Expand-Contract 패턴 적용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS AppConfig — 피처 플래그 및 동적 설정 관리</li>
        <li>Amazon CloudWatch Evidently — A/B 테스트 및 점진적 기능 출시</li>
        <li>AWS CodeDeploy — 단계적 배포 및 자동 롤백</li>
        <li>AWS CodePipeline — 지속적 배포 파이프라인</li>
        <li>Amazon CloudWatch — 배포 후 지표 모니터링</li>
        <li>AWS Fault Injection Service — 소규모 배포의 복원력 검증</li>
      </ul>
      <PageNav />
    </article>
  );
}
