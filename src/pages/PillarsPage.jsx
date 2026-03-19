import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function PillarsPage() {
  return (
    <article className="doc-content">
      <h1>Framework의 기둥들</h1>

      <p>
        AWS에서 소프트웨어 시스템을 구축하는 것은 건물을 짓는 것과 비슷합니다. 기초가 튼튼하지 않으면 구조적 문제가 건물의 무결성과 기능을 훼손할 수 있습니다. Amazon Web Services(AWS)에서 기술 솔루션을 구축할 때 운영 우수성, 보안, 안정성, 성능 효율성, 비용 최적화, 지속 가능성의 여섯 가지 기둥을 무시하면 기대와 요구사항을 충족하는 시스템을 구축하기가 더욱 어려워집니다.
      </p>

      <p>
        이 기둥들을 아키텍처에 통합하면 안정적이고 효율적인 시스템을 구축하는 데 도움이 됩니다. 이를 통해 기능 요구사항과 같은 다른 설계 측면에 집중할 수 있습니다.
      </p>

      <h2>여섯 가지 기둥</h2>

      <p>
        AWS Well-Architected Framework는 클라우드에서 워크로드를 설계하고 실행하기 위한 핵심 개념, 설계 원칙, 아키텍처 모범 사례를 설명합니다. 몇 가지 기본 질문에 답함으로써 자신의 아키텍처가 클라우드 모범 사례와 얼마나 잘 부합하는지 파악하고, 개선을 위한 지침을 얻을 수 있습니다.
      </p>

      <ul>
        <li>
          <strong><Link to="/pillars/operational-excellence">운영 우수성 (Operational Excellence)</Link></strong> — 개발을 지원하고 워크로드를 효과적으로 실행하며, 운영에 대한 통찰력을 확보하고, 비즈니스 가치를 제공하기 위해 지원 프로세스와 절차를 지속적으로 개선하는 능력.
        </li>
        <li>
          <strong><Link to="/pillars/security">보안 (Security)</Link></strong> — 클라우드 기술을 활용하여 보안을 향상시키고 데이터, 시스템, 자산을 보호하는 능력.
        </li>
        <li>
          <strong><Link to="/pillars/reliability">안정성 (Reliability)</Link></strong> — 워크로드가 예상된 시점에 의도한 기능을 올바르고 일관되게 수행하는 능력. 전체 수명 주기 동안 워크로드를 운영하고 테스트하는 능력 포함.
        </li>
        <li>
          <strong><Link to="/pillars/performance-efficiency">성능 효율성 (Performance Efficiency)</Link></strong> — 시스템 요구사항을 충족하기 위해 컴퓨팅 리소스를 효율적으로 사용하고, 수요 변화와 기술 진화에 따라 그 효율성을 유지하는 능력.
        </li>
        <li>
          <strong><Link to="/pillars/cost-optimization">비용 최적화 (Cost Optimization)</Link></strong> — 최저 비용으로 비즈니스 가치를 제공하는 시스템을 운영하는 능력.
        </li>
        <li>
          <strong><Link to="/pillars/sustainability">지속 가능성 (Sustainability)</Link></strong> — 지속 가능성 기둥은 환경적 영향, 특히 에너지 소비와 효율성에 초점을 맞춥니다. 아키텍트가 리소스 사용량을 줄이기 위한 직접적인 조치를 취할 수 있도록 중요한 레버 역할을 합니다.
        </li>
      </ul>

      <h2>요약</h2>

      <p>
        AWS Well-Architected Framework는 효과적인 클라우드 아키텍처의 초석이 되는 여섯 가지 기본 기둥 위에 구축되어 있습니다. 견고한 기초가 필요한 건물처럼, 기술 솔루션도 안정성과 효율성을 보장하기 위해 이 여섯 가지 기둥 모두를 다루어야 합니다. 이 기둥들을 아키텍처 설계에 통합하면 기본적인 아키텍처 무결성을 유지하면서 기대와 요구사항을 충족하는 안정적이고 효율적인 시스템을 구축할 수 있습니다. 이를 통해 아키텍트와 팀이 기능 요구사항 및 기타 설계 측면에 집중할 수 있게 됩니다.
      </p>

      <PageNav />
    </article>
  );
}
