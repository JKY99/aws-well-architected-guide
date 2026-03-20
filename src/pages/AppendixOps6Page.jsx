import { Link } from "react-router-dom";
import "../components/DocContent.css";

export default function AppendixOps6Page() {
  return (
    <article className="doc-content">
      <h1>OPS 6. 배포 위험을 어떻게 완화합니까?</h1>

      <p>
        품질에 대한 빠른 피드백을 제공하고 원하는 결과를 얻지 못한 변경으로부터 신속하게 복구할 수 있는
        접근 방식을 채택합니다. 배포 실패 시 복구 계획을 사전에 준비하고, 테스트 및 자동화를 통해
        배포 위험을 최소화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops6/bp01">OPS06-BP01: 실패한 변경 계획 수립</Link></strong><br />
          <span>변경이 실패할 경우를 대비한 상세한 복구 계획을 준비하고, 릴리스 크기를 줄여 잠재적 영향을 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops6/bp02">OPS06-BP02: 배포 테스트</Link></strong><br />
          <span>프로덕션과 유사한 사전 프로덕션 환경에서 배포 절차를 광범위하게 테스트하여 프로덕션 영향을 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops6/bp03">OPS06-BP03: 안전한 배포 전략 채택</Link></strong><br />
          <span>블루/그린 배포, 카나리 배포 등 안전한 롤아웃 전략을 사용하여 배포 실패의 영향 범위를 제한합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops6/bp04">OPS06-BP04: 테스트 및 롤백 자동화</Link></strong><br />
          <span>자동화된 테스트와 롤백 전략을 CI/CD 파이프라인에 통합하여 실패 시 자동으로 이전 상태로 복원합니다.</span>
        </li>
      </ul>

    </article>
  );
}
