import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Page() {
  return (
    <article className="doc-content">
      <h1>REL 8 — 변경 사항을 어떻게 구현합니까?</h1>

      <p>
        운영 중인 시스템에 대한 변경을 안전하게 관리하여
        변경으로 인한 장애 위험을 최소화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel8/bp01">REL08-BP01: 배포와 같은 표준 활동에 런북 사용</Link></strong><br />
          <span>런북은 특정 결과를 달성하기 위해 설계된 사전 정의된 절차입니다. 워크로드 배포, 패치, DNS 수정 등 표준 활동을 수동 또는 자동으로 수행하는 데 사용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel8/bp02">REL08-BP02: 기능 테스트를 배포의 일부로 통합</Link></strong><br />
          <span>단위 테스트 및 통합 테스트를 자동화하여 코드가 예상대로 동작하는지 검증합니다. 이러한 테스트를 배포 프로세스에 통합하고 테스트 실패 시 배포를 중단합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel8/bp03">REL08-BP03: 복원력 테스트를 배포의 일부로 통합</Link></strong><br />
          <span>복원력 테스트를 통해 프로덕션에서 성능 저하를 견디는 시스템의 능력에 대한 신뢰도를 높입니다. 실험을 통해 장애로 이어질 수 있는 약점을 파악합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel8/bp04">REL08-BP04: 불변 인프라를 사용하여 배포</Link></strong><br />
          <span>불변 인프라 모델에서는 운영 중인 인프라 리소스에 대한 업데이트, 보안 패치 또는 구성 변경이 직접 이루어지지 않습니다. 변경이 필요할 때 새로운 인프라에 아키텍처를 구축합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel8/bp05">REL08-BP05: 자동화를 사용하여 변경 배포</Link></strong><br />
          <span>광범위한 사전 프로덕션 테스트, 자동 롤백, 단계적 프로덕션 배포를 통해 릴리스 프로세스에 자동화된 배포 안전성을 구축합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
