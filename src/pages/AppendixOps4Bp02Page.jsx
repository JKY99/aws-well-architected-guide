import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps4Bp02Page() {
  return (
    <article className="doc-content">
      <h1>OPS04-BP02 — 애플리케이션 원격 분석 구현</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        애플리케이션 구성요소의 동작, 성능, 오류를 측정하고 로깅합니다.
        구조화된 로그, 지표, 트레이스를 통해 애플리케이션의 동작을 완전히 이해할 수 있어야 합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 중요한 애플리케이션 이벤트(요청 처리, 오류, 외부 호출)가 기록됩니다.
        로그가 구조화된 형식(JSON 등)으로 저장되어 검색과 분석이 용이합니다.
        성능 지표(응답 시간, 처리량, 오류율)가 실시간으로 수집됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비구조화된 텍스트 로그를 사용하여 분석이 어려운 경우</li>
        <li>오류만 로깅하고 성공적인 처리는 기록하지 않는 경우</li>
        <li>로그에 민감한 정보(개인정보, 자격증명)가 포함되는 경우</li>
        <li>로그가 로컬 파일에만 저장되어 서버 장애 시 유실되는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 원인 신속 식별로 MTTR 감소</li>
        <li>성능 최적화를 위한 데이터 제공</li>
        <li>보안 감사 및 컴플라이언스 지원</li>
        <li>비즈니스 이벤트 추적으로 의사결정 지원</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>JSON 형식의 구조화된 로그를 사용합니다(timestamp, level, message, requestId 등 포함).</li>
        <li>요청별 고유 ID(Correlation ID)를 생성하여 분산 시스템에서 요청을 추적합니다.</li>
        <li>AWS CloudWatch Logs에 로그를 중앙화하여 중앙 검색과 분석이 가능하게 합니다.</li>
        <li>CloudWatch EMF(Embedded Metric Format)로 로그에서 지표를 자동 추출합니다.</li>
        <li>로그 보존 정책을 설정하여 비용을 관리합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch Logs — 애플리케이션 로그 중앙화</li>
        <li>CloudWatch Logs Insights — 로그 쿼리 및 분석</li>
        <li>AWS CloudWatch Embedded Metric Format — 로그에서 지표 추출</li>
        <li>AWS Lambda Powertools — Lambda 구조화 로깅 라이브러리</li>
      </ul>

      <PageNav />
    </article>
  );
}
