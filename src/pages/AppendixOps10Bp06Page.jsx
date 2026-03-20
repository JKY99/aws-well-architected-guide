import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps10Bp06Page() {
  return (
    <article className="doc-content">
      <h1>OPS10-BP06 — 대시보드를 통한 상태 전달</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        대시보드를 통해 다양한 이해관계자와 관련된 시스템 및 비즈니스 메트릭에 대한 포괄적인 뷰를 제공합니다.
        이해관계자가 운영 정보에 사전적으로 접근하여 정보에 기반한 의사결정을 내릴 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        대시보드가 다양한 이해관계자와 관련된 시스템 및 비즈니스 메트릭에 대한 포괄적인 뷰를 제공합니다.
        이해관계자가 운영 정보에 사전적으로 접근하여 빈번한 상태 요청을 줄입니다.
        정상 운영 및 인시던트 중 실시간 의사결정이 향상됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>인시던트 관리 콜에 참여하는 엔지니어들이 최신 상태 업데이트를 받기 위해 시간을 낭비하는 경우</li>
        <li>관리자를 위한 수동 보고에 의존하여 지연과 부정확함이 발생하는 경우</li>
        <li>인시던트 중 운영팀이 상태 업데이트 요청으로 자주 방해받는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>이해관계자에게 정보에 기반한 의사결정을 위한 중요한 정보에 대한 즉각적인 접근 권한 부여</li>
        <li>수동 보고 및 상태 문의를 최소화하여 운영 비효율성 감소</li>
        <li>시스템 성과 및 비즈니스 메트릭에 대한 실시간 가시성을 통한 투명성 및 신뢰성 증가</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>기술팀, 리더십, 고객에 대한 정보 요구사항을 파악합니다.</li>
        <li>Amazon CloudWatch 대시보드, Amazon QuickSight, AWS Health Dashboard와 같은 적절한 도구를 선택합니다.</li>
        <li>자동화된 알람 및 주석이 있는 임계값이 포함된 높은 수준의 뷰와 상세한 뷰를 모두 포함하는 효과적인 대시보드를 설계합니다.</li>
        <li>CloudWatch Logs Insights, AWS Health API, EventBridge를 통합하여 통합된 뷰를 제공합니다.</li>
        <li>CloudWatch 공유 기능을 사용하여 대시보드를 공유합니다.</li>
        <li>발전하는 비즈니스 요구사항과 피드백에 맞게 대시보드를 정기적으로 업데이트합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 메트릭 집계 및 대시보드 생성</li>
        <li>Amazon QuickSight — 대화형 비즈니스 인텔리전스 대시보드</li>
        <li>AWS Health — 운영 상태 및 확인된 문제</li>
        <li>Amazon EventBridge — AWS Health 이벤트와의 통합</li>
      </ul>

      <PageNav />
    </article>
  );
}
