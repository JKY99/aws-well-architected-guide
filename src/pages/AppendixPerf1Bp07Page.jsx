import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Bp07Page() {
  return (
    <article className="doc-content">
      <h1>PERF01-BP07 — 아키텍처 선택에 데이터 기반 접근 방식 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 보통</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 보통입니다.</p>
      </div>
      <p>실제 사용 데이터, 성능 메트릭, 비용 데이터를 분석하여 아키텍처를 선택하고 개선합니다. 가정이 아닌 측정값을 기반으로 의사결정합니다.</p>
      <h2>원하는 결과</h2>
      <p>수집된 데이터와 분석을 통해 아키텍처 결정을 내립니다. 지속적인 데이터 수집과 분석으로 아키텍처를 점진적으로 개선합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터 수집 없이 직관이나 경험만으로 아키텍처 결정</li>
        <li>과거 성공 패턴을 맹목적으로 새 워크로드에 적용</li>
        <li>성능 데이터를 수집하지 않아 개선 기회 놓침</li>
        <li>비용 데이터를 아키텍처 결정에 반영하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>근거 있는 의사결정으로 아키텍처 리스크 감소</li>
        <li>지속적인 성능 개선 기회 식별</li>
        <li>비용 최적화와 성능 균형 달성</li>
        <li>아키텍처 결정의 투명성 및 추적 가능성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch를 사용하여 성능 기준선(baseline) 수립</li>
        <li>AWS Cost Explorer로 비용 트렌드를 분석하고 아키텍처 결정에 반영</li>
        <li>AWS X-Ray로 분산 시스템의 성능 병목 지점 식별</li>
        <li>A/B 테스트를 통해 아키텍처 변경의 효과 측정</li>
        <li>데이터 기반 의사결정 프로세스를 팀 문화로 정착</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 메트릭 수집, 시각화 및 알람</li>
        <li>AWS X-Ray — 성능 추적 및 분석</li>
        <li>AWS Cost Explorer — 비용 분석 및 예측</li>
        <li>Amazon QuickSight — 성능 데이터 시각화 및 분석</li>
      </ul>
      <PageNav />
    </article>
  );
}
