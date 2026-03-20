import { Link } from "react-router-dom";
import "../components/DocContent.css";

export default function AppendixOps4Page() {
  return (
    <article className="doc-content">
      <h1>OPS 4. 워크로드의 상태를 이해할 수 있도록 워크로드를 어떻게 설계합니까?</h1>

      <p>
        워크로드에서 관찰 가능성을 구현하려면 워크로드의 상태를 이해하고 비즈니스 요구 사항을 기반으로
        데이터 기반 결정을 내리는 것부터 시작합니다. KPI 정의, 애플리케이션 텔레메트리, 사용자 경험
        텔레메트리, 의존성 텔레메트리, 분산 추적을 구현하여 워크로드에 대한 통합적인 뷰를 제공합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li><Link to="/appendix/ops4/bp01">OPS04-BP01 — 핵심 성과 지표 파악</Link></li>
        <li><Link to="/appendix/ops4/bp02">OPS04-BP02 — 애플리케이션 원격 분석 구현</Link></li>
        <li><Link to="/appendix/ops4/bp03">OPS04-BP03 — 사용자 경험 원격 분석 구현</Link></li>
        <li><Link to="/appendix/ops4/bp04">OPS04-BP04 — 의존성 원격 분석 구현</Link></li>
        <li><Link to="/appendix/ops4/bp05">OPS04-BP05 — 분산 추적 구현</Link></li>
      </ul>
    </article>
  );
}
