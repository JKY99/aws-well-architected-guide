import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP05 — 조직 권한 가드레일 정의</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        AWS Organizations를 통해 조직 전체 또는 특정 계정 그룹에 적용되는 권한 경계와 제어를
        정의합니다. 서비스 제어 정책(SCP)을 활용하면 개별 계정의 IAM 정책과 무관하게 조직 차원의
        보안 정책을 강제 적용할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        조직 내 모든 계정이 준수해야 하는 최소한의 보안 가드레일이 SCP로 정의되어 있으며,
        개발팀이 의도치 않게 보안 정책을 위반하는 것이 원천적으로 차단됩니다. 프로덕션과
        개발 환경에 각각 다른 수준의 제어가 적용됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>SCP 없이 개별 계정의 IAM 정책에만 의존하는 보안 제어</li>
        <li>루트 사용자 활동 제한 SCP를 적용하지 않음</li>
        <li>모든 계정에 동일한 SCP를 적용하여 개발 유연성 저해</li>
        <li>SCP 변경을 검토 없이 진행하여 의도치 않은 서비스 장애 발생</li>
        <li>특정 AWS 리전에서만 리소스 생성을 허용하는 지역 제한을 미적용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>개별 계정 설정 오류와 무관하게 조직 차원의 보안 정책 일관성 유지</li>
        <li>규제 요건(특정 리전 내 데이터 보관 등)을 기술적으로 강제 적용</li>
        <li>승인되지 않은 AWS 서비스 또는 리전 사용 원천 차단</li>
        <li>보안팀이 전체 조직의 최소 보안 기준을 중앙에서 관리 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Organizations의 OU(Organizational Unit) 구조를 환경(프로덕션, 스테이징, 개발, 샌드박스)에 맞게 설계합니다.</li>
        <li>루트 계정 사용 금지, MFA 삭제 방지, CloudTrail 비활성화 금지 등 기본 보안 가드레일 SCP를 정의합니다.</li>
        <li>특정 리전 외 리소스 생성을 제한하는 SCP를 적용하여 데이터 레지던시 요건을 충족합니다.</li>
        <li>SCP 변경은 코드 리뷰와 비프로덕션 계정에서의 테스트를 거친 후 프로덕션에 적용합니다.</li>
        <li>AWS Control Tower를 사용하여 가드레일을 자동으로 적용하고 신규 계정 생성 시 표준 구성을 적용합니다.</li>
        <li>SCP는 Deny 기반으로 작성하여 명시적으로 금지된 작업 이외에는 계정 내 IAM 정책이 제어하도록 합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Organizations SCPs — 계정/OU 수준 권한 제어 정책</li>
        <li>AWS Control Tower — 다중 계정 환경 거버넌스 자동화</li>
        <li>AWS IAM Permission Boundaries — 역할 위임 권한 상한 설정</li>
        <li>AWS Config Conformance Packs — 조직 전체 컴플라이언스 모니터링</li>
        <li>AWS Security Hub — 조직 전체 보안 상태 중앙 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
