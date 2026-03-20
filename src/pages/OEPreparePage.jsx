import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function OEPreparePage() {
  return (
    <article className="doc-content">
      <h1>운영 우수성 — 준비</h1>

      <p>
        준비 단계는 워크로드와 예상 동작을 이해하고, 이를 기반으로 설계하는 것입니다.
      </p>

      <h2>관찰성(Observability) 구현</h2>
      <ul>
        <li>메트릭, 로그, 이벤트, 추적을 통해 워크로드의 내부 상태 파악</li>
        <li>단순 모니터링을 넘어 시스템의 포괄적 이해 제공</li>
        <li>KPI 식별으로 비즈니스 목표와 정렬</li>
        <li>사전 예방적 접근으로 문제 조기 해결</li>
      </ul>

      <h2>운영을 위한 설계 (Design for Operations)</h2>
      <ul>
        <li>변경 사항의 프로덕션 흐름 개선</li>
        <li>리팩토링, 빠른 품질 피드백, 버그 수정 가속화</li>
        <li>빠른 회복 및 변경 검증 가능한 구조 설계</li>
        <li>작고 가역적인 변경으로 영향 범위 제한</li>
      </ul>

      <h2>배포 위험 완화 (Mitigate Deployment Risks)</h2>
      <ul>
        <li>운영 준비도 평가 (워크로드, 프로세스, 인력)</li>
        <li>체계적 체크리스트로 Go-Live 여부 판단</li>
        <li>런북(Runbook)과 플레이북(Playbook) 작성</li>
      </ul>

      <h2>코드로서의 운영 (Operations as Code)</h2>
      <ul>
        <li>AWS CloudFormation으로 템플릿화된 환경 구성</li>
        <li>리소스 태깅으로 조직, 비용 회계, 접근 제어 관리</li>
        <li>자동화를 통한 운영 효율성 극대화</li>
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
