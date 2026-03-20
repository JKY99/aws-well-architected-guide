import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function PerfProcessCulturePage() {
  return (
    <article className="doc-content">
      <h1>성능 효율성 — 프로세스와 문화</h1>

      <p>
        성능 효율성을 지속적으로 유지하기 위해서는 올바른 프로세스와 조직 문화가 필요합니다.
      </p>

      <h2>검토 (Review)</h2>
      <p>
        지속적인 평가를 통해 워크로드 구성 요소가 최신 AWS 기술을 활용하고
        성능 목표를 유지하는지 확인하세요.
      </p>
      <ul>
        <li>새 리전, 엣지 로케이션, 서비스 등 진화하는 혁신에 대한 정기적인 구성 요소 평가</li>
        <li>Deming의 계획-실행-확인-조치(PDCA) 사이클을 사용하여 반복적 개선 및 최적화 기회 식별</li>
      </ul>

      <h2>모니터링 (Monitoring)</h2>
      <p>
        구현 후 모니터링을 통해 고객 영향이 발생하기 전에 성능 문제를 감지하세요.
      </p>
      <h3>주요 모니터링 도구</h3>
      <ul>
        <li>
          <strong>Amazon CloudWatch:</strong> AWS 및 온프레미스 워크로드의 지표, 로그, 이벤트 수집,
          운영 상태 가시성 제공
        </li>
        <li>
          <strong>AWS X-Ray:</strong> 분산 애플리케이션 분석 및 디버그, 성능 병목 및 근본 원인 식별
        </li>
      </ul>

      <h2>트레이드오프 (Tradeoffs)</h2>
      <p>
        아키텍처 최적화 시 일관성, 내구성 또는 공간을 성능 및 지연 시간 개선과 교환해야 할 수 있습니다.
      </p>
      <ul>
        <li>부하 테스트로 트레이드오프가 성능을 실제로 향상시키는지 검증</li>
        <li>지표 수집 및 평가를 통해 시스템과 최종 사용자 경험에 미치는 영향 파악</li>
      </ul>

      <PageNav />
    </article>
  );
}
