import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf5Page() {
  return (
    <article className="doc-content">
      <h1>PERF 5 — 최적의 네트워크 솔루션을 어떻게 선택합니까?</h1>

      <p>
        네트워크 지연 시간을 최소화하고 처리량을 극대화하기 위해
        워크로드의 네트워크 요구사항에 맞는 솔루션을 선택합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>PERF05-BP01:</strong> 네트워크 특성 파악<br />
          <span>지연 시간, 지터(jitter), 처리량, 가용성에 대한 요구사항을 파악합니다.</span>
        </li>
        <li>
          <strong>PERF05-BP02:</strong> EC2 향상된 네트워킹 기능 평가<br />
          <span>향상된 네트워킹(Enhanced Networking), 배치 그룹(Placement Group)을 활용하여 인스턴스 간 네트워크 성능을 최적화합니다.</span>
        </li>
        <li>
          <strong>PERF05-BP03:</strong> 엣지 가속 네트워킹 솔루션 평가<br />
          <span>Amazon CloudFront, Global Accelerator를 사용하여 사용자에게 가까운 엣지에서 콘텐츠를 제공합니다.</span>
        </li>
        <li>
          <strong>PERF05-BP04:</strong> 부하 분산 솔루션 평가<br />
          <span>ALB, NLB, GLB를 활용하여 트래픽을 효율적으로 분산하고 성능을 최적화합니다.</span>
        </li>
        <li>
          <strong>PERF05-BP05:</strong> 네트워크 구성 최적화<br />
          <span>점보 프레임, TCP 최적화, 경로 단축 등을 통해 네트워크 성능을 향상시킵니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
