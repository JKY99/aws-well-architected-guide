import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Page() {
  return (
    <article className="doc-content">
      <h1>REL 11 — 구성 요소 장애를 견딜 수 있도록 워크로드를 어떻게 설계합니까?</h1>

      <p>
        개별 구성 요소 장애 시에도 워크로드가 계속 작동할 수 있도록
        자동 복구, 장애 조치, 정적 안정성 등의 패턴을 적용합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp01">REL11-BP01: 장애 감지를 위한 모든 워크로드 구성 요소 모니터링</Link></strong><br />
          <span>워크로드의 필수 구성 요소를 독립적으로 모니터링하여 장애 발생 시 즉시 감지하고 알립니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp02">REL11-BP02: 정상 리소스로 장애 조치</Link></strong><br />
          <span>저하가 발생할 경우 새로운 리소스를 사용하여 자동 또는 수동으로 복구할 수 있는 시스템을 구축합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp03">REL11-BP03: 모든 계층에서 복구 자동화</Link></strong><br />
          <span>장애 감지 시 자동으로 복구 조치를 수행합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp04">REL11-BP04: 복구 중에는 컨트롤 플레인이 아닌 데이터 플레인 사용</Link></strong><br />
          <span>리소스가 손상된 상태에 진입하면 손상된 리소스에서 정상 리소스로 트래픽을 이동하여 자동 또는 수동으로 복구합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp05">REL11-BP05: 이중 모드 동작을 방지하는 정적 안정성 사용</Link></strong><br />
          <span>워크로드가 정상 모드와 장애 모드에서 다른 동작을 보이지 않도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp06">REL11-BP06: 가용성에 영향을 미치는 이벤트 발생 시 알림 전송</Link></strong><br />
          <span>오류율, 지연 시간 등 중요 KPI 메트릭의 임계값이 초과되면 즉시 운영팀에 알림을 전송하여 사용자 영향을 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp07">REL11-BP07: 가용성 목표 및 서비스 수준 협약(SLA)을 충족하도록 제품 아키텍처 설계</Link></strong><br />
          <span>각 애플리케이션에 가용성 목표와 성능 메트릭 SLA를 정의하고, 이를 모니터링하고 유지하여 비즈니스 목표를 달성합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
