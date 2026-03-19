import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf5Bp04Page() {
  return (
    <article className="doc-content">
      <h1>PERF05-BP04 — 부하 분산 솔루션 평가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>워크로드 유형(HTTP/HTTPS, TCP, UDP)에 맞는 로드 밸런서를 선택하고 최적 라우팅 알고리즘을 구성합니다.</p>
      <h2>원하는 결과</h2>
      <p>트래픽을 효율적으로 분산하여 서버 과부하 없이 일관된 성능을 제공하고 고가용성을 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>워크로드 유형에 맞지 않는 로드 밸런서 유형 선택</li>
        <li>헬스 체크 미구성으로 비정상 인스턴스로 트래픽 전달</li>
        <li>고정 세션(Sticky Session) 남용으로 부하 불균형 발생</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최적 로드 밸런서 선택으로 부하 균등 분산</li>
        <li>헬스 체크 기반 자동 장애 처리로 고가용성 달성</li>
        <li>연결 드레이닝으로 무중단 배포 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>애플리케이션 유형에 맞는 LB 선택: ALB(HTTP/HTTPS), NLB(TCP/UDP), GWLB(서드파티 어플라이언스)</li>
        <li>적절한 헬스 체크 임계값 및 간격 설정</li>
        <li>연결 드레이닝(Deregistration Delay) 구성으로 무중단 트래픽 전환</li>
        <li>Target Group 라우팅 알고리즘 최적화(최소 미처리 요청 등)</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Application Load Balancer</li>
        <li>AWS Network Load Balancer</li>
        <li>AWS Gateway Load Balancer</li>
      </ul>
      <PageNav />
    </article>
  );
}
