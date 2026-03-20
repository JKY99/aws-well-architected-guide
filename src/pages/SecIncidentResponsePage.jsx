import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SecIncidentResponsePage() {
  return (
    <article className="doc-content">
      <h1>보안 — 사고 대응</h1>

      <p>
        성숙한 예방 및 탐지 제어가 있더라도, 보안 인시던트의 잠재적 영향을 대응·완화하는
        메커니즘을 구현해야 합니다. 사전 준비는 팀이 인시던트 발생 시 효과적으로 운영하고,
        문제를 격리·봉쇄하고, 포렌식을 수행하고, 알려진 정상 상태로 운영을 복원하는 능력에
        결정적 영향을 미칩니다.
      </p>

      <p>
        보안 인시던트 발생 전에 도구와 접근 권한을 준비하고, 게임 데이(game days)를 통해
        인시던트 대응을 정기적으로 훈련하면 비즈니스 중단을 최소화하며 복구할 수 있습니다.
      </p>

      <h2>성공적인 클라우드 인시던트 대응의 3가지 기초</h2>

      <h3>1. 준비 (Preparation)</h3>
      <ul>
        <li>인시던트 탐지 및 대응을 위한 팀 준비</li>
        <li>탐지 제어 활성화 및 필요 도구·서비스에 대한 접근 권한 확보</li>
        <li>수동 및 자동화된 플레이북 사전 준비</li>
      </ul>

      <h3>2. 운영 (Operations)</h3>
      <p>NIST 인시던트 대응 단계에 따른 보안 이벤트 처리:</p>
      <ul>
        <li>감지 (Detect)</li>
        <li>분석 (Analyze)</li>
        <li>봉쇄 (Contain)</li>
        <li>제거 (Eradicate)</li>
        <li>복구 (Recover)</li>
      </ul>

      <h3>3. 사후 활동 (Post-incident Activity)</h3>
      <ul>
        <li>보안 이벤트 및 시뮬레이션 결과 검토를 통한 대응 효과성 개선</li>
        <li>인시던트로부터 교훈 도출 및 개선 활동 실행</li>
      </ul>

      <PageNav />
    </article>
  );
}
