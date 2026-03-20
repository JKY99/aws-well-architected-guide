import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function PerfNetworkingPage() {
  return (
    <article className="doc-content">
      <h1>성능 효율성 — 네트워킹 및 콘텐츠 전달</h1>

      <p>
        네트워크를 배포할 때 위치를 고려해야 합니다.
        리소스를 사용 위치와 가깝게 배치하여 거리를 줄이세요.
        네트워킹 지표를 활용하여 워크로드가 발전함에 따라 네트워킹 설정을 변경하세요.
      </p>

      <h2>주요 AWS 네트워킹 최적화 기능</h2>
      <ul>
        <li>
          <strong>향상된 네트워킹 (Enhanced Networking):</strong> 더 높은 대역폭,
          더 높은 PPS(패킷/초), 더 낮은 지연 시간 제공
        </li>
        <li>
          <strong>EBS 최적화 인스턴스:</strong> EC2와 EBS 간의 전용 대역폭 제공
        </li>
        <li>
          <strong>Amazon S3 Transfer Acceleration:</strong> CloudFront 엣지 로케이션을 통해
          S3와의 빠른 장거리 파일 전송
        </li>
        <li>
          <strong>Amazon CloudFront:</strong> 전 세계 엣지 로케이션에서 콘텐츠를 캐싱하여
          지연 시간 감소
        </li>
      </ul>

      <h2>네트워크 배포 전략</h2>
      <ul>
        <li>리전, 가용 영역, 배치 그룹, 엣지 서비스를 전략적으로 활용</li>
        <li>위치 기반 최적화로 네트워크 아키텍처 최적화</li>
      </ul>

      <PageNav />
    </article>
  );
}
