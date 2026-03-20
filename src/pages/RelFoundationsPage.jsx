import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function RelFoundationsPage() {
  return (
    <article className="doc-content">
      <h1>안정성 — 기초 (Foundations)</h1>

      <p>
        기반 요구사항은 단일 워크로드나 프로젝트를 넘어서는 범위를 가집니다.
        모든 시스템 아키텍처 설계 전에, 안정성에 영향을 미치는 기반 요구사항이 먼저 갖춰져야 합니다.
        예를 들어, 데이터센터에 충분한 네트워크 대역폭이 확보되어야 합니다.
      </p>

      <p>
        온프레미스 환경에서는 이러한 요구사항이 의존성으로 인해 초기 계획 단계에 반드시 반영되어야 하며
        리드 타임이 길 수 있습니다. 반면 AWS에서는 대부분의 기반 요구사항이 이미 내재되어 있거나
        필요에 따라 처리할 수 있습니다. 클라우드는 거의 무한한 확장성을 위해 설계되어 있으므로,
        충분한 네트워킹과 컴퓨팅 용량 확보는 AWS의 책임이며, 사용자는 필요에 따라
        리소스 크기와 할당을 변경할 수 있습니다.
      </p>

      <h2>모범 사례 항목</h2>
      <ul>
        <li>
          <strong>서비스 할당량 및 제약 관리:</strong> 서비스 한도를 파악하고 관리합니다.
        </li>
        <li>
          <strong>네트워크 토폴로지 계획:</strong> 안정적인 네트워크 구조를 설계합니다.
        </li>
      </ul>

      <div className="doc-note">
        <div className="doc-note-title">참고</div>
        <p>
          규범적 구현 지침은{" "}
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            안정성 기둥 백서
          </a>를 참조하세요.
        </p>
      </div>

      <PageNav />
    </article>
  );
}
