import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Bp06Page() {
  return (
    <article className="doc-content">
      <h1>SEC02-BP06 — 사용자 그룹 및 속성 활용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>개별 사용자에게 직접 권한을 부여하는 대신 그룹, 역할, 속성 기반 접근 제어(ABAC)를 활용하여 권한 관리를 효율화합니다. 사용자 수가 증가할수록 개별 권한 관리는 일관성 유지가 어렵고 실수로 인한 과도한 권한 부여 위험이 높아집니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 권한은 개인이 아닌 그룹, 역할, 또는 태그 기반 정책을 통해 부여됩니다. 역할과 그룹은 직무(Job Function)에 맞게 설계되어 있으며, 새 사용자 온보딩 시 적절한 그룹에 추가하는 것만으로 필요한 권한이 자동으로 부여됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 사용자에게 개별적으로 인라인 정책을 직접 연결하여 권한 관리 복잡도 폭증</li>
        <li>직무와 상관없이 동일한 광범위한 권한을 모든 사용자에게 부여하여 최소 권한 원칙 위반</li>
        <li>그룹이나 역할 없이 개별 사용자 수준에서 권한을 부여하여 인사 변동 시 권한 업데이트 누락</li>
        <li>ABAC 없이 수백 개의 리소스별 정책을 개별 관리하여 확장성 한계 도달</li>
        <li>Permission Boundary를 사용하지 않아 개발자가 자신의 권한을 초과하는 역할 생성 가능</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>그룹 기반 권한 관리로 신규 사용자 온보딩 및 역할 변경 시 운영 효율성 향상</li>
        <li>직무 기반 역할 설계로 최소 권한 원칙 구현 및 권한 크리프(Permission Creep) 방지</li>
        <li>ABAC를 통해 태그 기반으로 수천 개의 리소스를 확장 가능한 방식으로 제어</li>
        <li>Permission Boundary로 위임된 관리자가 자신의 권한을 초과하지 못하도록 안전하게 제한</li>
        <li>권한 변경 시 그룹/역할 수정만으로 모든 구성원에게 일관되게 적용되어 정책 일관성 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>직무별(개발자, 운영자, 보안 감사자, 읽기 전용 등) IAM 그룹과 Permission Set을 설계하고, 개인 권한 부여 대신 그룹에 추가하는 방식으로 전환합니다.</li>
        <li>리소스 태그(예: Environment=prod, Team=payments)를 기반으로 접근을 제어하는 ABAC 정책을 구현합니다.</li>
        <li>IAM Identity Center Permission Set을 사용하여 여러 계정에 걸쳐 일관된 직무별 권한을 중앙에서 관리합니다.</li>
        <li>개발자에게 IAM 역할 생성 권한을 위임할 때 Permission Boundary를 필수 적용하여 권한 상승을 방지합니다.</li>
        <li>서비스 계정용 IAM 역할은 서비스 컨트롤 태그와 함께 설계하여 특정 서비스에서만 역할을 사용하도록 제한합니다.</li>
        <li>IAM Access Analyzer의 정책 생성 기능을 활용하여 실제 CloudTrail 활동 기반으로 최소 권한 정책을 자동 생성합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM Groups — 사용자 그룹별 권한 일괄 관리</li>
        <li>AWS IAM Identity Center Permission Sets — 멀티계정 직무별 권한 중앙 관리</li>
        <li>AWS IAM ABAC (Attribute-Based Access Control) — 태그 기반 동적 접근 제어</li>
        <li>AWS IAM Permission Boundaries — 위임 관리자의 권한 범위 제한</li>
        <li>AWS IAM Access Analyzer — 최소 권한 정책 생성 및 분석</li>
      </ul>
      <PageNav />
    </article>
  );
}
