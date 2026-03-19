import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps4Page() {
  return (
    <article className="doc-content">
      <h1>OPS 4 — 워크로드의 상태를 이해할 수 있도록 워크로드를 어떻게 설계합니까?</h1>

      <p>
        워크로드 상태를 이해하기 위해서는 적절한 관찰 가능성(Observability)을 구현해야 합니다.
        메트릭, 로그, 트레이스를 통해 워크로드의 건강 상태와 성능을 파악합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops4/bp01">OPS04-BP01: 워크로드 내부 상태 파악</Link></strong><br />
          <span>애플리케이션, 인프라, 비즈니스 메트릭을 수집하여 워크로드 상태를 종합적으로 파악합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops4/bp02">OPS04-BP02: 애플리케이션 원격 분석 구현</Link></strong><br />
          <span>워크로드 구성 요소의 상태를 노출하는 헬스 체크 엔드포인트를 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops4/bp03">OPS04-BP03: 사용자 활동 원격 분석 구현</Link></strong><br />
          <span>비즈니스 성과와 연계된 KPI를 정의하고 측정합니다. 기술 메트릭을 비즈니스 결과와 연결합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops4/bp04">OPS04-BP04: 의존성 원격 분석 구현</Link></strong><br />
          <span>마이크로서비스 환경에서 요청 흐름을 추적하여 성능 병목과 오류를 식별합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops4/bp05">OPS04-BP05: 분산 추적 구현</Link></strong><br />
          <span>실제 사용자 경험을 시뮬레이션하는 합성 모니터링을 구현하여 문제를 사전에 감지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops4/bp06">OPS04-BP06: 강건한 원격 분석 시스템 설계</Link></strong><br />
          <span>개별 서비스와 구성 요소의 상태, 구성, 성능 데이터를 수집합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
