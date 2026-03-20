import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SecDefinitionPage() {
  return (
    <article className="doc-content">
      <h1>보안 — 정의</h1>

      <p>
        보안 기둥은 위험 평가 및 완화 전략을 통해 정보, 시스템, 자산을 보호하면서
        비즈니스 가치를 제공하는 능력을 포함합니다.
      </p>

      <h2>7가지 모범 사례 영역</h2>
      <ol>
        <li><strong>보안 기초 (Security Foundations)</strong> — 보안 구현의 토대</li>
        <li><strong>자격증명 및 접근 관리 (Identity and Access Management)</strong> — 인증 및 권한 부여</li>
        <li><strong>탐지 (Detection)</strong> — 보안 이벤트 감지</li>
        <li><strong>인프라 보호 (Infrastructure Protection)</strong> — 시스템 및 서비스 보호</li>
        <li><strong>데이터 보호 (Data Protection)</strong> — 데이터 기밀성·무결성 보호</li>
        <li><strong>인시던트 대응 (Incident Response)</strong> — 보안 사고 대응</li>
        <li><strong>애플리케이션 보안 (Application Security)</strong> — 애플리케이션 수준 보안</li>
      </ol>

      <h2>공동 책임 모델</h2>
      <p>
        보안은 클라우드에서 공동 책임(Shared Responsibility) 모델을 따릅니다.
        AWS는 클라우드 인프라의 보안을 담당하고, 고객은 클라우드 내 워크로드의 보안을 담당합니다.
      </p>

      <PageNav />
    </article>
  );
}
