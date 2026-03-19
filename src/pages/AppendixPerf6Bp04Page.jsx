import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf6Bp04Page() {
  return (
    <article className="doc-content">
      <h1>PERF06-BP04 — 성능 게임 데이 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>정기적인 Game Day(카오스 엔지니어링 훈련)를 통해 다양한 부하 시나리오에서 시스템 성능을 검증하고 병목을 발견합니다.</p>
      <h2>원하는 결과</h2>
      <p>Game Day를 통한 실제 성능 한계 파악과 팀의 대응 능력 향상을 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>성능 한계 테스트 없음</li>
        <li>이론적 용량 계획에만 의존</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>실제 성능 한계 파악</li>
        <li>병목 지점 발견</li>
        <li>팀 대응 역량 강화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS FIS로 장애 주입 테스트</li>
        <li>실제 부하 시뮬레이션</li>
        <li>결과 문서화 및 개선 계획 수립</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Fault Injection Simulator (FIS)</li>
        <li>Amazon CloudWatch</li>
        <li>AWS X-Ray</li>
        <li>AWS Load Testing</li>
      </ul>
      <PageNav />
    </article>
  );
}
