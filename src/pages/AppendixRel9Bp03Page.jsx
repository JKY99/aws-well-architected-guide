import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL09-BP03 — DR 테스트</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>Game Day 훈련, 카오스 엔지니어링 등을 통해 DR 계획을 정기적으로 테스트하여 실제 재해 시 복구 능력을 검증합니다.</p>
      <h2>원하는 결과</h2>
      <p>실제 재해 시 DR 계획이 기대대로 작동한다는 신뢰를 확보합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>DR 계획 수립 후 테스트 없음</li>
        <li>일부 구성 요소만 테스트</li>
        <li>테스트 결과 미반영</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>DR 실효성 검증</li>
        <li>팀 준비도 향상</li>
        <li>개선 기회 발견</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>연간 Game Day 실시</li>
        <li>AWS FIS(Fault Injection Simulator)로 장애 주입 테스트</li>
        <li>테스트 결과 문서화 및 개선</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Fault Injection Simulator (FIS)</li>
        <li>AWS Resilience Hub</li>
        <li>Amazon CloudWatch</li>
      </ul>
      <PageNav />
    </article>
  );
}
