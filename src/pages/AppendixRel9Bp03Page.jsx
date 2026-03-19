import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL09-BP03 — 데이터 복구 테스트</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 실제 재해 시 백업이 존재하더라도 복구 절차의 문제로 데이터를 복원하지 못하거나 RTO를 초과할 수 있습니다.</p>
      </div>
      <p>백업이 존재한다는 것만으로는 충분하지 않습니다. 정기적인 복구 훈련을 통해 백업의 실제 사용 가능 여부를 검증하고, 복구 절차를 팀이 숙달하며, RTO/RPO 달성 가능 여부를 확인합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 중요 워크로드에 대해 정기적인 복구 테스트가 수행되며, 복구 절차가 문서화되고 검증됩니다. 실제 복구 시간이 측정되어 RTO 목표와 대비되고, 테스트 결과를 기반으로 복구 절차가 지속적으로 개선됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>백업을 수행하지만 복구 테스트를 한 번도 실시하지 않아 백업의 유효성 미검증</li>
        <li>복구 절차가 문서화되지 않아 실제 재해 시 담당자가 복구 방법을 모름</li>
        <li>복구 테스트를 이론적으로만 수행하고 실제 데이터 복원 검증 미실시</li>
        <li>복구 시간을 측정하지 않아 RTO 달성 가능 여부 미파악</li>
        <li>특정 담당자만 복구 방법을 알고 있어 해당 담당자 부재 시 복구 불가</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>실제 재해 전에 복구 절차의 문제점을 발견하여 수정 기회 확보</li>
        <li>복구 시간 측정으로 RTO 달성 가능 여부를 데이터 기반으로 검증</li>
        <li>팀 전체가 복구 절차를 숙달하여 특정 담당자 의존도 제거</li>
        <li>백업 데이터의 무결성 검증 — 손상된 백업을 미리 발견하여 대처</li>
        <li>규정 준수 감사에서 복구 능력 증명을 위한 테스트 결과 문서 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>분기별로 주요 워크로드의 복구 훈련(Game Day)을 계획하고 격리된 환경에서 실제 복구 수행</li>
        <li>AWS Backup의 복원 테스트 기능을 활용하여 백업 복원을 자동화하고 데이터 무결성 검증</li>
        <li>복구 절차를 런북(runbook)으로 문서화하고 Systems Manager Automation으로 자동화</li>
        <li>복구 시작부터 서비스 정상화까지의 시간을 측정하고 RTO 목표 대비 결과 기록</li>
        <li>Amazon RDS 특정 시점 복구(PITR)를 테스트하여 실제 복구 시간 및 절차 검증</li>
        <li>복구 테스트 시나리오를 다양화 — 단일 테이블 복구, 데이터베이스 전체 복구, 리전 전체 장애 복구 등</li>
        <li>복구 테스트 결과를 팀과 공유하고 개선 사항을 차기 테스트에 반영</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Backup 복원 테스트 — 자동화된 백업 복원 및 검증</li>
        <li>AWS Fault Injection Service — 재해 시나리오 시뮬레이션</li>
        <li>AWS Systems Manager Automation — 복구 런북 자동화</li>
        <li>Amazon RDS PITR — 특정 시점 복구 테스트</li>
        <li>AWS Resilience Hub — 복원력 목표 대비 테스트 결과 검증</li>
        <li>AWS CloudFormation — 인프라 복구 자동화</li>
      </ul>
      <PageNav />
    </article>
  );
}
