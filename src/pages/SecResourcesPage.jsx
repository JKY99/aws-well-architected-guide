import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SecResourcesPage() {
  return (
    <article className="doc-content">
      <h1>보안 — 자원</h1>

      <p>
        보안 기둥에 대한 추가 학습 자료입니다.
      </p>

      <h2>공식 문서 및 백서</h2>
      <ul>
        <li>
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Well-Architected 보안 기둥 백서
          </a>
          — 모범 사례에 대한 심층적인 규범적 지침
        </li>
        <li>
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Well-Architected Framework
          </a>
          — 전체 프레임워크 문서
        </li>
      </ul>

      <h2>관련 AWS 서비스</h2>
      <ul>
        <li>AWS IAM — 자격증명 및 접근 관리</li>
        <li>AWS Organizations — 다중 계정 거버넌스</li>
        <li>AWS Control Tower — 랜딩 존 및 가드레일</li>
        <li>Amazon GuardDuty — 위협 탐지</li>
        <li>AWS Security Hub — 보안 상태 통합 뷰</li>
        <li>AWS Config — 구성 변경 추적</li>
        <li>AWS CloudTrail — API 감사 로깅</li>
        <li>Amazon Macie — 민감 데이터 자동 탐지</li>
        <li>AWS KMS — 키 관리 서비스</li>
        <li>AWS WAF — 웹 애플리케이션 방화벽</li>
        <li>AWS Shield — DDoS 보호</li>
      </ul>

      <PageNav />
    </article>
  );
}
