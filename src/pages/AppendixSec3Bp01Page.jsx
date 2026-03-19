import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP01 — 액세스 요건 정의</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        워크로드의 각 구성요소(사람, 기계, 서비스)가 작업을 수행하기 위해 필요한 액세스 요건을
        명확히 정의합니다. 요건 정의 없이 권한을 부여하면 과도한 권한이 누적되어 보안 위험이
        증가합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 사용자, 역할, 서비스가 수행해야 하는 작업이 문서화되고, 그에 맞는 최소한의 IAM
        정책이 정의됩니다. 액세스 요건은 설계 단계부터 반영되어 권한 과잉 부여가 예방됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>편의를 위해 AdministratorAccess 또는 PowerUserAccess 같은 관리형 정책을 무분별하게 부여</li>
        <li>액세스 요건을 문서화하지 않고 구현 단계에서 즉흥적으로 권한 부여</li>
        <li>서비스 간 통신에 사람용 자격 증명을 재사용</li>
        <li>공유 자격 증명을 여러 팀이나 애플리케이션에 사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>불필요한 권한 부여를 사전에 차단하여 공격 표면 축소</li>
        <li>감사 및 컴플라이언스 요건 충족 시 문서화된 근거 확보</li>
        <li>권한 변경 요청 시 기존 요건과 비교하여 영향 분석 가능</li>
        <li>인시던트 발생 시 의도된 액세스 범위를 신속히 파악 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>워크로드 설계 단계에서 각 구성요소의 역할과 필요한 AWS API 호출을 목록화합니다.</li>
        <li>IAM Policy Simulator를 사용하여 정책이 의도한 대로 동작하는지 검증합니다.</li>
        <li>AWS IAM Access Analyzer를 활용하여 실제 사용된 권한을 분석하고 정책을 정제합니다.</li>
        <li>서비스 역할(Service Role)은 해당 서비스가 호출하는 API 목록을 기준으로 정책을 작성합니다.</li>
        <li>권한 요건을 Infrastructure as Code(예: AWS CDK, CloudFormation)에 반영하여 코드로 관리합니다.</li>
        <li>정기적인 접근 검토(Access Review) 일정을 수립하고, 변경 사항을 문서에 반영합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM — 사용자, 역할, 정책 관리</li>
        <li>IAM Access Analyzer — 실제 사용 권한 분석 및 정책 생성</li>
        <li>IAM Policy Simulator — 정책 효과 사전 검증</li>
        <li>AWS CloudTrail — API 호출 로깅으로 실제 사용 권한 파악</li>
        <li>AWS Organizations — 조직 단위 권한 정책 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
