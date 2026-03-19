import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec4Page() {
  return (
    <article className="doc-content">
      <h1>SEC 4 — 사람과 머신에 대한 권한을 어떻게 관리합니까?</h1>

      <p>
        최소 권한 원칙에 따라 사용자와 서비스에 필요한 최소한의 권한만 부여합니다.
        권한을 정기적으로 검토하고 불필요한 권한을 제거합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>SEC04-BP01:</strong> 최소 권한 액세스 정의<br />
          <span>각 역할과 서비스에 필요한 최소한의 권한만 부여합니다. 와일드카드 권한 사용을 피합니다.</span>
        </li>
        <li>
          <strong>SEC04-BP02:</strong> 권한 가드레일 부여<br />
          <span>SCP, 권한 경계(Permission Boundaries)를 사용하여 최대 권한 한도를 설정합니다.</span>
        </li>
        <li>
          <strong>SEC04-BP03:</strong> 권한 생명 주기 관리<br />
          <span>액세스 검토를 정기적으로 수행하고 사용하지 않는 권한을 제거합니다.</span>
        </li>
        <li>
          <strong>SEC04-BP04:</strong> 주기적으로 접근 권한 분석<br />
          <span>IAM Access Analyzer를 사용하여 외부에 노출된 리소스와 불필요한 액세스를 식별합니다.</span>
        </li>
        <li>
          <strong>SEC04-BP05:</strong> 공개 및 교차 계정 접근 제한<br />
          <span>S3 버킷, Lambda 함수 등의 퍼블릭 액세스와 교차 계정 접근을 최소화하고 명시적으로 허용합니다.</span>
        </li>
        <li>
          <strong>SEC04-BP06:</strong> 긴급 액세스 프로세스 공유<br />
          <span>긴급 상황에서 필요한 접근 권한을 안전하게 획득하는 절차를 수립합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
