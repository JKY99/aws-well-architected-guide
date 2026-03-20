import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf5Bp02Page() {
  return (
    <article className="doc-content">
      <h1>PERF05-BP02 — 모니터링 솔루션을 통한 성능 중요 영역 파악</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>모니터링 솔루션을 활용하여 워크로드에서 성능이 가장 중요한 영역을 파악합니다. 성능 병목 지점과 개선 기회를 사전에 식별합니다.</p>
      <h2>원하는 결과</h2>
      <p>모니터링 데이터를 통해 성능에 가장 큰 영향을 미치는 구성 요소를 파악하고, 개선 활동의 우선순위를 효과적으로 결정합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모니터링 없이 성능 문제가 발생할 때까지 기다림</li>
        <li>인프라 메트릭만 모니터링하고 애플리케이션 성능은 무시</li>
        <li>너무 많은 메트릭으로 핵심 성능 지표 식별 어려움</li>
        <li>모니터링 데이터를 수집하지만 분석하거나 활용하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>성능 문제를 사전에 감지하여 사용자 영향 최소화</li>
        <li>성능 개선 투자의 효과를 최대화</li>
        <li>워크로드 전반의 성능 가시성 확보</li>
        <li>용량 계획 및 비용 최적화 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch로 인프라 및 애플리케이션 메트릭 수집</li>
        <li>AWS X-Ray로 분산 시스템의 요청 흐름 추적</li>
        <li>Amazon CloudWatch Application Insights로 애플리케이션 문제 자동 감지</li>
        <li>AWS Compute Optimizer로 리소스 활용률 분석 및 최적화 권고 확인</li>
        <li>성능 대시보드를 구성하여 팀 전체가 성능 상태를 공유</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 메트릭 수집 및 모니터링</li>
        <li>AWS X-Ray — 분산 추적 및 성능 분석</li>
        <li>Amazon CloudWatch Application Insights — 애플리케이션 이상 감지</li>
        <li>AWS Compute Optimizer — 리소스 최적화 권고</li>
      </ul>
      <PageNav />
    </article>
  );
}
