import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps4Bp04Page() {
  return (
    <article className="doc-content">
      <h1>OPS04-BP04 — 의존성 원격 분석 구현</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        워크로드가 의존하는 외부 서비스, 데이터베이스, API의 상태와 성능을 모니터링합니다.
        의존성 장애는 워크로드 전체에 연쇄 영향을 미치므로 사전 감지가 중요합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 외부 의존성(서드파티 API, 데이터베이스, 캐시 서버, 메시지 큐 등)의 상태가 모니터링됩니다.
        의존성 장애 또는 성능 저하를 조기에 감지하여 대응할 수 있습니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>자체 시스템만 모니터링하고 의존 서비스는 모니터링하지 않는 경우</li>
        <li>서드파티 서비스 장애를 고객 불만이 접수된 후에야 파악하는 경우</li>
        <li>의존성 타임아웃을 너무 길게 설정하여 장애 전파를 가속하는 경우</li>
        <li>의존성 서비스 변경사항에 대한 알림을 구독하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>의존성 장애로 인한 연쇄 장애 예방</li>
        <li>의존성 성능 저하 원인 신속 식별</li>
        <li>의존성 SLA 준수 여부 모니터링</li>
        <li>의존성 문제와 자체 시스템 문제 구분으로 빠른 원인 분석</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>모든 외부 API 호출의 성공률, 응답 시간, 오류 유형을 기록합니다.</li>
        <li>의존성 서비스 헬스체크 엔드포인트를 정기적으로 호출하여 상태를 확인합니다.</li>
        <li>AWS X-Ray로 서비스 맵을 생성하여 의존성 그래프를 시각화합니다.</li>
        <li>서킷 브레이커 패턴을 구현하여 의존성 장애 시 연쇄 실패를 방지합니다.</li>
        <li>AWS Service Health Dashboard와 서드파티 상태 페이지를 구독합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS X-Ray — 분산 서비스 맵 및 의존성 분석</li>
        <li>Amazon CloudWatch Synthetics — 의존성 서비스 지속적 모니터링</li>
        <li>AWS Health — AWS 서비스 상태 이벤트 알림</li>
        <li>Amazon CloudWatch ServiceLens — 서비스 상태 통합 뷰</li>
      </ul>

      <PageNav />
    </article>
  );
}
