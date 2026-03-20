import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec10Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC10-BP05 — 접근 사전 프로비저닝</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 사고 대응 중 필요한 접근 권한을 얻는 데 지연이 발생할 수 있습니다.</p>
      </div>
      <p>
        사고 대응자가 조사부터 복구까지 필요한 시간을 줄이기 위해 AWS에 올바른 접근 권한을 사전에 프로비저닝했는지 확인합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>사고 대응자가 보안 사고 중 필요한 접근 권한을 신속하게 획득</li>
        <li>접근 권한이 적절히 범위가 지정되고 감사 가능</li>
        <li>사고 중 실패할 수 있는 외부 시스템에 대한 의존성 최소화</li>
        <li>모든 사고 대응 활동의 명확한 감사 추적</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사고 대응에 루트 계정 사용</li>
        <li>사고 중 기존 계정 변경</li>
        <li>JIT(Just-in-Time) 권한 상승 제공 시 IAM 권한을 직접 조작</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사고 발생 즉시 대응에 필요한 권한을 확보하여 대응 시간 단축</li>
        <li>긴급 접근의 모든 활동 감사로 사고 후 분석 지원</li>
        <li>루트 계정 사용 방지로 추가 보안 위험 제거</li>
        <li>다양한 접근 방법 준비로 단일 장애점 제거</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>관리 접근에 임시 자격 증명을 사용하여 ID 페더레이션을 구현합니다. AWS Security Token Service(STS)와 세션 정책을 사용하여 사용자가 권한 상승을 요청하고 승인을 받아 만료되는 임시 자격 증명을 받도록 합니다.</li>
        <li>IdP 중단, 잘못된 구성, DDoS 등 페더레이션 ID를 사용할 수 없는 시나리오에 대비하여 긴급 브레이크 글라스 접근을 구성합니다. 전용 사용자, 그룹 또는 역할을 구성하고, 루트 사용자는 루트 자격 증명이 필요한 작업에만 사용합니다.</li>
        <li>전용 보안 계정에서 사고 대응 사용자를 생성합니다(페더레이션/SSO를 통해 관리되지 않음). 각 대응자는 자신의 명명된 계정을 가져야 하고, 강력한 암호 정책과 MFA를 적용하며, IAM 정책 또는 SCP를 통해 액세스 키 생성을 비활성화합니다.</li>
        <li>대상 계정에 전용 IAM 역할을 생성하고 MFA 인증을 요구하는 신뢰 관계를 구성합니다. 엄격하게 범위가 지정된 IAM 정책을 사용하고 역할을 명확하게 명명합니다(예: &lt;USER_ID&gt;-BREAK-GLASS, BREAK-GLASS-ROLE).</li>
        <li>SSH/RDP 대신 AWS Systems Manager Session Manager를 사용하고, 데이터베이스 및 서드파티 자격 증명은 AWS Secrets Manager에 저장합니다. IAM Access Analyzer를 사용하여 CloudTrail 로그에서 정책을 생성하고 모든 사고 대응 역할에 적용합니다.</li>
        <li>AssumeRole 이벤트에 대한 CloudTrail 지표 필터를 구성하여 긴급 역할 사용을 탐지하고 CloudWatch 알람을 설정합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Security Token Service(STS) — 임시 자격 증명 생성</li>
        <li>AWS Identity and Access Management(IAM) — 사용자, 그룹, 역할 관리</li>
        <li>AWS CloudTrail — API 활동 로깅 및 경보</li>
        <li>Amazon CloudWatch — 지표 필터 및 경보</li>
        <li>AWS Systems Manager Session Manager — 보안 관리 접근</li>
        <li>AWS Systems Manager Run Command — 자동화된 플레이북 실행</li>
        <li>AWS Secrets Manager — 자격 증명 저장</li>
        <li>IAM Access Analyzer — 접근 활동에서 정책 생성</li>
        <li>AWS Organizations SCPs — 서비스 제어 정책</li>
      </ul>
      <PageNav />
    </article>
  );
}
