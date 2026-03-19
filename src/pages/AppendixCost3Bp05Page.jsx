import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost3Bp05Page() {
  return (
    <article className="doc-content">
      <h1>COST03-BP05 — 지역에 따른 비용 최적화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>데이터 주권, 지연 시간 요구사항을 만족하면서 비용이 낮은 AWS 리전을 활용하여 비용을 최적화합니다.</p>
      <h2>원하는 결과</h2>
      <p>규정 준수와 성능을 유지하면서 가장 비용 효율적인 리전을 활용합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 비교 없이 리전을 선택합니다.</li>
        <li>리전 간 가격 차이를 무시합니다.</li>
        <li>규정 요건을 고려하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>리전 비용을 절감합니다.</li>
        <li>규정 준수를 유지합니다.</li>
        <li>최적화된 지역 전략을 수립합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>규정 요건 파악 후 저렴한 리전을 식별합니다.</li>
        <li>개발/테스트 워크로드는 저렴한 리전을 활용합니다.</li>
        <li>리전 간 데이터 전송 비용을 고려합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Pricing Calculator</li>
        <li>AWS Cost Explorer</li>
        <li>Amazon CloudFront</li>
      </ul>
      <PageNav />
    </article>
  );
}
