import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps8Bp01Page() {
  return (
    <article className="doc-content">
      <h1>OPS08-BP01 — 워크로드 메트릭 분석</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        워크로드 성능에 대한 정확한 인사이트를 도출하여 비즈니스 목표와 일치하는
        데이터 기반 결정을 내립니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        기술 성능과 비즈니스 결과 간의 상관관계에 대한 향상된 이해를 갖습니다.
        실시간 데이터를 기반으로 한 개선된 의사결정 프로세스를 보유합니다.
        비즈니스 결과에 영향을 미치기 전에 문제를 사전에 식별하고 완화합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비즈니스 결과에 미치는 영향을 고려하지 않고 독립적으로 메트릭을 분석하는 경우</li>
        <li>비즈니스 메트릭을 제쳐두고 기술 메트릭에만 지나치게 의존하는 경우</li>
        <li>메트릭을 불규칙적으로 검토하여 실시간 의사결정 기회를 놓치는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>기술 성능과 비즈니스 결과 간의 상관관계에 대한 향상된 이해</li>
        <li>실시간 데이터를 기반으로 한 개선된 의사결정 프로세스</li>
        <li>비즈니스 결과에 영향을 미치기 전에 문제를 사전에 식별하고 완화</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>순수한 기술 메트릭보다 비즈니스 결과 메트릭을 우선시합니다.</li>
        <li>데이터의 급증, 하락 또는 패턴의 중요성을 이해합니다.</li>
        <li>Amazon CloudWatch 대시보드를 구성하여 시간에 따른 메트릭을 시각화하고 비교합니다.</li>
        <li>백분위수를 사용하여 메트릭 분포를 이해하고 SLA를 정의합니다.</li>
        <li>CloudWatch 이상 감지를 설정하여 패턴을 식별합니다.</li>
        <li>Metric Insights를 사용하여 계정/리전 전반의 데이터를 쿼리하고 분석합니다.</li>
        <li>인사이트 기반으로 최적화하고 워크로드를 개선하는 정보에 기반한 결정을 내립니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 중앙 집중식 메트릭 분석 및 모니터링</li>
        <li>Amazon DevOps Guru — 서버리스 애플리케이션을 위한 머신 러닝 기반 이상 감지</li>
        <li>Amazon QuickSight — KPI 대시보드 및 비즈니스 인텔리전스</li>
      </ul>

      <PageNav />
    </article>
  );
}
