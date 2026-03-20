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
      <p>데이터 전송 비용을 최소화하는 구성 요소와 아키텍처 패턴을 선택합니다. 데이터 배치와 전송 경로를 최적화합니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터 전송 비용을 최소화하는 아키텍처 패턴과 구성 요소가 선택됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터를 필요 이상으로 이동합니다.</li>
        <li>데이터를 사용자와 가까운 위치에 배치하지 않습니다.</li>
        <li>가용 영역 간 또는 리전 간 불필요한 데이터 복사가 발생합니다.</li>
        <li>압축이나 캐싱을 활용하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 전송 비용이 직접적으로 절감됩니다.</li>
        <li>애플리케이션 지연 시간이 감소합니다.</li>
        <li>네트워크 효율성이 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>데이터 로컬리티: 데이터를 처리하는 컴퓨팅 리소스와 같은 리전/가용 영역에 배치합니다.</li>
        <li>압축 활용: 데이터 전송 전 압축을 적용하여 전송량을 줄입니다.</li>
        <li>캐싱 구현: CloudFront, ElastiCache 등으로 자주 접근하는 데이터를 캐싱합니다.</li>
        <li>VPC 엔드포인트 활용: 인터넷을 통하지 않고 AWS 서비스에 직접 접근합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudFront</li>
        <li>Amazon ElastiCache</li>
        <li>AWS Direct Connect</li>
        <li>VPC Endpoints</li>
        <li>Amazon S3 Transfer Acceleration</li>
      </ul>
      <PageNav />
    </article>
  );
}
