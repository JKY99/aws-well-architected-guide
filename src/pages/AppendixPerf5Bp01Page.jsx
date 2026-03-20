import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf5Bp01Page() {
  return (
    <article className="doc-content">
      <h1>PERF05-BP01 — 워크로드 상태 및 성능 측정을 위한 KPI 수립</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>워크로드의 상태와 성능을 측정하기 위한 핵심 성과 지표(KPI)를 수립합니다. 비즈니스 목표와 연계된 측정 가능한 KPI를 정의하여 성능 효율성을 지속적으로 평가합니다.</p>
      <h2>원하는 결과</h2>
      <p>명확한 KPI를 통해 워크로드 성능을 정량적으로 측정하고, 비즈니스 목표 달성 여부를 객관적으로 평가합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>성능 목표 없이 워크로드를 운영</li>
        <li>비즈니스 목표와 연계되지 않은 기술적 지표만 추적</li>
        <li>측정 불가능한 성능 목표 설정</li>
        <li>KPI를 설정하고 정기적으로 검토하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>성능 상태를 객관적으로 파악하고 소통 가능</li>
        <li>성능 개선 활동의 우선순위 결정 근거 확보</li>
        <li>비즈니스 영향과 기술 성능 간의 상관관계 파악</li>
        <li>SLA 준수 여부를 지속적으로 모니터링</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>응답 시간, 처리량, 오류율, 가용성 등 핵심 기술 KPI 정의</li>
        <li>비즈니스 KPI(전환율, 사용자 만족도 등)와 기술 KPI 연계</li>
        <li>Amazon CloudWatch에 KPI 대시보드 구성</li>
        <li>KPI 임계값 설정 및 위반 시 알람 구성</li>
        <li>정기적인 KPI 검토 및 목표치 재조정 프로세스 수립</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 메트릭 수집, 대시보드, 알람</li>
        <li>AWS X-Ray — 애플리케이션 성능 추적</li>
        <li>Amazon QuickSight — KPI 시각화 및 보고</li>
        <li>AWS Well-Architected Tool — 성능 효율성 검토</li>
      </ul>
      <PageNav />
    </article>
  );
}
