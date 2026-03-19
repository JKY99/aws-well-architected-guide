import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf8Bp03Page() {
  return (
    <article className="doc-content">
      <h1>PERF08-BP03 — 읽기 성능 향상을 위한 캐싱 활용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>데이터베이스, API, CDN 레벨에서 캐싱을 구현하여 읽기 성능을 향상시키고 백엔드 부하를 줄입니다.</p>
      <h2>원하는 결과</h2>
      <p>다계층 캐싱으로 응답 시간 단축과 백엔드 부하 감소를 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>캐싱 없이 매 요청마다 DB 조회</li>
        <li>캐시 무효화 전략 없음</li>
        <li>캐시 히트율 미모니터링</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>응답 시간 대폭 단축</li>
        <li>DB 부하 감소</li>
        <li>비용 절감</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>CloudFront로 정적 콘텐츠 캐싱</li>
        <li>ElastiCache로 DB 쿼리 결과 캐싱</li>
        <li>API Gateway 캐싱 활성화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudFront</li>
        <li>Amazon ElastiCache (Redis)</li>
        <li>Amazon API Gateway (캐싱)</li>
        <li>Amazon DynamoDB DAX</li>
      </ul>
      <PageNav />
    </article>
  );
}
