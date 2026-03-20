import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps4Bp04Page() {
  return (
    <article className="doc-content">
      <h1>OPS04-BP04 — 의존성 원격 분석 구현</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 높습니다.</p>
      </div>

      <p>
        의존성 텔레메트리는 워크로드가 의존하는 외부 서비스와 구성 요소의 상태와 성능을 모니터링하는 데
        필수적입니다. DNS, 데이터베이스, 서드파티 API와 같은 의존성과 관련된 도달 가능성, 타임아웃 및
        기타 중요한 이벤트에 대한 귀중한 인사이트를 제공합니다. 이 의존성에 대한 지표, 로그, 트레이스를
        내보내도록 애플리케이션을 계측하면 워크로드에 영향을 미칠 수 있는 잠재적인 병목, 성능 문제 또는
        장애에 대한 더 명확한 이해를 얻을 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드가 의존하는 의존성이 예상대로 수행되는지 확인하여 문제를 사전에 해결하고
        최적의 워크로드 성능을 보장합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>외부 의존성과 관련된 지표를 무시하고 내부 애플리케이션 지표에만 집중하는 경우</li>
        <li>의존성 상태와 성능을 지속적으로 모니터링하는 대신 문제가 발생할 때까지 기다리는 경우</li>
        <li>여러 개의 별개 모니터링 도구를 사용하여 의존성 상태에 대한 단편적이고 일관되지 않은 뷰가 발생하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>외부 의존성이 일관되게 가용하고 최적으로 수행되도록 보장하여 워크로드 신뢰성이 향상됩니다.</li>
        <li>워크로드에 영향을 미치기 전에 의존성 문제를 사전에 파악하고 해결합니다.</li>
        <li>워크로드 상태에 영향을 미치는 내부 및 외부 구성 요소의 전체적인 뷰를 얻습니다.</li>
        <li>외부 의존성의 확장성 한계와 성능 특성을 이해하여 워크로드 확장성이 향상됩니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>이해관계자와 협력하여 외부 데이터베이스, 서드파티 API, 네트워크 연결 경로, DNS 서비스와 같은 외부 의존성을 파악합니다.</li>
        <li>각 의존성의 중요성, 예상 동작, SLA/SLT를 이해하고 사전적 알림을 설정하는 모니터링 전략을 개발합니다.</li>
        <li>Internet Monitor와 Network Monitor를 배포하여 글로벌 인터넷 및 네트워크 조건에 대한 포괄적인 인사이트를 얻습니다.</li>
        <li>AWS 클라우드 리소스 상태의 권위 있는 소스로 AWS Health를 활용하고 모니터링 도구와 통합합니다.</li>
        <li>AWS X-Ray로 애플리케이션을 계측하여 요청을 엔드투엔드로 추적하고 외부 서비스의 병목이나 장애를 파악합니다.</li>
        <li>Amazon DevOps Guru를 사용하여 머신 러닝으로 운영 문제를 파악하고 중요한 문제를 예측하며 조치를 권장합니다.</li>
        <li>지표와 로그를 지속적으로 모니터링하고 예상치 못한 동작에 대한 알림을 설정합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS X-Ray — 요청 추적 및 의존성 성능 인사이트</li>
        <li>Amazon DevOps Guru — ML 기반 운영 문제 파악</li>
        <li>AWS Health — AWS 리소스 상태 모니터링 및 알림</li>
        <li>Amazon CloudWatch Internet Monitor — 글로벌 인터넷 조건 인사이트</li>
        <li>Amazon CloudWatch Network Monitor — 네트워크 조건 모니터링</li>
        <li>관련 모범 사례: OPS04-BP01, OPS04-BP02, OPS04-BP03, OPS04-BP05, OPS08-BP04</li>
      </ul>

      <PageNav />
    </article>
  );
}
