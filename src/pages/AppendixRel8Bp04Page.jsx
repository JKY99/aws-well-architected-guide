import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL08-BP04 — 안전하게 운영 배포 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 배포 과정에서의 실수가 전체 서비스 중단으로 이어지고, 롤백이 오래 걸려 장애 시간이 길어질 수 있습니다.</p>
      </div>
      <p>운영 배포를 안전하게 수행하기 위해 블루/그린 배포, 카나리 배포, 자동 롤백 메커니즘을 활용합니다. 배포 전략의 선택은 워크로드 특성과 허용 가능한 위험 수준에 따라 결정합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 운영 배포가 무중단(zero-downtime) 또는 최소 다운타임으로 완료됩니다. 배포 후 지표가 임계값을 벗어나면 자동으로 이전 버전으로 롤백되며, 전체 배포 과정이 자동화되고 감사 가능합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>서비스 중단 상태에서 배포를 수행하는 Big Bang 방식</li>
        <li>롤백 계획 없이 배포를 진행하고 문제 발생 시 수동 복구에 의존</li>
        <li>배포 후 충분한 모니터링 기간(bake time) 없이 다음 배포 진행</li>
        <li>단일 배포 전략만 사용하고 워크로드 특성에 맞는 전략 선택 미고려</li>
        <li>데이터베이스 마이그레이션과 애플리케이션 배포를 동시에 수행하여 롤백 불가 상태 생성</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>제로 다운타임 배포로 사용자 서비스 영향 최소화</li>
        <li>자동 롤백으로 배포 문제 발생 시 MTTR 대폭 단축</li>
        <li>카나리 배포로 전체 사용자 영향 전에 소규모에서 검증</li>
        <li>배포 자동화로 인적 오류 제거 및 배포 일관성 확보</li>
        <li>배포 이력 추적으로 감사 및 규정 준수 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>EC2 기반 워크로드에는 AWS CodeDeploy의 블루/그린 배포 전략을 사용하여 이전 환경을 즉시 롤백 가능 상태로 유지</li>
        <li>Amazon ECS는 서비스 업데이트 시 최소 100% 정상 상태 유지와 함께 롤링 업데이트 구성</li>
        <li>AWS Lambda는 가중치 별칭(weighted alias)을 사용하여 10% → 50% → 100% 순서로 카나리 배포 수행</li>
        <li>배포 후 5-30분의 bake time 동안 오류율, 지연 시간, 비즈니스 지표를 자동 모니터링하고 임계값 초과 시 자동 롤백</li>
        <li>데이터베이스 스키마 변경은 애플리케이션 배포 전에 하위 호환 방식으로 먼저 적용(Expand 단계)</li>
        <li>배포 완료 후 구 버전(Blue)을 최소 24시간 유지하여 긴급 롤백 옵션 확보</li>
        <li>모든 배포를 IaC 파이프라인을 통해 수행하고 콘솔 직접 변경을 방지</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeDeploy — 블루/그린, 카나리, 롤링 배포 전략 지원</li>
        <li>Amazon ECS — 컨테이너 기반 롤링 업데이트 및 서킷 브레이커</li>
        <li>AWS Lambda — 가중치 별칭 기반 카나리 배포</li>
        <li>AWS CodePipeline — 배포 파이프라인 오케스트레이션</li>
        <li>Amazon CloudWatch — 배포 후 지표 모니터링 및 롤백 트리거</li>
        <li>AWS AppConfig — 설정 변경의 안전한 배포 및 롤백</li>
      </ul>
      <PageNav />
    </article>
  );
}
