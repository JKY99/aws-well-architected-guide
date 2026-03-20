import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf4Bp01Page() {
  return (
    <article className="doc-content">
      <h1>PERF04-BP01 — 네트워킹이 성능에 미치는 영향 이해</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>네트워크 지연 시간, 대역폭, 지터가 워크로드 성능에 미치는 영향을 이해합니다. 네트워크 요구사항을 분석하여 적합한 네트워크 아키텍처와 서비스를 선택합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드의 네트워크 요구사항을 명확히 이해하고, 이를 기반으로 네트워크 아키텍처를 설계하여 예측 가능하고 일관된 성능을 제공합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>네트워크 요구사항 분석 없이 기본 VPC 구성 사용</li>
        <li>지연 시간 측정 없이 네트워크 아키텍처 결정</li>
        <li>지역별 사용자 분포를 고려하지 않은 단일 리전 배포</li>
        <li>네트워크 성능이 애플리케이션에 미치는 영향을 무시</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>요구사항 기반 네트워크 아키텍처로 성능 최적화</li>
        <li>불필요한 고대역폭 서비스 회피로 비용 효율성 향상</li>
        <li>네트워크 특성 이해로 예측 가능한 성능 보장</li>
        <li>성능 병목 지점을 사전에 식별하고 해소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>VPC Flow Logs로 네트워크 트래픽 패턴 분석</li>
        <li>지연 시간, 대역폭, 패킷 손실 요구사항 정의</li>
        <li>배치 그룹(Placement Group)으로 인스턴스 간 레이턴시 최소화</li>
        <li>온프레미스 연결이 필요한 경우 AWS Direct Connect 검토</li>
        <li>Amazon CloudWatch Network Monitor로 실시간 네트워크 성능 추적</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC — 가상 네트워크 환경</li>
        <li>AWS Direct Connect — 전용 네트워크 연결</li>
        <li>Amazon CloudWatch Network Monitor — 네트워크 성능 모니터링</li>
        <li>VPC Flow Logs — 네트워크 트래픽 분석</li>
      </ul>
      <PageNav />
    </article>
  );
}
