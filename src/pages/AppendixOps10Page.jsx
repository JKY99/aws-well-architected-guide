import { Link } from "react-router-dom";
import "../components/DocContent.css";

export default function AppendixOps10Page() {
  return (
    <article className="doc-content">
      <h1>OPS 10. 워크로드 및 운영 이벤트를 어떻게 관리합니까?</h1>

      <p>
        워크로드에 대한 장애를 최소화하기 위해 이벤트에 대응하는 절차를 준비하고 검증합니다.
        이벤트, 인시던트, 문제를 효과적으로 관리하기 위한 프로세스를 수립하고 비즈니스 영향에 따라
        우선순위를 결정합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops10/bp01">OPS10-BP01: 이벤트, 인시던트, 문제 관리를 위한 프로세스 사용</Link></strong><br />
          <span>잘 문서화된 프로세스를 통해 운영 이벤트, 인시던트, 문제를 일관되게 관리하고 서비스 신뢰성을 유지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops10/bp02">OPS10-BP02: 알림별 프로세스 보유</Link></strong><br />
          <span>모든 알림이 명확한 소유권과 에스컬레이션 경로가 있는 잘 정의된 대응 계획을 시작하도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops10/bp03">OPS10-BP03: 비즈니스 영향에 따른 운영 이벤트 우선순위 결정</Link></strong><br />
          <span>잠재적인 비즈니스 영향에 따라 운영 이벤트에 대한 대응을 우선순위화하여 효율적이고 효과적인 대응을 보장합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops10/bp04">OPS10-BP04: 에스컬레이션 경로 정의</Link></strong><br />
          <span>구조화되고 효율적인 프로세스를 통해 인시던트를 적절한 인원에게 에스컬레이션하여 대응 시간과 영향을 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops10/bp05">OPS10-BP05: 서비스 영향 이벤트에 대한 고객 커뮤니케이션 계획 정의</Link></strong><br />
          <span>서비스 영향 이벤트 중 고객과 이해관계자에게 효과적으로 정보를 전달하는 커뮤니케이션 계획을 수립합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops10/bp06">OPS10-BP06: 대시보드를 통한 상태 전달</Link></strong><br />
          <span>대시보드를 통해 다양한 이해관계자에게 시스템 및 비즈니스 메트릭에 대한 포괄적인 뷰를 제공합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops10/bp07">OPS10-BP07: 이벤트에 대한 자동화된 대응</Link></strong><br />
          <span>자동화를 통해 이벤트 대응을 가속화하고 인간 오류를 줄여 일관되고 신뢰할 수 있는 운영 이벤트 처리를 실현합니다.</span>
        </li>
      </ul>

    </article>
  );
}
