import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps1Bp04Page() {
  return (
    <article className="doc-content">
      <h1>OPS01-BP04 — 위협 시나리오 평가</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        워크로드와 비즈니스에 영향을 미칠 수 있는 잠재적 위협을 파악하고 평가합니다.
        기술적 위협(보안 침해, 인프라 장애)과 비기술적 위협(공급망 중단, 규제 변경)을 모두 고려합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        잠재적 위협 목록을 유지하고 각 위협의 발생 가능성과 영향도를 평가합니다.
        위협 시나리오에 따른 대응 계획을 수립하고 정기적으로 테스트합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>기술적 위협만 고려하고 비즈니스 위협(시장 변화, 공급망 중단 등)을 무시하는 경우</li>
        <li>위협 평가를 한 번만 수행하고 정기적으로 업데이트하지 않는 경우</li>
        <li>위협 시나리오에 대한 대응 계획 없이 위협 목록만 작성하는 경우</li>
        <li>이론적인 위협 평가만 하고 실제 테스트를 수행하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>예상치 못한 위협으로 인한 비즈니스 중단 위험 감소</li>
        <li>위험 기반의 투자 우선순위 결정으로 비용 효율성 향상</li>
        <li>사전 예방적 접근으로 사고 발생 후 대응 비용 절감</li>
        <li>비즈니스 연속성 및 복원력 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>STRIDE(스푸핑, 변조, 부인, 정보 공개, 서비스 거부, 권한 상승) 모델로 위협 분류합니다.</li>
        <li>위협 모델링 세션을 정기적으로 진행하여 새로운 위협을 식별합니다.</li>
        <li>비즈니스 영향 분석(BIA)을 수행하여 위협별 영향도를 정량화합니다.</li>
        <li>위협 대응 플레이북을 작성하고 Game Day 훈련을 통해 검증합니다.</li>
        <li>AWS Trusted Advisor 및 Security Hub로 지속적인 위협 모니터링을 구현합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon GuardDuty — 위협 탐지 및 지속적인 보안 모니터링</li>
        <li>AWS Security Hub — 보안 상태 통합 관리</li>
        <li>AWS Shield — DDoS 위협 방어</li>
        <li>AWS Well-Architected Tool — 위험 평가 및 개선 계획 수립</li>
      </ul>

      <PageNav />
    </article>
  );
}
