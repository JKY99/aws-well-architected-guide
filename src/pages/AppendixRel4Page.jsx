import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel4Page() {
  return (
    <article className="doc-content">
      <h1>REL 4 — 분산 시스템 간 상호작용을 어떻게 설계합니까?</h1>

      <p>
        분산 시스템 구성 요소 간의 상호작용이 일시적인 오류, 네트워크 지연,
        의존 서비스 장애에 영향받지 않도록 설계합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel4/bp01">REL04-BP01: 동기식 요청에서 완만한 저하 구현</Link></strong><br />
          <span>의존 서비스가 느리거나 장애가 발생해도 핵심 기능은 유지되도록 폴백 동작을 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel4/bp02">REL04-BP02: 요청 스로틀링 및 재시도 처리</Link></strong><br />
          <span>지수 백오프(Exponential Backoff)와 지터(Jitter)를 적용한 재시도 로직을 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel4/bp03">REL04-BP03: 비동기식 상호작용 선호</Link></strong><br />
          <span>Amazon SQS, SNS, EventBridge를 사용하여 서비스를 비동기적으로 연결합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel4/bp04">REL04-BP04: 멱등성 구현</Link></strong><br />
          <span>같은 요청이 여러 번 처리되어도 결과가 동일하도록 멱등성을 보장합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel4/bp05">REL04-BP05: 서비스 간 트랜잭션 관리</Link></strong><br />
          <span>분산 트랜잭션의 복잡성을 이해하고 SAGA 패턴 등을 활용하여 데이터 일관성을 유지합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
