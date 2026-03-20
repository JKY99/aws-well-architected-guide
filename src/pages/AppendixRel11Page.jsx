import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Page() {
  return (
    <article className="doc-content">
      <h1>REL 11 — 구성 요소 장애를 견딜 수 있도록 워크로드를 어떻게 설계합니까?</h1>

      <p>
        개별 구성 요소 장애 시에도 워크로드가 계속 작동할 수 있도록
        자동 복구, 상태 확인, 정적 안정성 등의 패턴을 적용합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp01">REL11-BP01: 모든 워크로드 구성 요소를 모니터링하여 장애 감지</Link></strong><br />
          <span>애플리케이션, 인프라, 의존성의 상태를 지속적으로 모니터링하여 장애를 신속하게 감지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp02">REL11-BP02: 정상 리소스로 장애 조치</Link></strong><br />
          <span>로드 밸런서 상태 확인, Route 53 장애 조치 라우팅을 사용하여 장애 발생 시 트래픽을 자동으로 정상 리소스로 전환합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp03">REL11-BP03: 모든 계층에서 자동 복구</Link></strong><br />
          <span>EC2 Auto Recovery, ECS 작업 재시작, RDS 자동 장애 조치 등 모든 계층에서 자동 복구 메커니즘을 활성화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp04">REL11-BP04: 복구 중에는 컨트롤 플레인이 아닌 데이터 플레인 사용</Link></strong><br />
          <span>장애 복구 시 AWS API(컨트롤 플레인)보다 데이터 플레인 경로를 활용하여 복구 과정에서 추가 장애가 발생하지 않도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp05">REL11-BP05: 이중 모드 동작을 방지하는 정적 안정성 사용</Link></strong><br />
          <span>장애 발생 시 워크로드가 예측 가능하게 동작하도록 사전에 충분한 용량을 프로비저닝하여 정적 안정성을 확보합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp06">REL11-BP06: 가용성에 영향을 미치는 이벤트 발생 시 알림 전송</Link></strong><br />
          <span>장애 감지 즉시 운영팀에 알림을 전송하고, AWS Health Dashboard 이벤트를 구독하여 AWS 서비스 상태 변화를 모니터링합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel11/bp07">REL11-BP07: 가용성 목표 및 SLA를 충족하도록 제품 아키텍처 설계</Link></strong><br />
          <span>정의된 가용성 목표(RTO/RPO/SLA)를 달성하기 위한 아키텍처를 설계하고, 각 구성 요소의 가용성이 전체 목표에 미치는 영향을 계산합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
