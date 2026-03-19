import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps3Bp04Page() {
  return (
    <article className="doc-content">
      <h1>OPS03-BP04 — 커뮤니케이션 및 협업 촉진</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        팀 내부 및 팀 간 원활한 커뮤니케이션과 협업을 촉진합니다.
        사일로화된 조직은 정보 흐름이 단절되어 장애 대응, 변경 조율, 공동 목표 달성이 어렵습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        팀 간 정보가 자유롭게 흐르고, 공동 문제 해결이 원활하게 이루어집니다.
        중요한 운영 이벤트가 관련 모든 팀에 적시에 공유됩니다.
        팀 간 협업이 문화로 자리잡아 사일로가 제거됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>개발팀과 운영팀이 별도 채널에서만 소통하여 정보 지연이 발생하는 경우</li>
        <li>장애 발생 시 관련 팀에 통보가 늦어 복구가 지연되는 경우</li>
        <li>팀별로 다른 도구를 사용하여 협업이 어려운 경우</li>
        <li>중요한 결정이 특정 팀만 알고 다른 팀에 공유되지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 시 팀 간 신속한 협력으로 복구 시간 단축</li>
        <li>변경 관리 시 관련 팀 간 사전 조율로 충돌 방지</li>
        <li>지식 공유로 팀 전체 역량 향상</li>
        <li>상호 신뢰 구축으로 조직 효율성 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>공유 채널(Slack, Teams 등)을 구성하여 장애, 변경, 공지를 실시간 공유합니다.</li>
        <li>정기적인 팀 간 동기화 미팅을 운영합니다.</li>
        <li>변경 관리 프로세스에 영향 받는 팀의 승인/통보를 포함합니다.</li>
        <li>내부 기술 블로그나 위키를 통해 팀 간 지식을 공유합니다.</li>
        <li>ChatOps 접근 방식으로 운영 활동을 커뮤니케이션 채널에서 가시화합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Chatbot — Slack/Teams에서 AWS 운영 알림 수신</li>
        <li>Amazon EventBridge — 운영 이벤트를 여러 팀에 자동 전달</li>
        <li>AWS Systems Manager Change Calendar — 팀 간 변경 일정 조율</li>
      </ul>

      <PageNav />
    </article>
  );
}
