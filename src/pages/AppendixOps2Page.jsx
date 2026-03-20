import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps2Page() {
  return (
    <article className="doc-content">
      <h1>OPS 2 — 비즈니스 성과를 지원하기 위해 조직을 어떻게 구성합니까?</h1>

      <p>
        조직 구조는 팀이 효과적으로 협업하고 비즈니스 목표를 달성할 수 있도록 설계되어야 합니다.
        역할과 책임을 명확히 하고 팀 간 커뮤니케이션을 원활하게 합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops2/bp01">OPS02-BP01: 리소스 소유권 부여</Link></strong><br />
          <span>팀이 워크로드의 설계, 구축, 운영에 대한 책임과 권한을 갖도록 합니다. 책임 소재를 명확히 하면 품질과 효율성이 향상됩니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops2/bp02">OPS02-BP02: 프로세스 및 절차 소유권 부여</Link></strong><br />
          <span>팀원들이 필요한 자원, 교육, 지원을 요청할 수 있는 안전한 환경을 만듭니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops2/bp03">OPS02-BP03: 운영 활동 소유권 부여</Link></strong><br />
          <span>팀 간 지식 공유와 협업을 장려하여 정보 고립을 방지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops2/bp04">OPS02-BP04: 팀 구성원의 책임 인식</Link></strong><br />
          <span>AWS 및 서드파티 파트너와의 관계를 통해 필요한 역량과 지원을 확보합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops2/bp05">OPS02-BP05: 책임 식별 메커니즘 구현</Link></strong><br />
          <span>클라우드 운영에 필요한 기술 역량을 팀 내에 구축하거나 외부에서 확보합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops2/bp06">OPS02-BP06: 팀 간 책임이 사전에 정의되거나 협의됨</Link></strong><br />
          <span>팀 간 협업 및 지원 계약을 합의하고 문서화하여 명확한 커뮤니케이션 채널과 응답 기대치를 정의합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
