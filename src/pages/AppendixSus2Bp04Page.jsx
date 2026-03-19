import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus2Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SUS02-BP04 — 비활성 기간에 리소스 종료</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>

      <p>
        사용하지 않는 시간대(야간, 주말, 공휴일 등)에 개발, 테스트, 스테이징 환경의 리소스를 자동으로
        종료하거나 중지합니다. 업무 시간 외에도 계속 실행 중인 비프로덕션 환경은 불필요한 에너지를
        소비하며, 이를 차단함으로써 탄소 발자국을 크게 줄일 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        비프로덕션 환경의 리소스가 실제 사용 시간에만 운영되고, 비활성 시간대에는 자동으로 종료됩니다.
        이를 통해 전체 리소스 운영 시간이 줄어들고 에너지 소비 및 탄소 배출이 감소합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>개발·테스트 환경을 24시간 365일 실행하여 업무 외 시간에도 에너지를 소비하는 경우</li>
        <li>리소스 종료·시작 자동화 없이 개발자에게 수동 관리를 의존하는 경우</li>
        <li>종료 시 데이터 손실 우려로 스냅샷이나 저장 절차 없이 리소스를 계속 실행하는 경우</li>
        <li>글로벌 팀을 이유로 모든 환경을 항상 활성 상태로 유지하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비활성 시간 동안의 에너지 소비 및 탄소 배출 직접 감소</li>
        <li>비프로덕션 환경 비용 최대 70% 절감 가능</li>
        <li>불필요한 리소스 운영 제거로 전체 탄소 발자국 감소</li>
        <li>에너지 효율적인 운영 문화 정착</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS Instance Scheduler를 사용하여 EC2 및 RDS 인스턴스의 시작·종료 일정을 자동화합니다.</li>
        <li>업무 시간(예: 평일 오전 8시~오후 10시)에만 개발·테스트 인스턴스가 실행되도록 스케줄을 설정합니다.</li>
        <li>Lambda 함수와 EventBridge를 조합하여 커스텀 종료 자동화 워크플로를 구현합니다.</li>
        <li>리소스 종료 전 필요한 상태를 저장(스냅샷, 데이터 백업)하는 절차를 수립합니다.</li>
        <li>팀원이 필요 시 리소스를 즉시 시작할 수 있는 셀프서비스 메커니즘을 제공합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Instance Scheduler — EC2 및 RDS 인스턴스 자동 시작·종료 스케줄링</li>
        <li>Amazon EventBridge — 시간 기반 이벤트로 자동화 트리거</li>
        <li>AWS Lambda — 리소스 종료·시작 자동화 로직 구현</li>
        <li>AWS Systems Manager — 인스턴스 상태 관리 및 자동화</li>
      </ul>

      <PageNav />
    </article>
  );
}
