import { Link } from "react-router-dom";
import "../components/DocContent.css";

export default function AppendixOps11Page() {
  return (
    <article className="doc-content">
      <h1>OPS 11. 운영을 어떻게 발전시킵니까?</h1>

      <p>
        운영의 효과성과 효율성을 발전시키기 위해 거의 지속적인 점진적 개선을 위한 시간과 리소스를 투입합니다.
        학습, 공유, 지속적인 개선의 문화를 통해 운영팀이 비즈니스와 함께 성장하고 진화하도록 합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops11/bp01">OPS11-BP01: 지속적인 개선 프로세스 보유</Link></strong><br />
          <span>워크로드를 아키텍처 모범 사례에 대해 자주 분석하고, 개선 기회를 소프트웨어 개발 프로세스에서 기능과 동등한 우선순위로 부여합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops11/bp02">OPS11-BP02: 사후 인시던트 분석 수행</Link></strong><br />
          <span>인시던트 관리 프로세스에 사후 인시던트 분석을 포함시켜 근본 원인을 파악하고 향후 인시던트를 방지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops11/bp03">OPS11-BP03: 피드백 루프 구현</Link></strong><br />
          <span>즉각적인 피드백과 회고 분석을 사용하여 개선을 이끌고, 사용자 및 팀원 피드백을 캡처하는 메커니즘을 구축합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops11/bp04">OPS11-BP04: 지식 관리 수행</Link></strong><br />
          <span>팀원들이 적시에 정확한 정보에 접근할 수 있도록 검색 가능하고 최신 상태의 지식 관리 시스템을 유지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops11/bp05">OPS11-BP05: 개선 동인 정의</Link></strong><br />
          <span>원하는 결과가 지원될 때만 변경을 수행하고, 이벤트 기반 동기나 감정적 투자를 최소화하기 위해 개선 기준을 결정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops11/bp06">OPS11-BP06: 인사이트 검증</Link></strong><br />
          <span>비즈니스 소유자 및 주제 전문가와 함께 수집된 데이터의 의미에 대한 공통 이해와 합의를 구축합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops11/bp07">OPS11-BP07: 운영 메트릭 검토 수행</Link></strong><br />
          <span>비즈니스에 영향을 미치는 메트릭을 자주 검토하고, 이상을 감지하며, 데이터를 사용하여 비즈니스 결과와 목표를 지원합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops11/bp08">OPS11-BP08: 교훈 문서화 및 공유</Link></strong><br />
          <span>버전 관리 저장소를 사용하여 애플리케이션 라이브러리, 스크립팅된 절차, 절차 문서를 공유하고 팀 간에 교훈을 검토합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops11/bp09">OPS11-BP09: 개선을 위한 시간 할당</Link></strong><br />
          <span>프로세스 내에서 시간과 리소스를 할당하여 지속적인 점진적 개선이 가능하도록 합니다.</span>
        </li>
      </ul>

    </article>
  );
}
