import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf4Bp03Page() {
  return (
    <article className="doc-content">
      <h1>PERF04-BP03 — 데이터베이스 액세스 패턴 최적화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>쿼리 최적화, 인덱스 설계, 연결 풀링을 통해 데이터베이스 액세스 성능을 향상시킵니다.</p>
      <h2>원하는 결과</h2>
      <p>최적화된 쿼리와 인덱스로 데이터베이스 응답 시간을 단축하고 서버 부하를 줄입니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>N+1 쿼리 문제로 인한 과도한 DB 요청</li>
        <li>인덱스 없는 컬럼에 대한 쿼리 수행</li>
        <li>연결 풀링 없이 직접 연결로 연결 고갈 발생</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최적화된 쿼리로 데이터베이스 응답 시간 단축</li>
        <li>효율적인 연결 관리로 DB 부하 감소</li>
        <li>읽기 복제본 활용으로 읽기 성능 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Slow Query Log 분석으로 성능 저하 쿼리 식별</li>
        <li>실행 계획(EXPLAIN) 분석으로 쿼리 최적화</li>
        <li>RDS Proxy로 연결 풀링 구성하여 연결 고갈 방지</li>
        <li>읽기 집약적 워크로드를 읽기 복제본으로 분산</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon RDS Proxy</li>
        <li>Amazon RDS Read Replica</li>
        <li>Amazon Aurora</li>
        <li>AWS Database Activity Streams</li>
      </ul>
      <PageNav />
    </article>
  );
}
