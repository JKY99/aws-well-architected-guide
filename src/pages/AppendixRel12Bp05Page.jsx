import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel12Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL12-BP05 — 정기적으로 게임 데이 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 실제 장애 발생 시 팀이 효과적으로 대응하지 못하고 복구 시간이 길어집니다.</p>
      </div>
      <p>
        게임 데이(Game Day)는 실제 장애 시나리오를 시뮬레이션하여 팀의 장애 대응 역량을
        훈련하는 이벤트입니다. 플레이북, DR 절차, 자동화된 복구 메커니즘이 실제로
        예상대로 작동하는지 정기적으로 검증합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        정기적인 게임 데이를 통해 팀이 장애 대응 절차에 익숙해지고, DR 계획과 플레이북이
        실제 장애 상황에서 효과적으로 작동하는 것이 검증됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>DR 계획을 문서화했지만 실제로 테스트하지 않아 실제 장애 시 작동하지 않는 경우</li>
        <li>게임 데이를 너무 드물게 수행하여 팀원들이 절차에 익숙하지 않은 경우</li>
        <li>게임 데이 시나리오가 너무 단순하여 실제 복잡한 장애를 대비하지 못하는 경우</li>
        <li>게임 데이 후 교훈을 정리하지 않아 개선이 이루어지지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>팀의 장애 대응 역량 및 자신감 향상</li>
        <li>DR 절차와 플레이북의 실효성 검증</li>
        <li>숨겨진 의존성과 복구 절차의 취약점 발견</li>
        <li>실제 장애 발생 시 MTTR 단축</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>분기별 또는 반기별로 게임 데이를 계획하고 일정을 수립합니다.</li>
        <li>다양한 장애 시나리오(AZ 장애, 데이터베이스 장애, 외부 의존성 장애 등)를 준비합니다.</li>
        <li>AWS Fault Injection Service를 사용하여 실제 인프라에 장애를 주입합니다.</li>
        <li>게임 데이 중 팀원들이 플레이북을 따라 실제로 문제를 해결하도록 합니다.</li>
        <li>게임 데이 후 회고(retrospective)를 수행하여 교훈을 정리하고 플레이북과 DR 절차를 업데이트합니다.</li>
        <li>경영진을 포함한 이해관계자에게 게임 데이 결과를 보고하여 지속적인 지원을 확보합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Fault Injection Service(FIS) — 게임 데이용 장애 주입</li>
        <li>AWS Systems Manager Runbook — 복구 절차 자동화 및 검증</li>
        <li>Amazon CloudWatch — 게임 데이 중 시스템 상태 모니터링</li>
        <li>AWS Resilience Hub — 복원력 목표 설정 및 게임 데이 지원</li>
      </ul>
      <PageNav />
    </article>
  );
}
