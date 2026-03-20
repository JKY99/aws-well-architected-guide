import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost8Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST08-BP01 — 데이터 전송 모델링 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>워크로드의 데이터 전송 비용을 모델링합니다. 리전 간, 가용 영역 간, 인터넷으로의 데이터 전송 비용을 파악하고 최적화 기회를 식별합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드의 데이터 전송 비용이 이해되고 최적화 기회가 파악됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터 전송 비용을 아키텍처 설계에서 고려하지 않습니다.</li>
        <li>데이터 전송 패턴을 분석하지 않아 예상치 못한 비용이 발생합니다.</li>
        <li>리전 간 또는 가용 영역 간 데이터 전송 비용을 과소평가합니다.</li>
        <li>CDN 활용 없이 모든 트래픽을 원점에서 서비스합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 전송 비용이 아키텍처 설계 단계에서 최적화됩니다.</li>
        <li>예상치 못한 데이터 전송 비용 발생이 방지됩니다.</li>
        <li>불필요한 데이터 이동이 제거됩니다.</li>
        <li>네트워킹 비용이 전체 비용에서 차지하는 비율이 줄어듭니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>데이터 흐름 매핑: 애플리케이션의 모든 데이터 흐름을 문서화합니다.</li>
        <li>비용 분석: 각 데이터 흐름의 전송 비용을 계산합니다.</li>
        <li>아키텍처 최적화: 데이터가 가장 효율적인 경로로 이동하도록 아키텍처를 설계합니다.</li>
        <li>CDN 활용 검토: CloudFront를 통해 엣지 캐싱으로 원점 데이터 전송을 줄입니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Explorer</li>
        <li>AWS Pricing Calculator</li>
        <li>Amazon CloudFront</li>
        <li>AWS Direct Connect</li>
      </ul>
      <PageNav />
    </article>
  );
}
