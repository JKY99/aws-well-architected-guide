import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel3Page() {
  return (
    <article className="doc-content">
      <h1>REL 3 — 워크로드 서비스 아키텍처를 어떻게 설계합니까?</h1>

      <p>
        워크로드를 여러 소형 컴포넌트로 분해하여 개별 컴포넌트의 장애가
        전체 워크로드에 미치는 영향을 최소화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel3/bp01">REL03-BP01: 서비스 지향 아키텍처(SOA) 선택</Link></strong><br />
          <span>워크로드를 느슨하게 결합된 서비스로 분해하여 각 서비스가 독립적으로 확장하고 장애를 처리할 수 있도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel3/bp02">REL03-BP02: 마이크로서비스 아키텍처 선택</Link></strong><br />
          <span>단일 비즈니스 기능을 담당하는 소형 서비스로 분해하여 독립적인 배포와 확장을 가능하게 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel3/bp03">REL03-BP03: 서비스 간 결합도 줄이기</Link></strong><br />
          <span>동기식 직접 호출 대신 메시지 큐, 이벤트 버스를 사용하여 서비스 간 결합도를 낮춥니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel3/bp04">REL03-BP04: 내결함성 시스템 구축</Link></strong><br />
          <span>서킷 브레이커, 재시도 로직, 타임아웃을 구현하여 일시적인 오류에 대한 복원력을 확보합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
