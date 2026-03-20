import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec10Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC10-BP02 — 사고 관리 계획 개발</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        보안 사고를 체계적으로 관리하기 위한 공식적인 사고 관리 계획을 수립합니다.
        이 계획은 사고 탐지부터 봉쇄, 근본 원인 분석, 복구, 사후 검토까지의
        전체 사이클을 포괄하며 조직의 실제 환경에 맞게 구체적으로 작성됩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        보안 사고 발생 시 모든 팀원이 일관된 프로세스에 따라 행동합니다. 사고 관리 계획은
        정기적으로 검토되고 테스트되며, 새로운 위협 시나리오와 조직 변화를 반영하여 업데이트됩니다.
        사고 심각도 수준이 정의되어 있고, 각 수준에 따른 대응 절차가 명확합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사고 관리 계획이 존재하지만 실제 AWS 환경과 맞지 않는 일반적인 내용만 포함됨</li>
        <li>계획을 작성 후 한 번도 테스트하지 않아 실제 사고 시 적용 불가능한 내용 포함</li>
        <li>사고 심각도 수준(P1~P4 등)과 각 수준별 대응 시간 목표(SLA)가 정의되지 않음</li>
        <li>AWS 특정 사고(계정 침해, S3 데이터 유출 등)에 대한 구체적인 절차 없이 일반적인 IT 사고 대응 절차만 존재</li>
        <li>사고 관리 계획이 보안팀에만 알려져 있고 개발·운영팀이 인지하지 못함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사고 발생 시 즉각적이고 일관된 대응으로 피해 최소화</li>
        <li>사고 중 의사결정 속도 향상 및 잘못된 결정으로 인한 추가 피해 방지</li>
        <li>규제 요건(GDPR 72시간 보고 등)을 충족하는 체계적인 대응 보장</li>
        <li>사고 대응의 문서화를 통한 사후 분석 및 개선 용이</li>
        <li>팀 전체의 보안 사고 대응 역량 향상 및 스트레스 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>NIST SP 800-61 또는 SANS 사고 처리 가이드를 참고하여 조직에 맞는 사고 관리 계획을 수립합니다. 준비, 탐지·분석, 봉쇄·근절·복구, 사후 활동의 4단계를 포함합니다.</li>
        <li>P1(비즈니스 중단), P2(심각한 위험), P3(중간 위험), P4(낮은 위험) 등 사고 심각도 수준을 정의하고 각 수준별 대응 시간 목표와 에스컬레이션 기준을 명시합니다.</li>
        <li>AWS 환경 특화 사고 시나리오(IAM 자격 증명 유출, S3 데이터 공개 노출, EC2 랜섬웨어 감염, 루트 계정 침해 등)에 대한 구체적인 대응 절차를 포함합니다.</li>
        <li>사고 관리 계획을 AWS S3와 오프라인 모두에 저장하고, 보안팀과 주요 이해관계자 모두가 접근할 수 있도록 합니다.</li>
        <li>사고 관리 계획을 연 1회 이상 검토하고, 중대한 보안 사고나 조직 변화 후에 즉시 업데이트합니다.</li>
        <li>AWS Well-Architected Framework의 보안 사고 대응 섹션과 AWS Security Incident Response Guide를 참조하여 AWS 특화 모범 사례를 계획에 통합합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Security Incident Response Guide — AWS 환경 보안 사고 대응 종합 가이드</li>
        <li>AWS Systems Manager OpsCenter — 사고 추적 및 대응 조율</li>
        <li>AWS Security Hub — 사고 탐지 및 우선순위 결정</li>
        <li>Amazon GuardDuty — 위협 탐지 및 사고 트리거</li>
        <li>AWS CloudTrail — 사고 조사를 위한 API 활동 기록</li>
      </ul>
      <PageNav />
    </article>
  );
}
