import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec4Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC04-BP03 — 보안 경고 상관 분석 및 강화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        개별 보안 경고만으로는 공격의 전체 맥락을 파악하기 어렵습니다. 여러 소스의 경고를 상관
        분석하고, 추가 컨텍스트로 경고를 강화(enrichment)하면 탐지 정확도가 높아지고 오탐(false
        positive)이 줄어듭니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        다양한 보안 서비스에서 발생하는 경고가 자동으로 상관 분석되어 관련 이벤트가 하나의
        인시던트로 묶입니다. 경고에는 위협 인텔리전스, 자산 정보, 사용자 컨텍스트가 자동으로
        추가되어 조사자가 신속하게 판단을 내릴 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 보안 서비스의 경고를 개별적으로만 검토하여 공격 패턴 파악 실패</li>
        <li>경고 우선순위화 없이 모든 경고를 동일하게 처리하여 중요 인시던트 놓침</li>
        <li>수동으로만 경고를 검토하여 대량 경고 발생 시 대응 지연</li>
        <li>오탐이 많은 규칙을 조정하지 않아 경보 피로(Alert Fatigue) 발생</li>
        <li>경고 컨텍스트(자산 소유자, 비즈니스 중요도 등) 정보 부재로 우선순위 판단 어려움</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>분산된 경고를 연결하여 APT(지능형 지속 위협) 등 복합 공격 탐지 가능</li>
        <li>오탐 감소로 보안팀이 실제 위협에 집중할 수 있는 환경 조성</li>
        <li>경고당 조사 시간 단축으로 MTTR(평균 복구 시간) 개선</li>
        <li>위협 인텔리전스 연동으로 알려진 악성 IP/도메인 탐지 강화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Security Hub를 활성화하고, GuardDuty, Inspector, Macie, IAM Access Analyzer의 결과를 Security Hub로 집계합니다.</li>
        <li>Amazon EventBridge를 사용하여 Security Hub 결과를 자동으로 SIEM 또는 티켓팅 시스템으로 라우팅합니다.</li>
        <li>Amazon Detective를 활성화하여 GuardDuty 결과에 대한 자동 그래프 분석 및 시각화를 제공합니다.</li>
        <li>AWS Lambda를 활용하여 경고 발생 시 추가 컨텍스트(자산 태그, 소유자 정보, 최근 변경 이력)를 자동으로 조회하고 경고에 추가합니다.</li>
        <li>Security Hub의 Insights(집계 뷰)를 활용하여 유사한 경고를 그룹화하고 패턴을 파악합니다.</li>
        <li>오탐이 잦은 규칙은 환경에 맞게 임계값을 조정하고, Suppression Rules을 활용하여 알려진 예외를 처리합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Security Hub — 다중 서비스 보안 결과 중앙 집계 및 우선순위화</li>
        <li>Amazon GuardDuty — 지능형 위협 탐지 및 경고 생성</li>
        <li>Amazon Detective — 보안 결과 자동 상관 분석 및 시각화</li>
        <li>Amazon EventBridge — 보안 경고 자동 라우팅 및 오케스트레이션</li>
        <li>AWS Lambda — 경고 강화(enrichment) 자동화</li>
      </ul>
      <PageNav />
    </article>
  );
}
