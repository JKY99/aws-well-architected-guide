import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec9Page() {
  return (
    <article className="doc-content">
      <h1>SEC 9 — 전송 중인 데이터를 어떻게 보호합니까?</h1>

      <p>
        네트워크를 통해 전송되는 데이터(Data in Transit)를 암호화하고 인증하여 도청과 중간자 공격으로부터 보호합니다. TLS 인증서 관리, 전송 중 암호화 강제, 네트워크 통신 인증을 통해 데이터 기밀성과 무결성을 유지합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec9/bp01">SEC09-BP01: 보안 키 및 인증서 관리 구현</Link></strong><br />
          <span>TLS 인증서의 프로비저닝, 배포, 저장, 갱신을 PKI 시스템으로 자동화하고 인증서 개인 키 자료를 보호합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec9/bp02">SEC09-BP02: 전송 중 암호화 강제</Link></strong><br />
          <span>조직 정책, 규제 의무 및 표준에 따라 정의된 암호화 요구 사항을 강제하고 안전한 TLS 프로토콜과 암호화 스위트를 사용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec9/bp03">SEC09-BP03: 네트워크 통신 인증</Link></strong><br />
          <span>TLS 또는 IPsec과 같이 인증을 지원하는 프로토콜을 사용하여 통신 ID를 검증합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
