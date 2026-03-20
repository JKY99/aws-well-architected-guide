import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL05-BP04 — 서비스 사용 가능성 평가 및 안전한 장애 처리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 의존 서비스 장애 시 전체 워크로드가 중단되거나 사용자가 불량한 오류 경험을 겪게 됩니다.</p>
      </div>
      <p>Graceful degradation은 의존 서비스가 사용 불가능할 때 전체 시스템 중단 대신 축소된 기능으로 계속 서비스하는 전략입니다. 폴백 로직과 캐시 활용을 통해 서비스 연속성을 유지합니다.</p>
      <h2>원하는 결과</h2>
      <p>의존 서비스가 장애를 겪더라도 워크로드가 핵심 기능을 유지하며 운영됩니다. 사용자에게 명확한 상태 메시지를 제공하고, 서비스 복구 시 자동으로 정상 상태로 전환합니다. 캐시된 데이터나 폴백 응답을 활용하여 최소한의 서비스 수준을 보장합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 의존성이 복구될 때까지 전체 서비스를 중단하는 all-or-nothing 설계</li>
        <li>타임아웃 없는 동기식 외부 서비스 호출로 스레드 풀 고갈</li>
        <li>장애 서비스로의 재시도를 무제한 반복하여 장애를 악화시키는 retry storm</li>
        <li>Circuit Breaker 없이 오류가 지속적으로 사용자에게 노출</li>
        <li>장애 시나리오에 대한 폴백 로직 없이 단순 오류 반환</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>의존 서비스 장애 시에도 핵심 비즈니스 기능 유지</li>
        <li>사용자 경험 개선 — 완전한 오류 대신 제한된 기능 제공</li>
        <li>Circuit Breaker로 장애 서비스의 부하를 줄여 빠른 회복 지원</li>
        <li>캐시 활용으로 응답 속도 개선 및 백엔드 부하 감소</li>
        <li>시스템 전체의 복원력 향상 및 운영 팀의 야간 호출 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>모든 외부 서비스 호출에 적절한 타임아웃과 Circuit Breaker 패턴 적용</li>
        <li>AWS SDK의 재시도 설정을 검토하고 지수 백오프(exponential backoff)와 지터(jitter) 사용</li>
        <li>Amazon ElastiCache를 활용하여 자주 조회되는 데이터를 캐시하고 백엔드 장애 시 캐시 응답 제공</li>
        <li>비핵심 기능(추천, 광고 등)의 장애가 핵심 기능에 영향을 주지 않도록 격리</li>
        <li>서비스 의존성 맵을 작성하고 각 의존성의 장애 시 폴백 전략을 문서화</li>
        <li>AWS App Mesh 또는 Amazon API Gateway를 통해 서비스 수준에서 Circuit Breaker 구현</li>
        <li>Static 콘텐츠를 Amazon CloudFront 또는 S3에서 제공하여 동적 서비스 장애 시에도 기본 페이지 서비스</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon ElastiCache — 캐시 기반 폴백 응답</li>
        <li>Amazon CloudFront — 정적 콘텐츠 캐시 및 오리진 장애 폴백</li>
        <li>AWS App Mesh — 서비스 메시 수준의 Circuit Breaker</li>
        <li>Amazon API Gateway — API 응답 캐시 및 Mock 통합</li>
        <li>AWS Lambda — 경량 폴백 함수 구현</li>
        <li>AWS Resilience Hub — 복원력 권고사항 및 SLA 추적</li>
      </ul>
      <PageNav />
    </article>
  );
}
