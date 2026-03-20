import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function OEOrganizationPage() {
  return (
    <article className="doc-content">
      <h1>운영 우수성 — 조직</h1>

      <p>
        팀은 전체 워크로드, 역할, 공유된 비즈니스 목표에 대한 공통 이해를 보유해야 합니다.
        내부/외부 고객 요구사항을 평가하고 우선순위를 결정하며, 규제 준수 및 산업 표준을 검증합니다.
      </p>

      <h2>위험 관리</h2>
      <ul>
        <li>비즈니스 위협(위험, 책임, 보안 위협) 평가 및 위험 레지스트리 유지</li>
        <li>위험 영향도와 트레이드오프 관리</li>
        <li>정기적으로 우선순위 검토 및 업데이트</li>
      </ul>

      <h2>팀 역할 및 책임</h2>
      <ul>
        <li>각 애플리케이션, 워크로드, 인프라 구성요소의 소유자 지정</li>
        <li>팀원의 책임 명확히 정의</li>
        <li>팀 간 협업 방식 정의</li>
      </ul>

      <h2>팀 지원 및 문화</h2>
      <ul>
        <li>리더십이 기대치 설정 및 성공 측정</li>
        <li>팀원의 실행 권한 부여 및 에스컬레이션 메커니즘 마련</li>
        <li>실험 장려 및 지속적인 학습 지원</li>
        <li>다양성과 포용성 강화</li>
      </ul>

      <h2>세부 주제</h2>
      <ul>
        <li>조직 우선순위 (Organization Priorities)</li>
        <li>운영 모델 (Operating Model)</li>
        <li>조직 문화 (Organizational Culture)</li>
      </ul>

      <div className="doc-note">
        <div className="doc-note-title">참고</div>
        <p>
          규범적 구현 지침은{" "}
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            운영 우수성 기둥 백서
          </a>를 참조하세요.
        </p>
      </div>

      <PageNav />
    </article>
  );
}
