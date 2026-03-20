import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL05-BP05 — 클라이언트 타임아웃 설정</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 느린 의존성 서비스로 인해 스레드와 커넥션 풀이 고갈되어 연쇄 장애가 발생할 수 있습니다.</p>
      </div>
      <p>
        분산 시스템에서 의존하는 서비스가 느리게 응답하거나 응답하지 않을 경우,
        타임아웃이 없으면 호출 스레드나 커넥션이 무한정 대기하여 결국 리소스 풀이 고갈됩니다.
        모든 외부 서비스 호출에 적절한 커넥션 타임아웃과 읽기 타임아웃을 설정해야 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 서비스 호출에 적절한 타임아웃이 설정되어 있으며, 타임아웃 발생 시 에러를 반환하거나
        대체 동작(폴백)을 수행합니다. 느린 의존성이 전체 시스템을 마비시키지 않습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>타임아웃 없이 외부 HTTP, 데이터베이스, 메시지 큐 호출을 수행하는 경우</li>
        <li>타임아웃을 너무 길게 설정하여 리소스가 오랫동안 대기하는 경우</li>
        <li>커넥션 타임아웃과 읽기 타임아웃을 구분하지 않고 하나만 설정하는 경우</li>
        <li>SDK 기본값(종종 매우 길거나 무한대)을 그대로 사용하는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>느린 의존성으로 인한 스레드 풀 고갈 및 연쇄 장애 방지</li>
        <li>사용자에게 빠른 오류 응답 제공으로 사용자 경험 개선</li>
        <li>시스템 리소스의 효율적인 활용</li>
        <li>서킷 브레이커 패턴과 함께 사용하여 장애 격리 강화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>모든 AWS SDK 호출에 명시적인 타임아웃을 설정합니다 (connectTimeout, readTimeout).</li>
        <li>타임아웃 값은 의존 서비스의 정상 응답 시간 p99를 기준으로 설정합니다.</li>
        <li>HTTP 클라이언트 라이브러리(Apache HttpClient, OkHttp 등)의 기본 타임아웃 값을 확인하고 재설정합니다.</li>
        <li>데이터베이스 커넥션 풀(HikariCP 등)의 connectionTimeout, socketTimeout을 명시적으로 구성합니다.</li>
        <li>타임아웃 발생 시 CloudWatch 메트릭을 기록하여 타임아웃 빈도를 모니터링합니다.</li>
        <li>AWS Lambda, API Gateway 등 관리형 서비스의 타임아웃 설정도 확인하고 최적화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS SDK — 각 언어별 SDK의 타임아웃 구성 옵션</li>
        <li>Amazon API Gateway — 통합 타임아웃(최대 29초) 설정</li>
        <li>AWS Lambda — 함수 타임아웃 설정</li>
        <li>Amazon CloudWatch — 타임아웃 메트릭 수집 및 경보</li>
        <li>AWS X-Ray — 느린 호출 경로 추적 및 분석</li>
      </ul>
      <PageNav />
    </article>
  );
}
