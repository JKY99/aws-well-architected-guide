import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp07Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP07 — 시스템 전반의 요청 추적 모니터링</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 분산 시스템에서 성능 병목과 오류의 원인을 파악하기 어렵습니다.</p>
      </div>
      <p>
        마이크로서비스나 분산 아키텍처에서는 단일 사용자 요청이 여러 서비스를 거칩니다.
        분산 추적(distributed tracing)을 통해 요청의 전체 경로를 시각화하고,
        각 단계의 지연 시간을 측정하여 성능 병목이나 오류가 발생한 정확한 위치를 파악합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 서비스 호출에 추적 컨텍스트(trace ID)가 전파되며, AWS X-Ray 또는 유사한
        분산 추적 시스템을 통해 요청의 전체 경로와 각 단계의 지연 시간을 시각화할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 서비스의 로그를 개별적으로만 확인하여 서비스 간 상관관계를 파악하지 못하는 경우</li>
        <li>추적 컨텍스트(Correlation ID)를 서비스 간에 전파하지 않아 요청 경로 추적이 불가능한 경우</li>
        <li>추적 샘플링 비율을 너무 낮게 설정하여 간헐적인 성능 문제를 놓치는 경우</li>
        <li>민감한 데이터를 추적 메타데이터에 포함하여 보안 위험을 초래하는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>분산 시스템에서 성능 병목 지점을 빠르게 식별</li>
        <li>서비스 간 의존성 맵을 시각화하여 아키텍처 이해도 향상</li>
        <li>장애 시 영향받는 서비스와 원인 서비스를 빠르게 특정</li>
        <li>지연 시간 추세 분석으로 SLA 위반 사전 예방</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS X-Ray를 활성화하여 Lambda, API Gateway, EC2, ECS, EKS 애플리케이션의 요청을 추적합니다.</li>
        <li>AWS X-Ray SDK를 애플리케이션에 통합하고 아웃바운드 HTTP 호출 및 AWS SDK 호출을 자동으로 계측합니다.</li>
        <li>서비스 간 HTTP 헤더(X-Amzn-Trace-Id)를 통해 추적 컨텍스트가 전파되도록 합니다.</li>
        <li>X-Ray 서비스 맵을 통해 서비스 간 의존성과 지연 시간 분포를 정기적으로 검토합니다.</li>
        <li>X-Ray Insights를 활성화하여 이상 지연 패턴이 감지되면 자동으로 알림을 받습니다.</li>
        <li>OpenTelemetry 표준을 사용하여 벤더 종속성 없이 추적 데이터를 수집할 수도 있습니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS X-Ray — 분산 추적 및 서비스 맵 시각화</li>
        <li>AWS Distro for OpenTelemetry — 오픈 표준 기반 계측</li>
        <li>Amazon CloudWatch ServiceLens — X-Ray와 CloudWatch 통합 뷰</li>
        <li>Amazon CloudWatch Container Insights — 컨테이너 환경 추적</li>
      </ul>
      <PageNav />
    </article>
  );
}
