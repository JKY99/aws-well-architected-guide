import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Page() {
  return (
    <article className="doc-content">
      <h1>REL 5 — 워크로드 상태를 어떻게 모니터링합니까?</h1>

      <p>
        워크로드의 각 구성 요소와 전반적인 상태를 지속적으로 모니터링하여
        문제를 조기에 발견하고 자동으로 복구합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp01">REL05-BP01: 모든 워크로드 구성 요소 모니터링</Link></strong><br />
          <span>Amazon CloudWatch를 사용하여 인프라, 애플리케이션, 비즈니스 메트릭을 수집하고 모니터링합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp02">REL05-BP02: 알림 및 경보 설계</Link></strong><br />
          <span>임계값 기반의 경보를 설정하고 의미 있는 알림만 전송하여 알림 피로를 방지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp03">REL05-BP03: 모니터링 스토리지 크기 검토</Link></strong><br />
          <span>로그와 메트릭 데이터의 보존 기간을 설정하여 비용을 관리하면서 필요한 데이터를 유지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp04">REL05-BP04: 큐를 제한하고 빠르게 실패 처리</Link></strong><br />
          <span>큐 크기와 대기 시간을 제한하여 과부하 시 요청이 무한정 쌓이지 않도록 하고, 빠른 실패 응답으로 클라이언트가 조기에 재시도하거나 다른 경로를 선택할 수 있게 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp05">REL05-BP05: 클라이언트 타임아웃 설정</Link></strong><br />
          <span>모든 서비스 호출에 적절한 타임아웃을 설정하여 느린 의존성 서비스로 인해 스레드나 커넥션 풀이 고갈되지 않도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp06">REL05-BP06: 시스템을 가능한 한 무상태로 구성</Link></strong><br />
          <span>세션 상태를 서버 메모리가 아닌 외부 데이터 스토어에 저장하여 인스턴스 장애 시 세션 손실 없이 다른 인스턴스에서 요청을 처리할 수 있도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp07">REL05-BP07: 긴급 레버 구현</Link></strong><br />
          <span>장애 상황에서 즉시 활성화할 수 있는 긴급 레버(기능 플래그, 트래픽 차단 등)를 미리 구현하여 빠른 장애 대응이 가능하도록 합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
