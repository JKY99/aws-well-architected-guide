import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP03 — 긴급 액세스 프로세스 수립</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        보안 인시던트, 장애 대응 등 긴급 상황 시 신속하게 필요한 접근 권한을 부여할 수 있는
        절차를 사전에 수립합니다. 사전 계획 없이 긴급 상황에서 권한을 부여하면 과도한 권한 부여,
        감사 로그 누락 등의 문제가 발생할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        긴급 액세스가 필요한 시나리오별로 표준화된 절차가 문서화되어 있으며, 모든 긴급 액세스
        활동이 감사 로그에 기록됩니다. Break glass 계정 사용 시 자동 알림이 발송되고, 긴급 권한은
        사용 후 즉시 회수됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>긴급 상황 시 평소에 사용하지 않는 루트 계정을 직접 사용</li>
        <li>긴급 액세스 후 임시 권한을 회수하지 않고 방치</li>
        <li>긴급 액세스 자격 증명을 여러 사람이 공유하여 개인 책임 추적 불가</li>
        <li>긴급 액세스 사용 시 알림 또는 감사 로그 미생성</li>
        <li>긴급 절차를 문서화하지 않아 실제 인시던트 시 혼란 발생</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>인시던트 대응 시간 단축 및 복구 능력 향상</li>
        <li>긴급 액세스 활동의 완전한 감사 추적 확보</li>
        <li>사후 분석 시 긴급 액세스 범위와 수행 작업 파악 가능</li>
        <li>긴급 권한 남용 및 미회수로 인한 보안 위험 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Break glass 계정을 별도로 생성하고, 강력한 MFA를 적용한 뒤 안전한 물리적 금고에 자격 증명을 보관합니다.</li>
        <li>CloudTrail과 CloudWatch Events를 연동하여 Break glass 계정 사용 시 즉시 보안팀에 알림이 발송되도록 구성합니다.</li>
        <li>긴급 역할은 시간 제한 조건(aws:CurrentTime)을 포함하거나, AWS STS의 세션 만료 시간을 최소화합니다.</li>
        <li>인시던트 시나리오별 Runbook을 작성하여 필요한 최소 권한과 절차를 사전 정의합니다.</li>
        <li>정기적으로 긴급 액세스 절차를 테스트하여 실제 필요 시 원활히 작동하는지 확인합니다.</li>
        <li>긴급 액세스 사용 후 반드시 사후 검토(Post-Incident Review)를 실시하고, 불필요해진 권한을 즉시 회수합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM — Break glass 역할 및 시간 제한 조건 설정</li>
        <li>AWS STS — 임시 자격 증명 발급 및 세션 만료 관리</li>
        <li>AWS CloudTrail — 긴급 액세스 활동 감사 로깅</li>
        <li>Amazon CloudWatch — 긴급 계정 사용 알림 자동화</li>
        <li>AWS Systems Manager — Runbook 기반 자동화 및 문서화</li>
      </ul>
      <PageNav />
    </article>
  );
}
