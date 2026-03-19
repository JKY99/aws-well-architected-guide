import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps4Bp03Page() {
  return (
    <article className="doc-content">
      <h1>OPS04-BP03 — 사용자 활동 원격 분석 구현</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        실제 사용자의 행동과 경험을 측정하고 분석합니다.
        사용자 활동 데이터는 기능 사용률, 성능 문제, 사용성 이슈를 파악하는 데 중요합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        사용자가 애플리케이션과 상호작용하는 방식을 이해합니다.
        실제 사용자 경험(페이지 로드 시간, 오류 발생 시 사용자 영향)을 파악합니다.
        사용 패턴 데이터를 기반으로 제품 개선과 운영 결정을 내립니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>시스템 지표만 모니터링하고 실제 사용자 경험은 측정하지 않는 경우</li>
        <li>시스템이 정상이지만 일부 사용자가 겪는 문제를 파악하지 못하는 경우</li>
        <li>어떤 기능이 사용되고 어떤 기능이 사용되지 않는지 모르는 경우</li>
        <li>사용자 불만이 접수된 후에야 문제를 파악하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사용자 영향 문제를 사전에 감지하여 신속한 대응 가능</li>
        <li>기능 사용률 데이터 기반 제품 개선 우선순위 설정</li>
        <li>실제 사용자 경험 기반의 SLO 측정</li>
        <li>지역별, 사용자 유형별 성능 문제 파악</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>Real User Monitoring(RUM)을 구현하여 실제 브라우저/앱 성능을 측정합니다.</li>
        <li>사용자 세션 ID를 로그에 포함하여 사용자별 경험을 추적합니다.</li>
        <li>비즈니스 이벤트(결제 완료, 회원가입, 주요 기능 사용)를 로깅합니다.</li>
        <li>CloudWatch RUM으로 웹 애플리케이션 사용자 경험을 모니터링합니다.</li>
        <li>개인정보 보호 규정을 준수하면서 사용자 데이터를 수집합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch RUM — 실제 사용자 모니터링</li>
        <li>Amazon CloudWatch Evidently — 기능 플래그 및 A/B 테스트</li>
        <li>Amazon Pinpoint — 사용자 행동 분석 및 인게이지먼트 추적</li>
        <li>AWS Amplify Analytics — 모바일/웹 앱 사용자 분석</li>
      </ul>

      <PageNav />
    </article>
  );
}
