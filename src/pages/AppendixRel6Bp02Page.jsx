import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP02 — 알림 설계</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 알람 피로(alert fatigue)로 인해 운영팀이 실제 중요한 장애를 놓치거나, 반대로 장애 발생 시 아무도 알림을 받지 못하는 상황이 발생합니다.</p>
      </div>
      <p>효과적인 알림 설계는 의미 있는 알람만 전달하고 노이즈를 제거하는 것입니다. 올바른 임계값 설정, 에스컬레이션 경로 정의, 온콜 로테이션과 연계하여 신속하고 적절한 대응을 보장합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 알람이 실행 가능한 정보를 담고 있으며, 수신자가 즉시 조치를 취할 수 있습니다. 심각도에 따라 알림 채널과 에스컬레이션 경로가 구분되며, 알람 피로 없이 실제 장애를 높은 신뢰도로 감지합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>너무 낮은 임계값으로 설정하여 수시로 발생하는 false positive 알람</li>
        <li>알람이 발생했지만 담당자가 누구인지 불명확한 소유권 미정의</li>
        <li>모든 알람이 동일한 채널로 전달되어 심각도 구분 불가</li>
        <li>알람 발생 시 컨텍스트 정보 없이 지표 이름과 임계값만 포함</li>
        <li>에스컬레이션 정책 미설정으로 on-call 담당자가 응답하지 않을 때 조치 지연</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>알람 피로 감소로 운영팀이 실제 중요 이벤트에 집중</li>
        <li>명확한 에스컬레이션 경로로 장애 대응 지연 최소화</li>
        <li>심각도 기반 알림으로 적절한 긴급도와 대응 방식 결정 가능</li>
        <li>알람 컨텍스트 제공으로 초기 분류(triage) 시간 단축</li>
        <li>온콜 로테이션 관리로 팀원 번아웃 방지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>알람 심각도를 P1(서비스 중단)부터 P4(정보성)까지 등급화하고 각 등급별 대응 시간(SLA) 정의</li>
        <li>CloudWatch Alarm을 생성할 때 평가 기간과 데이터 포인트 수를 조정하여 일시적 스파이크로 인한 false positive 방지</li>
        <li>Amazon SNS를 통해 PagerDuty, OpsGenie 등 온콜 관리 도구와 연동</li>
        <li>알람 설명에 런북(runbook) 링크, 관련 대시보드 링크, 의심 원인 등 컨텍스트 정보 포함</li>
        <li>비즈니스 시간 외 알람에 대한 에스컬레이션 정책을 온콜 도구에 구성</li>
        <li>AWS Chatbot을 통해 Slack이나 Teams 채널로 알람을 전달하고 팀 내 가시성 확보</li>
        <li>CloudWatch Anomaly Detection을 활용하여 동적 임계값 기반 알람 설정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch Alarms — 지표 기반 알람 및 복합 알람</li>
        <li>Amazon SNS — 알림 팬아웃 및 외부 도구 연동</li>
        <li>AWS Chatbot — Slack/Teams 알림 통합</li>
        <li>Amazon CloudWatch Anomaly Detection — ML 기반 이상 감지</li>
        <li>AWS Systems Manager OpsCenter — 운영 이슈 집계 및 추적</li>
        <li>Amazon DevOps Guru — AI 기반 이상 감지 및 인사이트</li>
      </ul>
      <PageNav />
    </article>
  );
}
