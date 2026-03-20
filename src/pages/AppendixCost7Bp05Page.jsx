import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost7Bp05Page() {
  return (
    <article className="doc-content">
      <h1>COST07-BP05 — 관리 계정 수준에서 가격 모델 분석 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>AWS Organizations의 관리 계정 수준에서 통합 비용을 분석하고 전체 조직에 최적화된 가격 모델을 적용합니다.</p>
      <h2>원하는 결과</h2>
      <p>관리 계정 수준의 통합 분석을 통해 조직 전체의 가격 모델이 최적화됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 계정을 독립적으로 분석하고 조직 전체의 통합 최적화를 수행하지 않습니다.</li>
        <li>관리 계정의 통합 할인 혜택을 활용하지 않습니다.</li>
        <li>여러 계정에 걸친 Savings Plans 적용을 최적화하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>조직 전체의 볼륨 할인 혜택을 극대화합니다.</li>
        <li>Savings Plans와 RI가 모든 계정에 최적으로 배분됩니다.</li>
        <li>통합 구매력으로 더 큰 할인을 협상합니다.</li>
        <li>전체 조직의 비용 효율성이 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>통합 청구 활용: AWS Organizations의 통합 청구로 볼륨 할인을 받습니다.</li>
        <li>Savings Plans 공유: 관리 계정에서 구매한 Savings Plans가 모든 계정에 적용되도록 설정합니다.</li>
        <li>RI 공유: Reserved Instances를 여러 계정에서 공유합니다.</li>
        <li>사용률 모니터링: 전체 조직의 RI/Savings Plans 사용률을 정기적으로 모니터링합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Organizations</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Savings Plans</li>
        <li>Amazon EC2 Reserved Instances</li>
      </ul>
      <PageNav />
    </article>
  );
}
