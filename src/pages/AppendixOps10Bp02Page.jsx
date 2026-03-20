import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps10Bp02Page() {
  return (
    <article className="doc-content">
      <h1>OPS10-BP02 — 알림별 프로세스 보유</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        모든 알림이 명확한 소유권과 정의된 에스컬레이션 경로가 있는 잘 정의된 대응 계획을 시작하도록 합니다.
        가능한 경우 대응을 자동화하고 알림을 최신 지식 베이스와 연결합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 알림이 특정하고 잘 정의된 대응 계획을 시작합니다.
        가능한 경우 대응이 자동화됩니다.
        명확한 소유권과 정의된 에스컬레이션 경로가 있습니다.
        알림이 일관된 운영자 대응을 위한 최신 지식 베이스와 연결됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>알림에 사전 정의된 대응 프로세스가 없어 임기응변적이고 지연된 해결책이 생기는 경우</li>
        <li>알림 과부하로 중요한 알림이 간과되는 경우</li>
        <li>명확한 소유권과 책임의 부재로 알림이 일관성 없이 처리되는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>실행 가능한 알림에만 집중하여 알림 피로 감소</li>
        <li>운영 문제에 대한 평균 해결 시간(MTTR) 감소</li>
        <li>평균 조사 시간(MTTI) 감소</li>
        <li>운영 대응 확장 능력 향상</li>
        <li>운영 이벤트 처리의 일관성 및 신뢰성 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>CloudWatch에서 복합 알람을 사용하여 노이즈를 줄입니다.</li>
        <li>서비스 이벤트 알림을 위해 AWS Health를 활용합니다.</li>
        <li>CloudWatch 알람을 AWS Systems Manager Incident Manager와 통합합니다.</li>
        <li>인시던트를 자동으로 생성하기 위해 Amazon EventBridge 규칙을 만듭니다.</li>
        <li>채팅 채널과 자동화 런북이 포함된 상세한 대응 계획을 수립합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 알람 생성 및 복합 알람</li>
        <li>AWS Systems Manager Incident Manager — 인시던트 대응 오케스트레이션</li>
        <li>Amazon EventBridge — 이벤트 기반 인시던트 생성</li>
        <li>AWS Health — 서비스 상태 모니터링</li>
        <li>Systems Manager Automation — 런북 실행</li>
      </ul>

      <PageNav />
    </article>
  );
}
