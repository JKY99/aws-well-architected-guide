import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC01-BP03 — 보안 제어 목표 식별 및 검증</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>규정 요건과 비즈니스 목표에 맞는 보안 제어 목표를 명확히 수립하고, 해당 목표의 달성 여부를 지속적으로 검증합니다. 명확한 목표 없이는 보안 투자가 실제 위험을 줄이는지 확인할 수 없습니다.</p>
      <h2>원하는 결과</h2>
      <p>조직의 규정 준수 요건(예: PCI-DSS, HIPAA, ISO 27001)과 비즈니스 위험 허용 수준에 기반한 명문화된 보안 제어 목표가 존재합니다. 각 목표에 대한 달성 지표가 정의되어 있으며, AWS 서비스를 통해 자동으로 평가 및 보고됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>구체적인 보안 목표 없이 보안 제어를 임의로 구현하여 실제 위험 감소 여부 파악 불가</li>
        <li>규정 준수 요건을 문서화하지 않아 감사 시 대응 준비 부족</li>
        <li>보안 제어의 효과성을 주기적으로 검증하지 않아 형식적인 보안 운영</li>
        <li>사업 부서와 보안 팀 간 보안 목표 공유 및 합의 부재</li>
        <li>클라우드 환경 변화에 따른 보안 제어 목표 업데이트 미실시</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>명확한 목표 기반의 보안 투자로 실질적인 위험 감소 효과 확인 가능</li>
        <li>감사 및 규정 준수 심사 시 객관적인 증거 자동 수집 및 제출</li>
        <li>보안 목표와 비즈니스 목표의 정렬로 경영진의 보안 이해도 및 지원 향상</li>
        <li>제어 목표 대비 현황 격차를 조기에 식별하여 선제적 개선 가능</li>
        <li>지속적인 모니터링으로 보안 상태 변화를 실시간 파악</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>적용되는 규정 요건(PCI-DSS, HIPAA, SOC2 등)을 식별하고 각 요건별 AWS 대응 제어를 매핑합니다.</li>
        <li>AWS Audit Manager를 활용하여 규정 준수 프레임워크별 증거를 자동으로 수집합니다.</li>
        <li>AWS Config 규칙을 생성하여 보안 제어 목표의 달성 여부를 지속적으로 평가합니다.</li>
        <li>AWS Security Hub의 보안 표준(AWS Foundational Security, CIS Benchmarks)을 활성화하여 자동화된 점검을 수행합니다.</li>
        <li>정기적인 보안 검토 회의를 통해 목표 달성 현황을 경영진에게 보고하는 프로세스를 수립합니다.</li>
        <li>새로운 규정 요건이나 위협 환경 변화 시 보안 제어 목표를 업데이트하는 절차를 마련합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Audit Manager — 규정 준수 증거 자동 수집 및 감사 보고서 생성</li>
        <li>AWS Config — 리소스 구성 규정 준수 지속적 평가</li>
        <li>AWS Security Hub — 통합 보안 표준 점검 및 대시보드</li>
        <li>AWS CloudTrail — 보안 제어 관련 API 활동 감사</li>
        <li>Amazon GuardDuty — 위협 탐지 및 보안 목표 달성 지원</li>
      </ul>
      <PageNav />
    </article>
  );
}
