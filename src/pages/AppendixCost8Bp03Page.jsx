import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost8Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST08-BP03 — 데이터 전송 비용 절감 서비스 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>CloudFront, AWS Direct Connect, VPC 엔드포인트 등 데이터 전송 비용을 절감하는 AWS 서비스를 활용하면 총 네트워크 비용을 크게 줄일 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터 전송 비용 절감 서비스를 적극 활용하여 동일한 수준의 성능을 더 낮은 비용으로 제공합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>CloudFront 없이 S3에서 직접 정적 콘텐츠를 제공하여 아웃바운드 비용이 높습니다.</li>
        <li>온프레미스와의 연결에 인터넷 VPN만 사용하여 데이터 전송 비용이 높습니다.</li>
        <li>AWS 서비스 접근 시 VPC 엔드포인트를 사용하지 않아 NAT Gateway 비용이 발생합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>인터넷 아웃바운드 데이터 전송 비용이 크게 절감됩니다.</li>
        <li>콘텐츠 전송 성능이 향상됩니다.</li>
        <li>NAT Gateway 등 중간 네트워크 구성 요소 비용이 감소합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudFront를 사용하여 정적 및 동적 콘텐츠를 캐싱하고 엣지에서 제공합니다.</li>
        <li>AWS Direct Connect를 사용하여 온프레미스와의 대용량 데이터 전송 비용을 절감합니다.</li>
        <li>S3, DynamoDB, KMS 등 AWS 서비스에 대한 VPC 엔드포인트를 생성하여 NAT Gateway 비용을 제거합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudFront</li>
        <li>AWS Direct Connect</li>
        <li>VPC 게이트웨이 엔드포인트</li>
        <li>AWS Global Accelerator</li>
      </ul>
      <PageNav />
    </article>
  );
}
