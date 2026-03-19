import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC02-BP04 — 중앙 집중식 자격 증명 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>중앙화된 ID 제공자(IdP)를 통해 사용자 자격증명을 일관되게 관리합니다. 분산된 자격증명 체계는 퇴사자 계정 비활성화 누락, 정책 불일치, 감사 추적의 어려움 등 다양한 보안 문제를 유발합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 AWS 계정과 애플리케이션 접근이 단일 중앙 집중식 IdP를 통해 이루어집니다. 사용자 온보딩 및 오프보딩 시 중앙 IdP에서의 단일 변경으로 모든 AWS 계정의 접근 권한이 즉시 반영됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 AWS 계정에 별도의 IAM 사용자를 생성하여 계정 수 증가에 따라 관리 복잡도 폭증</li>
        <li>퇴사자의 AWS 접근 권한을 모든 계정에서 개별 삭제해야 하여 누락 발생 위험</li>
        <li>기업 HR 시스템과 연동되지 않아 인사 변동이 AWS 접근 권한에 반영되지 않음</li>
        <li>여러 계정의 자격증명을 별도로 관리하여 패스워드 정책 불일치 및 MFA 적용 누락</li>
        <li>사용자별로 계정마다 다른 이름의 역할을 사용하여 감사 시 활동 추적 어려움</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>중앙 IdP에서 단일 비활성화로 모든 AWS 계정 접근을 즉시 차단하여 오프보딩 보안 강화</li>
        <li>일관된 인증 정책(MFA, 세션 시간, 패스워드 정책) 적용으로 보안 기준선 통일</li>
        <li>사용자 활동 추적의 단순화로 보안 사고 조사 시간 단축</li>
        <li>HR 시스템과의 자동 프로비저닝으로 자격증명 관리 운영 비용 절감</li>
        <li>Single Sign-On으로 사용자 경험 향상 및 패스워드 피로 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS IAM Identity Center를 중앙 IdP로 구성하고, 기존 Microsoft Active Directory 또는 외부 SAML/OIDC IdP(Okta, Azure AD)와 연동합니다.</li>
        <li>SCIM 프로토콜을 사용하여 HR 시스템에서 IdP로, IdP에서 IAM Identity Center로 사용자 정보를 자동 동기화합니다.</li>
        <li>Permission Set을 사용하여 역할과 권한 범위를 중앙에서 정의하고 여러 계정에 일관되게 적용합니다.</li>
        <li>AWS Organizations와 연동하여 신규 계정이 추가될 때 자동으로 중앙 IdP의 권한 체계가 적용되도록 구성합니다.</li>
        <li>외부 애플리케이션 사용자 인증은 Amazon Cognito의 외부 IdP 연동(Federation)을 활용합니다.</li>
        <li>IAM Identity Center의 접근 포털 URL을 표준화하고 직원에게 배포하여 중앙 접근 포인트로 정착시킵니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM Identity Center — 중앙 집중식 멀티계정 SSO 및 권한 관리</li>
        <li>AWS Directory Service — 관리형 Microsoft AD 및 LDAP 연동</li>
        <li>Amazon Cognito — 애플리케이션 사용자 자격증명 풀 관리</li>
        <li>AWS Organizations — 멀티계정 환경의 중앙 관리 기반</li>
        <li>AWS CloudTrail — 중앙 집중식 사용자 활동 감사</li>
      </ul>
      <PageNav />
    </article>
  );
}
