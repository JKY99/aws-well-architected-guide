import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost7Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST07-BP02 — 비용 기반 리전 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>데이터 주권, 지연 시간, 서비스 가용성 요구사항을 충족하면서 비용이 낮은 AWS 리전을 선택합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드 요구사항을 충족하면서 비용이 최적화된 AWS 리전이 선택됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용을 고려하지 않고 기본 또는 익숙한 리전을 사용합니다.</li>
        <li>동일한 서비스가 다른 리전에서 더 저렴하게 제공됨을 모릅니다.</li>
        <li>데이터 이전 비용을 고려하지 않습니다.</li>
        <li>규제 요구사항과 비용의 균형을 고려하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>리전 선택만으로도 상당한 비용 절감이 가능합니다.</li>
        <li>규제 요구사항과 비용 효율성을 동시에 충족합니다.</li>
        <li>리전 간 비용 차이를 전략적으로 활용합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>리전 간 가격 비교: AWS 가격 페이지에서 리전별 서비스 가격을 비교합니다.</li>
        <li>데이터 주권 요구사항 파악: 데이터가 특정 지역에 있어야 하는 규제 요구사항을 확인합니다.</li>
        <li>지연 시간 분석: 사용자와의 거리에 따른 지연 시간 영향을 평가합니다.</li>
        <li>총비용 계산: 서비스 비용과 데이터 전송 비용을 합산하여 총비용을 계산합니다.</li>
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
