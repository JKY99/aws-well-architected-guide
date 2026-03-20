import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel12Page() {
  return (
    <article className="doc-content">
      <h1>REL 12 — 안정성을 어떻게 테스트합니까?</h1>

      <p>
        워크로드를 프로덕션의 스트레스에 견디도록 설계한 후에는 테스트만이 설계대로 작동하고
        기대하는 복원력을 제공하는지 확인하는 유일한 방법입니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel12/bp01">REL12-BP01: 플레이북을 사용하여 장애 조사</Link></strong><br />
          <span>잘 이해되지 않은 장애 시나리오에 대해 조사 프로세스를 플레이북으로 문서화하여 일관되고 신속한 대응이 가능하도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel12/bp02">REL12-BP02: 사후 인시던트 분석 수행</Link></strong><br />
          <span>팀이 사후 인시던트 분석을 처리하는 일관되고 합의된 접근 방식을 갖추어 근본 원인을 파악하고 동일 인시던트 재발 가능성을 제한하는 메커니즘을 구축합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel12/bp03">REL12-BP03: 확장성 및 성능 요구사항 테스트</Link></strong><br />
          <span>워크로드가 최대 부하에서도 예상된 동작을 유지하도록 하고 애플리케이션이 성장하고 발전함에 따라 발생할 수 있는 성능 관련 문제를 사전에 해결합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel12/bp04">REL12-BP04: 카오스 엔지니어링을 사용하여 복원력 테스트</Link></strong><br />
          <span>장애 주입 실험, 예상치 못한 부하 주입, 이벤트 중 알려진 예상 동작을 검증하는 복원력 테스트를 통해 워크로드의 복원력을 정기적으로 검증합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel12/bp05">REL12-BP05: 정기적으로 게임 데이 수행</Link></strong><br />
          <span>일관되고 예정된 주기로 복원력 게임 데이를 실행하여 팀이 프로덕션 문제에 효과적으로 대응할 수 있는 준비 문화를 구축합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
