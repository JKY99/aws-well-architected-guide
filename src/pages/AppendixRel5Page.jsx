import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Page() {
  return (
    <article className="doc-content">
      <h1>REL 5 — 장애를 완화하거나 견디기 위해 분산 시스템의 상호작용을 어떻게 설계합니까?</h1>

      <p>
        분산 시스템은 스트레스나 장애를 견디고, 더 빠르게 복구되며, MTTR(평균 복구 시간)을
        개선할 수 있도록 설계되어야 합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp01">REL05-BP01: 적용 가능한 강한 의존성을 약한 의존성으로 전환하기 위한 완만한 성능 저하 구현</Link></strong><br />
          <span>구성 요소의 의존성이 비정상 상태이더라도 구성 요소 자체가 기능하되 저하된 방식으로 동작할 수 있도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp02">REL05-BP02: 요청 스로틀링</Link></strong><br />
          <span>갑작스러운 고객 트래픽 증가, 플러딩 공격 또는 재시도 폭풍으로 인한 대량 스파이크를 요청 스로틀링으로 완화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp03">REL05-BP03: 재시도 호출 제어 및 제한</Link></strong><br />
          <span>클라이언트가 요청 시 시간 초과 또는 오류 응답을 받을 때 재시도 여부를 결정하고 지수 백오프와 지터를 적용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp04">REL05-BP04: 빠른 실패 및 큐 제한</Link></strong><br />
          <span>시스템이 리소스 경합, 타임아웃, 예외 또는 그레이 실패를 경험할 때 빠른 실패 전략으로 더 빠른 시스템 복구를 가능하게 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp05">REL05-BP05: 클라이언트 타임아웃 설정</Link></strong><br />
          <span>클라이언트 타임아웃은 비정상적으로 오랜 시간이 걸리는 요청을 기다리는 것과 관련된 클라이언트, 서버 및 워크로드에 대한 비용을 고려해야 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp06">REL05-BP06: 가능한 한 시스템을 무상태로 만들기</Link></strong><br />
          <span>서로 다른 클라이언트 요청 사이에서 디스크 및 메모리에 로컬로 저장된 데이터에 의존성이 없도록 시스템을 설계합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel5/bp07">REL05-BP07: 긴급 레버 구현</Link></strong><br />
          <span>긴급 레버를 구현하면 워크로드의 중요 구성 요소의 가용성을 유지하기 위한 알려진 좋은 프로세스를 수립할 수 있습니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
