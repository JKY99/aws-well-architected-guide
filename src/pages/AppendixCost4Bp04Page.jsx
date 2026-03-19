import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost4Bp04Page() {
  return (
    <article className="doc-content">
      <h1>COST04-BP04 — 요금 모델 약정 분석 및 실행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>현재 사용 패턴을 분석하여 Reserved Instance와 Savings Plans의 최적 조합을 결정하고 정기적으로 약정 현황을 검토합니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터 기반 약정 전략으로 약정 할인 효과를 극대화하고 낭비를 최소화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터 없이 약정을 구매합니다.</li>
        <li>활용률을 모니터링하지 않습니다.</li>
        <li>만료된 약정을 방치합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최적화된 약정 커버리지를 달성합니다.</li>
        <li>낭비를 최소화합니다.</li>
        <li>비용 예측 가능성을 확보합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Cost Explorer 약정 권고를 월별로 검토합니다.</li>
        <li>활용률 80% 이상 유지를 목표로 합니다.</li>
        <li>만료 약정 갱신/취소 계획을 수립합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Explorer (RI/SP 권고 및 활용률)</li>
        <li>AWS Savings Plans</li>
        <li>Amazon EC2 Reserved Instances</li>
      </ul>
      <PageNav />
    </article>
  );
}
