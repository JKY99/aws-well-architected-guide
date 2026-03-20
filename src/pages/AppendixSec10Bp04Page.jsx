import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec10Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC10-BP04 — 보안 사고 대응 플레이북 개발 및 테스트</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        특정 보안 시나리오에 대한 단계별 대응 절차를 플레이북으로 문서화합니다.
        플레이북은 팀원 누구나 일관되게 실행할 수 있도록 구체적이고 실행 가능한 형태로 작성되며,
        AWS 서비스와 도구를 활용하여 가능한 한 자동화됩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        각 주요 위협 시나리오에 대한 검증된 플레이북이 존재하고 최신 상태로 유지됩니다.
        플레이북은 정기적인 시뮬레이션 훈련을 통해 테스트되고 지속적으로 개선됩니다.
        자동화된 플레이북은 GuardDuty, Security Hub 결과와 연동하여 신속하게 실행됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>플레이북이 너무 일반적이어서 실제 사고 대응 시 구체적인 지침을 제공하지 못함</li>
        <li>플레이북을 작성 후 실제 환경에서 테스트하지 않아 오류나 누락이 발견되지 않음</li>
        <li>모든 대응 단계가 수동으로 이루어져 대응 시간이 길어짐</li>
        <li>플레이북이 특정 개인의 지식에 의존하여 해당 인원이 없을 때 실행 불가</li>
        <li>새로운 AWS 서비스 도입이나 아키텍처 변경 후 플레이북을 업데이트하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사고 발생 시 일관되고 신속한 대응으로 피해와 다운타임 최소화</li>
        <li>스트레스 상황에서도 체계적인 절차에 따른 실수 방지</li>
        <li>자동화된 플레이북으로 야간이나 주말 사고에도 즉각적인 대응</li>
        <li>팀원 교육 및 온보딩 자료로 활용 가능</li>
        <li>규정 준수 감사에서 체계적인 사고 대응 역량 입증</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS 환경에서 가장 빈번하거나 영향이 큰 위협 시나리오(EC2 인스턴스 침해, S3 데이터 유출, IAM 자격 증명 유출, DDoS 공격, 랜섬웨어 등)를 식별하고 각각의 플레이북을 작성합니다.</li>
        <li>각 플레이북에 탐지 신호(GuardDuty 결과 유형, CloudWatch 경보 등), 즉각적인 봉쇄 조치, 증거 수집 절차, 근절 방법, 복구 단계, 커뮤니케이션 체계를 포함합니다.</li>
        <li>AWS Systems Manager Automation 문서(Runbook)을 사용하여 반복 가능한 대응 단계를 자동화합니다. GuardDuty → EventBridge → Lambda → SSM Automation 워크플로를 구성합니다.</li>
        <li>AWS Step Functions을 사용하여 복잡한 사고 대응 워크플로를 오케스트레이션하고, 승인이 필요한 단계에 인간 검토 게이트를 추가합니다.</li>
        <li>분기별로 특정 플레이북을 선택하여 실제 환경 또는 시뮬레이션 환경에서 실행하고, 발견된 문제점을 플레이북에 반영합니다.</li>
        <li>플레이북을 AWS S3와 오프라인 위치 모두에 저장하고, AWS 접근이 차단된 상황에서도 참조할 수 있도록 인쇄본을 보관합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Automation — 보안 대응 단계 자동화 실행</li>
        <li>AWS Step Functions — 복잡한 사고 대응 워크플로 오케스트레이션</li>
        <li>Amazon GuardDuty — 위협 탐지 및 플레이북 자동 트리거</li>
        <li>Amazon EventBridge — 보안 이벤트 기반 플레이북 자동 시작</li>
        <li>AWS Lambda — 사고 대응 자동화 로직 실행</li>
      </ul>
      <PageNav />
    </article>
  );
}
