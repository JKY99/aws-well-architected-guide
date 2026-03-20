import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel10Page() {
  return (
    <article className="doc-content">
      <h1>REL 10 — 장애 격리를 통해 워크로드를 어떻게 보호합니까?</h1>

      <p>
        장애 격리는 구성 요소 또는 시스템 장애의 영향을 정의된 경계 내로 제한합니다.
        적절한 격리를 통해 경계 외부의 구성 요소는 장애의 영향을 받지 않습니다.
        여러 장애 격리 경계에 걸쳐 워크로드를 실행하면 장애에 대한 복원력이 향상됩니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel10/bp01">REL10-BP01: 워크로드를 여러 위치에 배포</Link></strong><br />
          <span>프로덕션 워크로드를 여러 가용 영역(AZ) 또는 리전에 분산하여 장애 허용성과 고가용성을 달성합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel10/bp02">REL10-BP02: 단일 위치로 제한된 구성 요소에 대한 복구 자동화</Link></strong><br />
          <span>단일 가용 영역 또는 온프레미스 데이터 센터에서만 운영해야 하는 구성 요소에 대해 자동화된 복구 기능을 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel10/bp03">REL10-BP03: 벌크헤드 아키텍처를 사용하여 영향 범위 제한</Link></strong><br />
          <span>워크로드의 여러 격리된 인스턴스를 사용하는 셀 기반 아키텍처를 구현하여 하나의 셀 장애가 해당 셀과 그 요청에만 영향을 미치도록 합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
