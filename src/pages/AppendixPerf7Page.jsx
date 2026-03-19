import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf7Page() {
  return (
    <article className="doc-content">
      <h1>PERF 7 — 성능을 어떻게 모니터링합니까?</h1>

      <p>
        워크로드 성능을 지속적으로 모니터링하여 성능 저하를 조기에 발견하고
        근본 원인을 신속하게 파악합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>PERF07-BP01:</strong> 메트릭 기록<br />
          <span>Amazon CloudWatch를 사용하여 CPU, 메모리, 디스크 I/O, 네트워크, 애플리케이션별 메트릭을 수집합니다.</span>
        </li>
        <li>
          <strong>PERF07-BP02:</strong> 성능 메트릭 분석<br />
          <span>수집된 메트릭을 분석하여 성능 트렌드를 파악하고 예상치 못한 변화를 감지합니다.</span>
        </li>
        <li>
          <strong>PERF07-BP03:</strong> 성능 문제 대응 알림 수립<br />
          <span>성능 임계값 초과 시 자동으로 알림을 받고 경우에 따라 자동 조치가 이루어지도록 설정합니다.</span>
        </li>
        <li>
          <strong>PERF07-BP04:</strong> AWS X-Ray를 사용한 분산 추적<br />
          <span>AWS X-Ray를 활용하여 분산 애플리케이션의 요청 흐름을 추적하고 성능 병목을 시각화합니다.</span>
        </li>
        <li>
          <strong>PERF07-BP05:</strong> 트레이드오프 수행<br />
          <span>성능 개선을 위한 결정이 비용, 보안, 신뢰성에 미치는 영향을 고려합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
