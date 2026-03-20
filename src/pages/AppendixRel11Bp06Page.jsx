import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp06Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP06 — 가용성에 영향을 미치는 이벤트 발생 시 알림 전송</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        오류율, 지연 시간 또는 기타 중요한 KPI 메트릭의 임계값이 초과되면 즉시 운영팀에
        알림을 전송하여 가능한 한 빨리 문제를 해결하고 사용자 영향을 방지하거나 최소화합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        오류율, 지연 시간 또는 기타 중요한 KPI 메트릭의 임계값이 초과되면 즉시 운영팀에 알림이 전송되어
        가능한 한 빨리 문제가 해결되고 사용자 영향이 방지되거나 최소화됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>너무 많은 알람 전송</li>
        <li>조치 불가능한 알람 전송</li>
        <li>알람 임계값을 너무 높거나(과민감) 낮게(둔감) 설정</li>
        <li>외부 의존성에 대한 알람을 전송하지 않음</li>
        <li>모니터링 및 알람 설계 시 그레이 장애(gray failures)를 고려하지 않음</li>
        <li>복구 자동화를 수행하지만 복구가 필요했다는 알림을 해당 팀에 전송하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>복구 알림이 운영 및 비즈니스 팀에 서비스 저하를 인지시켜 MTTD 및 MTTR 최소화</li>
        <li>복구 이벤트 알림으로 드물게 발생하는 문제가 무시되지 않도록 보장</li>
        <li>자동 복구로 해결된 문제를 포함한 문제 패턴 감지 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>이벤트를 자동으로 해결한 경우에도 임계값 초과 감지 시 알림을 전송(자동 복구가 주의가 필요한 근본 문제를 숨길 수 있음)</li>
        <li>다양한 유형의 알람 생성: 애플리케이션 알람(워크로드 정상 동작 여부 감지), 인프라 알람(리소스 스케일링 필요 시 표시), 정적 알람(정적 임계값 초과 감지), 복합 알람(여러 KPI 모니터링 알람으로 비즈니스 로직 기반 경보 생성)</li>
        <li>적절한 알림 이벤트 생성: Amazon SNS API를 직접 호출하여 알림 전송, 복구 또는 커뮤니케이션을 위한 자동화와 연결</li>
        <li>서드파티 인시던트 추적 시스템과 연동: Amazon SNS 통합 또는 Amazon EventBridge를 통해 CloudWatch 알람이 이메일을 전송하거나 인시던트를 기록하도록 구성</li>
        <li>서비스 저하 정보 수신: AWS Health를 사용하여 실시간 서비스 상태 파악, AWS User Notifications를 통해 이메일 및 채팅 채널로 AWS Health 이벤트 알림 수신, Amazon EventBridge를 통해 모니터링 및 알림 도구와 통합</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch (핵심 모니터링 및 알람 서비스)</li>
        <li>Amazon SNS (이메일, SMS 또는 기타 채널을 통한 알림 전송)</li>
        <li>Amazon EventBridge (AWS 서비스에서 대상으로 이벤트 라우팅)</li>
        <li>AWS Health (AWS 서비스 및 계정 상태 실시간 가시성)</li>
        <li>AWS User Notifications (중앙화된 알림 관리)</li>
        <li>AWS X-Ray (분산 추적 및 모니터링)</li>
      </ul>
      <PageNav />
    </article>
  );
}
