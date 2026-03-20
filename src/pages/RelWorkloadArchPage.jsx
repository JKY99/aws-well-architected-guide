import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function RelWorkloadArchPage() {
  return (
    <article className="doc-content">
      <h1>안정성 — 워크로드 아키텍처</h1>

      <p>
        안정적인 워크로드는 소프트웨어와 인프라 모두에 대한 사전 설계 결정에서 시작됩니다.
        아키텍처 선택은 Well-Architected의 6가지 기둥 전반에 걸쳐 워크로드 동작에 영향을 미칩니다.
        안정성을 위해 반드시 따라야 할 특정 패턴들이 있습니다.
      </p>

      <h2>모범 사례 항목</h2>
      <ul>
        <li>
          <strong>워크로드 서비스 아키텍처 설계:</strong> 안정성을 고려한 서비스 구조를 설계합니다.
        </li>
        <li>
          <strong>분산 시스템의 상호작용 설계 — 장애 예방:</strong> 분산 환경에서 장애를 사전에 방지하는 상호작용 패턴을 적용합니다.
        </li>
        <li>
          <strong>분산 시스템의 상호작용 설계 — 장애 완화 및 내성:</strong> 장애 발생 시 영향을 최소화하거나 견딜 수 있는 설계를 구현합니다.
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
