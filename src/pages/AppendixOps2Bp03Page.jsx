import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps2Bp03Page() {
  return (
    <article className="doc-content">
      <h1>OPS02-BP03 — 운영 활동 소유권 부여</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        일상적인 운영 활동(모니터링, 패치 관리, 백업 검증 등)에 소유자를 지정합니다.
        활동별 소유자가 명확해야 운영 업무가 지속적이고 일관되게 수행됩니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 정기적 운영 활동이 담당자와 수행 주기가 정의된 상태로 실행됩니다.
        온콜 로테이션, 패치 일정, 백업 검증 등이 명확히 배정되어 누락 없이 수행됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>정기적인 보안 패치가 담당자 부재로 지연되는 경우</li>
        <li>백업이 생성되지만 복구 테스트는 아무도 하지 않는 경우</li>
        <li>모니터링 알람이 발생해도 대응 담당자가 불명확한 경우</li>
        <li>운영 활동 목록은 있으나 각 활동의 수행 여부를 추적하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>운영 활동 누락으로 인한 장애 예방</li>
        <li>보안 취약점 패치의 적시 적용</li>
        <li>비상 상황 시 신속한 대응 가능</li>
        <li>운영 부하의 균형 있는 분배</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>운영 활동 매트릭스를 작성하여 활동, 담당자, 주기, 최근 수행일을 기록합니다.</li>
        <li>온콜 로테이션 스케줄을 수립하고 에스컬레이션 경로를 정의합니다.</li>
        <li>AWS Systems Manager Maintenance Window로 정기 패치 활동을 자동화합니다.</li>
        <li>운영 활동 완료를 추적하는 체크리스트 시스템을 구현합니다.</li>
        <li>활동 완료 여부를 대시보드에서 시각화하여 관리자가 확인할 수 있도록 합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Maintenance Window — 정기 운영 활동 예약</li>
        <li>Amazon EventBridge — 운영 활동 트리거 자동화</li>
        <li>AWS Health — AWS 관련 운영 이벤트 추적</li>
        <li>PagerDuty / OpsGenie — 온콜 로테이션 관리 (외부 도구)</li>
      </ul>

      <PageNav />
    </article>
  );
}
