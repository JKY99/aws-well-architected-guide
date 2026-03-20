import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC01-BP01 — 계정으로 워크로드 분리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 단일 보안 사고가 여러 워크로드에 영향을 미칠 수 있으며, 계정 간 격리가 부재하여 폭발 반경이 확대됩니다.</p>
      </div>
      <p>
        다중 계정 전략을 통해 환경(프로덕션·개발·테스트 등)과 워크로드를 별도 AWS 계정으로 격리하여 보안 경계를 구축합니다. 계정 수준 분리는 보안·결제·액세스 측면에서 강력한 격리 경계를 제공하는 가장 권장되는 방법입니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        클라우드 운영, 관련 없는 워크로드, 다양한 환경을 별도 계정으로 분리하는 계정 구조를 구축하여 클라우드 인프라 전반의 보안을 강화합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>서로 다른 데이터 민감도 수준을 가진 관련 없는 여러 워크로드를 동일 계정에 배치</li>
        <li>OU(조직 단위) 구조가 명확하게 정의되지 않음</li>
        <li>개발·스테이징·프로덕션 환경을 단일 AWS 계정에 혼용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드에 의도치 않게 액세스한 경우 영향 범위 최소화</li>
        <li>AWS 서비스·리소스·리전에 대한 액세스의 중앙 거버넌스 실현</li>
        <li>정책 및 보안 서비스의 중앙 관리로 클라우드 인프라 보안 유지</li>
        <li>자동화된 계정 생성 및 유지 관리 프로세스 구현</li>
        <li>규정 준수 및 규제 요건을 위한 인프라 중앙 감사</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 요구 사항, 데이터 민감도, 워크로드 구조에 맞게 OU 구조를 설계합니다.</li>
        <li>AWS Control Tower를 사용하여 다중 계정 환경을 위한 Landing Zone을 생성합니다.</li>
        <li>필수 제어 및 선택적 제어를 통해 가드레일을 설정합니다.</li>
        <li>Control Tower 콘솔 또는 IAM 권한 정책을 통해 새로운 리전에 대한 액세스를 제한합니다.</li>
        <li>AWS CloudFormation StackSets를 사용하여 여러 계정과 리전에 리소스를 배포합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Organizations — 계층적 OU에 계정을 구성하고 SCP 적용</li>
        <li>AWS Control Tower — 원클릭 Landing Zone 설정 및 Account Factory</li>
        <li>AWS Config — 멤버 계정 전반에 사전 예방적·탐지적 제어 구축</li>
        <li>AWS CloudFormation StackSets — 여러 계정과 리전에 승인된 템플릿 배포</li>
      </ul>
      <PageNav />
    </article>
  );
}
