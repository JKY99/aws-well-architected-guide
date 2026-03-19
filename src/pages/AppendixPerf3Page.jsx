import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf3Page() {
  return (
    <article className="doc-content">
      <h1>PERF 3 — 최적의 스토리지 솔루션을 어떻게 선택합니까?</h1>

      <p>
        스토리지 솔루션 선택 시 액세스 패턴, 성능 요구사항, 비용을 고려하여
        워크로드에 적합한 스토리지 서비스를 선택합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf3/bp01">PERF03-BP01: 스토리지 특성 파악</Link></strong><br />
          <span>블록 스토리지(EBS), 파일 스토리지(EFS), 객체 스토리지(S3)의 특성과 성능 프로파일을 이해합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf3/bp02">PERF03-BP02: 액세스 패턴 평가</Link></strong><br />
          <span>순차적 vs. 랜덤 I/O, 읽기 vs. 쓰기 비율, IOPS, 처리량 요구사항을 분석합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf3/bp03">PERF03-BP03: 스토리지 구성 평가</Link></strong><br />
          <span>EBS 볼륨 유형(gp3, io2, sc1 등)과 구성이 성능 요구사항을 충족하는지 확인합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf3/bp04">PERF03-BP04: 스토리지 액세스 패턴 최적화</Link></strong><br />
          <span>캐싱(ElastiCache), 읽기 복제본, S3 Transfer Acceleration을 활용하여 스토리지 성능을 최적화합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
