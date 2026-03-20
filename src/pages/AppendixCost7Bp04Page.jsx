import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost7Bp04Page() {
  return (
    <article className="doc-content">
      <h1>COST07-BP04 — 워크로드의 모든 구성 요소에 가격 모델 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>분석을 바탕으로 워크로드의 모든 구성 요소에 최적의 가격 모델을 구현합니다. 지속적인 모니터링을 통해 가격 모델을 최적화합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 워크로드 구성 요소에 최적의 가격 모델이 구현되어 있습니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>분석 후에도 가격 모델을 실제로 변경하지 않습니다.</li>
        <li>일부 구성 요소만 최적화하고 나머지는 온디맨드로 유지합니다.</li>
        <li>가격 모델을 한 번 설정하고 재검토하지 않습니다.</li>
        <li>예약 구매 후 사용량이 변해도 조정하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드 전체의 비용이 최적화됩니다.</li>
        <li>예약 구매 효율이 극대화됩니다.</li>
        <li>불필요한 온디맨드 비용이 제거됩니다.</li>
        <li>지속적인 비용 최적화가 이루어집니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Savings Plans 구매: 분석된 기준 사용량에 대해 Savings Plans를 구매합니다.</li>
        <li>RI 구매: 특정 인스턴스 패밀리에 대해 Reserved Instances를 구매합니다.</li>
        <li>스팟 통합: 적합한 워크로드에 스팟 인스턴스 플릿을 구성합니다.</li>
        <li>정기적 재평가: 사용 패턴 변화에 따라 가격 모델을 정기적으로 재검토합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Savings Plans</li>
        <li>Amazon EC2 Reserved Instances</li>
        <li>Amazon EC2 Spot Instances</li>
        <li>AWS Cost Explorer</li>
      </ul>
      <PageNav />
    </article>
  );
}
