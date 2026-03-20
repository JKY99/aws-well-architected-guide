import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC02-BP01 — 강력한 로그인 메커니즘 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 자격 증명 도용으로 인한 AWS 계정 침해 위험이 높습니다.</p>
      </div>
      <p>
        IAM 사용자, AWS 계정 루트 사용자, AWS IAM Identity Center, 서드파티 자격 증명 공급자에 강력한 로그인 메커니즘을 사용하여 자격 증명의 의도치 않은 접근 위험을 줄입니다. 모든 ID에 MFA를 요구하고 강력한 암호 정책을 적용하며 비정상적 로그인 동작을 탐지합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>모든 ID에 MFA 요구</li>
        <li>강력한 암호 정책 적용</li>
        <li>비정상적 로그인 동작 탐지</li>
        <li>중앙 자격 증명 공급자를 통한 연동(SAML 2.0 또는 IAM Identity Center) 사용</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>강력한 암호 정책(복잡한 암호, MFA) 미적용</li>
        <li>여러 사용자가 동일한 자격 증명을 공유</li>
        <li>의심스러운 로그인에 대한 탐지 제어 미사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>MFA 적용으로 자격 증명 노출 시에도 계정 탈취 방지</li>
        <li>중앙 집중식 인증으로 사용자 생명주기 관리 효율화</li>
        <li>강력한 암호 정책으로 무차별 대입 공격 및 자격 증명 스터핑 공격 대응</li>
        <li>비정상 로그인 탐지로 계정 침해 조기 발견</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>IAM Identity Center에서 사전 정의된 암호 정책을 사용하고 컨텍스트 인식 또는 항상 활성화 설정으로 MFA를 켭니다.</li>
        <li>IAM Identity Center를 통해 사용자가 자체적으로 MFA 디바이스를 등록할 수 있도록 합니다.</li>
        <li>Amazon Cognito의 암호 강도 설정을 구성하고 MFA를 요구하며 Adaptive Authentication을 사용하여 의심스러운 로그인을 차단합니다.</li>
        <li>IAM 사용자에게 최소 길이 및 비알파벳 문자 요건을 포함한 암호 정책을 설정하고, MFA 로그인을 강제하는 IAM 정책을 생성합니다.</li>
        <li>직접 IAM 사용자 대신 연동(SAML 2.0 또는 AWS IAM Identity Center)을 사용하는 중앙 자격 증명 공급자를 활용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Identity and Access Management(IAM) — 암호 정책 및 MFA 설정</li>
        <li>AWS IAM Identity Center — 중앙 집중식 SSO 및 다중 계정 접근 관리</li>
        <li>Amazon Cognito — 애플리케이션 사용자 인증 및 MFA</li>
        <li>AWS Verified Access — 네트워크 접근 없는 애플리케이션 접근 제어</li>
        <li>AWS Managed Microsoft AD — 관리형 Microsoft Active Directory</li>
      </ul>
      <PageNav />
    </article>
  );
}
