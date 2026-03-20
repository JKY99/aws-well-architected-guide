import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel13Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL13-BP05 — 복구 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        잘 문서화되고 표준화되어 철저하게 테스트된 복구 프로세스 자동화 워크플로를 구현합니다.
        복구 자동화는 데이터 손실이나 사용 불가 위험이 낮은 사소한 문제를 자동으로 수정합니다.
        심각한 인시던트에 대해서는 복구 프로세스를 신속하게 호출하고, 진행 중인 복구 동작을
        관찰하며, 위험한 상황이나 장애가 발생하면 프로세스를 종료할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        잘 문서화되고 표준화되어 철저하게 테스트된 복구 프로세스 자동화 워크플로를 구현합니다.
        복구 자동화는 데이터 손실이나 사용 불가 위험이 낮은 사소한 문제를 자동으로 수정하고,
        심각한 인시던트에 대해서는 복구 프로세스를 신속하게 호출하고 관찰하며 필요 시 종료할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>복구 계획의 일부로 장애 또는 저하된 상태의 구성 요소 또는 메커니즘에 의존</li>
        <li>복구 프로세스에 콘솔 접근(클릭옵스)과 같은 수동 개입 필요</li>
        <li>데이터 손실이나 사용 불가 위험이 높은 상황에서 자동으로 복구 절차 시작</li>
        <li>작동하지 않거나 추가 위험을 초래하는 복구 절차를 중단하는 메커니즘(안든 코드 또는 큰 빨간 중지 버튼) 미포함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>복구 운영의 신뢰성, 예측 가능성 및 일관성 향상</li>
        <li>RTO 및 RPO를 포함한 더 엄격한 복구 목표 달성 능력</li>
        <li>인시던트 중 복구 실패 가능성 감소</li>
        <li>인적 오류에 취약한 수동 복구 프로세스와 관련된 장애 위험 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>자동화된 복구 계획: 워크로드 아키텍처, 구성 요소 및 의존성에 대한 철저한 검토; 의존성을 하드(없이는 운영 불가)와 소프트(교체 또는 저하 가능)로 분류; 누락되거나 손상된 데이터를 식별하고 복구하는 프로세스 수립; 복구된 안정 상태 확인 단계 정의; 완전한 서비스 준비를 위한 조치(사전 워밍, 캐시 채우기) 고려; 기본 사이트와 컨트롤 플레인 모두 접근 불가한 시나리오 계획</li>
        <li>자동화된 복구 프로세스 개발: 자동화된 장애 감지 및 장애 조치 메커니즘 구현; 진행 상황과 상태를 보고하는 대시보드 구축(Amazon CloudWatch); 성공적인 복구 검증 절차 포함; 진행 중인 복구를 중단하는 메커니즘 제공; 자동화할 수 없는 장애에 대한 대체 플레이북 구축; 복구 프로세스 철저히 테스트</li>
        <li>복구 준비: 복구 사이트 상태 평가 및 사전에 중요 구성 요소 배포; 명확한 역할, 책임, 의사 결정 프로세스 정의; 복구 프로세스를 시작하는 조건 정의; 복구를 되돌리고 기본 사이트로 폴백하는 계획 수립</li>
        <li>AWS Systems Manager Automations 또는 AWS Step Functions를 사용하여 복잡한 복구 워크플로 오케스트레이션</li>
        <li>AWS Elastic Disaster Recovery를 사용하여 지속적인 복제로 자동화된 장애 조치 구현</li>
        <li>Amazon Application Recovery Controller(ARC)를 사용하여 수동 DNS 변경 없이 트래픽 리디렉션</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Automation (복구 워크플로 오케스트레이션)</li>
        <li>AWS Step Functions (복잡한 복구 워크플로 오케스트레이션)</li>
        <li>AWS Elastic Disaster Recovery (DRS) (지속적인 복제를 통한 자동화된 장애 조치)</li>
        <li>Amazon Application Recovery Controller (ARC) (수동 DNS 변경 없이 트래픽 리디렉션)</li>
        <li>Amazon CloudWatch (복구 절차 진행 및 상태 모니터링)</li>
        <li>Amazon EventBridge (이벤트 기반 복구 트리거)</li>
        <li>AWS Lambda (서버리스 복구 로직 실행)</li>
      </ul>
      <PageNav />
    </article>
  );
}
