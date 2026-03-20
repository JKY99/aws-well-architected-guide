import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function OEOperatePage() {
  return (
    <article className="doc-content">
      <h1>운영 우수성 — 운영</h1>

      <p>
        이 섹션은 워크로드 가시성 확보, 운영 상태 파악, 이벤트 관리를 다룹니다.
      </p>

      <h2>OPS 8. 워크로드 가시성(Observability) 활용</h2>
      <p>
        관련성 있는 지표(Metrics), 로그(Logs), 추적(Traces)을 활용하여 워크로드 성능에 대한
        포괄적인 뷰를 확보하고 문제를 효율적으로 해결함으로써 최적의 워크로드 상태를 보장합니다.
      </p>
      <ul>
        <li><strong>OPS08-BP01:</strong> 워크로드 지표(Metrics) 분석</li>
        <li><strong>OPS08-BP02:</strong> 워크로드 로그(Logs) 분석</li>
        <li><strong>OPS08-BP03:</strong> 워크로드 추적(Traces) 분석</li>
        <li><strong>OPS08-BP04:</strong> 실행 가능한 알림(Actionable Alerts) 생성</li>
        <li><strong>OPS08-BP05:</strong> 대시보드(Dashboards) 생성</li>
      </ul>

      <h2>OPS 9. 운영 상태(Health of Operations) 파악</h2>
      <p>
        운영 지표를 정의·수집·분석하여 운영 이벤트에 대한 가시성을 확보하고 적절한 조치를 취합니다.
      </p>
      <ul>
        <li><strong>OPS09-BP01:</strong> 핵심 성과 지표(KPI) 식별 및 지표로 측정</li>
        <li><strong>OPS09-BP02:</strong> 상태와 트렌드를 대시보드로 공유하여 가시성 확보</li>
        <li><strong>OPS09-BP03:</strong> 운영 지표 검토 및 개선 우선순위 설정</li>
      </ul>

      <h2>OPS 10. 워크로드 및 운영 이벤트 관리</h2>
      <p>
        이벤트 대응 절차를 준비하고 검증하여 워크로드에 미치는 영향을 최소화합니다.
      </p>
      <ul>
        <li><strong>OPS10-BP01:</strong> 이벤트·인시던트·문제 관리 프로세스 수립</li>
        <li><strong>OPS10-BP02:</strong> 경보(Alert)별 대응 프로세스 정의</li>
        <li><strong>OPS10-BP03:</strong> 비즈니스 영향도 기준으로 운영 이벤트 우선순위 결정</li>
        <li><strong>OPS10-BP04:</strong> 에스컬레이션 경로 정의</li>
        <li><strong>OPS10-BP05:</strong> 서비스 영향 이벤트에 대한 고객 커뮤니케이션 계획 수립</li>
        <li><strong>OPS10-BP06:</strong> 대시보드를 통한 상태 전달</li>
        <li><strong>OPS10-BP07:</strong> 이벤트에 대한 대응 자동화</li>
      </ul>

      <PageNav />
    </article>
  );
}
