import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps8Bp04Page() {
  return (
    <article className="doc-content">
      <h1>OPS08-BP04 — 실행 가능한 알림 생성</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        KPI 결과가 위험에 처할 때 잠재적인 문제를 신속하게 식별하고 완화할 수 있는
        적시에 관련성 있고 실행 가능한 알림을 받습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        실행 가능하고 관련성 있는 알림에 집중하여 알림 피로를 줄입니다.
        사전 문제 감지 및 완화를 통해 시스템 가동 시간 및 안정성이 향상됩니다.
        인기 있는 알림 및 커뮤니케이션 도구와 통합하여 팀 협업이 향상되고 문제가 더 빠르게 해결됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>너무 많은 비중요 알림을 설정하여 알림 피로를 유발하는 경우</li>
        <li>KPI를 기반으로 알림의 우선순위를 정하지 않아 비즈니스 영향을 이해하기 어려운 경우</li>
        <li>근본 원인을 해결하지 않아 동일한 문제에 대한 반복 알림이 발생하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>실행 가능하고 관련성 있는 알림에 집중하여 알림 피로 감소</li>
        <li>사전 문제 감지 및 완화를 통한 시스템 가동 시간 및 안정성 향상</li>
        <li>인기 있는 도구와의 통합을 통한 향상된 팀 협업 및 빠른 문제 해결</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 영향과 알림을 연결하기 위해 애플리케이션 KPI를 결정합니다.</li>
        <li>CloudWatch 이상 감지, X-Ray Insights 또는 Amazon DevOps Guru를 사용하여 이상 감지를 구현합니다.</li>
        <li>EventBridge로 AWS Health 이벤트를 모니터링하는 실행 가능한 알림을 구현합니다.</li>
        <li>비중요 알림을 최소화하여 알림 피로를 줄입니다.</li>
        <li>CloudWatch 복합 알람을 설정합니다.</li>
        <li>OpsGenie, PagerDuty와 같은 알림 도구와 통합합니다.</li>
        <li>Chime, Teams, Slack으로 알림을 전달하기 위해 Amazon Q Developer를 활용합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 이상 감지, 복합 알람</li>
        <li>AWS X-Ray Insights — 트레이스 기반 이상 감지</li>
        <li>Amazon DevOps Guru — ML 기반 이상 감지</li>
        <li>AWS Health — 서비스 상태 모니터링</li>
        <li>Amazon EventBridge — 이벤트 기반 알림</li>
        <li>Amazon Q Developer — 채팅 기반 알림 전달</li>
      </ul>

      <PageNav />
    </article>
  );
}
