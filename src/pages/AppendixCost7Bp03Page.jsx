import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost7Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST07-BP03 — 비용 효율적인 조건의 서드파티 계약 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>서드파티 소프트웨어나 서비스 계약 시 비용 효율적인 조건을 협상하고 선택합니다. AWS 마켓플레이스 옵션도 고려합니다.</p>
      <h2>원하는 결과</h2>
      <p>서드파티 서비스 계약이 비용 효율적으로 체결되어 있습니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>서드파티 계약의 비용 효율성을 평가하지 않습니다.</li>
        <li>오래된 계약을 재협상하지 않습니다.</li>
        <li>AWS Marketplace 옵션을 고려하지 않습니다.</li>
        <li>숨겨진 비용이 있는 계약을 체결합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>서드파티 서비스 비용이 최적화됩니다.</li>
        <li>계약 조건이 실제 사용 패턴에 맞게 조정됩니다.</li>
        <li>벤더 종속 위험이 감소합니다.</li>
        <li>총소유비용(TCO)이 절감됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>계약 감사: 현재 서드파티 계약을 검토하고 비용 효율성을 평가합니다.</li>
        <li>재협상: 오래된 계약의 조건을 현재 사용량 및 시장 조건에 맞게 재협상합니다.</li>
        <li>AWS Marketplace 활용: 계약 및 청구가 AWS와 통합된 마켓플레이스 솔루션을 고려합니다.</li>
        <li>사용량 기반 계약 우선: 고정 요금보다 사용량 기반 요금 모델을 선호합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Marketplace</li>
        <li>AWS License Manager</li>
      </ul>
      <PageNav />
    </article>
  );
}
