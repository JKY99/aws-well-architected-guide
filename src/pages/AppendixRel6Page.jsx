import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Page() {
  return (
    <article className="doc-content">
      <h1>REL 6 — 워크로드 리소스를 어떻게 모니터링합니까?</h1>

      <p>
        워크로드 리소스를 모니터링하여 비즈니스 목표를 달성하고 있는지 확인하고,
        문제를 신속하게 감지하여 적절한 조치를 취합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp01">REL06-BP01: 워크로드의 모든 구성 요소 모니터링 (생성)</Link></strong><br />
          <span>Amazon CloudWatch 또는 서드파티 도구로 워크로드 구성 요소를 모니터링하고, AWS Health 대시보드로 AWS 서비스를 모니터링합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp02">REL06-BP02: 메트릭 정의 및 계산 (집계)</Link></strong><br />
          <span>워크로드 구성 요소와 AWS 서비스 의존성에서 로그를 수집하고 중앙 위치에 게시합니다. 로그에서 집계 메트릭을 생성하여 워크로드 동작을 높은 수준에서 파악합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp03">REL06-BP03: 알림 전송 (실시간 처리 및 경보)</Link></strong><br />
          <span>서비스 및 애플리케이션 메트릭을 기반으로 관련 경보를 구성하여 알람 임계값 초과 시 담당자와 시스템에 신속하게 알림을 전송합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp04">REL06-BP04: 응답 자동화 (실시간 처리 및 경보)</Link></strong><br />
          <span>실시간 경보를 식별하고 경보에 대한 자동화 처리를 설정하여 서비스 수준 목표와 SLA를 유지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp05">REL06-BP05: 로그 분석</Link></strong><br />
          <span>로그 파일 및 메트릭 이력을 수집하고 분석하여 광범위한 추세와 워크로드 인사이트를 도출합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp06">REL06-BP06: 모니터링 범위 및 메트릭 정기 검토</Link></strong><br />
          <span>모니터링 전략을 정기적으로, 그리고 중요한 이벤트나 변경 후에 검토하고 업데이트합니다. 워크로드와 비즈니스 요구사항이 변화함에 따라 주요 애플리케이션 상태 지표가 여전히 관련성이 있는지 확인합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp07">REL06-BP07: 시스템을 통한 요청의 엔드투엔드 추적 모니터링</Link></strong><br />
          <span>모든 구성 요소에 걸쳐 포괄적인 추적을 구현하여 오류 및 지연 시간의 근본 원인 발견을 단순화하고 MTTR을 개선합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
