import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus5Page() {
  return (
    <article className="doc-content">
      <h1>SUS 5 — 아키텍처에서 클라우드 하드웨어와 서비스를 어떻게 선택하고 사용하여 지속 가능성 목표를 지원합니까?</h1>

      <p>
        에너지 효율적인 하드웨어와 관리형 서비스를 선택하고 사용하여 지속 가능성 목표를 지원합니다.
        워크로드의 물리적 인프라 요구사항을 줄이고 환경적 영향을 최소화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/sustainability/sus5/bp01">SUS05-BP01: 필요를 충족하는 최소한의 하드웨어 사용</Link></strong><br />
          <span>워크로드에 효율적으로 맞는 비즈니스 요구사항을 충족하는 데 필요한 최소한의 하드웨어를 사용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus5/bp02">SUS05-BP02: 영향이 가장 적은 인스턴스 유형 사용</Link></strong><br />
          <span>에너지 효율성 향상을 활용하기 위해 새로운 인스턴스 유형을 지속적으로 모니터링하고 사용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus5/bp03">SUS05-BP03: 관리형 서비스 사용</Link></strong><br />
          <span>관리형 서비스를 사용하여 클라우드에서 더 효율적으로 운영합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus5/bp04">SUS05-BP04: 하드웨어 기반 컴퓨팅 가속기 사용 최적화</Link></strong><br />
          <span>가속 컴퓨팅 인스턴스 사용을 최적화하여 워크로드의 물리적 인프라 요구사항을 줄입니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
