import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP04 — 지속적인 권한 최소화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        시간이 지남에 따라 사용하지 않는 권한이 누적되는 현상(Permission Drift)을 방지하기 위해
        권한을 지속적으로 모니터링하고 불필요한 권한을 제거합니다. 한 번 부여된 권한은 업무 변화나
        역할 변경 후에도 유지되는 경향이 있어 지속적인 관리가 필요합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 IAM 주체의 실제 사용 권한이 정기적으로 분석되고, 일정 기간 사용되지 않은 권한은
        자동으로 식별됩니다. 식별된 불필요 권한은 검토 후 제거되며, 권한 최소화 상태가 지속적으로
        유지됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>초기 설정된 권한을 검토 없이 장기간 유지</li>
        <li>프로젝트 종료 후 프로젝트용 역할과 권한을 삭제하지 않음</li>
        <li>퇴직하거나 역할이 변경된 직원의 권한을 적시에 회수하지 않음</li>
        <li>권한 검토를 수동으로만 진행하여 누락 발생</li>
        <li>권한 사용 이력 분석 없이 임의로 권한 제거</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>시간 경과에 따른 권한 비대화 방지로 공격 표면 지속 관리</li>
        <li>컴플라이언스 요건(SOC2, ISO 27001 등)에서 요구하는 접근 권한 검토 자동화</li>
        <li>미사용 자격 증명 및 역할 식별로 보안 위험 선제 감소</li>
        <li>권한 변경 이력이 축적되어 변화 추세 파악 및 이상 감지 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>IAM Access Analyzer의 미사용 액세스 분석(Unused Access Analyzer) 기능을 활성화하여 90일 이상 미사용 권한을 자동으로 식별합니다.</li>
        <li>AWS CloudTrail 로그를 분석하여 실제 사용된 API 호출 목록을 추출하고, 미사용 권한 목록을 생성합니다.</li>
        <li>IAM 자격 증명 보고서(Credential Report)를 정기적으로 생성하여 미사용 액세스 키와 비밀번호를 식별합니다.</li>
        <li>90일 이상 미사용 IAM 사용자 및 역할을 AWS Config 규칙으로 감지하고 자동 알림을 설정합니다.</li>
        <li>권한 검토 결과를 기반으로 IAM 정책을 점진적으로 정제하고, 변경 사항을 코드로 관리합니다.</li>
        <li>조직 내 계정별 권한 상태를 대시보드로 시각화하여 전체 현황을 한눈에 파악합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>IAM Access Analyzer — 미사용 액세스 분석 및 정책 정제 권고</li>
        <li>AWS CloudTrail — API 호출 이력 기반 권한 사용 분석</li>
        <li>IAM Credential Report — 미사용 자격 증명 식별</li>
        <li>AWS Config — IAM 권한 컴플라이언스 지속 모니터링</li>
        <li>Amazon CloudWatch — 미사용 권한 감지 시 자동 알림</li>
      </ul>
      <PageNav />
    </article>
  );
}
