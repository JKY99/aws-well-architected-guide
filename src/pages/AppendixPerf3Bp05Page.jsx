import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf3Bp05Page() {
  return (
    <article className="doc-content">
      <h1>PERF03-BP05 — 캐싱을 활용하는 데이터 액세스 패턴 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>자주 액세스하는 데이터를 캐시에 저장하여 데이터 스토어의 부하를 줄이고 응답 시간을 단축합니다. 적절한 캐싱 전략을 수립하여 데이터 일관성과 성능 간의 균형을 유지합니다.</p>
      <h2>원하는 결과</h2>
      <p>캐싱을 통해 데이터 액세스 지연 시간을 줄이고, 데이터베이스 부하를 감소시키며, 전체 시스템 성능을 향상시킵니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>자주 변경되는 데이터에 캐싱을 적용하여 오래된 데이터 제공</li>
        <li>캐시 무효화 전략 없이 캐싱 구현</li>
        <li>캐시 적중률을 모니터링하지 않아 효과 측정 불가</li>
        <li>캐시 크기를 적절히 설정하지 않아 성능 저하 발생</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 액세스 지연 시간 대폭 감소</li>
        <li>데이터베이스 부하 감소로 비용 절감</li>
        <li>더 많은 동시 요청 처리 가능</li>
        <li>백엔드 서비스 장애 시 부분적 서비스 지속 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon ElastiCache(Redis 또는 Memcached)를 사용하여 인메모리 캐시 구현</li>
        <li>Amazon DynamoDB Accelerator(DAX)로 DynamoDB 쿼리 성능 향상</li>
        <li>Amazon CloudFront로 정적 콘텐츠 및 API 응답 캐싱</li>
        <li>캐시 TTL(Time to Live)을 데이터 특성에 맞게 설정</li>
        <li>Cache-Aside, Write-Through 등 적절한 캐싱 패턴 선택</li>
        <li>캐시 적중률 및 미스율을 지속적으로 모니터링</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon ElastiCache — Redis 및 Memcached 기반 인메모리 캐시</li>
        <li>Amazon DynamoDB Accelerator(DAX) — DynamoDB 전용 캐시</li>
        <li>Amazon CloudFront — 콘텐츠 전송 네트워크 및 엣지 캐싱</li>
        <li>Amazon MemoryDB for Redis — 내구성 있는 인메모리 데이터베이스</li>
      </ul>
      <PageNav />
    </article>
  );
}
