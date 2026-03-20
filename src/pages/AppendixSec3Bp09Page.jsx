import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp09Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP09 — 제3자와 리소스 안전하게 공유</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 제3자 자격 증명 노출 또는 혼동의 대리인 공격 위험이 있습니다.</p>
      </div>
      <p>
        장기 AWS IAM 자격 증명 사용을 피하고, IAM 역할과 임시 자격 증명을 사용하여 보안 태세를 개선합니다. IAM 신뢰 정책에 UUID를 외부 ID로 사용하고, 역할에 연결된 IAM 정책을 직접 관리하여 최소 권한 접근을 보장합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>장기 AWS IAM 자격 증명(액세스 키, 시크릿 키) 미사용</li>
        <li>IAM 역할과 임시 자격 증명을 통한 보안 태세 개선</li>
        <li>IAM 신뢰 정책에 UUID를 외부 ID로 사용</li>
        <li>역할에 연결된 IAM 정책을 직접 관리하여 최소 권한 접근 보장</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>조건 없이 기본 IAM 신뢰 정책 사용</li>
        <li>장기 IAM 자격 증명과 액세스 키 사용</li>
        <li>외부 ID 재사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자격 증명 노출로 인한 보안 위험 감소</li>
        <li>제3자 접근 관리 및 감사 향상</li>
        <li>운영 오버헤드 감소</li>
        <li>"혼동의 대리인 문제"(confused deputy problem)로부터 보호</li>
        <li>규정 준수 및 보안 태세 개선</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>장기 자격 증명 대신 외부 계정 접근을 위한 교차 계정 역할을 사용합니다.</li>
        <li>제3자 SaaS 공급자에 대한 실사를 수행하고 공유 책임 모델과 보안 관행을 평가합니다.</li>
        <li>교차 계정 역할 또는 IAM Roles Anywhere를 위해 장기 자격 증명을 폐기하고, 필요한 경우 마이그레이션 계획을 수립합니다.</li>
        <li>추측할 수 없는 읽기 전용 값으로 외부 ID를 구현하고, 드리프트 탐지가 포함된 CloudFormation 템플릿을 통해 자동 설정합니다.</li>
        <li>주기적으로 모니터링 및 감사하고, 예상치 못한 변경 탐지 방법을 구현하며, 접근을 신속히 취소할 준비를 합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>IAM 교차 계정 역할 — 제3자 외부 계정 접근</li>
        <li>IAM Roles Anywhere — 외부 애플리케이션의 IAM 역할 관리</li>
        <li>AWS Resource Access Manager(RAM) — 계정 간 리소스 안전 공유</li>
        <li>AWS CloudFormation — 역할 생성 및 배포 자동화</li>
        <li>AWS STS(Security Token Service) — 임시 자격 증명</li>
      </ul>
      <PageNav />
    </article>
  );
}
