import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps7Page() {
  return (
    <article className="doc-content">
      <h1>OPS 7 — 워크로드를 지원할 준비가 되어 있는지 어떻게 알 수 있습니까?</h1>

      <p>
        워크로드, 프로세스, 절차, 인력의 운영 준비 상태를 평가하여 워크로드와 관련된 운영 위험을 파악합니다.
        워크로드를 시작하고 변경사항을 배포하기 위한 준비 요건을 이해하고,
        워크로드를 지원하는 데 필요한 인원과 절차, 도구를 보유합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops7/bp01">OPS07-BP01: 인력 역량 확보</Link></strong><br />
          <span>워크로드를 지원하기 위해 충분히 훈련된 인원이 워크로드 가용 시간 동안 지원할 수 있도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops7/bp02">OPS07-BP02: 운영 준비 검토의 일관성 확보</Link></strong><br />
          <span>운영 준비 검토(ORR) 체크리스트를 보유하고, 워크로드 시작 전과 수명 주기 동안 정기적으로 검토합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops7/bp03">OPS07-BP03: 절차 수행을 위한 런북 사용</Link></strong><br />
          <span>워크로드 작업을 수행하기 위한 단계별 가이드 컬렉션을 구비하여 일관된 운영을 보장합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops7/bp04">OPS07-BP04: 문제 조사를 위한 플레이북 사용</Link></strong><br />
          <span>일반적인 인시던트에 대한 플레이북을 구비하여 팀원들이 일관된 방식으로 문제를 조사할 수 있도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops7/bp05">OPS07-BP05: 시스템 및 변경 배포에 대한 정보에 기반한 결정</Link></strong><br />
          <span>워크로드에 변경을 배포할 때 정보에 기반한 결정을 내리고 변경이 거버넌스를 준수하도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops7/bp06">OPS07-BP06: 프로덕션 워크로드에 대한 지원 계획 수립</Link></strong><br />
          <span>프로덕션 워크로드가 의존하는 소프트웨어 및 서비스에 대한 지원 계획을 수립하고 문서화합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
