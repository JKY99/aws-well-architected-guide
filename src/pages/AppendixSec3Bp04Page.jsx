import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP04 — 지속적인 권한 최소화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 시간이 지남에 따라 불필요한 권한이 누적되어 보안 위험이 증가합니다.</p>
      </div>
      <p>
        권한 정책이 최소 권한 원칙을 준수하는지 지속적으로 검토하고, 업무 역할과 책임이 명확해짐에 따라 불필요한 권한을 제거합니다. 자격 증명이 노출되거나 미승인 접근이 발생할 경우의 영향 범위를 줄입니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>권한 정책이 최소 권한 원칙 준수</li>
        <li>업무 역할이 명확해짐에 따라 불필요한 권한 제거</li>
        <li>자격 증명 노출 또는 미승인 접근 시 영향 범위 축소</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>기본적으로 사용자에게 관리자 권한 부여</li>
        <li>전체 관리자 권한 없이 과도하게 허용적인 정책 생성</li>
        <li>더 이상 필요하지 않아진 후에도 권한 정책 유지</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>ABAC를 통한 권한 관리 간소화</li>
        <li>실제 사용 패턴에 기반한 데이터 기반 접근 결정 지원</li>
        <li>보안 태세 및 규정 준수 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>IAM Access Analyzer를 사용하여 외부 엔티티와 공유된 리소스를 식별하고 권한을 감사합니다.</li>
        <li>IAM Access Analyzer 정책 생성을 적용하여 실제 접근 활동을 기반으로 세분화된 정책을 생성합니다.</li>
        <li>하위 환경에서 먼저 테스트한 후 접근 로그를 사용하여 프로덕션에서 정확한 접근 요건을 파악합니다.</li>
        <li>마지막 접근 타임스탬프를 사용하여 미사용 사용자, 역할, 권한을 식별하고 제거합니다.</li>
        <li>CloudTrail 데이터 이벤트 로깅을 활성화하여 객체 수준 활동을 기록하고 정확한 접근 요건을 파악합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Identity and Access Management(IAM) — 접근 분석기 및 접근 어드바이저</li>
        <li>AWS CloudTrail — 데이터 이벤트 로깅 및 접근 추적</li>
        <li>서비스 제어 정책(SCP) — 최대 권한에 대한 가드레일 적용</li>
      </ul>
      <PageNav />
    </article>
  );
}
