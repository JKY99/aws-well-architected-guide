import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel13Page() {
  return (
    <article className="doc-content">
      <h1>REL 13 — 재해 복구(DR)를 어떻게 계획합니까?</h1>

      <p>
        비즈니스 요구사항에 맞는 재해 복구 전략을 수립하고 정기적으로 테스트하여
        실제 재해 발생 시 RTO/RPO 목표를 달성할 수 있도록 합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel13/bp01">REL13-BP01: 다운타임 및 데이터 손실에 대한 복구 목표 정의</Link></strong><br />
          <span>비즈니스 영향 분석을 바탕으로 각 워크로드의 RTO(복구 시간 목표)와 RPO(복구 시점 목표)를 정의합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel13/bp02">REL13-BP02: 복구 목표를 충족하는 복구 전략 사용</Link></strong><br />
          <span>백업/복원, 파일럿 라이트, 웜 스탠바이, 멀티 사이트 액티브-액티브 중 RTO/RPO에 맞는 DR 전략을 선택하고 구현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel13/bp03">REL13-BP03: DR 구현을 검증하기 위한 테스트</Link></strong><br />
          <span>정기적인 DR 훈련을 통해 복구 절차가 실제로 작동하는지 검증하고, RTO/RPO 목표 달성 여부를 측정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel13/bp04">REL13-BP04: DR 사이트 또는 리전의 구성 드리프트 관리</Link></strong><br />
          <span>AWS Config, CloudFormation StackSets를 사용하여 DR 환경이 프로덕션 환경과 동기화된 상태를 유지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel13/bp05">REL13-BP05: 복구 자동화</Link></strong><br />
          <span>AWS Systems Manager Automation, AWS Lambda를 사용하여 수동 복구 절차를 자동화하고 RTO를 단축합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
