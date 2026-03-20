import { Link } from "react-router-dom";
import "../components/DocContent.css";

export default function AppendixOps2Page() {
  return (
    <article className="doc-content">
      <h1>OPS 2. 비즈니스 성과를 지원하기 위해 조직을 어떻게 구성합니까?</h1>

      <p>
        팀은 역할, 책임, 공유 목표를 이해하고 결정이 어떻게 내려지는지 파악해야 효율성을 극대화하고
        비즈니스 성과를 달성할 수 있습니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops2/bp01">OPS02-BP01: 리소스에 식별된 소유자가 있음</Link></strong><br />
          <span>워크로드의 리소스에는 변경 제어, 문제 해결 등의 기능을 위해 식별된 소유자가 있어야 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops2/bp02">OPS02-BP02: 프로세스 및 절차에 식별된 소유자가 있음</Link></strong><br />
          <span>개별 프로세스와 절차의 소유권, 사용 이유, 소유권이 존재하는 이유를 이해합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops2/bp03">OPS02-BP03: 운영 활동에 성과에 책임지는 식별된 소유자가 있음</Link></strong><br />
          <span>정의된 워크로드에서 특정 활동을 수행할 책임이 누구에게 있는지, 그 책임이 존재하는 이유를 이해합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops2/bp04">OPS02-BP04: 책임과 소유권을 관리하는 메커니즘이 있음</Link></strong><br />
          <span>자신의 역할과 책임을 이해하고 이것이 비즈니스 성과에 어떻게 기여하는지 파악합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops2/bp05">OPS02-BP05: 추가, 변경, 예외를 요청하는 메커니즘이 있음</Link></strong><br />
          <span>프로세스, 절차, 리소스의 소유자에게 추가, 변경, 예외를 요청할 수 있습니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops2/bp06">OPS02-BP06: 팀 간 책임이 사전에 정의되거나 협의됨</Link></strong><br />
          <span>팀들이 서로 어떻게 협력하고 지원하는지 설명하는 합의된 협약(응답 시간, SLO, SLA 등)이 있습니다.</span>
        </li>
      </ul>

    </article>
  );
}
