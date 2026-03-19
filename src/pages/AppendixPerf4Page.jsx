import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf4Page() {
  return (
    <article className="doc-content">
      <h1>PERF 4 — 최적의 데이터베이스 솔루션을 어떻게 선택합니까?</h1>

      <p>
        워크로드의 데이터 모델, 액세스 패턴, 일관성 요구사항에 맞는
        최적의 데이터베이스 솔루션을 선택합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf4/bp01">PERF04-BP01: 데이터베이스 특성 파악</Link></strong><br />
          <span>관계형(RDS, Aurora), NoSQL(DynamoDB), 캐시(ElastiCache), 검색(OpenSearch), 그래프(Neptune) 등 다양한 데이터베이스 유형을 이해합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf4/bp02">PERF04-BP02: 데이터베이스 구성 평가</Link></strong><br />
          <span>인스턴스 크기, 스토리지 유형, 읽기 복제본, 멀티 AZ 등 데이터베이스 구성이 성능 요구사항을 충족하는지 확인합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf4/bp03">PERF04-BP03: 데이터베이스 액세스 패턴 최적화</Link></strong><br />
          <span>적절한 인덱싱, 쿼리 최적화, 커넥션 풀링을 통해 데이터베이스 성능을 향상시킵니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf4/bp04">PERF04-BP04: 데이터 티어링 및 캐싱</Link></strong><br />
          <span>자주 액세스하는 데이터를 캐시에 저장하여 데이터베이스 부하를 줄이고 응답 시간을 단축합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
