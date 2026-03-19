import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf5Bp02Page() {
  return (
    <article className="doc-content">
      <h1>PERF05-BP02 — EC2 향상된 네트워킹 기능 평가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>향상된 네트워킹(Enhanced Networking), EFA(Elastic Fabric Adapter)를 활용하여 고성능 네트워크 처리량과 낮은 지연 시간을 달성합니다.</p>
      <h2>원하는 결과</h2>
      <p>향상된 네트워킹 기능으로 고성능 네트워크 처리량과 낮은 레이턴시를 달성하여 네트워크 집약적 워크로드를 효율적으로 처리합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>향상된 네트워킹을 지원하는 인스턴스에서 기능 미활성화</li>
        <li>네트워크 집약적 워크로드에 향상된 네트워킹 미지원 인스턴스 사용</li>
        <li>HPC 워크로드에 표준 네트워킹 인터페이스 사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>향상된 네트워킹으로 더 높은 대역폭 달성</li>
        <li>낮은 지연 시간으로 분산 애플리케이션 성능 향상</li>
        <li>네트워크 지터 감소로 일관된 성능 제공</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>SR-IOV 지원 인스턴스 유형(C5, M5, R5 등) 선택</li>
        <li>ENA(Elastic Network Adapter) 활성화 및 최신 드라이버 적용</li>
        <li>HPC 및 ML 워크로드에 EFA(Elastic Fabric Adapter) 사용</li>
        <li>클러스터 배치 그룹으로 인스턴스 물리적 근접 배치</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 (Enhanced Networking)</li>
        <li>AWS EFA (Elastic Fabric Adapter)</li>
        <li>EC2 Placement Groups (Cluster)</li>
      </ul>
      <PageNav />
    </article>
  );
}
