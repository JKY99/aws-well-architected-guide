import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf3Bp04Page() {
  return (
    <article className="doc-content">
      <h1>PERF03-BP04 — 데이터 스토어의 쿼리 성능 향상 전략 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>인덱싱, 쿼리 최적화, 파티셔닝, 읽기 복제본 등 다양한 전략을 통해 데이터 스토어의 쿼리 성능을 향상시킵니다.</p>
      <h2>원하는 결과</h2>
      <p>최적화된 쿼리와 데이터 스토어 구성으로 응답 시간을 단축하고, 데이터 스토어의 전반적인 처리 효율을 높입니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>N+1 쿼리 문제로 인한 과도한 데이터베이스 요청</li>
        <li>인덱스 없는 컬럼에 대한 쿼리 수행</li>
        <li>연결 풀링 없이 직접 연결로 연결 고갈 발생</li>
        <li>대용량 쿼리를 페이지네이션 없이 전체 결과 반환</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최적화된 쿼리로 데이터 스토어 응답 시간 단축</li>
        <li>효율적인 인덱스 활용으로 스캔 범위 최소화</li>
        <li>읽기 복제본 활용으로 읽기 성능 향상</li>
        <li>연결 풀링으로 데이터 스토어 부하 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Slow Query Log 분석으로 성능 저하 쿼리 식별</li>
        <li>실행 계획(EXPLAIN) 분석으로 쿼리 최적화</li>
        <li>Amazon RDS Proxy로 연결 풀링 구성하여 연결 고갈 방지</li>
        <li>읽기 집약적 워크로드를 읽기 복제본으로 분산</li>
        <li>DynamoDB GSI(글로벌 보조 인덱스)를 활용하여 다양한 쿼리 패턴 지원</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon RDS Proxy — 연결 풀링 및 관리</li>
        <li>Amazon Aurora 읽기 복제본 — 읽기 트래픽 분산</li>
        <li>Amazon DynamoDB GSI — 유연한 쿼리 지원</li>
        <li>Amazon RDS Performance Insights — 쿼리 성능 분석</li>
      </ul>
      <PageNav />
    </article>
  );
}
