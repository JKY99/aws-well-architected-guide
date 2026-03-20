import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf4Bp05Page() {
  return (
    <article className="doc-content">
      <h1>PERF04-BP05 — 성능 향상을 위한 네트워크 프로토콜 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>워크로드의 특성에 맞는 네트워크 프로토콜을 선택하여 성능을 향상시킵니다. HTTP/2, gRPC, UDP 등 다양한 프로토콜의 특성을 이해하고 최적의 프로토콜을 적용합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드 특성에 최적화된 네트워크 프로토콜을 사용하여 지연 시간을 줄이고 처리량을 향상시킵니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 워크로드에 동일한 프로토콜 적용</li>
        <li>프로토콜 특성을 고려하지 않고 기본값 사용</li>
        <li>최신 프로토콜의 성능 이점을 활용하지 않음</li>
        <li>네트워크 프로토콜과 애플리케이션 요구사항 불일치</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>프로토콜 최적화를 통한 지연 시간 감소</li>
        <li>연결 오버헤드 감소로 처리량 향상</li>
        <li>네트워크 대역폭 효율적 사용</li>
        <li>애플리케이션 성능 및 사용자 경험 개선</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>웹 애플리케이션에 HTTP/2 또는 HTTP/3 적용하여 다중화 활용</li>
        <li>마이크로서비스 간 통신에 gRPC 활용으로 성능 향상</li>
        <li>실시간 스트리밍에 WebSocket 또는 UDP 기반 프로토콜 검토</li>
        <li>AWS Global Accelerator로 TCP/UDP 트래픽 최적화</li>
        <li>TLS 1.3을 적용하여 보안과 성능을 동시에 향상</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Global Accelerator — TCP/UDP 트래픽 최적화</li>
        <li>Amazon CloudFront — HTTP/2, HTTP/3 지원 CDN</li>
        <li>Elastic Load Balancing — 다양한 프로토콜 지원 부하 분산</li>
        <li>AWS Certificate Manager — TLS 인증서 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
