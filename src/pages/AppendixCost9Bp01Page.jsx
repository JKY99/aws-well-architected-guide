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
      <p>워크로드의 수요 패턴을 분석하면 최적의 리소스 계획을 수립하고, 과도한 프로비저닝과 부족한 프로비저닝을 모두 방지할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드 수요의 시간별, 일별, 계절별 패턴을 이해하여 리소스를 적시에 적절한 양으로 공급합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>최대 부하를 기준으로 리소스를 상시 프로비저닝하여 낭비가 발생합니다.</li>
        <li>수요 패턴을 분석하지 않고 임의로 리소스 크기를 결정합니다.</li>
        <li>과거 데이터 없이 미래 수요를 추정합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>리소스 활용률이 향상되어 낭비가 줄어듭니다.</li>
        <li>수요 예측의 정확도가 향상됩니다.</li>
        <li>용량 계획이 비즈니스 성장 계획과 일치합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch를 사용하여 CPU, 메모리, 네트워크 사용량 지표를 수집하고 트렌드를 분석합니다.</li>
        <li>AWS Cost Explorer의 사용량 보고서를 검토하여 시간대별 사용 패턴을 파악합니다.</li>
        <li>수요 예측 도구를 사용하여 미래 리소스 수요를 예측합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Compute Optimizer</li>
      </ul>
      <PageNav />
    </article>
  );
}
