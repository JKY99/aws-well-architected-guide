import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel4Page() {
  return (
    <article className="doc-content">
      <h1>REL 4 — 장애를 방지하기 위해 분산 시스템의 상호작용을 어떻게 설계합니까?</h1>

      <p>
        분산 시스템은 네트워크 지연이나 데이터 손실에도 불구하고 효과적으로 운영되도록 설계해야 합니다.
        의존성에서 발생한 장애가 전체 시스템으로 전파되는 것을 방지하여
        MTBF(평균 장애 간격)를 개선합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel4/bp01">REL04-BP01: 의존하는 분산 시스템의 종류 파악</Link></strong><br />
          <span>동기, 비동기 및 배치 의존성과 효과적으로 상호작용하는 워크로드를 설계합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel4/bp02">REL04-BP02: 느슨하게 결합된 의존성 구현</Link></strong><br />
          <span>구성 요소 수준에서 장애 표면적을 최소화하여 문제를 진단하고 해결하기 쉽게 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel4/bp03">REL04-BP03: 일정한 작업 수행</Link></strong><br />
          <span>부하 조건이 크게 변할 때 발생하는 장애를 방지하기 위해 시스템이 일정한 작업을 수행하도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel4/bp04">REL04-BP04: 변경 작업을 멱등적으로 만들기</Link></strong><br />
          <span>모든 컴포넌트와 서비스에 걸쳐 멱등성을 보장하기 위한 일관되고 잘 문서화된 접근 방식을 갖습니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
