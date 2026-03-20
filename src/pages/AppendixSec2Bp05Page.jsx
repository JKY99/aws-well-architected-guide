import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC02-BP05 — 자격 증명 주기적 감사 및 교체</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 장기 자격 증명 노출 및 미사용 자격 증명으로 인한 보안 위험이 높습니다.</p>
      </div>
      <p>
        장기 자격 증명 사용과 관련된 위험을 줄이기 위해 자격 증명 교체를 구현합니다. 자격 증명 교체 정책 준수 여부를 정기적으로 감사하고 미준수 사항을 수정합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>자격 증명 교체를 통해 자격 증명으로 리소스에 접근할 수 있는 기간 제한</li>
        <li>장기 자격 증명 노출 위험 감소</li>
        <li>미승인 접근 또는 과도한 권한 정책 조기 탐지</li>
        <li>보안 표준 준수 지원</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>자격 증명 사용 미감사</li>
        <li>불필요하게 장기 자격 증명 사용</li>
        <li>장기 자격 증명을 정기적으로 교체하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자격 증명 노출 기간 제한으로 보안 위험 감소</li>
        <li>미사용 또는 과도한 권한의 자격 증명 조기 탐지</li>
        <li>보안 표준 및 규정 준수 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>자격 증명 보고서, IAM Access Analyzer, CloudWatch 경보, GuardDuty를 사용하여 ID를 모니터링하고 이상 탐지합니다.</li>
        <li>장기 IAM 액세스 키를 최대 90일마다 교체합니다.</li>
        <li>IAM 정책이 최소 권한 원칙을 준수하는지 검토합니다.</li>
        <li>IAM Identity Center 또는 CloudFormation을 사용하여 IAM 관리를 자동화합니다.</li>
        <li>온프레미스의 시스템 ID에 IAM Roles Anywhere를 사용하여 IAM 사용자를 임시 자격 증명으로 대체합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM — ID 및 접근 관리, 자격 증명 보고서</li>
        <li>AWS Secrets Manager — 보안 비밀 저장 및 자동 교체</li>
        <li>AWS IAM Identity Center — 중앙화된 자격 증명 관리</li>
        <li>AWS Config 규칙 — 자격 증명 정책 준수 모니터링</li>
        <li>AWS Security Hub — 보안 발견사항 통합 관리</li>
        <li>IAM Roles Anywhere — 온프레미스 워크로드용 임시 자격 증명</li>
        <li>Amazon GuardDuty — 이상 동작 탐지</li>
      </ul>
      <PageNav />
    </article>
  );
}
