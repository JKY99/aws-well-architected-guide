import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus3Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SUS03-BP05 — 캐싱 전략 최적화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>캐싱을 통해 반복적인 연산과 데이터 전송을 줄여 에너지 소비를 감소시킵니다. 동일한 데이터를 반복해서 계산하거나 원격 소스에서 가져오는 대신 캐시에서 제공하면 CPU 사이클, 네트워크 대역폭, 데이터베이스 부하를 크게 줄일 수 있습니다. 효과적인 캐싱 전략은 지속 가능성과 성능을 동시에 개선하는 강력한 방법입니다.</p>
      <h2>원하는 결과</h2>
      <p>다계층 캐싱 전략을 통해 반복적인 연산과 데이터 요청을 최소화하고, 백엔드 시스템의 부하와 에너지 소비를 줄이면서 사용자 경험을 향상시킵니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>동일한 데이터베이스 쿼리를 요청마다 반복 실행합니다.</li>
        <li>정적 콘텐츠를 CDN 없이 오리진 서버에서 직접 제공합니다.</li>
        <li>캐시 만료 정책이 너무 짧아 캐시 히트율이 낮습니다.</li>
        <li>캐싱 가능한 API 응답에 캐시 헤더를 설정하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>반복 연산 감소로 CPU 에너지 소비가 크게 줄어듭니다.</li>
        <li>데이터베이스 쿼리 감소로 스토리지 I/O와 에너지 소비가 감소합니다.</li>
        <li>CDN 캐싱으로 데이터 전송 거리가 줄어들어 네트워크 에너지가 절약됩니다.</li>
        <li>응답 시간이 단축되고 사용자 경험이 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon ElastiCache(Redis/Memcached)로 데이터베이스 앞단에 인메모리 캐시를 구성합니다.</li>
        <li>Amazon CloudFront로 정적 및 동적 콘텐츠를 엣지에서 캐싱하여 오리진 부하를 줄입니다.</li>
        <li>API Gateway 캐싱을 활성화하여 반복적인 API 호출의 백엔드 처리를 줄입니다.</li>
        <li>애플리케이션 레벨에서 계산 비용이 높은 결과를 메모이제이션합니다.</li>
        <li>캐시 히트율을 모니터링하고 캐시 전략을 지속적으로 최적화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon ElastiCache — 인메모리 데이터 캐싱 서비스</li>
        <li>Amazon CloudFront — 글로벌 CDN 및 엣지 캐싱</li>
        <li>Amazon API Gateway — API 응답 캐싱</li>
        <li>Amazon DynamoDB Accelerator(DAX) — DynamoDB 전용 인메모리 캐시</li>
        <li>AWS Global Accelerator — 네트워크 레이어 가속화 및 캐싱</li>
      </ul>
      <PageNav />
    </article>
  );
}
