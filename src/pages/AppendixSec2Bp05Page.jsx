import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC02-BP05 — 자격 증명 주기적 감사 및 교체</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>사용하지 않는 자격증명을 제거하고 장기 자격증명을 정기적으로 교체합니다. 오래되거나 방치된 자격증명은 공격자의 잠재적인 진입점이 되며, 사용 여부를 파악하지 못하면 불필요한 보안 위험에 노출됩니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 IAM 자격증명의 사용 현황이 정기적으로 검토됩니다. 90일 이상 미사용 자격증명은 자동으로 비활성화되거나 삭제되며, 장기 액세스 키는 주기적으로 교체됩니다. 불필요한 권한과 자격증명이 없는 최소화된 접근 체계가 유지됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>퇴사자의 IAM 사용자 계정을 삭제하지 않아 접근 가능한 좀비 계정 존재</li>
        <li>프로젝트 종료 후 해당 서비스용으로 생성된 IAM 사용자나 키를 제거하지 않음</li>
        <li>수년간 동일한 액세스 키를 교체하지 않아 장기 노출로 인한 위험 누적</li>
        <li>자격증명 감사를 수동으로만 수행하여 주기적 검토가 이루어지지 않음</li>
        <li>IAM 역할의 신뢰 정책을 검토하지 않아 불필요하게 넓은 역할 위임 허용 상태 유지</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>미사용 자격증명 제거로 잠재적 공격 경로 감소</li>
        <li>정기적인 키 교체로 과거 유출된 자격증명의 유효성 무효화</li>
        <li>자격증명 현황 가시성 확보로 침해 발생 시 신속한 영향 범위 파악</li>
        <li>자동화된 감사로 수동 검토 대비 일관성과 적시성 향상</li>
        <li>최소 권한 원칙의 지속적 유지로 장기적인 보안 상태 개선</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS IAM 자격증명 보고서(Credential Report)를 정기적으로 생성하여 마지막 사용일, 키 교체일, MFA 상태를 점검합니다.</li>
        <li>AWS IAM Access Analyzer를 사용하여 미사용 역할, 과도한 권한, 외부 접근 가능 리소스를 자동으로 식별합니다.</li>
        <li>AWS Config 규칙(access-keys-rotated, iam-user-unused-credentials-check)을 활성화하여 정책 위반을 자동 탐지합니다.</li>
        <li>90일 이상 미사용 IAM 사용자 키를 자동 비활성화하는 Lambda 함수와 EventBridge 스케줄을 구성합니다.</li>
        <li>장기 액세스 키가 불가피한 경우 90일 이내 주기로 교체하는 자동화 워크플로를 구현합니다.</li>
        <li>IAM Access Analyzer의 권한 축소 제안 기능을 활용하여 실제 사용 패턴 기반으로 권한을 최소화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM Credential Report — 자격증명 현황 및 사용 이력 보고서</li>
        <li>AWS IAM Access Analyzer — 미사용 자격증명 및 과도한 권한 탐지</li>
        <li>AWS Config — 자격증명 정책 준수 지속적 모니터링</li>
        <li>Amazon EventBridge + Lambda — 자격증명 감사 자동화</li>
        <li>AWS Security Hub — 자격증명 관련 보안 발견사항 통합 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
