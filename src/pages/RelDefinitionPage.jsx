import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function RelDefinitionPage() {
  return (
    <article className="doc-content">
      <h1>안정성 — 정의</h1>

      <p>
        안정성 기둥은 워크로드가 의도한 기능을 올바르고 일관되게 수행하는 능력을 포괄합니다.
        여기에는 전체 수명주기에 걸쳐 워크로드를 운영하고 테스트하는 능력이 포함됩니다.
      </p>

      <h2>4가지 모범 사례 영역</h2>
      <ul>
        <li><strong>기반 (Foundations)</strong></li>
        <li><strong>워크로드 아키텍처 (Workload Architecture)</strong></li>
        <li><strong>변경 관리 (Change Management)</strong></li>
        <li><strong>장애 관리 (Failure Management)</strong></li>
      </ul>

      <h2>가용성 요구사항 이해</h2>

      <p>
        애플리케이션의 가용성을 단일 목표로 생각하기 쉽지만, 실제로는 애플리케이션의 다양한 측면이
        서로 다른 요구사항을 가집니다.
      </p>

      <ul>
        <li>일부 시스템은 기존 데이터 조회보다 새 데이터 수신을 우선시합니다.</li>
        <li>일부 서비스는 특정 시간대에만 높은 가용성이 필요합니다.</li>
        <li>
          <strong>데이터 플레인</strong> (실시간 서비스 제공: EC2, RDS 읽기/쓰기 등)은
          일반적으로 <strong>컨트롤 플레인</strong> (환경 구성: 인스턴스 시작, DB 생성 등)보다
          더 높은 가용성 목표를 가집니다.
        </li>
      </ul>

      <div className="doc-note">
        <div className="doc-note-title">모범 사례</div>
        <p>
          RTO, RPO, 가용성을 정의한 비즈니스 중요도 프레임워크를 구축하고,
          구현 담당자가 비즈니스 영향을 이해하도록 해야 합니다.
        </p>
      </div>

      <PageNav />
    </article>
  );
}
