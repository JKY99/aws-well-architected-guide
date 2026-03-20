import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf4Bp02Page() {
  return (
    <article className="doc-content">
      <h1>PERF04-BP02 — 사용 가능한 네트워킹 기능 평가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>향상된 네트워킹, SR-IOV, 점보 프레임, 배치 그룹 등 사용 가능한 네트워킹 기능을 평가하고 워크로드에 적용합니다.</p>
      <h2>원하는 결과</h2>
      <p>사용 가능한 네트워킹 기능을 최대한 활용하여 네트워크 성능을 향상시키고, 네트워크 병목 지점을 제거합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사용 가능한 네트워킹 기능을 파악하지 않아 기본 설정만 사용</li>
        <li>향상된 네트워킹을 지원하는 인스턴스에서 활성화하지 않음</li>
        <li>네트워킹 기능의 성능 이점을 측정하지 않고 도입 결정</li>
        <li>워크로드 특성과 맞지 않는 네트워킹 기능 선택</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>향상된 네트워킹으로 처리량 증가 및 지연 시간 감소</li>
        <li>CPU 오프로딩으로 컴퓨팅 리소스 효율성 향상</li>
        <li>네트워크 집약적 워크로드의 성능 향상</li>
        <li>최신 네트워킹 기술 활용으로 경쟁 우위 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>EC2 Enhanced Networking(ENA) 지원 인스턴스 사용</li>
        <li>고성능 컴퓨팅에 Elastic Fabric Adapter(EFA) 활용</li>
        <li>점보 프레임(9001 MTU)으로 대역폭 효율성 향상</li>
        <li>배치 그룹으로 인스턴스 간 물리적 거리 최소화</li>
        <li>DPDK를 활용한 고성능 패킷 처리 검토</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Enhanced Networking — 고성능 네트워크 인터페이스</li>
        <li>Elastic Fabric Adapter(EFA) — HPC 및 ML 워크로드용 네트워크</li>
        <li>EC2 배치 그룹 — 인스턴스 간 네트워크 최적화</li>
        <li>AWS Nitro System — 고성능 네트워킹 기반 인프라</li>
      </ul>
      <PageNav />
    </article>
  );
}
