import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost8Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST08-BP01 — 데이터 전송 비용 모델링 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>아키텍처 설계 단계에서 데이터 전송 비용을 모델링하면 예상치 못한 높은 데이터 전송 요금을 방지하고 비용 효율적인 설계를 할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터 전송 비용이 설계 단계에서 고려되어, 운영 중 예상치 못한 데이터 전송 비용이 발생하지 않습니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>아키텍처 설계 시 데이터 전송 비용을 고려하지 않습니다.</li>
        <li>리전 간 데이터 복제 비용을 과소평가합니다.</li>
        <li>인터넷 아웃바운드 트래픽의 양을 추적하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 전송으로 인한 예기치 않은 비용을 방지합니다.</li>
        <li>비용 효율적인 아키텍처 결정을 설계 단계에서 내릴 수 있습니다.</li>
        <li>데이터 전송 비용을 예산에 정확하게 반영합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Pricing Calculator를 사용하여 데이터 전송 비용을 포함한 총 비용을 모델링합니다.</li>
        <li>데이터 흐름 다이어그램을 작성하여 모든 데이터 전송 경로를 식별합니다.</li>
        <li>AWS Cost and Usage Report에서 데이터 전송 비용 항목을 모니터링합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Pricing Calculator</li>
        <li>AWS Cost and Usage Report</li>
        <li>AWS Cost Explorer</li>
      </ul>
      <PageNav />
    </article>
  );
}
