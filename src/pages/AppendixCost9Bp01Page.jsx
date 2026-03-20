import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost9Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST09-BP01 — 워크로드 수요 분석 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>워크로드의 수요 패턴을 분석하여 리소스 요구사항을 이해합니다. 피크 수요, 평균 수요, 계절적 변동을 분석합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드 수요 패턴이 완전히 이해되어 있으며 이를 기반으로 리소스를 최적으로 공급합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수요 패턴을 분석하지 않고 리소스를 프로비저닝합니다.</li>
        <li>피크 수요에 맞게 항상 최대 용량을 유지합니다.</li>
        <li>수요 변동에 따라 리소스를 동적으로 조정하지 않습니다.</li>
        <li>수요 예측 없이 리소스를 과다 프로비저닝합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수요에 맞게 리소스가 최적화되어 비용이 절감됩니다.</li>
        <li>피크 수요 시에도 성능이 유지됩니다.</li>
        <li>비피크 시간에 불필요한 리소스 비용이 줄어듭니다.</li>
        <li>수요 예측의 정확성이 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>수요 패턴 분석: CloudWatch 지표를 사용하여 시간별, 일별, 주별 수요 패턴을 분석합니다.</li>
        <li>계절성 파악: 비즈니스 이벤트, 캠페인 등에 따른 계절적 수요 변동을 파악합니다.</li>
        <li>피크 분석: 최대 수요와 평균 수요의 차이를 분석합니다.</li>
        <li>수요 예측: 과거 데이터를 기반으로 미래 수요를 예측합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch</li>
        <li>AWS Cost Explorer</li>
        <li>Amazon Forecast</li>
        <li>AWS Auto Scaling</li>
      </ul>
      <PageNav />
    </article>
  );
}
