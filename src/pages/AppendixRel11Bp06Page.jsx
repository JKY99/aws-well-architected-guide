import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp06Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP06 — 가용성에 영향을 미치는 이벤트 발생 시 알림 전송</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 운영팀이 장애 발생을 늦게 인지하여 대응이 지연됩니다.</p>
      </div>
      <p>
        가용성에 영향을 미치는 이벤트(장애, 성능 저하, AWS 서비스 이벤트)가 발생하면
        즉시 운영팀에 알림을 전송합니다. 알림은 조치 가능한 수준으로 설계하여
        경보 피로(alert fatigue)를 방지합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        가용성에 영향을 미치는 이벤트 발생 시 수 분 내에 운영팀이 알림을 받고 조치를 시작합니다.
        알림은 명확한 컨텍스트와 조치 지침을 포함하여 빠른 대응을 지원합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>너무 많은 경보를 설정하여 운영팀이 중요 경보를 놓치는 경보 피로 발생</li>
        <li>알림에 컨텍스트나 조치 지침이 없어 수신자가 무엇을 해야 할지 모르는 경우</li>
        <li>경보가 발화해도 담당자에게 전달되지 않아 대응이 누락되는 경우</li>
        <li>AWS 서비스 상태 이벤트를 모니터링하지 않아 AWS 측 장애를 늦게 인지하는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 조기 인지로 MTTR 단축</li>
        <li>명확한 알림으로 빠른 대응 지원</li>
        <li>AWS 서비스 이벤트에 대한 사전 인지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon SNS를 사용하여 CloudWatch 경보가 발화할 때 이메일, SMS, PagerDuty 등으로 알림을 전송합니다.</li>
        <li>AWS Chatbot을 사용하여 CloudWatch 경보를 Slack이나 Amazon Chime으로 전달합니다.</li>
        <li>AWS Health Dashboard의 이벤트를 Amazon EventBridge로 구독하여 AWS 서비스 장애 알림을 받습니다.</li>
        <li>알림 메시지에 영향받는 서비스, 메트릭 값, 임계값, 관련 런북 링크를 포함합니다.</li>
        <li>경보 우선순위를 정의하고 심각도에 따라 다른 채널로 알림을 전송합니다.</li>
        <li>경보를 정기적으로 검토하여 노이즈를 제거하고 유용한 경보만 유지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 경보 생성 및 관리</li>
        <li>Amazon SNS — 알림 전송 허브</li>
        <li>AWS Chatbot — Slack/Chime 통합</li>
        <li>AWS Health Dashboard — AWS 서비스 상태 이벤트</li>
        <li>Amazon EventBridge — 이벤트 기반 알림 라우팅</li>
      </ul>
      <PageNav />
    </article>
  );
}
