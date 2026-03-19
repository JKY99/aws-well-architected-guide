import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Page() {
  return (
    <article className="doc-content">
      <h1>SEC 1 — 워크로드를 안전하게 운영하기 위해 어떻게 보안 기반을 수립합니까?</h1>

      <p>
        강력한 보안 기반은 AWS 계정, 서비스, 리소스를 안전하게 보호하기 위한
        거버넌스와 제어 체계를 수립하는 것에서 시작합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec1/bp01">SEC01-BP01: 계정으로 워크로드 분리</Link></strong><br />
          <span>워크로드를 별도의 AWS 계정으로 분리하여 폭발 반경을 제한하고 보안 경계를 강화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec1/bp02">SEC01-BP02: 루트 사용자 보안 강화</Link></strong><br />
          <span>SCP(서비스 제어 정책)를 사용하여 조직 전체에 보안 가드레일을 일관성 있게 적용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec1/bp03">SEC01-BP03: 보안 제어 목표 식별 및 검증</Link></strong><br />
          <span>새로운 AWS 서비스 도입 시 보안 영향을 평가하고 적절한 제어를 적용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec1/bp04">SEC01-BP04: 보안 위협 최신 정보 유지</Link></strong><br />
          <span>정기적으로 위협 모델을 검토하고 새로운 위협에 대한 제어를 업데이트합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec1/bp05">SEC01-BP05: 보안 관리 범위 축소</Link></strong><br />
          <span>보안 이벤트 탐지 및 초기 대응을 자동화하여 대응 시간을 단축합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec1/bp06">SEC01-BP06: 표준 보안 제어 배포 자동화</Link></strong><br />
          <span>규제 요건, 산업 표준, 내부 정책을 바탕으로 보안 요건을 정의하고 준수 여부를 검증합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
