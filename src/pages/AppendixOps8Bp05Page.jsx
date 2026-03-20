import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps8Bp05Page() {
  return (
    <article className="doc-content">
      <h1>OPS08-BP05 — 대시보드 생성</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        시스템 및 비즈니스 상태에 대한 시각적 표현을 사용하여 명확하고 실행 가능한 인사이트를 제공합니다.
        기술적 메트릭과 비즈니스 KPI를 균형 있게 포함하여 다양한 이해관계자에게 서비스합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        대시보드가 다양한 이해관계자와 관련된 시스템 및 비즈니스 메트릭에 대한 포괄적인 뷰를 제공합니다.
        이해관계자가 운영 정보에 사전적으로 접근하여 빈번한 상태 요청을 줄입니다.
        정상 운영 및 인시던트 중 실시간 의사결정이 향상됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>너무 많은 메트릭으로 대시보드를 복잡하게 만드는 경우</li>
        <li>이상 감지 알림 없이 대시보드에만 의존하는 경우</li>
        <li>워크로드가 발전함에 따라 대시보드를 업데이트하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>중요한 시스템 메트릭 및 KPI에 대한 즉각적인 가시성</li>
        <li>향상된 이해관계자 커뮤니케이션 및 이해</li>
        <li>운영 문제의 영향에 대한 신속한 인사이트</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>설명적인 이름으로 CloudWatch에 기본 대시보드를 만듭니다.</li>
        <li>텍스트 컨텍스트와 설명을 위한 Markdown 위젯을 사용합니다.</li>
        <li>동적이고 유연한 뷰를 위한 대시보드 변수를 만듭니다.</li>
        <li>시스템 상태와 비즈니스 결과를 시각화하는 메트릭 위젯을 추가합니다.</li>
        <li>실행 가능한 메트릭을 위해 CloudWatch Log Insights를 활용합니다.</li>
        <li>임계값 초과 알림을 위해 CloudWatch 알람을 설정합니다.</li>
        <li>높은 카디널리티 필드를 분석하기 위해 Contributor Insights를 사용합니다.</li>
        <li>AWS Health 대시보드 데이터를 통합합니다.</li>
        <li>애플리케이션이 발전함에 따라 반복하고 개선합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 메트릭 집계 및 대시보드 생성</li>
        <li>Amazon Managed Grafana — 고급 대시보드 시각화</li>
        <li>Amazon QuickSight — 대화형 비즈니스 인텔리전스 대시보드</li>
        <li>AWS Health Dashboard — 운영 상태 및 확인된 문제</li>
      </ul>

      <PageNav />
    </article>
  );
}
