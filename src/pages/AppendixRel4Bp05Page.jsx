import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel4Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL04-BP05 — 제한 제어 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        과도한 트래픽이나 오작동하는 클라이언트로부터 서비스를 보호하기 위해
        스로틀링(throttling), 속도 제한(rate limiting), 서킷 브레이커(circuit breaker) 패턴을 구현합니다.
        이를 통해 특정 클라이언트나 기능의 과도한 사용이 전체 시스템에 미치는 영향을 제한합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        단일 클라이언트나 워크로드 구성 요소가 전체 시스템 리소스를 독점하지 못하도록 제어됩니다.
        지속적으로 실패하는 외부 서비스 호출은 서킷 브레이커에 의해 차단되어
        대기 시간 낭비와 리소스 소진을 방지합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>속도 제한 없이 모든 클라이언트 요청을 무제한으로 처리하는 경우</li>
        <li>특정 테넌트나 클라이언트의 과도한 요청이 다른 사용자의 서비스에 영향을 주는 경우(노이지 네이버 문제)</li>
        <li>장애 상태의 외부 서비스에 계속 요청을 보내 리소스를 낭비하는 경우</li>
        <li>스로틀링 응답(HTTP 429)에 대한 클라이언트 처리 로직이 없는 경우</li>
        <li>서킷 브레이커 상태(열림/닫힘/반열림)를 모니터링하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>과도한 트래픽으로부터 서비스 보호</li>
        <li>공정한 리소스 사용 보장(멀티 테넌트 환경)</li>
        <li>장애 서비스 호출로 인한 리소스 낭비 방지</li>
        <li>시스템 전반의 안정성 및 예측 가능성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon API Gateway의 사용 계획(Usage Plan)과 API 키를 사용하여 클라이언트별 속도 제한을 설정합니다.</li>
        <li>AWS WAF의 속도 기반 규칙을 사용하여 특정 IP에서의 과도한 요청을 자동으로 차단합니다.</li>
        <li>서킷 브레이커 패턴을 애플리케이션 코드에 구현하거나, AWS App Mesh의 Outlier Detection을 활용합니다.</li>
        <li>DynamoDB, SQS 등 AWS 서비스의 내장 스로틀링 메커니즘을 이해하고 설계에 반영합니다.</li>
        <li>AWS Lambda의 예약된 동시성(Reserved Concurrency)으로 특정 함수의 리소스 사용을 제한합니다.</li>
        <li>CloudWatch 메트릭으로 스로틀링 발생 빈도를 모니터링하고 임계값을 적절히 조정합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon API Gateway — 사용 계획 및 API 스로틀링</li>
        <li>AWS WAF — 속도 기반 규칙으로 DDoS 및 악의적 트래픽 제어</li>
        <li>AWS App Mesh — 서비스 메시 수준의 서킷 브레이커(Outlier Detection)</li>
        <li>AWS Lambda 예약된 동시성 — 함수별 최대 동시 실행 수 제한</li>
        <li>Amazon CloudWatch — 스로틀링 메트릭 모니터링</li>
        <li>AWS Shield — DDoS 보호 및 트래픽 제어</li>
      </ul>
      <PageNav />
    </article>
  );
}
