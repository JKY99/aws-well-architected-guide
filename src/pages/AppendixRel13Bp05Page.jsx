import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel13Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL13-BP05 — 복구 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 수동 복구 절차로 인해 RTO 목표를 달성하지 못하거나 인적 오류로 복구가 실패할 수 있습니다.</p>
      </div>
      <p>
        재해 복구 절차를 자동화하여 수동 개입을 최소화하고 복구 시간을 단축합니다.
        자동화된 복구는 인적 오류를 줄이고, 야간이나 주말에 재해가 발생해도
        신속하게 복구할 수 있게 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        재해 감지부터 복구까지의 전체 프로세스가 자동화되거나 최소한의 수동 개입만으로
        실행됩니다. 자동화된 복구 절차는 정기적으로 테스트하여 작동이 검증됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>복구 절차가 전적으로 수동이어서 담당자 없이는 복구가 불가능한 경우</li>
        <li>자동화는 했지만 정기적으로 테스트하지 않아 실제 재해 시 실패하는 경우</li>
        <li>부분적으로만 자동화하고 중요한 단계는 수동으로 남겨두어 인적 오류가 발생하는 경우</li>
        <li>자동화 스크립트가 DR 환경의 변경 사항을 반영하지 않아 오작동하는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>RTO 단축 및 일관된 복구 절차</li>
        <li>인적 오류 감소</li>
        <li>24시간 자동 복구 가능</li>
        <li>복구 절차의 감사 추적(audit trail) 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Systems Manager Automation 문서를 사용하여 복구 절차를 자동화합니다.</li>
        <li>Amazon EventBridge로 AWS Health 이벤트나 CloudWatch 경보를 감지하고 자동 복구를 트리거합니다.</li>
        <li>AWS Lambda를 사용하여 DNS 전환, 데이터베이스 엔드포인트 업데이트, 설정 변경 등을 자동화합니다.</li>
        <li>AWS Elastic Disaster Recovery를 사용하여 서버 복구를 자동화합니다.</li>
        <li>AWS Step Functions를 사용하여 여러 단계의 복구 절차를 워크플로로 구성하고 오류 처리를 포함합니다.</li>
        <li>자동화된 복구 실행 시 Amazon SNS로 운영팀에 알림을 전송하여 진행 상황을 모니터링합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Automation — 복구 절차 자동화</li>
        <li>AWS Elastic Disaster Recovery — 서버 복구 자동화</li>
        <li>AWS Step Functions — 복잡한 복구 워크플로 오케스트레이션</li>
        <li>Amazon EventBridge — 이벤트 기반 복구 트리거</li>
        <li>AWS Lambda — 서버리스 복구 로직 실행</li>
      </ul>
      <PageNav />
    </article>
  );
}
