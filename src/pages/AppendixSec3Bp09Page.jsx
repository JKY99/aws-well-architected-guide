import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp09Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP09 — 제3자와 리소스 안전하게 공유</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        외부 파트너, 공급업체, 감사 기관 등 제3자에게 AWS 리소스 접근을 제공할 때
        교차 계정 IAM 역할, 외부 ID(External ID), 최소 권한 원칙을 적용하여
        의도된 접근만 허용하고 자격 증명 공유를 방지합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        제3자는 자체 AWS 계정의 자격 증명을 사용하여 명확히 정의된 범위의 권한으로만 접근합니다.
        모든 제3자 접근은 문서화되고, 접근 기간이 제한되며, 필요하지 않을 때 즉시 취소됩니다.
        제3자의 활동은 CloudTrail로 완전히 감사됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>제3자에게 IAM 사용자 자격 증명(액세스 키)을 직접 공유함</li>
        <li>교차 계정 역할에 External ID를 사용하지 않아 혼동의 대리인(confused deputy) 공격에 취약</li>
        <li>제3자에게 필요 이상의 광범위한 권한(AdministratorAccess 등)을 부여함</li>
        <li>제3자 접근 기간이 만료되었음에도 역할이나 권한을 제거하지 않음</li>
        <li>여러 제3자 공급업체가 동일한 IAM 역할을 공유하여 접근 취소 시 모든 공급업체에 영향</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자격 증명 공유 없이 안전한 제3자 접근 제공으로 자격 증명 노출 위험 제거</li>
        <li>External ID를 통해 혼동의 대리인 공격 방지</li>
        <li>제3자별 독립적인 역할로 개별 접근 취소 및 감사 추적 가능</li>
        <li>최소 권한 부여로 제3자 자격 증명 침해 시 피해 범위 제한</li>
        <li>접근 기간 제한으로 불필요한 장기 접근 권한 자동 제거</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>각 제3자 공급업체에 대해 별도의 IAM 역할을 생성하고, 해당 공급업체의 AWS 계정 ID를 신뢰 정책에 명시합니다.</li>
        <li>모든 교차 계정 역할 신뢰 정책에 sts:ExternalId 조건을 추가하여 혼동의 대리인 공격을 방지합니다. External ID는 공급업체와 안전하게 공유하고 주기적으로 교체합니다.</li>
        <li>제3자에게 부여하는 권한은 실제 업무 수행에 필요한 최소한으로 제한하고, IAM Access Analyzer로 정기적으로 검토합니다.</li>
        <li>접근 기간이 명확한 경우 AWS STS의 세션 기간 제한이나 IAM 역할의 조건부 정책(날짜 조건)을 사용하여 접근을 자동으로 만료시킵니다.</li>
        <li>CloudTrail 데이터 이벤트를 활성화하여 제3자가 접근하는 모든 S3, Lambda, 기타 리소스의 활동을 기록합니다.</li>
        <li>제3자 접근 목록을 관리 대장으로 유지하고, 계약 만료나 프로젝트 종료 시 즉시 역할을 비활성화 또는 삭제하는 오프보딩 프로세스를 수립합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM 교차 계정 역할 — 제3자 AWS 계정에 안전한 접근 위임</li>
        <li>AWS STS AssumeRole — 임시 자격 증명을 통한 역할 위임</li>
        <li>AWS IAM Access Analyzer — 교차 계정 접근 현황 분석 및 검토</li>
        <li>AWS CloudTrail — 제3자 활동 완전 감사 추적</li>
        <li>AWS Secrets Manager — 제3자와 공유하는 External ID 등 비밀 안전 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
