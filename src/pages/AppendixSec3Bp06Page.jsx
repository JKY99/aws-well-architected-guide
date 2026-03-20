import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp06Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP06 — 수명 주기에 따른 액세스 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        직원의 입사, 역할 변경, 퇴사 등 수명 주기 이벤트에 따라 AWS 액세스를 자동으로 프로비저닝하고
        디프로비저닝합니다. 사람 및 머신 자격 증명의 수명 주기를 관리하여 더 이상 필요하지 않은
        액세스 권한이 적시에 제거되도록 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 사용자 계정과 권한은 HR 시스템 또는 ID 관리 시스템과 연동되어 역할 변경이나 퇴사 시
        자동으로 업데이트됩니다. 孤立된(orphaned) 계정이나 과도한 권한이 없으며, 정기적인 액세스
        검토를 통해 현재 필요한 권한만 유지됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>직원 퇴사 후 AWS IAM 계정과 권한을 즉시 비활성화하지 않음</li>
        <li>역할 변경(예: 개발자에서 관리자로 승진) 시 기존 권한을 제거하지 않고 새 권한만 추가함</li>
        <li>임시 프로젝트를 위해 생성한 계정이나 역할을 프로젝트 완료 후 삭제하지 않음</li>
        <li>수동 프로세스에 의존하여 액세스 제거가 누락되거나 지연됨</li>
        <li>서비스 계정이나 애플리케이션 자격 증명의 소유자가 퇴사한 후 해당 자격 증명이 계속 사용됨</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>퇴직 직원의 자격 증명이 오용될 위험 제거</li>
        <li>역할 변경 시 불필요한 누적 권한(privilege creep) 방지</li>
        <li>자동화된 프로비저닝으로 신규 직원의 온보딩 시간 단축</li>
        <li>규정 준수 감사에서 액세스 제어의 일관성 입증 용이</li>
        <li>orphaned 계정 제거로 공격 표면 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS IAM Identity Center(SSO)를 HR 시스템(Workday, BambooHR 등)과 SCIM 프로토콜로 연동하여 사용자 프로비저닝 및 디프로비저닝을 자동화합니다.</li>
        <li>역할 기반 액세스 제어(RBAC)를 구현하여 개인이 아닌 역할에 권한을 부여하고, 역할 변경 시 그룹 멤버십만 업데이트합니다.</li>
        <li>IAM Access Analyzer를 사용하여 미사용 액세스 권한을 식별하고 정기적으로 검토하여 제거합니다.</li>
        <li>서비스 계정과 애플리케이션 자격 증명에 소유자 태그를 부여하고, 소유자 직원의 퇴사 시 자동으로 검토 알림이 발송되도록 구성합니다.</li>
        <li>분기별 액세스 검토 프로세스를 수립하여 관리자가 팀원의 권한 목록을 검토하고 불필요한 권한을 제거합니다.</li>
        <li>IAM 자격 증명 보고서를 정기적으로 생성하여 최근 활동이 없는 계정과 자격 증명을 식별합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM Identity Center — 중앙 집중식 사용자 프로비저닝 및 SSO 관리</li>
        <li>AWS IAM Access Analyzer — 미사용 액세스 권한 및 외부 노출 리소스 탐지</li>
        <li>AWS IAM 자격 증명 보고서 — 계정 내 모든 사용자의 자격 증명 상태 보고</li>
        <li>AWS Organizations — 조직 전체 계정 및 액세스 관리</li>
        <li>Amazon EventBridge — HR 이벤트 기반 액세스 자동화 트리거</li>
      </ul>
      <PageNav />
    </article>
  );
}
