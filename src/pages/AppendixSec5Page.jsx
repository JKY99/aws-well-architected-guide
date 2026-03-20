import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec5Page() {
  return (
    <article className="doc-content">
      <h1>SEC 5 — 네트워크 리소스를 어떻게 보호합니까?</h1>

      <p>
        인터넷 또는 프라이빗 네트워크와 연결된 모든 워크로드는 외부 및 내부 네트워크 기반 위협으로부터 보호하기 위해 여러 계층의 방어가 필요합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec5/bp01">SEC05-BP01: 네트워크 계층 생성</Link></strong><br />
          <span>데이터 민감도 및 접근 요구 사항에 따라 네트워크 계층을 구성하여 심층 방어 접근 방식을 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec5/bp02">SEC05-BP02: 네트워크 계층 내 트래픽 흐름 제어</Link></strong><br />
          <span>최소 권한 원칙에 따라 워크로드 구성 요소 간의 필수 네트워크 흐름만 허용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec5/bp03">SEC05-BP03: 검사 기반 보호 구현</Link></strong><br />
          <span>명시적 규칙, 위협 인텔리전스 및 기준 행동 편차를 기반으로 네트워크 계층 간 트래픽을 검사하고 허가합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec5/bp04">SEC05-BP04: 네트워크 보호 자동화</Link></strong><br />
          <span>IaC 템플릿과 CI/CD 파이프라인으로 네트워크 보호를 정의하고 자동 배포하여 일관성과 예측 가능성을 확보합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
