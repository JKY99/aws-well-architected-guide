import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost7Bp05Page() {
  return (
    <article className="doc-content">
      <h1>COST07-BP05 — 관리 계정 수준에서 요금 모델 분석 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>AWS Organizations의 관리 계정 수준에서 전체 조직의 사용량을 분석하면 Savings Plans 및 예약 인스턴스를 더 효율적으로 활용하고 공유할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>조직 전체의 컴퓨팅 사용량을 통합 분석하여 최적의 약정 요금제를 선택하고 조직 내에서 혜택을 공유합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 계정이 독립적으로 Savings Plans 또는 RI를 구매하여 중복이 발생합니다.</li>
        <li>관리 계정에서 전체 사용량을 집계하지 않아 최적의 약정 크기를 결정하지 못합니다.</li>
        <li>Savings Plans 공유 설정을 비활성화하여 혜택이 일부 계정에만 적용됩니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>조직 전체에서 Savings Plans 혜택을 최대화합니다.</li>
        <li>약정 구매 중복을 방지하여 비용을 최적화합니다.</li>
        <li>중앙화된 약정 관리로 거버넌스가 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Cost Explorer의 Savings Plans 추천을 관리 계정에서 전체 조직 기준으로 실행합니다.</li>
        <li>AWS Organizations의 통합 결제를 활성화하여 볼륨 할인과 Savings Plans 공유를 활용합니다.</li>
        <li>정기적으로 Savings Plans 활용률 보고서를 검토하여 미사용 약정을 파악합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Explorer Savings Plans</li>
        <li>AWS Organizations 통합 결제</li>
        <li>AWS Savings Plans</li>
        <li>AWS Reserved Instances</li>
      </ul>
      <PageNav />
    </article>
  );
}
