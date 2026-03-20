import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel10Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL10-BP02 — 단일 위치로 제한된 구성 요소에 대한 자동 복구</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 단일 위치에 종속된 구성 요소 장애 시 수동 복구가 필요하여 복구 시간이 길어집니다.</p>
      </div>
      <p>
        일부 구성 요소(예: 레거시 시스템, 라이선스 제약이 있는 소프트웨어)는 특성상
        단일 위치에서만 실행해야 할 수 있습니다. 이런 경우 자동 복구 메커니즘을
        구현하여 장애 시 최소한의 중단으로 복구될 수 있도록 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        단일 위치로 제한된 구성 요소가 장애를 겪더라도 자동 복구 메커니즘이 작동하여
        수동 개입 없이 또는 최소한의 개입만으로 서비스가 복구됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>단일 EC2 인스턴스를 Auto Scaling 없이 운영하여 장애 시 수동 복구가 필요한 경우</li>
        <li>복구 절차가 문서화되지 않아 장애 시 담당자가 없으면 복구가 지연되는 경우</li>
        <li>자동 복구를 구성했지만 정기적으로 테스트하지 않아 실제 장애 시 복구가 실패하는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수동 개입 없는 자동 복구로 MTTR 단축</li>
        <li>야간이나 주말 장애 시에도 신속한 복구</li>
        <li>운영팀의 부담 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>EC2 Auto Recovery를 활성화하여 시스템 상태 확인 실패 시 자동으로 인스턴스를 복구합니다.</li>
        <li>단일 인스턴스도 Min=1, Max=1 설정의 Auto Scaling 그룹에 포함하여 자동 교체를 활성화합니다.</li>
        <li>Amazon CloudWatch 경보를 EC2 Auto Recovery 작업과 연결합니다.</li>
        <li>AWS Systems Manager Automation으로 복구 절차를 자동화하고 런북으로 문서화합니다.</li>
        <li>복구 절차를 정기적으로 테스트(게임 데이)하여 실제 장애 시 작동을 검증합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>EC2 Auto Recovery — 하드웨어 장애 시 인스턴스 자동 복구</li>
        <li>Amazon EC2 Auto Scaling — 장애 인스턴스 자동 교체</li>
        <li>AWS Systems Manager Automation — 복구 절차 자동화</li>
        <li>Amazon CloudWatch — 장애 감지 및 자동 복구 트리거</li>
      </ul>
      <PageNav />
    </article>
  );
}
