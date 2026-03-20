import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec4Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC04-BP04 — 규정 비준수 리소스에 대한 수정 시작</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 보안 정책 위반이 장기간 지속되어 비즈니스 영향이 커질 수 있습니다.</p>
      </div>
      <p>
        규정 비준수 리소스에 대한 수정 단계와 함께 리소스 구성 표준을 정의합니다. 수동 또는 자동 시작을 위해 프로그래밍 방식으로 수정을 정의하고, 탐지 시스템이 비준수 리소스를 식별하여 중앙화된 도구에 경보를 게시하도록 합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>수정 단계와 함께 리소스 구성 표준 정의</li>
        <li>수동 또는 자동 시작을 위해 수정을 프로그래밍 방식으로 정의</li>
        <li>탐지 시스템이 비준수 리소스를 식별하고 중앙화된 도구에 경보 게시</li>
        <li>보안 담당자가 프로그래밍 방식 수정을 지원하는 중앙화된 도구 모니터링</li>
        <li>자동 수정에 적절한 감독 및 제어 메커니즘 적용</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>철저한 테스트 및 검증 없이 자동화를 구현하여 의도치 않은 결과 초래(비즈니스 중단, 시스템 불안정)</li>
        <li>자동화로 대응 시간을 개선하지만 적절한 모니터링 및 사람 개입 메커니즘 부재</li>
        <li>더 광범위한 인시던트 대응 및 복구 프로그램의 일부가 아닌 수정에만 전적으로 의존</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>속도: 자동 수정이 수동 프로세스보다 빠르게 잘못된 구성에 대응하여 비즈니스 영향 최소화</li>
        <li>일관성: 프로그래밍 방식으로 정의된 수정이 일관되게 적용되어 인적 오류 위험 감소</li>
        <li>확장성: 자동화가 대규모 환경에 필수적인 더 많은 양의 경보를 동시에 처리</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Security Hub CSPM에 여러 AWS 서비스의 보안 경보를 통합하여 중앙화된 가시성, 우선순위 지정 및 수정을 지원합니다.</li>
        <li>AWS Systems Manager와 AWS Lambda를 사용하여 프로그래밍 방식 수정을 실행합니다(예: 허용되지 않는 VPC 보안 그룹 규칙 제거).</li>
        <li>Systems Manager를 사용하여 Amazon EventBridge에 결과를 게시하는 사용자 지정 작업을 정의하고, 수동 또는 자동 시작을 위한 작업을 구성합니다.</li>
        <li>Amazon SNS를 사용하여 보안 및 인시던트 대응 팀에 알림을 보냅니다.</li>
        <li>로그 출력을 Amazon CloudWatch Logs로 전송하고 Security Hub CSPM의 결과 노트로 결과를 캡처하여 효과를 평가하고 개선 영역을 식별합니다.</li>
        <li>자동 수정을 프로덕션에 적용하기 전에 비프로덕션 환경에서 충분히 테스트합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Security Hub CSPM — 중앙화된 경보 라우팅 및 수정</li>
        <li>AWS Config — 리소스 구성 규정 준수 모니터링</li>
        <li>AWS Systems Manager Automation — 수정 워크플로 오케스트레이션</li>
        <li>AWS Lambda — 맞춤형 수정 로직 실행</li>
        <li>Amazon EventBridge — 결과에서 수정 트리거</li>
        <li>Amazon CloudWatch Logs — 수정 작업 로깅</li>
        <li>Amazon SNS — 경보 알림</li>
        <li>Amazon GuardDuty — 위협 탐지</li>
        <li>Amazon Inspector — 취약성 스캐닝</li>
      </ul>
      <PageNav />
    </article>
  );
}
