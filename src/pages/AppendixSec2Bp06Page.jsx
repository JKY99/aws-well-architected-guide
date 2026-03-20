import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Bp06Page() {
  return (
    <article className="doc-content">
      <h1>SEC02-BP06 — 사용자 그룹 및 속성 활용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 개별 사용자 권한 관리로 인한 과도한 권한 부여 위험이 있습니다.</p>
      </div>
      <p>
        개별 사용자에게 권한을 부여하는 대신 그룹과 속성을 사용하여 대규모로 최소 권한 원칙을 달성합니다. 특정 기능을 수행하는 모든 사용자에게 기능 변경 사항을 적용하고, 정책의 수와 복잡성을 줄입니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>특정 기능을 수행하는 모든 사용자에게 권한 변경 일괄 적용</li>
        <li>정책의 수와 복잡성 감소</li>
        <li>그룹 멤버십과 속성이 사용자 권한을 결정(개별 사용자 관리 불필요)</li>
        <li>자격 증명 공급자의 그룹과 속성이 AWS 환경에 자동으로 전파</li>
        <li>대규모 최소 권한 원칙 달성</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>많은 사용자에 걸쳐 개별 사용자 권한을 관리하고 중복</li>
        <li>너무 높은 수준에서 그룹을 정의하여 과도하게 넓은 권한 부여</li>
        <li>너무 세분화된 수준에서 그룹을 정의하여 중복과 혼란 야기</li>
        <li>속성을 대신 사용할 수 있는 경우 리소스 하위 집합에 중복 권한을 가진 그룹 사용</li>
        <li>표준화된 자격 증명 공급자를 통해 그룹, 속성, 멤버십을 관리하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>리소스별이 아닌 직무별로 권한을 구성하여 권한 관리 간소화</li>
        <li>개별 사용자 권한 관리 없이 확장성 지원</li>
        <li>정책 복잡성 및 중복 감소</li>
        <li>자격 증명 공급자로부터 자동 동기화 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>자격 증명 공급자, IAM Identity Center, IAM 사용자 그룹 중 어디서 그룹과 속성을 정의할지 결정합니다.</li>
        <li>접근에 필요한 기능과 범위를 기반으로 그룹을 정의합니다. IAM Identity Center에서 그룹을 생성하고 Permission Set을 사용하여 접근을 연결합니다.</li>
        <li>SAML 어설션에서 사용자 지정 속성을 사용하여 ABAC(속성 기반 접근 제어)를 활성화합니다.</li>
        <li>SCIM 프로토콜을 활성화하여 자격 증명 공급자로부터 자동 프로비저닝 및 동기화를 수행합니다.</li>
        <li>주체 속성과 리소스 속성을 비교하는 조건을 포함한 정책을 적용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM Identity Center — 중앙 집중식 그룹 및 Permission Set 관리</li>
        <li>AWS Identity and Access Management(IAM) — IAM 그룹 및 ABAC</li>
        <li>IAM Access Analyzer — 최소 권한 정책 생성 및 분석</li>
      </ul>
      <PageNav />
    </article>
  );
}
