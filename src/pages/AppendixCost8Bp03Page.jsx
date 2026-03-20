import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost8Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST08-BP03 — 데이터 전송 비용 감소를 위한 서비스 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>데이터 전송 비용을 줄이는 AWS 서비스와 기능을 구현합니다. CDN, 압축, 캐싱 등을 활용하여 실제 데이터 전송량을 최소화합니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터 전송 비용을 줄이는 서비스와 최적화 기법이 구현됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>CDN이나 엣지 서비스 없이 모든 요청을 원점에서 처리합니다.</li>
        <li>가용 영역 간 부하 분산이 최적화되지 않아 불필요한 데이터 전송이 발생합니다.</li>
        <li>인터넷 게이트웨이를 통해 AWS 서비스에 접근합니다.</li>
        <li>대용량 데이터 전송 시 최적화 도구를 사용하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 전송 비용이 실질적으로 절감됩니다.</li>
        <li>애플리케이션 성능이 향상됩니다.</li>
        <li>네트워크 대역폭 사용량이 감소합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>CloudFront 배포: 정적 및 동적 콘텐츠를 엣지 위치에서 제공합니다.</li>
        <li>VPC 엔드포인트 생성: S3, DynamoDB 등에 인터넷을 통하지 않고 접근합니다.</li>
        <li>AWS Global Accelerator: 글로벌 사용자에 대한 네트워크 성능과 비용을 최적화합니다.</li>
        <li>S3 Transfer Acceleration: 전 세계 사용자로부터의 대용량 업로드를 가속화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudFront</li>
        <li>VPC Endpoints</li>
        <li>AWS Global Accelerator</li>
        <li>AWS Direct Connect</li>
        <li>Amazon S3 Transfer Acceleration</li>
      </ul>
      <PageNav />
    </article>
  );
}
