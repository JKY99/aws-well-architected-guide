import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus3Page() {
  return (
    <article className="doc-content">
      <h1>SUS 3 — 소프트웨어 및 아키텍처를 어떻게 최적화합니까?</h1>

      <p>
        지속 가능한 소프트웨어 아키텍처 패턴을 구현하여 리소스 소비를 최소화하고
        환경적 영향을 줄입니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/sustainability/sus3/bp01">SUS03-BP01: 비동기 및 예약 패턴 최적화</Link></strong><br />
          <span>실시간 처리 대신 비동기 패턴으로 피크 수요를 평준화하여 필요한 리소스를 줄입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus3/bp02">SUS03-BP02: 오래된 리소스를 제거하기 위한 코드 리팩터링</Link></strong><br />
          <span>사용하지 않는 기능, 레거시 코드를 제거하여 불필요한 처리 오버헤드를 줄입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus3/bp03">SUS03-BP03: 작업에 적합한 컴퓨팅 및 스토리지 사용</Link></strong><br />
          <span>GPU 인스턴스, Graviton 프로세서 등 작업 특성에 최적화된 리소스를 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus3/bp04">SUS03-BP04: 공유 서비스 사용</Link></strong><br />
          <span>중복 구축 대신 공유 서비스를 활용하여 전체 리소스 사용량을 줄입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus3/bp05">SUS03-BP05: 캐싱 전략 최적화</Link></strong><br />
          <span>반복 계산과 데이터 검색을 캐싱으로 줄여 컴퓨팅 리소스 사용을 최소화합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
