import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps4Bp02Page() {
  return (
    <article className="doc-content">
      <h1>OPS04-BP02 — 애플리케이션 원격 분석 구현</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 높습니다.</p>
      </div>

      <p>
        애플리케이션 텔레메트리는 워크로드 관찰 가능성의 기반이 됩니다. 애플리케이션 상태와
        기술 및 비즈니스 성과 달성에 대한 실행 가능한 인사이트를 제공하는 텔레메트리를 내보내는 것이
        중요합니다. 지표, 로그, 트레이스는 관찰 가능성의 세 가지 주요 기둥을 형성하며,
        실제 사용자 모니터링(RUM)과 합성 트랜잭션으로 보완됩니다.
      </p>

      <h2>원하는 결과</h2>
      <ul>
        <li>워크로드 성능에 대한 실행 가능한 인사이트를 도출합니다.</li>
        <li>성능 최적화에 대한 사전적 결정을 내립니다.</li>
        <li>워크로드 안정성이 향상됩니다.</li>
        <li>CI/CD 프로세스를 간소화합니다.</li>
        <li>리소스를 효과적으로 활용합니다.</li>
      </ul>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>워크로드의 모든 계층에서 관찰 가능성을 통합하지 않아 중요한 시스템 성능 인사이트를 가리는 사각지대가 발생하는 경우</li>
        <li>여러 도구와 시스템에 데이터가 분산되어 워크로드 상태의 전체적인 뷰를 유지하기 어려운 경우</li>
        <li>텔레메트리와 비즈니스 KPI 모니터링을 통한 사전적 문제 감지 부재로 사용자가 문제를 보고하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>텔레메트리와 비즈니스 KPI로 지원되는 데이터 기반 의사결정을 합니다.</li>
        <li>데이터 기반 리소스 활용으로 비용 효율성이 향상됩니다.</li>
        <li>문제를 더 빨리 감지하고 해결하여 가동 시간이 향상됩니다.</li>
        <li>텔레메트리 인사이트로 프로세스를 개선하고 신뢰할 수 있는 코드를 전달합니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>워크로드 인사이트에 필수적인 지표, 로그, 트레이스를 파악합니다.</li>
        <li>CloudWatch 에이전트를 배포하여 시스템, 애플리케이션 지표, 로그, 트레이스를 수집합니다.</li>
        <li>머신 러닝을 사용하는 CloudWatch Logs 및 Metrics 이상 탐지를 구현합니다.</li>
        <li>CloudWatch Logs 데이터 보호를 적용하여 PII 및 민감한 정보를 마스킹합니다.</li>
        <li>비즈니스 성과와 일치하는 커스텀 지표를 정의하고 모니터링합니다.</li>
        <li>AWS X-Ray로 애플리케이션을 계측하여 더 깊은 동작 인사이트를 위한 트레이스 데이터를 내보냅니다.</li>
        <li>더 나은 상관관계를 위해 전체 애플리케이션에서 데이터 수집을 표준화합니다.</li>
        <li>여러 AWS 계정에서 지표, 로그, 알람을 통합하는 계정 간 관찰 가능성을 구현합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 모니터링, 지표, 로그 수집 및 분석</li>
        <li>AWS X-Ray — 트레이싱, 분석, 서비스 맵 및 지연 분포를 사용한 디버깅</li>
        <li>CloudWatch Logs 이상 탐지 — 로그 이상 자동 감지</li>
        <li>CloudWatch Cross-Account Observability — 계정 간 관찰 가능성</li>
        <li>관련 모범 사례: OPS04-BP01, OPS04-BP03, OPS04-BP04, OPS04-BP05</li>
      </ul>

      <PageNav />
    </article>
  );
}
