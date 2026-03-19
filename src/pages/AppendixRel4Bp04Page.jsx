import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel4Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL04-BP04 — 서비스 간 결합도 줄이기</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        서비스 간 강한 결합(tight coupling)은 한 서비스의 장애가 연쇄적으로 다른 서비스 장애로 이어지는
        연쇄 장애(cascade failure)를 유발합니다.
        이벤트 기반 아키텍처, 비동기 통신 패턴, 메시지 큐를 활용하여 서비스 간 결합도를 낮추고
        각 서비스의 독립성과 장애 격리 능력을 향상시킵니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        서비스 간 통신이 비동기 메시지나 이벤트를 통해 이루어지며,
        한 서비스가 일시적으로 비가용 상태여도 다른 서비스는 정상 동작하고
        메시지는 큐에 보존되어 서비스 복구 후 처리됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 서비스 간 통신을 동기 REST 호출로 구현하여 연쇄 장애 위험이 높은 경우</li>
        <li>서비스 A가 서비스 B를 직접 호출하고, B가 C를 호출하는 긴 동기 호출 체인을 구성하는 경우</li>
        <li>이벤트 소비자가 이벤트 발행자의 내부 데이터 구조에 의존하는 경우</li>
        <li>공유 데이터베이스를 통해 서비스 간 데이터를 직접 교환하는 경우</li>
        <li>이벤트 처리 실패 시 재처리 전략(DLQ)이 없어 데이터가 유실되는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>한 서비스 장애가 다른 서비스로 전파되지 않아 전체 가용성 향상</li>
        <li>각 서비스의 독립적인 배포 및 업그레이드 가능</li>
        <li>피크 트래픽 시 메시지 큐가 버퍼 역할을 하여 안정성 향상</li>
        <li>이벤트 기반 확장으로 유연한 기능 추가 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon SQS를 사용하여 서비스 간 비동기 메시지 전달을 구현합니다.</li>
        <li>Amazon EventBridge를 이벤트 허브로 사용하여 이벤트 발행자와 소비자를 분리합니다.</li>
        <li>이벤트 스키마를 명확하게 정의하고 스키마 레지스트리(EventBridge Schema Registry)를 활용합니다.</li>
        <li>SQS Dead Letter Queue(DLQ)를 설정하여 처리 실패 메시지를 보존하고 재처리합니다.</li>
        <li>이벤트 소싱 패턴을 적용하여 상태 변경을 이벤트로 기록하고 감사 추적을 남깁니다.</li>
        <li>Saga 패턴을 사용하여 분산 트랜잭션을 보상 트랜잭션으로 관리합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon SQS — 분산 메시지 큐 서비스</li>
        <li>Amazon EventBridge — 이벤트 기반 아키텍처 허브</li>
        <li>Amazon SNS — 메시지 팬아웃 및 알림</li>
        <li>AWS Step Functions — 분산 워크플로우 및 Saga 패턴 구현</li>
        <li>Amazon MSK (Managed Streaming for Apache Kafka) — 고처리량 스트리밍 이벤트 처리</li>
      </ul>
      <PageNav />
    </article>
  );
}
