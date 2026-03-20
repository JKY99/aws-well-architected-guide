import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel13Page() {
  return (
    <article className="doc-content">
      <h1>REL 13 — 재해 복구(DR)를 어떻게 계획합니까?</h1>

      <p>
        중요한 데이터를 백업하고 재해 복구 전략의 일환으로 여러 위치에 중복된 워크로드 구성
        요소를 갖춥니다. 재해 복구 대상 사이트 또는 리전으로 장애 조치하는 워크로드를 정기적으로
        테스트하여 RTO 및 RPO를 충족하는지 확인합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel13/bp01">REL13-BP01: 다운타임 및 데이터 손실에 대한 복구 목표 정의</Link></strong><br />
          <span>모든 워크로드에 기술적 고려사항과 비즈니스 영향을 기반으로 지정된 RTO와 RPO를 정의합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel13/bp02">REL13-BP02: 복구 목표를 충족하는 정의된 복구 전략 사용</Link></strong><br />
          <span>각 워크로드에 대해 정의되고 구현된 DR 전략을 통해 DR 목표를 달성합니다. 백업/복원, 파일럿 라이트, 웜 스탠바이, 멀티 리전 액티브/액티브 등의 재사용 가능한 패턴을 활용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel13/bp03">REL13-BP03: DR 구현을 검증하기 위한 재해 복구 구현 테스트</Link></strong><br />
          <span>복구 사이트로의 장애 조치를 정기적으로 테스트하여 올바르게 작동하고 RTO 및 RPO 요구사항을 충족하는지 확인합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel13/bp04">REL13-BP04: DR 사이트 또는 리전의 구성 드리프트 관리</Link></strong><br />
          <span>재해 복구 사이트의 구성과 데이터가 기본 사이트와 동등한 상태를 유지하도록 하여 필요 시 신속하고 완전한 복구를 가능하게 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel13/bp05">REL13-BP05: 복구 자동화</Link></strong><br />
          <span>잘 문서화되고 표준화되어 철저하게 테스트된 복구 프로세스 자동화 워크플로를 구현합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
