import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC02-BP04 — 중앙 집중식 자격 증명 공급자 활용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 분산된 자격 증명 관리로 인한 접근 제어 일관성 부재 위험이 높습니다.</p>
      </div>
      <p>
        중앙 자격 증명 공급자를 통해 워크포스 사용자, 인증 정책(MFA), 권한 부여를 중앙에서 관리합니다. 워크포스 사용자는 중앙 자격 증명 공급자에 로그인하고 내부 및 외부 애플리케이션으로 연동(SSO)합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>워크포스 사용자, 인증 정책(MFA), 권한 부여의 중앙화된 관리</li>
        <li>워크포스 사용자가 중앙 자격 증명 공급자에 로그인하고 SSO로 연동</li>
        <li>자격 증명 공급자가 HR 시스템과 통합되어 인사 변동 자동 동기화</li>
        <li>사용자 퇴직 시 접근 자동 취소</li>
        <li>상세한 감사 로깅 및 비정상적 사용자 동작 모니터링</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>연동/SSO가 구현되지 않아 워크포스 사용자가 여러 애플리케이션에 별도 자격 증명 생성</li>
        <li>수동 ID 생명주기 관리 및 HR 시스템 통합 없이 역할 변경과 퇴직을 수동 처리</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크포스 ID 및 정책 관리를 위한 단일 위치</li>
        <li>사용자 및 그룹에 대한 애플리케이션 접근 권한 할당 가능</li>
        <li>사용자 로그인 활동 모니터링</li>
        <li>역할 변경 자동 동기화 및 사용자 퇴직 시 접근 자동 취소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS 조직의 여러 계정에 접근하는 워크포스 사용자에게는 AWS IAM Identity Center를 사용하여 연동합니다.</li>
        <li>단일 AWS 계정에 대한 직접 연동에는 SAML 2.0 또는 OIDC를 사용합니다.</li>
        <li>SCIM 자동 프로비저닝을 통해 외부 자격 증명 공급자와 통합합니다.</li>
        <li>최소 권한 접근을 위해 Permission Set을 구성합니다.</li>
        <li>SCP를 적용하여 새 IAM 사용자 생성을 방지합니다.</li>
        <li>애플리케이션 사용자에는 Amazon Cognito를 중앙 자격 증명 공급자로 사용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM Identity Center — 중앙 집중식 멀티계정 SSO 및 권한 관리</li>
        <li>AWS Identity and Access Management(IAM) — ID 및 접근 관리</li>
        <li>Amazon Cognito — 애플리케이션 사용자 자격 증명 관리</li>
        <li>AWS Directory Service — 관리형 Microsoft AD</li>
        <li>AWS STS(Security Token Service) — 임시 자격 증명</li>
        <li>AWS Organizations — 다중 계정 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
