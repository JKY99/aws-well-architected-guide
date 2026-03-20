import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP03 — 이벤트 및 경보에 자동 응답</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 자동화로 해결 가능한 반복적 운영 이슈에 운영자가 수동으로 대응해야 하여 MTTR이 늘어나고 인적 오류가 발생할 수 있습니다.</p>
      </div>
      <p>이벤트 및 경보에 대한 자동 응답은 반복적이고 예측 가능한 운영 작업을 자동화하여 인간의 개입 없이 자가 복구(self-healing)를 구현합니다. Amazon EventBridge와 AWS Lambda를 활용하여 이벤트 기반 자동화를 구축합니다.</p>
      <h2>원하는 결과</h2>
      <p>알려진 장애 유형에 대해 자동화된 대응이 즉각적으로 실행됩니다. 인스턴스 재시작, 스케일 아웃, 장애 인스턴스 교체 같은 작업이 자동으로 수행되고, 자동화 실패 시에만 운영자에게 에스컬레이션됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>런북에 문서화된 절차가 있음에도 모든 알람에 수동 대응</li>
        <li>자동화 스크립트가 있지만 트리거 메커니즘 없이 수동 실행에 의존</li>
        <li>자동화된 대응이 실패했을 때 에스컬레이션 없이 조용히 실패</li>
        <li>자동화 액션에 대한 감사 로그 없이 무엇이 자동으로 수행되었는지 추적 불가</li>
        <li>테스트되지 않은 자동화 스크립트가 운영 환경에서 예상치 못한 부작용 유발</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자동 대응으로 MTTR 대폭 단축 — 분 단위에서 초 단위로</li>
        <li>운영팀의 반복적 수동 작업 제거로 고부가가치 업무에 집중 가능</li>
        <li>인적 오류 감소 — 자동화된 절차는 일관되게 올바르게 실행</li>
        <li>24/7 자동 모니터링 및 대응으로 야간·주말 장애 처리 개선</li>
        <li>자동화 액션 로그로 운영 이력 및 패턴 분석 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon EventBridge를 중앙 이벤트 라우터로 사용하여 CloudWatch 알람, AWS Health 이벤트, 애플리케이션 이벤트를 처리</li>
        <li>AWS Lambda 함수로 자동 응답 로직 구현 — 인스턴스 재시작, 스냅샷 생성, 알림 전송 등</li>
        <li>AWS Systems Manager Automation으로 복잡한 다단계 자동화 런북 구현</li>
        <li>EC2 Auto Scaling의 라이프사이클 훅을 활용하여 인스턴스 교체 시 자동화된 검증 수행</li>
        <li>AWS Step Functions로 자동화 워크플로를 조율하고 실패 시 에스컬레이션 경로 구현</li>
        <li>자동화 액션 결과를 CloudWatch Logs에 기록하고 성공/실패 지표 추적</li>
        <li>모든 자동화는 비운영 환경에서 테스트한 후 운영 적용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EventBridge — 이벤트 기반 자동화 라우팅</li>
        <li>AWS Lambda — 서버리스 자동화 함수</li>
        <li>AWS Systems Manager Automation — 운영 런북 자동화</li>
        <li>AWS Step Functions — 복잡한 자동화 워크플로 조율</li>
        <li>Amazon EC2 Auto Scaling — 자동 인스턴스 교체 및 스케일링</li>
        <li>AWS Config Rules — 규정 위반 자동 수정(Auto Remediation)</li>
      </ul>
      <PageNav />
    </article>
  );
}
