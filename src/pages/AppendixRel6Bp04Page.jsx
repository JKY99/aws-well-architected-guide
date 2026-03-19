import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP04 — 수요 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>요청 스로틀링, 큐잉, 배압(backpressure) 메커니즘을 통해 수요를 평준화하고 시스템 과부하를 방지합니다.</p>
      <h2>원하는 결과</h2>
      <p>트래픽 급증 시에도 시스템이 안정적으로 운영되는 수요 관리 체계를 구축합니다. 처리 불가능한 수준의 트래픽은 스로틀링 또는 큐잉으로 관리하여 전체 시스템 장애를 방지합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>스로틀링 없는 무제한 요청 수용으로 시스템 과부하 및 전체 장애 유발</li>
        <li>큐잉 없는 직접 처리로 백엔드 용량 초과 시 요청 유실</li>
        <li>배압 무시로 업스트림이 다운스트림을 압도하여 연쇄 장애 발생</li>
        <li>스로틀링 응답(429)에 대한 클라이언트 처리 로직 미구현</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>시스템 안정성 향상 — 과부하 상황에서도 처리 가능한 요청은 정상 처리</li>
        <li>공정한 리소스 분배로 특정 클라이언트의 독점 방지</li>
        <li>과부하 방지로 전체 서비스 장애 예방</li>
        <li>SQS 버퍼링으로 트래픽 급증을 흡수하여 백엔드 부하 평준화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>API Gateway 스로틀링을 설정하여 초당 요청 수 제한 및 버스트 제어</li>
        <li>SQS로 요청을 버퍼링하여 백엔드가 처리 가능한 속도로 소비</li>
        <li>API Gateway 사용량 계획(Usage Plans)과 API 키로 클라이언트별 할당량 설정</li>
        <li>AWS WAF 속도 기반 규칙으로 비정상적인 고속 요청 차단</li>
        <li>CloudFront 캐싱으로 오리진 서버 부하를 줄여 실질적인 수요 감소</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon API Gateway — 요청 스로틀링 및 사용량 계획</li>
        <li>Amazon SQS — 요청 버퍼링 및 부하 평준화</li>
        <li>AWS WAF — 속도 기반 규칙으로 과도한 요청 차단</li>
        <li>Amazon CloudFront — 엣지 캐싱으로 오리진 부하 감소</li>
      </ul>
      <PageNav />
    </article>
  );
}
