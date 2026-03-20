import { Link } from "react-router-dom";
import "../components/DocContent.css";

export default function AppendixSec6Page() {
  return (
    <article className="doc-content">
      <h1>SEC 6. 컴퓨팅 리소스를 어떻게 보호합니까?</h1>

      <p>
        워크로드의 컴퓨팅 리소스는 외부 및 내부 위협으로부터 보호하기 위해 여러 계층의 방어가 필요합니다. 컴퓨팅 리소스에는 EC2 인스턴스, 컨테이너, AWS Lambda 함수, 데이터베이스 서비스, IoT 디바이스 등이 포함됩니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec6/bp01">SEC06-BP01: 취약점 관리 수행</Link></strong><br />
          <span>소프트웨어 취약점, 잠재적 결함 및 의도치 않은 네트워크 노출에 대해 워크로드를 지속적으로 스캔하는 솔루션을 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec6/bp02">SEC06-BP02: 강화된 이미지에서 컴퓨팅 프로비저닝</Link></strong><br />
          <span>신뢰할 수 있는 소스의 강화된 기본 이미지에서 컴퓨팅 리소스를 프로비저닝하고, 서명 검증을 통해 외부 종속성을 가져옵니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec6/bp03">SEC06-BP03: 수동 관리 및 대화형 접근 축소</Link></strong><br />
          <span>자동화된 런북을 통해 컴퓨팅 리소스에 대한 작업을 캡처하고, 긴급 상황에서만 직접 접근을 허용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec6/bp04">SEC06-BP04: 소프트웨어 무결성 검증</Link></strong><br />
          <span>모든 아티팩트를 신뢰할 수 있는 소스에서 획득하고 암호화 서명으로 검증합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec6/bp05">SEC06-BP05: 컴퓨팅 보호 자동화</Link></strong><br />
          <span>자동화된 시스템이 모든 컴퓨팅 리소스의 스캔 및 패치를 수행하고, 비준수 리소스 탐지 시 자동 수정을 시작합니다.</span>
        </li>
      </ul>

    </article>
  );
}
