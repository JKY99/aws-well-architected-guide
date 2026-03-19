import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf3Bp04Page() {
  return (
    <article className="doc-content">
      <h1>PERF03-BP04 — 스토리지 액세스 패턴 최적화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>스토리지 액세스 패턴을 지속적으로 모니터링하고 캐싱, 프리페칭, 데이터 배치 등을 통해 스토리지 성능을 최적화합니다.</p>
      <h2>원하는 결과</h2>
      <p>지속적인 모니터링과 최적화를 통해 스토리지 성능 목표를 유지하고 변화하는 워크로드에 적응합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>초기 설정 후 스토리지 성능 검토 없음</li>
        <li>반복 액세스 데이터에 캐싱 미활용</li>
        <li>콜드 데이터와 핫 데이터를 동일한 스토리지 계층에 혼합 저장</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>지속적인 최적화로 일관된 I/O 성능 유지</li>
        <li>데이터 수명 주기 관리로 스토리지 비용 절감</li>
        <li>캐싱 활용으로 지연 시간 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon S3 Transfer Acceleration으로 원거리 업로드 성능 향상</li>
        <li>Amazon CloudFront로 자주 액세스되는 스토리지 콘텐츠 캐싱</li>
        <li>S3 수명 주기 정책으로 데이터 온도에 따른 자동 티어링 구성</li>
        <li>CloudWatch 메트릭으로 스토리지 성능 지표 지속 모니터링</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudFront</li>
        <li>Amazon S3 Transfer Acceleration</li>
        <li>Amazon ElastiCache</li>
        <li>AWS Storage Gateway</li>
      </ul>
      <PageNav />
    </article>
  );
}
