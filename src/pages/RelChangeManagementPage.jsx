import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function RelChangeManagementPage() {
  return (
    <article className="doc-content">
      <h1>안정성 — 변경 관리</h1>

      <p>
        워크로드 또는 그 환경에 대한 변경은 워크로드의 안정적인 운영을 위해 예측되고 수용되어야 합니다.
        변경에는 수요 급증과 같이 외부에서 부과되는 변경과,
        기능 배포 및 보안 패치와 같이 내부적으로 발생하는 변경이 포함됩니다.
      </p>

      <h2>모범 사례 항목</h2>
      <ul>
        <li>
          <strong>워크로드 리소스 모니터링:</strong> 워크로드 상태와 성능을 지속적으로 모니터링합니다.
        </li>
        <li>
          <strong>수요 변화에 적응하는 워크로드 설계:</strong> 트래픽 스파이크 등 수요 변화에 자동으로 대응하도록 설계합니다.
        </li>
        <li>
          <strong>변경 구현:</strong> 안전하고 통제된 방식으로 변경을 배포합니다.
        </li>
        <li>
          <strong>긴급 레버 구현:</strong> 장애 상황에서 즉각적으로 대응할 수 있는 비상 메커니즘을 마련합니다.
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
