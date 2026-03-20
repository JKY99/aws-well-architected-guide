import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL09-BP04 — 백업 무결성 및 프로세스를 검증하기 위한 정기적인 데이터 복구 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        잘 정의된 메커니즘을 사용하여 정기적으로 백업에서 데이터를 복구합니다.
        RTO 내에 복구가 가능한지, 복원된 데이터에 손상이나 접근 불가 상태가 없는지,
        데이터 손실이 RPO 내에 있는지 확인합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        잘 정의된 메커니즘을 사용하여 정기적으로 백업에서 데이터를 복구하여 다음을 확인합니다:
        RTO 내에 복구가 가능함, 복원된 데이터에 손상이나 접근 불가 상태 없이 원본 데이터를 포함,
        데이터 손실이 RPO 내에 있음.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터 사용 가능성을 검증하기 위한 쿼리/검색 없이 백업을 복원</li>
        <li>검증 없이 백업이 존재한다고 가정</li>
        <li>백업 시스템이 완전히 운영 중이라고 가정</li>
        <li>복원 시간을 테스트하지 않고 RTO 내에 있다고 가정</li>
        <li>검증 없이 데이터 손실이 RPO 내에 있다고 가정</li>
        <li>런북이나 자동화 절차 없이 복원</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>필요 시 데이터 손실이나 손상 없이 데이터를 복원할 수 있음을 확인</li>
        <li>RTO 내에 복원/복구가 가능함을 확인</li>
        <li>데이터 손실이 RPO 내에 있음을 확인</li>
        <li>중단 시 백업 및 복원 기능에 대한 신뢰도 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>현재 백업 중인 데이터 소스와 저장 위치 파악</li>
        <li>데이터 검증 기준 수립: 체크섬, 형식, 크기, 사용자 정의 로직</li>
        <li>데이터 중요도에 따라 RTO 및 RPO 정의</li>
        <li>AWS Resilience Hub를 사용하여 복구 능력 평가</li>
        <li>프로덕션 프로세스를 사용하여 테스트 복원 수행</li>
        <li>수립된 기준에 따라 데이터 복구 검증</li>
        <li>CloudTrail 타임스탬프를 사용하여 복원/복구 시간을 측정하고 RTO와 비교</li>
        <li>실패 시 SNS, Slack, Teams 또는 OpsCenter를 통해 이해관계자에게 알림</li>
        <li>Lambda, Step Functions 및 EventBridge를 사용하여 주기적으로 자동화</li>
        <li>AWS Backup의 복원 테스트 기능을 활용하여 백업 복원을 자동화하고 데이터 무결성 검증</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Backup (중앙화된 백업 관리 및 복원, 복원 테스트)</li>
        <li>AWS Elastic Disaster Recovery (특정 시점 복구 스냅샷)</li>
        <li>Amazon RDS/DynamoDB (PITR)</li>
        <li>AWS CloudTrail (복원 작업 타임스탬프 추적)</li>
        <li>AWS Lambda (복원 프로세스 자동화)</li>
        <li>AWS Step Functions (상태 머신 오케스트레이션)</li>
        <li>Amazon EventBridge (예약 자동화 트리거)</li>
        <li>AWS Resilience Hub (RTO/RPO 평가)</li>
        <li>Amazon SNS (이해관계자 알림)</li>
        <li>AWS Systems Manager OpsCenter (실패 시 작업 생성)</li>
      </ul>
      <PageNav />
    </article>
  );
}
