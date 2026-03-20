import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost5Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST05-BP03 — 각 구성 요소의 철저한 분석 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>워크로드의 각 구성 요소에 대해 사용 가능한 옵션과 비용을 철저하게 분석합니다. 다양한 서비스 옵션을 비교하여 최적의 선택을 합니다.</p>
      <h2>원하는 결과</h2>
      <p>각 구성 요소에 대해 비용 최적화 관점에서 철저한 분석이 수행됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>첫 번째 또는 가장 익숙한 서비스를 선택합니다.</li>
        <li>유사한 서비스들을 비교하지 않습니다.</li>
        <li>비용 최적화 옵션(스팟 인스턴스, 저장용량 예약 등)을 고려하지 않습니다.</li>
        <li>관리형 서비스 대 자체 관리형 서비스의 총비용을 비교하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비용 효율적인 서비스 선택으로 비용이 절감됩니다.</li>
        <li>비용과 기능 간의 최적 균형점을 찾습니다.</li>
        <li>잘못된 서비스 선택으로 인한 재작업 비용을 방지합니다.</li>
        <li>장기적인 비용 효율성이 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>서비스 비교 분석: 동일한 기능을 제공하는 여러 AWS 서비스를 비용 관점에서 비교합니다.</li>
        <li>관리형 서비스 고려: EC2 자체 관리 대 RDS, Lambda 등 관리형 서비스의 총비용을 비교합니다.</li>
        <li>가격 모델 분석: 온디맨드, 예약, 스팟 인스턴스 등 다양한 가격 모델을 비교합니다.</li>
        <li>파일럿 테스트: 소규모 파일럿으로 실제 비용을 검증합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Pricing Calculator</li>
        <li>AWS Compute Optimizer</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Well-Architected Tool</li>
      </ul>
      <PageNav />
    </article>
  );
}
