import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf2Page() {
  return (
    <article className="doc-content">
      <h1>PERF 2 — 최적의 컴퓨팅 솔루션을 어떻게 선택합니까?</h1>

      <p>
        워크로드의 컴퓨팅 요구사항에 맞는 인스턴스 유형, 컨테이너, 서버리스 등
        최적의 컴퓨팅 솔루션을 선택합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf2/bp01">PERF02-BP01: 다양한 컴퓨팅 구성 평가</Link></strong><br />
          <span>범용(M), 컴퓨팅 최적화(C), 메모리 최적화(R), 가속화 컴퓨팅(G/P) 인스턴스 패밀리를 워크로드 특성에 맞게 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf2/bp02">PERF02-BP02: 유연한 인프라 사용</Link></strong><br />
          <span>다양한 인스턴스 유형과 크기를 쉽게 변경할 수 있도록 인프라를 코드로 관리합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf2/bp03">PERF02-BP03: 올바른 크기 조정</Link></strong><br />
          <span>AWS Compute Optimizer를 사용하여 실제 사용량을 기반으로 최적의 인스턴스 크기를 추천받습니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf2/bp04">PERF02-BP04: 컨테이너 기반 접근 방식 사용</Link></strong><br />
          <span>Amazon ECS 또는 EKS를 사용하여 컨테이너로 워크로드를 배포하고 리소스 효율성을 높입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/performance-efficiency/perf2/bp05">PERF02-BP05: 서버리스 컴퓨팅 사용</Link></strong><br />
          <span>AWS Lambda를 사용하여 서버 관리 없이 이벤트 기반 처리를 구현하고 비용을 최적화합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
