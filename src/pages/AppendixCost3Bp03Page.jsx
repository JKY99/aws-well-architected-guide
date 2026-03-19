import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost3Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST03-BP03 — 데이터 전송 비용 최소화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>AWS 내부와 인터넷 간의 데이터 전송 비용을 파악하고, 아키텍처를 최적화하여 불필요한 데이터 전송을 최소화합니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터 전송 아키텍처를 최적화하여 데이터 전송 비용을 최소화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터 전송 비용을 무시합니다.</li>
        <li>리전 간 불필요한 데이터를 복제합니다.</li>
        <li>CDN을 활용하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 전송 비용을 절감합니다.</li>
        <li>네트워크 지연을 감소시킵니다.</li>
        <li>효율적인 데이터 흐름을 구성합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>같은 AZ 내 통신을 최적화합니다.</li>
        <li>CloudFront로 엣지 캐싱을 구성합니다.</li>
        <li>VPC 엔드포인트로 전송 비용을 절감합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudFront</li>
        <li>AWS PrivateLink</li>
        <li>VPC Endpoints</li>
        <li>AWS Cost Explorer</li>
      </ul>
      <PageNav />
    </article>
  );
}
