import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf5Bp05Page() {
  return (
    <article className="doc-content">
      <h1>PERF05-BP05 — 네트워크 구성 최적화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>MTU 크기 최적화, TCP 파라미터 조정, 점보 프레임 활성화 등으로 네트워크 처리량과 효율성을 향상시킵니다.</p>
      <h2>원하는 결과</h2>
      <p>네트워크 구성 최적화로 처리량을 극대화하고 패킷 오버헤드를 최소화하여 전반적인 네트워크 효율성을 향상시킵니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>기본 네트워크 설정을 최적화 없이 사용</li>
        <li>VPC 내부 통신에 점보 프레임 미활용</li>
        <li>네트워크 성능 메트릭 미모니터링으로 병목 미감지</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>점보 프레임 활용으로 패킷 오버헤드 감소 및 처리량 향상</li>
        <li>최적화된 TCP 파라미터로 지연 시간 개선</li>
        <li>Direct Connect로 일관된 전용 대역폭 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>VPC 내부 통신에 점보 프레임(9001 MTU) 활성화</li>
        <li>VPC Flow Logs로 네트워크 트래픽 패턴 및 병목 분석</li>
        <li>온프레미스 연결에 AWS Direct Connect로 전용 대역폭 확보</li>
        <li>Amazon CloudWatch Network Monitor로 네트워크 성능 지표 지속 모니터링</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC</li>
        <li>AWS Direct Connect</li>
        <li>Amazon CloudWatch Network Monitor</li>
      </ul>
      <PageNav />
    </article>
  );
}
