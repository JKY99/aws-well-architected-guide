import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps2Bp02Page() {
  return (
    <article className="doc-content">
      <h1>OPS02-BP02 — 프로세스 및 절차에 식별된 소유자가 있음</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 높습니다.</p>
      </div>

      <p>
        개별 프로세스와 절차의 소유권, 사용 이유, 소유권이 존재하는 이유를 이해합니다.
        특정 프로세스와 절차가 사용되는 이유를 이해하면 개선 기회를 식별하는 데 도움이 됩니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        조직에는 운영 작업을 위한 잘 정의되고 유지 관리되는 프로세스 및 절차 집합이 있습니다.
        프로세스와 절차는 중앙 위치에 저장되고, 팀 구성원이 사용 가능하며, 명확하게 지정된 소유권에 의해 자주 업데이트됩니다.
        가능한 경우 코드(스크립트, 템플릿, 자동화)로 구현됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>프로세스가 문서화되지 않고 격리된 운영자 워크스테이션에 단편적인 스크립트만 존재하는 경우</li>
        <li>스크립트 사용에 대한 지식이 소수의 개인 또는 비공식적인 팀 지식으로만 보유되는 경우</li>
        <li>업데이트가 필요한 레거시 프로세스의 소유권이 불명확하고 원래 작성자가 더 이상 조직에 없는 경우</li>
        <li>프로세스와 스크립트를 찾을 수 없어 인시던트 시 사용할 수 없는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드 관리를 위한 운영 노력을 강화합니다.</li>
        <li>새 팀 구성원이 더 빨리 효과적으로 활동할 수 있습니다.</li>
        <li>인시던트 완화 시간을 단축합니다.</li>
        <li>다른 팀 구성원과 팀 전반에 걸쳐 일관된 프로세스 사용을 가능하게 합니다.</li>
        <li>팀이 반복 가능한 프로세스로 확장할 수 있습니다.</li>
        <li>팀 간 워크로드 책임 이전의 영향을 완화합니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>소유권 식별: 작업 명세, 소유자 지정, 기술자가 올바른 권한과 도구로 작업을 수행할 수 있는지 검증합니다.</li>
        <li>피드백 수집: 작업을 수행하는 팀 구성원이 개선을 위한 세부 피드백을 제공합니다.</li>
        <li>메타데이터 캡처: AWS Systems Manager 문서, AWS Lambda를 사용하고 태그, 리소스 그룹, AWS Organizations 태깅 정책으로 소유권을 캡처합니다.</li>
        <li>코드로 발전: 절차를 실행 가능한 코드(AWS Lambda, CloudFormation, Systems Manager 자동화 문서)로 변환합니다.</li>
        <li>버전 관리: 적절한 리포지토리에서 코드를 유지합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Automation</li>
        <li>AWS Lambda</li>
        <li>AWS CloudFormation</li>
        <li>AWS Organizations</li>
        <li>Amazon Q Business</li>
        <li>관련 모범 사례: OPS02-BP01, OPS02-BP04, OPS11-BP04 지식 관리 수행</li>
      </ul>

      <PageNav />
    </article>
  );
}
