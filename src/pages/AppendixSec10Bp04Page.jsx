import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec10Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC10-BP04 — 보안 사고 대응 플레이북 개발 및 테스트</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 사고 대응 중 인적 오류가 증가하고 대응 시간이 길어질 수 있습니다.</p>
      </div>
      <p>
        사고 대응 프로세스 준비의 핵심은 플레이북 개발입니다. 사고 대응 플레이북은 보안 이벤트 발생 시 따라야 할 규범적인 지침과 단계를 제공합니다. 명확한 구조와 단계가 있으면 대응이 단순화되고 인적 오류 가능성이 줄어듭니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>인적 오류가 감소된 단순화된 보안 사고 대응</li>
        <li>예상되고 알려진 보안 사고를 처리하는 명확하고 문서화된 프로세스</li>
        <li>보안 이벤트의 더 빠른 탐지, 분석, 봉쇄, 근절, 복구</li>
        <li>조직 전반에 걸쳐 일관된 사고 대응 절차 실행</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>플레이북이 너무 일반적이어서 실제 사고 대응 시 구체적인 지침을 제공하지 못함</li>
        <li>플레이북 작성 후 실제 환경에서 테스트하지 않아 오류나 누락 미발견</li>
        <li>모든 대응 단계가 수동으로 이루어져 대응 시간이 길어짐</li>
        <li>플레이북이 특정 개인의 지식에 의존하여 해당 인원 부재 시 실행 불가</li>
        <li>새로운 AWS 서비스 도입이나 아키텍처 변경 후 플레이북 미업데이트</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>테스트된 규범적 절차로 대응 시간 단축</li>
        <li>표준화된 프로세스로 심각한 사고 중 오류 최소화</li>
        <li>사전 정의된 에스컬레이션 경로로 적절한 이해관계자 알림 보장</li>
        <li>기술적 단계로 보안 분석가에게 명확한 지침 제공</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>서비스 거부(DoS), 랜섬웨어, 자격 증명 침해 등 예상되는 사고와 Amazon GuardDuty 결과 등 알려진 보안 경보에 대한 플레이북을 작성합니다.</li>
        <li>각 플레이북에는 플레이북 개요(위험/사고 시나리오 및 목표), 사전 요구사항(필요한 로그, 탐지 메커니즘, 자동화 도구, 예상 알림), 커뮤니케이션 및 에스컬레이션(이해관계자 연락처 및 책임), 단계별 대응(탐지 → 분석 → 봉쇄 → 근절 → 복구), 예상 결과를 포함합니다.</li>
        <li>AWS 제공 프레임워크(aws-samples/aws-customer-playbook-framework, aws-samples/aws-incident-response-playbooks)를 활용하여 플레이북 개발을 시작합니다.</li>
        <li>AWS Systems Manager Automation 문서를 사용하여 반복 가능한 대응 단계를 자동화하고, GuardDuty → EventBridge → Lambda → SSM Automation 워크플로를 구성합니다.</li>
        <li>정기적인 시뮬레이션 훈련을 통해 플레이북을 테스트하고, 발견된 문제점을 플레이북에 반영하여 지속적으로 개선합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon GuardDuty — 보안 결과 탐지 및 플레이북 자동 트리거</li>
        <li>AWS CloudTrail — 로깅 및 분석 (CloudTrail Lake를 통한 고급 쿼리)</li>
        <li>AWS Systems Manager Automation — 보안 대응 단계 자동화 실행</li>
        <li>Amazon EventBridge — 보안 이벤트 기반 플레이북 자동 시작</li>
        <li>AWS Lambda — 사고 대응 자동화 로직 실행</li>
      </ul>
      <PageNav />
    </article>
  );
}
