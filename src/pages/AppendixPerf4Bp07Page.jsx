import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf4Bp07Page() {
  return (
    <article className="doc-content">
      <h1>PERF04-BP07 — 메트릭 기반 네트워크 구성 최적화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>네트워크 성능 메트릭을 지속적으로 수집하고 분석하여 네트워크 구성을 최적화합니다. 데이터 기반으로 네트워크 병목 지점을 식별하고 개선합니다.</p>
      <h2>원하는 결과</h2>
      <p>네트워크 메트릭 분석을 통해 성능 문제를 사전에 감지하고 네트워크 구성을 지속적으로 최적화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>네트워크 성능 메트릭을 수집하지 않아 문제 감지 늦음</li>
        <li>장애 발생 후에만 네트워크 구성 검토</li>
        <li>네트워크 메트릭과 애플리케이션 성능을 연관하지 않음</li>
        <li>네트워크 구성 변경 후 효과를 측정하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>네트워크 문제 사전 감지 및 예방</li>
        <li>데이터 기반의 네트워크 최적화</li>
        <li>네트워크 용량 계획 개선</li>
        <li>사용자 경험 영향 최소화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch로 네트워크 처리량, 지연 시간, 패킷 손실 모니터링</li>
        <li>VPC Flow Logs를 활성화하여 네트워크 트래픽 분석</li>
        <li>AWS Network Manager로 전체 네트워크 가시성 확보</li>
        <li>Amazon CloudWatch Network Monitor로 네트워크 성능 모니터링</li>
        <li>메트릭 임계값에 따른 자동 알람 설정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 네트워크 메트릭 수집 및 알람</li>
        <li>VPC Flow Logs — 네트워크 트래픽 로그 수집</li>
        <li>AWS Network Manager — 전체 네트워크 모니터링</li>
        <li>Amazon CloudWatch Network Monitor — 네트워크 성능 모니터링</li>
      </ul>
      <PageNav />
    </article>
  );
}
