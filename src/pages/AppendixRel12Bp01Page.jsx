import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel12Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL12-BP01 — 플레이북을 사용하여 장애 조사</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 장애 발생 시 체계적인 조사가 어려워 복구 시간이 늘어납니다.</p>
      </div>
      <p>
        플레이북(playbook)은 장애 발생 시 원인을 체계적으로 조사하고 복구하기 위한
        단계별 절차서입니다. 사전에 잘 작성된 플레이북은 담당자가 장애 상황에서도
        침착하고 효율적으로 조사를 수행할 수 있도록 돕습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 주요 장애 유형에 대한 플레이북이 존재하며, 운영팀이 플레이북을 숙지하고
        장애 발생 시 즉시 활용할 수 있습니다. 플레이북은 정기적으로 검토하고 업데이트합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>플레이북 없이 장애 발생 시 즉흥적으로 대응하는 경우</li>
        <li>플레이북이 존재하지만 최신 아키텍처를 반영하지 않는 경우</li>
        <li>플레이북이 특정 개인만 알고 있어 그 사람이 없으면 사용할 수 없는 경우</li>
        <li>플레이북을 게임 데이나 실습을 통해 검증하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 대응의 일관성과 효율성 향상</li>
        <li>경험이 적은 팀원도 체계적으로 장애를 조사할 수 있음</li>
        <li>복구 시간 단축 및 인적 오류 감소</li>
        <li>조직의 장애 대응 지식 체계화 및 공유</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>주요 장애 유형(CPU 급등, 메모리 고갈, 데이터베이스 연결 실패 등)별로 플레이북을 작성합니다.</li>
        <li>각 플레이북에 조사 단계, 진단 명령어, 복구 조치, 에스컬레이션 경로를 포함합니다.</li>
        <li>AWS Systems Manager Runbook을 사용하여 플레이북을 자동화하고 버전 관리합니다.</li>
        <li>플레이북을 팀 내 공유 문서 시스템(Wiki, Confluence 등)에 게시하여 누구나 접근 가능하도록 합니다.</li>
        <li>분기별로 플레이북을 검토하여 아키텍처 변경을 반영합니다.</li>
        <li>게임 데이 훈련에서 플레이북을 실제로 사용하여 효과를 검증합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Runbook — 자동화된 플레이북 실행</li>
        <li>AWS Systems Manager OpsCenter — 운영 이슈 중앙 관리</li>
        <li>Amazon CloudWatch — 진단 데이터 조회</li>
        <li>AWS X-Ray — 요청 추적 및 장애 경로 분석</li>
      </ul>
      <PageNav />
    </article>
  );
}
