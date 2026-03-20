import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus6Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SUS06-BP02 — 지속 가능성 개선을 신속하게 도입할 수 있는 방법 채택</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        잠재적 개선 사항을 검증하고 테스트 비용을 최소화하며 소규모 개선 사항을 제공하는 방법과
        프로세스를 채택합니다. 지속적 개선 문화와 함께 CI/CD 자동화를 활용하여 지속 가능성 개선 사항을
        신속하게 도입합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        지속 가능성 개선 사항이 백로그에 포함되고, MVP(최소 실행 가능 제품) 방식으로 테스트되며,
        CI/CD 파이프라인을 통해 신속하게 배포됩니다. 조직 전체에 지속적인 개선 역량이 내재화됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>지속 가능성 개선 사항을 백로그에 포함하지 않는 경우</li>
        <li>대규모 변경만 시도하고 소규모 점진적 개선을 무시하는 경우</li>
        <li>개선 사항을 검증하지 않고 전체 적용하는 경우</li>
        <li>팀이 지속 가능성 개선에 참여하도록 동기를 부여하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>지속 가능성 개선 사항의 빠른 검증 및 적용</li>
        <li>소규모 테스트를 통한 리스크 최소화</li>
        <li>지속적 개선 문화 구축으로 장기적 지속 가능성 향상</li>
        <li>자동화된 파이프라인을 통한 효율적인 개선 사항 배포</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>지속 가능성 개선 사항을 제품 백로그에 포함하고 우선순위를 부여합니다.</li>
        <li>MVP 접근 방식으로 잠재적 개선 사항을 소규모로 테스트하여 효과를 검증합니다.</li>
        <li>CI/CD 파이프라인을 구성하여 지속 가능성 개선 사항을 자동으로 테스트하고 배포합니다.</li>
        <li>AWS Skill Builder와 같은 교육 프로그램을 통해 팀의 지속 가능성 역량을 강화합니다.</li>
        <li>지속 가능성 개선 성과에 인센티브를 제공하여 팀 참여를 촉진합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodePipeline — 자동화된 CI/CD 파이프라인</li>
        <li>AWS CodeBuild — 자동화된 빌드 및 테스트</li>
        <li>AWS CodeDeploy — 자동화된 배포 관리</li>
        <li>AWS Skill Builder — 지속 가능성 교육 프로그램</li>
        <li>AWS Well-Architected Tool — 지속 가능성 개선 사항 추적</li>
      </ul>

      <PageNav />
    </article>
  );
}
