import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost6Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST06-BP01 — 비용 모델링 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>워크로드의 비용 모델을 개발하여 다양한 리소스 구성에 따른 비용을 이해하고 최적의 리소스 유형, 크기, 수량을 결정합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드에 대한 정확한 비용 모델이 수립되어 있어 최적의 리소스 구성을 결정합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>실제 측정 없이 과다 프로비저닝합니다.</li>
        <li>비용 모델 없이 리소스 크기를 결정합니다.</li>
        <li>다양한 리소스 옵션의 비용 영향을 비교하지 않습니다.</li>
        <li>미래 사용량 증가를 고려하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최적의 리소스 크기와 유형을 데이터 기반으로 선택합니다.</li>
        <li>과다 프로비저닝으로 인한 비용 낭비를 줄입니다.</li>
        <li>미래 성장을 고려한 비용 효율적인 계획을 수립합니다.</li>
        <li>비용 최적화 기회를 체계적으로 파악합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>워크로드 특성 파악: CPU, 메모리, 네트워크, 스토리지 요구사항을 분석합니다.</li>
        <li>벤치마킹 실시: 다양한 인스턴스 유형과 크기로 성능 및 비용 테스트를 수행합니다.</li>
        <li>AWS Pricing Calculator 활용: 다양한 리소스 구성의 예상 비용을 계산합니다.</li>
        <li>지속적 최적화: 실제 사용량 데이터를 기반으로 비용 모델을 정기적으로 검토합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Pricing Calculator</li>
        <li>AWS Compute Optimizer</li>
        <li>AWS Cost Explorer</li>
        <li>Amazon CloudWatch</li>
      </ul>
      <PageNav />
    </article>
  );
}
