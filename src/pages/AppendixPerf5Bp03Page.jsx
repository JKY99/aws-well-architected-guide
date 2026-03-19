import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf5Bp03Page() {
  return (
    <article className="doc-content">
      <h1>PERF05-BP03 — 엣지 가속 네트워킹 솔루션 평가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>CloudFront, Global Accelerator를 활용하여 글로벌 사용자에게 낮은 지연 시간으로 콘텐츠와 애플리케이션을 제공합니다.</p>
      <h2>원하는 결과</h2>
      <p>전 세계 사용자에게 일관되고 빠른 네트워크 성능을 제공하여 지역에 관계없이 우수한 사용자 경험을 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>지역적으로 분산된 사용자를 위한 엣지 최적화 없음</li>
        <li>단일 리전에서 전 세계 트래픽 직접 처리</li>
        <li>정적 콘텐츠에 오리진 서버 직접 연결</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>엣지 위치 활용으로 글로벌 지연 시간 감소</li>
        <li>캐싱으로 오리진 서버 부하 감소</li>
        <li>AWS 글로벌 네트워크 활용으로 가용성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudFront 배포 설정으로 정적/동적 콘텐츠 엣지 제공</li>
        <li>AWS Global Accelerator로 TCP/UDP 트래픽 가속화</li>
        <li>Amazon Route 53 지연 시간 기반 라우팅으로 최적 리전으로 트래픽 유도</li>
        <li>CloudFront 캐시 정책 최적화로 캐시 히트율 향상</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudFront</li>
        <li>AWS Global Accelerator</li>
        <li>Amazon Route 53</li>
      </ul>
      <PageNav />
    </article>
  );
}
