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
          <strong>OPS02-BP01:</strong> 소유권 부여<br />
          <span>팀이 워크로드의 설계, 구축, 운영에 대한 책임과 권한을 갖도록 합니다. 책임 소재를 명확히 하면 품질과 효율성이 향상됩니다.</span>
        </li>
        <li>
          <strong>OPS02-BP02:</strong> 팀원이 지원을 요청할 수 있도록 권한 부여<br />
          <span>팀원들이 필요한 자원, 교육, 지원을 요청할 수 있는 안전한 환경을 만듭니다.</span>
        </li>
        <li>
          <strong>OPS02-BP03:</strong> 조직 내 사일로 피하기<br />
          <span>팀 간 지식 공유와 협업을 장려하여 정보 고립을 방지합니다.</span>
        </li>
        <li>
          <strong>OPS02-BP04:</strong> 파트너 및 공급업체 관계 구축<br />
          <span>AWS 및 서드파티 파트너와의 관계를 통해 필요한 역량과 지원을 확보합니다.</span>
        </li>
        <li>
          <strong>OPS02-BP05:</strong> 클라우드 역량 확보<br />
          <span>클라우드 운영에 필요한 기술 역량을 팀 내에 구축하거나 외부에서 확보합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
