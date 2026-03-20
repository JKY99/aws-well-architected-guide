import { Link } from "react-router-dom";
import "../components/DocContent.css";

export default function AppendixOps1Page() {
  return (
    <article className="doc-content">
      <h1>OPS 1. 우선순위를 어떻게 결정합니까?</h1>

      <p>
        모든 구성원이 비즈니스 성공을 지원하는 자신의 역할을 이해해야 합니다.
        공유 목표를 설정하면 리소스에 대한 우선순위가 결정되고, 이를 통해 운영 노력의 이점을 극대화할 수 있습니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops1/bp01">OPS01-BP01: 외부 고객 요구 사항 평가</Link></strong><br />
          <span>비즈니스, 개발, 운영 팀 등 주요 이해관계자를 참여시켜 외부 고객 요구 사항에 집중할 영역을 결정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops1/bp02">OPS01-BP02: 내부 고객 요구 사항 평가</Link></strong><br />
          <span>내부 고객 요구 사항에 집중할 영역을 결정할 때 비즈니스, 개발, 운영 팀 등 주요 이해관계자를 참여시킵니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops1/bp03">OPS01-BP03: 거버넌스 요구 사항 평가</Link></strong><br />
          <span>거버넌스는 회사가 비즈니스 목표를 달성하기 위해 사용하는 정책, 규칙, 프레임워크의 집합입니다. 워크로드에 조직 거버넌스 요구 사항을 통합합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops1/bp04">OPS01-BP04: 규정 준수 요구 사항 평가</Link></strong><br />
          <span>규제, 산업, 내부 규정 준수 요구 사항은 조직 우선순위를 정의하는 중요한 동인입니다. 규정 준수 프레임워크를 아키텍처 선택에 통합합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops1/bp05">OPS01-BP05: 위협 환경 평가</Link></strong><br />
          <span>비즈니스에 대한 위협(경쟁, 비즈니스 리스크, 운영 리스크, 정보 보안 위협 등)을 평가하고 리스크 레지스트리에 최신 정보를 유지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops1/bp06">OPS01-BP06: 이점과 리스크를 관리하면서 트레이드오프 평가</Link></strong><br />
          <span>여러 이해관계자의 경쟁적인 이익으로 인해 우선순위 설정이 어려울 수 있습니다. 명확한 의사결정 거버넌스 프레임워크를 통해 이점과 리스크를 균형 있게 평가합니다.</span>
        </li>
      </ul>

    </article>
  );
}
