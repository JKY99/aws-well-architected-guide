import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps6Bp03Page() {
  return (
    <article className="doc-content">
      <h1>OPS06-BP03 — 안전한 배포 전략 채택</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        조직은 안전한 롤아웃 자동화 기능을 제공하는 CI/CD 시스템을 사용합니다.
        팀은 적절한 안전한 롤아웃 전략을 사용하도록 요구됩니다.
        블루/그린, 카나리 등의 전략으로 배포 실패의 영향 범위를 제한합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        조직이 안전한 롤아웃 자동화 기능을 제공하는 CI/CD 시스템을 사용합니다.
        팀은 적절한 안전한 롤아웃 전략을 사용하여 배포 실패 시 영향을 최소화합니다.
        자동화된 배포가 일관적이고 유익한 변경의 속도와 균형을 이룹니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 프로덕션에 한 번에 실패한 변경을 배포하여 모든 고객에게 동시에 영향을 미치는 경우</li>
        <li>모든 고객에 대해 며칠이 걸리는 긴급 릴리스를 수정해야 하는 결함이 있는 경우</li>
        <li>여러 팀의 계획과 참여가 필요한 프로덕션 릴리스로 기능 업데이트 빈도가 제한되는 경우</li>
        <li>기존 시스템을 수정하는 가변 배포로 구버전 복원을 위해 추가 수정이 필요한 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자동화된 배포가 롤아웃 속도와 일관적이고 유익한 변경 제공 간의 균형을 이룸</li>
        <li>영향 제한으로 비용이 많이 드는 배포 실패 방지</li>
        <li>팀이 실패에 효율적으로 대응하는 능력 극대화</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>승인 워크플로를 사용하여 프로덕션 롤아웃 단계를 시작합니다.</li>
        <li>AWS CodeDeploy와 같은 자동화된 배포 시스템을 사용하여 배포 옵션을 구성합니다.</li>
        <li>EC2/온프레미스, Lambda, ECS에 대한 블루/그린 배포를 활용합니다.</li>
        <li>Amazon Aurora, Amazon RDS에는 블루/그린 배포를 사용합니다.</li>
        <li>CloudWatch, CloudTrail, SNS를 사용하여 배포를 모니터링합니다.</li>
        <li>배포 후 기능, 보안, 회귀, 통합, 부하 테스트를 자동으로 실행합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeDeploy — 블루/그린, 카나리 등 안전한 배포 전략 자동화</li>
        <li>Amazon CloudWatch — 배포 모니터링</li>
        <li>AWS CloudTrail — 감사 로깅</li>
        <li>Amazon Aurora / RDS — 데이터베이스 블루/그린 배포</li>
        <li>Amazon ECS / AWS Lambda — 블루/그린 배포 지원</li>
      </ul>

      <PageNav />
    </article>
  );
}
