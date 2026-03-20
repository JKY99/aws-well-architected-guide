import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function OEDefinitionPage() {
  return (
    <article className="doc-content">
      <h1>운영 우수성 — 정의</h1>

      <p>
        운영 우수성(Operational Excellence)은 소프트웨어를 올바르게 구축하면서 지속적으로 우수한 고객 경험을 제공하겠다는 약속입니다.
        새로운 기능과 버그 수정을 빠르고 안정적으로 고객에게 전달하는 것이 목표이며,
        CI/CD를 통해 개발자의 높은 품질 결과를 일관되게 달성합니다.
      </p>

      <h2>4가지 모범 사례 영역</h2>

      <ul>
        <li>
          <strong>조직 (Organization):</strong> 비즈니스 목표 정의 및 팀 우선순위 설정
        </li>
        <li>
          <strong>준비 (Prepare):</strong> 통합, 배포, 전달 구현
        </li>
        <li>
          <strong>운영 (Operate):</strong> 워크로드 지원 및 메트릭 모니터링
        </li>
        <li>
          <strong>발전 (Evolve):</strong> 피드백 루프를 통한 지속적 개선
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
