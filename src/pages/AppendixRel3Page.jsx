import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel3Page() {
  return (
    <article className="doc-content">
      <h1>REL 3 — 워크로드 서비스 아키텍처를 어떻게 설계합니까?</h1>

      <p>
        서비스 지향 아키텍처(SOA) 또는 마이크로서비스 아키텍처를 활용하여 고도로 확장 가능하고
        신뢰할 수 있는 워크로드를 구축합니다. SOA는 소프트웨어 컴포넌트를 서비스 인터페이스를 통해
        재사용 가능하게 만들고, 마이크로서비스 아키텍처는 컴포넌트를 더 작고 단순하게 추가로 세분화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel3/bp01">REL03-BP01: 워크로드 세분화 방법 선택</Link></strong><br />
          <span>워크로드가 지원 가능하고, 확장 가능하며, 가능한 한 느슨하게 결합되도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel3/bp02">REL03-BP02: 특정 비즈니스 도메인 및 기능에 집중하는 서비스 구축</Link></strong><br />
          <span>엔지니어와 비즈니스 이해관계자가 공동으로 바운디드 컨텍스트를 정의하고 특정 비즈니스 기능을 수행하는 서비스로 시스템을 설계합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel3/bp03">REL03-BP03: API별 서비스 계약 제공</Link></strong><br />
          <span>API 소비자와 생산자 모두 공통 API 계약을 따를 때 배포된 변경 사항이 전체 시스템의 안정성을 방해하지 않도록 합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
