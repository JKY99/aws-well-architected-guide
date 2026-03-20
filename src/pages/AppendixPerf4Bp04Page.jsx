import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf4Bp04Page() {
  return (
    <article className="doc-content">
      <h1>PERF04-BP04 — 부하 분산을 사용하여 여러 리소스에 트래픽 분산</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>부하 분산기를 사용하여 트래픽을 여러 리소스에 분산시켜 단일 리소스의 과부하를 방지하고 전체 시스템 성능과 가용성을 향상시킵니다.</p>
      <h2>원하는 결과</h2>
      <p>부하 분산을 통해 트래픽을 효율적으로 분산하여 모든 리소스가 균등하게 활용되고, 단일 장애 지점을 제거하며, 전체 시스템 처리량을 극대화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>부하 분산 없이 단일 서버에 모든 트래픽 집중</li>
        <li>워크로드 특성에 맞지 않는 부하 분산기 유형 선택</li>
        <li>헬스 체크 미구성으로 비정상 인스턴스에 트래픽 전달</li>
        <li>세션 고정(sticky session) 과다 사용으로 부하 불균등 발생</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>트래픽 분산으로 단일 리소스 과부하 방지</li>
        <li>자동 헬스 체크로 비정상 인스턴스 자동 제외</li>
        <li>수평 확장을 통한 용량 증가 지원</li>
        <li>무중단 배포 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>HTTP/HTTPS 트래픽에 Application Load Balancer(ALB) 사용</li>
        <li>TCP/UDP 고성능 처리에 Network Load Balancer(NLB) 사용</li>
        <li>서드파티 가상 어플라이언스 배포에 Gateway Load Balancer(GLB) 사용</li>
        <li>적절한 헬스 체크 간격과 임계값 구성</li>
        <li>Cross-Zone Load Balancing을 활성화하여 균등 분산 보장</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Application Load Balancer — L7 HTTP/HTTPS 부하 분산</li>
        <li>Network Load Balancer — L4 고성능 부하 분산</li>
        <li>Gateway Load Balancer — 가상 어플라이언스 트래픽 분산</li>
        <li>AWS Global Accelerator — 글로벌 트래픽 부하 분산</li>
      </ul>
      <PageNav />
    </article>
  );
}
