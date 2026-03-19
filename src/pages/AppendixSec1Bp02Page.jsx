import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC01-BP02 — 루트 사용자 보안 강화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>AWS 계정 루트 사용자는 모든 리소스에 대한 완전한 권한을 가지므로 일상적인 작업에 사용하지 않아야 합니다. MFA를 적용하고 루트 자격증명을 엄격히 보호하여 계정 전체 침해 위험을 최소화합니다.</p>
      <h2>원하는 결과</h2>
      <p>루트 사용자 계정에는 하드웨어 MFA가 적용되어 있으며, 루트 액세스 키가 존재하지 않습니다. 루트 사용자 로그인은 CloudTrail을 통해 모니터링되고 경보가 설정되어 있으며, 루트 사용자는 루트 전용 작업에만 극히 제한적으로 사용됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>루트 사용자 계정으로 일상적인 AWS 관리 작업을 수행하여 불필요한 노출 위험 증가</li>
        <li>루트 계정에 MFA를 설정하지 않아 패스워드 유출 시 즉각적인 계정 탈취 위험</li>
        <li>루트 사용자의 액세스 키를 생성하여 프로그램 방식으로 사용</li>
        <li>루트 계정 이메일 주소를 개인 이메일로 설정하여 담당자 변경 시 복구 불가</li>
        <li>루트 사용자 활동에 대한 알림 및 모니터링 부재로 침해 발생 시 탐지 지연</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>루트 계정 침해 시 전체 AWS 리소스에 대한 통제권 상실 위험 대폭 감소</li>
        <li>하드웨어 MFA 적용으로 피싱 및 자격증명 도용 공격에 대한 강력한 방어</li>
        <li>루트 사용자 활동 모니터링으로 비인가 접근 즉시 탐지 가능</li>
        <li>IAM 사용자 및 역할 기반 접근으로 최소 권한 원칙 구현 및 책임 추적성 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>루트 계정 이메일 주소를 조직 공용 이메일(예: aws-root@company.com)로 설정하여 담당자 독립성 확보합니다.</li>
        <li>FIDO2 호환 하드웨어 보안 키 또는 가상 MFA 앱을 루트 계정에 즉시 적용합니다.</li>
        <li>기존 루트 액세스 키가 있다면 즉시 삭제하고, 신규 생성을 금지합니다.</li>
        <li>CloudTrail에서 루트 사용자 로그인 이벤트를 감지하는 CloudWatch 경보를 설정합니다.</li>
        <li>루트 전용 작업(계정 해지, 지원 플랜 변경, IAM 활성화 등) 목록을 문서화하고 해당 작업만 루트로 수행합니다.</li>
        <li>루트 자격증명은 안전한 물리적 보관함 또는 하드웨어 보안 모듈에 보관하고 접근 절차를 수립합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM — 루트 계정 보안 설정 및 MFA 관리</li>
        <li>AWS CloudTrail — 루트 사용자 활동 기록 및 감사</li>
        <li>Amazon CloudWatch — 루트 로그인 이벤트 경보 설정</li>
        <li>AWS Security Hub — IAM 보안 모범 사례 자동 점검</li>
        <li>AWS Organizations — 멀티계정 환경에서 루트 사용자 정책 중앙 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
