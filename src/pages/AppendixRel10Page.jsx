import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel10Page() {
  return (
    <article className="doc-content">
      <h1>REL 10 — 장애 격리를 통해 워크로드를 어떻게 보호합니까?</h1>

      <p>
        장애 격리 경계(Fault isolation boundary)를 사용하여 단일 구성 요소나 리전의 장애가
        전체 워크로드에 영향을 미치지 않도록 보호합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel10/bp01">REL10-BP01: 워크로드를 여러 위치에 배포</Link></strong><br />
          <span>여러 가용 영역 또는 리전에 워크로드를 배포하여 단일 위치의 장애가 전체 서비스에 영향을 미치지 않도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel10/bp02">REL10-BP02: 단일 위치로 제한된 구성 요소에 대한 자동 복구</Link></strong><br />
          <span>단일 위치에서만 실행해야 하는 구성 요소의 경우 자동 복구 메커니즘을 구현하여 가용성을 유지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel10/bp03">REL10-BP03: 벌크헤드 아키텍처를 사용하여 영향 범위 제한</Link></strong><br />
          <span>워크로드를 격리된 파티션(cell)으로 분리하여 하나의 파티션 장애가 다른 파티션에 영향을 미치지 않도록 합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
