import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP01 — 액세스 요건 정의</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 과도한 권한 부여로 인한 보안 위험이 높습니다.</p>
      </div>
      <p>
        각 구성 요소 또는 리소스에 누가/무엇이 접근해야 하는지, 어떤 ID 유형을 사용할지, 어떤 인증 및 권한 부여 방법을 사용할지 정의합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>각 구성 요소 또는 리소스에 접근해야 하는 대상의 명확한 정의</li>
        <li>적절한 ID 유형 선택</li>
        <li>적절한 인증 및 권한 부여 방법 적용</li>
        <li>직원 생명주기와 통합된 중앙화된 ID 관리</li>
        <li>보안 비밀 하드코딩 없이 안전한 자격 증명 처리</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>애플리케이션에 보안 비밀 하드코딩 또는 저장</li>
        <li>각 개별 사용자에게 사용자 정의 권한 부여</li>
        <li>장기 자격 증명 사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최소 권한 원칙을 통한 보안 노출 감소</li>
        <li>중앙화된 접근 제어 및 쉬운 생명주기 관리</li>
        <li>보안 자격 증명 교체 및 관리</li>
        <li>사람 및 비사람 ID에 걸친 일관성</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>일반 AWS 계정 접근에는 연동 접근 또는 중앙 자격 증명 공급자를 사용합니다.</li>
        <li>비사람 ID에는 최소 권한 접근 모델의 IAM 역할을 사용합니다.</li>
        <li>자동 교체를 지원하는 AWS Secrets Manager 또는 AWS Systems Manager Parameter Store를 사용하여 애플리케이션에서 보안 비밀을 분리합니다.</li>
        <li>AWS 외부 워크로드에는 IAM Roles Anywhere를 사용합니다.</li>
        <li>장기 정적 자격 증명보다 임시 자격 증명을 우선 사용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Secrets Manager — 보안 비밀 안전 저장 및 자동 교체</li>
        <li>AWS Systems Manager Parameter Store — 구성 및 보안 비밀 관리</li>
        <li>IAM Roles Anywhere — AWS 외부 워크로드용 임시 자격 증명</li>
        <li>AWS IAM Identity Center — 중앙화된 자격 증명 관리</li>
        <li>IAM 관리형 정책 — 일반적인 사용 사례를 위한 정책</li>
      </ul>
      <PageNav />
    </article>
  );
}
