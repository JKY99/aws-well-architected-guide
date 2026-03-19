import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Bp03Page() {
  return (
    <article className="doc-content">
      <h1>PERF01-BP03 — 목표 성능 수치 정의</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>응답 시간, 처리량, 가용성 등 구체적이고 측정 가능한 성능 목표(KPI)를 비즈니스 요구사항에 기반하여 정의합니다.</p>
      <h2>원하는 결과</h2>
      <p>비즈니스 요구사항을 반영한 명확하고 측정 가능한 성능 목표를 수립합니다. 모든 이해관계자가 성공 기준에 동의하며, 성능 목표는 지속적으로 모니터링되고 달성 여부를 명확히 판단할 수 있습니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모호하고 측정 불가능한 성능 목표 설정 (예: "빠르게 동작해야 함")</li>
        <li>비즈니스 영향 없이 기술적 지표만 추적</li>
        <li>SLA(서비스 수준 계약) 미정의</li>
        <li>성능 목표와 비즈니스 목표의 연계 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>명확한 성공 기준으로 개발 방향 설정</li>
        <li>성능 투자 우선순위 결정의 근거 확보</li>
        <li>이해관계자 간 기대치 정렬</li>
        <li>성능 문제 조기 감지 및 대응</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>SLA(Service Level Agreement), SLO(Service Level Objective), SLI(Service Level Indicator) 정의</li>
        <li>Amazon CloudWatch 대시보드로 KPI 실시간 가시화</li>
        <li>목표 수치 기반으로 CloudWatch 경보(Alarm) 기준점 설정</li>
        <li>비즈니스 메트릭과 기술 메트릭을 연계하여 추적</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 메트릭 모니터링 및 경보</li>
        <li>AWS X-Ray — 애플리케이션 성능 추적</li>
        <li>Amazon CloudWatch Application Insights — 애플리케이션 성능 이상 탐지</li>
        <li>Amazon CloudWatch ServiceLens — 서비스 성능 통합 뷰</li>
      </ul>
      <PageNav />
    </article>
  );
}
