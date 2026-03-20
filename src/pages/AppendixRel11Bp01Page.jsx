import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP01 — 모든 워크로드 구성 요소를 모니터링하여 장애 감지</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 장애를 늦게 감지하여 가용성에 큰 영향을 미칩니다.</p>
      </div>
      <p>
        구성 요소의 장애를 신속하게 감지하여 자동 복구를 트리거하거나 운영팀이 조치를
        취할 수 있도록 합니다. 외부 상태 확인, 내부 상태 확인, 비즈니스 메트릭 등
        다양한 수준에서 모니터링을 구성합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 구성 요소(컴퓨팅, 데이터베이스, 네트워크, 의존성)가 모니터링되며,
        장애 발생 시 수 분 내에 감지하여 자동 복구 또는 운영팀 알림이 트리거됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>서버 자체만 모니터링하고 애플리케이션 수준의 상태 확인을 수행하지 않는 경우</li>
        <li>외부 사용자 관점에서의 가용성을 모니터링하지 않아 사용자가 먼저 장애를 인지하는 경우</li>
        <li>의존성 서비스(외부 API, 데이터베이스)의 상태를 모니터링하지 않는 경우</li>
        <li>상태 확인 엔드포인트가 항상 200을 반환하여 실제 장애를 숨기는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 조기 감지로 MTTR(평균 복구 시간) 단축</li>
        <li>자동 복구 메커니즘 트리거를 위한 기반 마련</li>
        <li>사용자 영향 최소화</li>
        <li>장애 패턴 분석을 통한 사전 예방</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>로드 밸런서 상태 확인을 구성하여 비정상 인스턴스를 트래픽 대상에서 제외합니다.</li>
        <li>애플리케이션에 /health 엔드포인트를 구현하여 내부 의존성 상태를 확인하고 응답합니다.</li>
        <li>Amazon Route 53 상태 확인을 구성하여 외부에서 엔드포인트 가용성을 모니터링합니다.</li>
        <li>Amazon CloudWatch 합성 모니터(Synthetics Canary)를 사용하여 실제 사용자 경험을 시뮬레이션합니다.</li>
        <li>Amazon CloudWatch 경보를 구성하여 임계값 초과 시 SNS 알림을 전송합니다.</li>
        <li>AWS Health Dashboard 이벤트를 구독하여 AWS 서비스 상태 변화를 모니터링합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 메트릭, 경보, 합성 모니터</li>
        <li>Amazon Route 53 — 엔드포인트 상태 확인</li>
        <li>Elastic Load Balancing — 대상 상태 확인</li>
        <li>AWS Health Dashboard — AWS 서비스 상태 모니터링</li>
      </ul>
      <PageNav />
    </article>
  );
}
