import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec7Page() {
  return (
    <article className="doc-content">
      <h1>SEC 7 — 데이터를 어떻게 분류합니까?</h1>

      <p>
        분류는 데이터를 중요도와 민감도에 따라 분류하여 적절한 보호 및 보존 제어를 결정하는 방법을 제공합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec7/bp01">SEC07-BP01: 데이터 분류 체계 이해</Link></strong><br />
          <span>워크로드에 존재하는 데이터 유형을 잘 이해하고 문서화하며, 민감도 분류에 따른 적절한 제어를 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec7/bp02">SEC07-BP02: 데이터 민감도에 따른 데이터 보호 제어 적용</Link></strong><br />
          <span>데이터 민감도 수준에 따른 격리 경계와 보호 제어를 정의하고 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec7/bp03">SEC07-BP03: 자동 식별 및 분류</Link></strong><br />
          <span>자동화된 도구와 서비스로 데이터 민감도 수준을 식별 및 분류하고, 비인가 데이터 처리를 지속적으로 모니터링합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec7/bp04">SEC07-BP04: 확장 가능한 데이터 수명 주기 관리 정의</Link></strong><br />
          <span>데이터 분류에 따라 데이터 보존 정책을 정의하고 데이터가 더 이상 필요하지 않을 때 자동으로 삭제합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
