import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf4Bp04Page() {
  return (
    <article className="doc-content">
      <h1>PERF04-BP04 — 데이터 티어링 및 캐싱</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>자주 액세스하는 데이터는 인메모리 캐시에, 덜 자주 사용되는 데이터는 저렴한 스토리지에 배치하여 성능과 비용을 최적화합니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터 온도에 따른 계층화로 빠른 응답 시간과 비용 효율성을 동시에 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 데이터를 동일한 계층에 저장</li>
        <li>캐싱 전략 없이 모든 요청을 DB로 직접 처리</li>
        <li>캐시 히트율 미모니터링으로 캐싱 효과 미검증</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>인메모리 캐싱으로 데이터베이스 부하 감소</li>
        <li>캐시 응답으로 애플리케이션 응답 시간 단축</li>
        <li>데이터 계층화로 스토리지 비용 최적화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>ElastiCache(Redis/Memcached)로 DB 앞단 캐싱 계층 구성</li>
        <li>DynamoDB DAX로 마이크로초 단위 읽기 성능 달성</li>
        <li>CloudFront로 API 응답 및 동적 콘텐츠 캐싱</li>
        <li>CloudWatch로 캐시 히트율 모니터링 및 캐싱 전략 지속 개선</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon ElastiCache (Redis/Memcached)</li>
        <li>Amazon DynamoDB Accelerator (DAX)</li>
        <li>Amazon CloudFront</li>
      </ul>
      <PageNav />
    </article>
  );
}
