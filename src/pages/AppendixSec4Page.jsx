import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec4Page() {
  return (
    <article className="doc-content">
      <h1>SEC 4 — 보안 이벤트를 어떻게 탐지하고 조사합니까?</h1>

      <p>
        로그와 지표에서 이벤트를 캡처하고 분석하여 가시성을 확보합니다.
        보안 이벤트와 잠재적 위협에 조치를 취하여 워크로드를 보호합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec4/bp01">SEC04-BP01: 서비스 및 애플리케이션 로깅 구성</Link></strong><br />
          <span>서비스 및 애플리케이션 수준에서 보안 관련 이벤트를 캡처하도록 로깅을 설정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec4/bp02">SEC04-BP02: 표준 위치에 로그, 결과 및 지표 캡처</Link></strong><br />
          <span>모든 로그, 보안 결과, 지표를 표준화된 중앙 저장소에 집계하여 분석 및 상관 관계 파악을 용이하게 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec4/bp03">SEC04-BP03: 보안 경보 상관 분석 및 강화</Link></strong><br />
          <span>여러 소스의 보안 경보를 집계 및 분석하여 패턴을 식별하고 컨텍스트 정보로 경보를 강화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec4/bp04">SEC04-BP04: 규정 비준수 리소스에 대한 수정 시작</Link></strong><br />
          <span>보안 정책을 준수하지 않는 리소스를 수정하는 자동화 또는 수동 프로세스를 구현합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
