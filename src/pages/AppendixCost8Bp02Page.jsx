import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost8Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST08-BP02 — 데이터 전송 비용 최적화를 위한 구성 요소 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>데이터 전송 비용을 최소화하는 아키텍처 패턴과 서비스를 선택하면 총 운영 비용을 크게 절감할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터를 가능한 한 동일한 리전 또는 AZ 내에서 처리하고, 불필요한 데이터 이동을 최소화하는 아키텍처를 구현합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>처리를 위해 데이터를 불필요하게 여러 리전으로 이동합니다.</li>
        <li>동일 리전 내에서도 AZ 간 데이터 전송이 빈번하게 발생하는 아키텍처를 사용합니다.</li>
        <li>클라이언트가 직접 S3에서 대용량 데이터를 다운로드하게 합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 전송 비용이 절감됩니다.</li>
        <li>데이터 지역성이 향상되어 지연 시간이 줄어듭니다.</li>
        <li>네트워크 대역폭 사용이 최적화됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>컴퓨팅 리소스를 데이터와 동일한 AZ에 배치하여 AZ 간 전송을 최소화합니다.</li>
        <li>Amazon S3 Transfer Acceleration 또는 CloudFront를 사용하여 글로벌 배포 비용을 최적화합니다.</li>
        <li>AWS PrivateLink 또는 VPC 엔드포인트를 사용하여 인터넷을 통한 데이터 전송을 방지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudFront</li>
        <li>AWS PrivateLink</li>
        <li>VPC 엔드포인트</li>
        <li>Amazon S3 Transfer Acceleration</li>
      </ul>
      <PageNav />
    </article>
  );
}
