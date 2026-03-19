import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf6Page() {
  return (
    <article className="doc-content">
      <h1>PERF 6 — 현재 솔루션의 성능을 어떻게 진화시킵니까?</h1>

      <p>
        새로운 서비스와 기능이 출시됨에 따라 워크로드의 성능을 지속적으로 검토하고
        개선 기회를 발굴합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>PERF06-BP01:</strong> 신기술 파악<br />
          <span>AWS가 새로운 서비스와 기능을 출시하면 해당 기술이 성능을 개선할 수 있는지 평가합니다.</span>
        </li>
        <li>
          <strong>PERF06-BP02:</strong> 정기적인 검토 프로세스 정의<br />
          <span>정기적으로 AWS 아키텍처를 검토하고 새로운 서비스와 기능의 도입을 평가하는 프로세스를 수립합니다.</span>
        </li>
        <li>
          <strong>PERF06-BP03:</strong> 개발 주기에 성능 검토 통합<br />
          <span>각 개발 스프린트나 릴리스 사이클에 성능 테스트와 검토를 포함합니다.</span>
        </li>
        <li>
          <strong>PERF06-BP04:</strong> 성능 게임 데이 수행<br />
          <span>실제 트래픽 패턴을 시뮬레이션하는 부하 테스트를 통해 성능 병목을 식별합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
