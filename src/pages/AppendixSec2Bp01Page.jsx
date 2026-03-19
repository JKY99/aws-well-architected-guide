import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC02-BP01 — 강력한 로그인 메커니즘 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>MFA(다중 인증), 강력한 패스워드 정책, SSO(Single Sign-On)를 적용하여 자격증명 기반 공격으로부터 AWS 계정을 보호합니다. 단일 요소 인증만으로는 패스워드 유출 시 즉각적인 계정 침해로 이어질 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 사용자는 MFA가 적용된 중앙 집중식 ID 제공자를 통해 AWS에 접근합니다. IAM 사용자 직접 로그인 대신 AWS IAM Identity Center를 통한 SSO가 기본 접근 방식으로 사용되며, 강력한 패스워드 정책이 시행됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>MFA 없이 패스워드만으로 AWS 콘솔 접근을 허용하여 자격증명 도용 공격에 취약</li>
        <li>짧거나 단순한 패스워드를 허용하는 느슨한 패스워드 정책 적용</li>
        <li>개별 IAM 사용자 계정으로 직접 로그인하여 중앙 집중식 접근 제어 불가</li>
        <li>공유 계정(shared account)을 여러 사람이 사용하여 책임 추적성 상실</li>
        <li>애플리케이션 사용자 인증에 취약한 인증 방식(기본 HTTP 인증 등)을 사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>MFA 적용으로 패스워드 유출 시에도 추가 인증 요소 없이 접근 불가하여 계정 탈취 방지</li>
        <li>SSO를 통한 중앙화된 인증으로 사용자 생명주기 관리(온보딩/오프보딩) 효율화</li>
        <li>강력한 패스워드 정책으로 사전 대입 공격(brute force) 및 자격증명 스터핑 공격 대응</li>
        <li>책임 추적성 향상으로 보안 사고 발생 시 신속한 원인 파악 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS IAM Identity Center를 활성화하고 기존 Active Directory 또는 외부 IdP(Okta, Azure AD)와 연동하여 SSO를 구성합니다.</li>
        <li>모든 IAM 사용자에게 MFA를 필수 적용하는 SCP 또는 IAM 정책을 생성합니다.</li>
        <li>IAM 패스워드 정책에서 최소 14자, 대소문자·숫자·특수문자 조합, 90일 만료를 설정합니다.</li>
        <li>Amazon Cognito를 사용하는 애플리케이션에서 MFA, 이상 행동 탐지, Adaptive Authentication을 활성화합니다.</li>
        <li>FIDO2/WebAuthn 기반 하드웨어 보안 키를 고권한 사용자에게 배포하여 피싱 저항성을 강화합니다.</li>
        <li>MFA 미적용 사용자 목록을 주기적으로 확인하고 강제 적용하는 자동화 프로세스를 구축합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM Identity Center — 중앙 집중식 SSO 및 다중 계정 접근 관리</li>
        <li>AWS IAM — 패스워드 정책 및 MFA 설정</li>
        <li>Amazon Cognito — 애플리케이션 사용자 인증 및 MFA</li>
        <li>AWS Security Hub — MFA 미적용 계정 자동 탐지 및 경보</li>
        <li>AWS CloudTrail — 로그인 이벤트 기록 및 이상 탐지</li>
      </ul>
      <PageNav />
    </article>
  );
}
