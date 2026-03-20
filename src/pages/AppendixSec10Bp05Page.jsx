import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec10Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC10-BP05 — 액세스 사전 프로비저닝</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        보안 사고 대응에 필요한 AWS 액세스 권한과 자격 증명을 사전에 준비합니다.
        일반 운영 환경에서는 최소 권한이 적용되더라도, 사고 대응 시에는 필요한 권한을
        신속하게 획득할 수 있는 긴급 액세스 메커니즘을 사전에 구성합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        사고 발생 시 대응팀이 필요한 AWS 리소스에 즉시 접근할 수 있습니다. 긴급 액세스는
        승인 워크플로를 통해 제어되고 모든 활동이 감사됩니다. 일반 콘솔 접근이 차단된 상황에서도
        대안적인 접근 방법(CLI, API, AWS Systems Manager)이 준비되어 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사고 대응 중 필요한 권한을 받기 위해 일반적인 IAM 승인 프로세스를 거쳐 몇 시간이 소요됨</li>
        <li>긴급 시 루트 계정 자격 증명을 사용하여 모든 활동이 루트로 기록됨</li>
        <li>콘솔 접근만 준비하여 콘솔이 침해되거나 차단된 경우 대안이 없음</li>
        <li>긴급 액세스에 MFA를 요구하지 않거나, MFA 디바이스가 사고 발생 시 접근 불가 위치에 있음</li>
        <li>사고 대응팀이 필요한 도구(CloudTrail 로그 조회, EC2 격리 등)를 실행할 권한이 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사고 발생 즉시 대응에 필요한 권한을 확보하여 대응 시간 단축</li>
        <li>긴급 액세스의 모든 활동 감사로 사고 후 분석 지원</li>
        <li>루트 계정 사용 방지로 추가 보안 위험 제거</li>
        <li>다양한 접근 방법 준비로 단일 장애점 제거</li>
        <li>정기적인 긴급 액세스 테스트로 실제 사고 시 작동 보장</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>SEC01-BP03의 긴급 액세스 프로세스를 기반으로, 사고 대응에 특화된 긴급 IAM 역할(Break Glass Role)을 생성하고 필요한 조사 및 봉쇄 권한을 부여합니다.</li>
        <li>긴급 역할 사용은 AWS CloudTrail로 자동 감지되어 SNS 알림이 발송되도록 EventBridge 규칙을 구성합니다.</li>
        <li>AWS Systems Manager Session Manager를 사용하여 SSH/RDP 없이 EC2 인스턴스에 접근하는 대안을 준비합니다. IAM 역할 기반 접근이므로 키 페어 없이도 작동합니다.</li>
        <li>사고 대응팀의 MFA 디바이스(하드웨어 토큰 또는 백업 MFA)를 안전한 위치에 보관하고 정기적으로 작동을 확인합니다.</li>
        <li>격리된 포렌식 계정에 대한 교차 계정 역할을 사전에 구성하여 사고 조사를 위한 환경에 즉시 접근할 수 있도록 합니다.</li>
        <li>반기별로 긴급 액세스 절차를 실제로 실행하여 모든 접근 방법이 정상 작동하는지 확인합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM — 긴급 대응 역할 및 최소 권한 정책 관리</li>
        <li>AWS Systems Manager Session Manager — 키 없는 안전한 인스턴스 접근</li>
        <li>AWS CloudTrail — 긴급 액세스 사용 탐지 및 감사</li>
        <li>Amazon EventBridge — 긴급 역할 사용 시 자동 알림 트리거</li>
        <li>AWS Secrets Manager — 긴급 자격 증명 안전 보관 및 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
