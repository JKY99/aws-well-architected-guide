import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps2Bp02Page() {
  return (
    <article className="doc-content">
      <h1>OPS02-BP02 — 프로세스 및 절차 소유권 부여</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        운영 프로세스와 절차에도 명확한 소유자를 지정합니다.
        프로세스 소유자는 해당 프로세스가 최신 상태로 유지되고,
        팀이 올바르게 따르며, 지속적으로 개선되도록 책임집니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 운영 프로세스(배포 절차, 장애 대응 플레이북, 온보딩 절차 등)에
        소유자가 지정되어 있습니다. 소유자는 프로세스를 정기적으로 검토하고
        개선하며, 팀에 교육합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>운영 절차가 문서화되지 않거나 소유자 없이 방치되는 경우</li>
        <li>프로세스 문서가 업데이트되지 않아 현실과 괴리되는 경우</li>
        <li>특정 개인만 프로세스를 알고 있어 버스 팩터(bus factor)가 높은 경우</li>
        <li>프로세스 개선에 대한 책임이 없어 비효율이 지속되는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>운영 절차의 일관성과 최신성 보장</li>
        <li>지식 이전 용이로 팀 단일 장애점 제거</li>
        <li>프로세스 지속적 개선으로 운영 효율성 향상</li>
        <li>신규 팀원 온보딩 시간 단축</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>모든 운영 절차 문서에 소유자, 최종 업데이트 날짜, 검토 주기를 명시합니다.</li>
        <li>Wiki 또는 문서 관리 시스템에서 소유자 정보를 추적합니다.</li>
        <li>분기별 프로세스 검토를 일정으로 잡고 소유자가 검토를 수행합니다.</li>
        <li>런북(runbook)과 플레이북을 버전 관리 시스템에서 관리합니다.</li>
        <li>프로세스 변경 시 소유자가 팀에 변경 사항을 전달하는 프로세스를 수립합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Run Command — 표준화된 운영 절차 실행</li>
        <li>AWS Systems Manager Automation — 운영 절차 자동화</li>
        <li>Amazon S3 — 운영 문서 중앙 저장소</li>
      </ul>

      <PageNav />
    </article>
  );
}
