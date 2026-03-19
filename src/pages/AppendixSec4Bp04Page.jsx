import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec4Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC04-BP04 — 비규정 준수 리소스 자동 수정</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        보안 위반이나 컴플라이언스 위반이 탐지되었을 때 수동 개입 없이 자동으로 수정 조치를
        실행합니다. 수동 대응은 시간이 걸리고, 그 사이에 피해가 확대될 수 있습니다. 자동화를
        통해 탐지에서 수정까지의 시간을 최소화합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        정의된 보안 정책 위반이 탐지되는 즉시 자동화된 수정 작업이 실행됩니다. 자동 수정이
        불가능한 경우 즉시 담당자에게 알림이 전달되고 수동 대응 절차가 시작됩니다. 모든 자동
        수정 활동은 감사 로그에 기록됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>컴플라이언스 위반을 탐지만 하고 수정하지 않아 위반 상태가 장기 지속</li>
        <li>자동화 없이 모든 보안 수정을 수동으로 처리하여 대응 지연</li>
        <li>자동 수정 작업을 테스트 없이 프로덕션에 적용하여 의도치 않은 서비스 중단</li>
        <li>자동 수정 활동을 로깅하지 않아 변경 이력 파악 불가</li>
        <li>수정 후 검증 없이 완료 처리하여 수정 효과 미확인</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>보안 위반 노출 시간(Time to Remediation) 획기적 단축</li>
        <li>인적 오류 없이 일관된 수정 조치 적용</li>
        <li>보안팀이 자동화로 처리되는 반복 작업에서 벗어나 고차원 위협에 집중 가능</li>
        <li>24/7 무중단 자동 대응으로 업무 시간 외 보안 위반 처리 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Config 규칙에 자동 수정(Remediation) 액션을 연결하여 위반 탐지 즉시 Systems Manager Automation을 실행합니다.</li>
        <li>Amazon GuardDuty 결과를 EventBridge로 수신하고, Lambda 함수를 트리거하여 악성 IP 차단, 인스턴스 격리 등의 자동 수정을 구현합니다.</li>
        <li>AWS Systems Manager Automation Runbook을 표준화하여 일반적인 수정 시나리오(퍼블릭 S3 버킷 비공개 전환, 보안 그룹 규칙 제거 등)를 자동화합니다.</li>
        <li>자동 수정 전에 알림을 발송하고, 중요 리소스에 대한 수정은 승인 게이트를 추가합니다.</li>
        <li>자동 수정 액션을 먼저 비프로덕션 환경에서 충분히 테스트한 후 프로덕션에 적용합니다.</li>
        <li>AWS Security Hub의 자동화된 대응(Automated Response) 플레이북을 활용하여 일반적인 보안 결과에 대한 표준 대응을 자동화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Config — 리소스 컴플라이언스 평가 및 자동 수정 트리거</li>
        <li>AWS Systems Manager Automation — 수정 Runbook 실행 자동화</li>
        <li>Amazon EventBridge — 보안 이벤트 기반 자동화 오케스트레이션</li>
        <li>AWS Lambda — 커스텀 수정 로직 실행</li>
        <li>AWS Security Hub — 자동화된 대응 플레이북 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
