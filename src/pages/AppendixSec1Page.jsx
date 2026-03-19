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
          <strong>SEC01-BP01:</strong> AWS Landing Zone 또는 Control Tower를 사용하여 다중 계정 환경 구성<br />
          <span>워크로드를 별도의 AWS 계정으로 분리하여 폭발 반경을 제한하고 보안 경계를 강화합니다.</span>
        </li>
        <li>
          <strong>SEC01-BP02:</strong> AWS Organizations를 이용한 계정 보안 통제<br />
          <span>SCP(서비스 제어 정책)를 사용하여 조직 전체에 보안 가드레일을 일관성 있게 적용합니다.</span>
        </li>
        <li>
          <strong>SEC01-BP03:</strong> 새 서비스 및 기능 적용 전 보안 속성 파악<br />
          <span>새로운 AWS 서비스 도입 시 보안 영향을 평가하고 적절한 제어를 적용합니다.</span>
        </li>
        <li>
          <strong>SEC01-BP04:</strong> 보안 위협 모델 최신화<br />
          <span>정기적으로 위협 모델을 검토하고 새로운 위협에 대한 제어를 업데이트합니다.</span>
        </li>
        <li>
          <strong>SEC01-BP05:</strong> 보안 이벤트 대응 자동화<br />
          <span>보안 이벤트 탐지 및 초기 대응을 자동화하여 대응 시간을 단축합니다.</span>
        </li>
        <li>
          <strong>SEC01-BP06:</strong> 보안 요건 식별 및 검증<br />
          <span>규제 요건, 산업 표준, 내부 정책을 바탕으로 보안 요건을 정의하고 준수 여부를 검증합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
