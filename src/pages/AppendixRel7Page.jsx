import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel7Page() {
  return (
    <article className="doc-content">
      <h1>REL 7 — 변경 사항을 어떻게 구현합니까?</h1>

      <p>
        운영 중인 시스템에 대한 변경을 안전하게 관리하여
        변경으로 인한 장애 위험을 최소화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>REL07-BP01:</strong> 배포 위험을 줄이기 위해 변경 통합<br />
          <span>카나리 배포, 블루/그린 배포를 사용하여 일부 트래픽만 새 버전에 노출시키고 문제 시 신속하게 롤백합니다.</span>
        </li>
        <li>
          <strong>REL07-BP02:</strong> 배포 파이프라인 사용<br />
          <span>자동화된 CI/CD 파이프라인을 통해 변경을 일관성 있게 테스트하고 배포합니다.</span>
        </li>
        <li>
          <strong>REL07-BP03:</strong> 테스트 배포<br />
          <span>프로덕션과 동일한 환경에서 변경을 먼저 테스트하고 검증합니다.</span>
        </li>
        <li>
          <strong>REL07-BP04:</strong> 자동 롤백 메커니즘 구현<br />
          <span>배포 후 메트릭이 임계값을 초과하면 자동으로 이전 버전으로 롤백하는 메커니즘을 구현합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
