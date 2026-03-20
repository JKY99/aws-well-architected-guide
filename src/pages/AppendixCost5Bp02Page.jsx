import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost5Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST05-BP02 — 워크로드의 모든 구성 요소 분석</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>워크로드의 모든 구성 요소를 파악하고 각각의 비용 영향을 분석합니다. 컴퓨팅, 스토리지, 데이터 전송, 라이선스 등 모든 비용 요소를 고려합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드의 모든 비용 구성 요소가 파악되고 분석되어 있습니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>일부 비용 요소만 분석하고 나머지를 간과합니다.</li>
        <li>데이터 전송 비용이나 라이선스 비용을 예상하지 못합니다.</li>
        <li>구성 요소 간 비용 상호작용을 고려하지 않습니다.</li>
        <li>숨겨진 비용 요소로 인해 예상보다 높은 청구서가 발생합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>모든 비용 요소가 파악되어 정확한 총비용을 예측합니다.</li>
        <li>예상치 못한 비용 발생을 방지합니다.</li>
        <li>비용 최적화 기회를 전체적으로 파악합니다.</li>
        <li>재무 계획의 정확성이 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비용 구성 요소 분류: 컴퓨팅, 스토리지, 네트워킹, 데이터베이스, 라이선스 등 모든 비용 범주를 파악합니다.</li>
        <li>AWS Pricing Calculator 활용: 각 서비스의 예상 비용을 계산합니다.</li>
        <li>운영 비용 포함: 리소스 비용뿐만 아니라 운영, 관리 비용도 포함합니다.</li>
        <li>제3자 비용 고려: 마켓플레이스 소프트웨어나 서드파티 라이선스 비용을 포함합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Pricing Calculator</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Well-Architected Tool</li>
      </ul>
      <PageNav />
    </article>
  );
}
