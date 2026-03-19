import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp07Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP07 — 팀워크 지원 관행 구현</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        팀이 효과적으로 협력하고 작업 흐름을 개선할 수 있는 관행과 도구를 구현합니다.
        코드 리뷰, 페어 프로그래밍, 정기적인 회고 등의 팀워크 관행은 코드 품질과 팀 역량을 높입니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        팀이 효과적인 코드 리뷰 프로세스를 통해 코드 품질을 유지합니다.
        정기적인 회고로 팀 프로세스를 지속적으로 개선합니다.
        지식이 특정 개인에게 집중되지 않고 팀 전체에 공유됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>코드 리뷰 없이 직접 병합하여 버그나 보안 취약점이 운영에 배포되는 경우</li>
        <li>회고를 진행하지 않아 팀 문제가 반복되는 경우</li>
        <li>지식이 특정 개인에게 집중되어 그 사람이 없으면 팀이 멈추는 경우</li>
        <li>팀원의 기술 역량 개발에 투자하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>코드 리뷰를 통한 버그와 보안 취약점 조기 발견</li>
        <li>팀 전체의 코드베이스 이해 향상</li>
        <li>지속적인 프로세스 개선으로 팀 효율성 향상</li>
        <li>팀원 기술 성장으로 인한 사기 향상과 이직률 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>모든 변경에 최소 한 명의 코드 리뷰를 요구하는 브랜치 보호 규칙을 설정합니다.</li>
        <li>스프린트 또는 릴리스 후 회고(Retrospective) 세션을 정기적으로 진행합니다.</li>
        <li>지식 공유를 위한 기술 세미나, 런치앤런, 페어 프로그래밍을 장려합니다.</li>
        <li>주요 시스템에 대한 문서화를 팀의 완료 조건(Definition of Done)에 포함합니다.</li>
        <li>온콜 로테이션으로 팀 전체가 운영 경험을 축적하도록 합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeCommit 풀 리퀘스트 — 코드 리뷰 프로세스 지원</li>
        <li>AWS CodeGuru Reviewer — AI 기반 코드 리뷰 자동화</li>
        <li>AWS Training and Certification — 팀 기술 역량 개발</li>
      </ul>

      <PageNav />
    </article>
  );
}
