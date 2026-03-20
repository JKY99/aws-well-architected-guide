import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec8Page() {
  return (
    <article className="doc-content">
      <h1>SEC 8 — 저장 데이터를 어떻게 보호합니까?</h1>

      <p>
        저장 데이터(Data at Rest)를 암호화하고 접근을 제어하여 비인가 접근과 데이터 유출을 방지합니다. 보안 키 관리, 기본 암호화 적용, 자동화된 보호 및 접근 제어를 통해 데이터 기밀성을 유지합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec8/bp01">SEC08-BP01: 보안 키 관리 구현</Link></strong><br />
          <span>확장 가능하고 반복 가능하며 자동화된 키 관리 메커니즘을 통해 키 자료에 대한 최소 권한 접근을 강제합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec8/bp02">SEC08-BP02: 저장 데이터 암호화 강제</Link></strong><br />
          <span>저장 데이터를 기본으로 암호화하는 메커니즘을 구현하여 데이터 기밀성을 유지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec8/bp03">SEC08-BP03: 저장 데이터 보호 자동화</Link></strong><br />
          <span>잘못된 구성을 탐지하고 수정하는 자동화된 시스템으로 데이터 저장 위치를 스캔하고 모니터링합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec8/bp04">SEC08-BP04: 접근 제어 강화</Link></strong><br />
          <span>권한 있는 사용자만 필요한 경우에만 데이터에 접근할 수 있도록 확인하고 중요 데이터를 다른 데이터와 격리합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
