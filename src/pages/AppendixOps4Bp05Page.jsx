import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps4Bp05Page() {
  return (
    <article className="doc-content">
      <h1>OPS04-BP05 — 분산 추적 구현</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        여러 서비스에 걸친 요청의 흐름을 추적할 수 있는 분산 추적을 구현합니다.
        마이크로서비스 아키텍처에서는 단일 사용자 요청이 수십 개의 서비스를 거치므로,
        각 구간의 성능과 오류를 추적할 수 있어야 합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 요청에 고유한 트레이스 ID가 부여되어 전체 경로를 추적할 수 있습니다.
        각 서비스 구간의 지연 시간과 오류가 기록됩니다.
        성능 병목이나 오류의 정확한 위치를 서비스 체인에서 식별할 수 있습니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>여러 서비스에 걸친 요청 흐름을 추적할 수 없어 병목 원인을 찾기 어려운 경우</li>
        <li>서비스마다 다른 추적 시스템을 사용하여 통합 뷰가 없는 경우</li>
        <li>추적 데이터를 수집하지만 분석 도구가 없는 경우</li>
        <li>모든 요청을 100% 샘플링하여 과도한 비용이 발생하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>분산 시스템의 성능 병목 신속 식별</li>
        <li>오류 발생 서비스와 원인 정확한 파악</li>
        <li>서비스 간 의존성 이해 향상</li>
        <li>사용자 경험에 영향을 주는 느린 구간 식별</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS X-Ray SDK를 애플리케이션에 통합하여 자동 계측(instrumentation)을 설정합니다.</li>
        <li>모든 서비스 간 호출 시 추적 헤더(X-Amzn-Trace-Id)를 전파합니다.</li>
        <li>샘플링 규칙을 설정하여 비용과 상세도를 균형 있게 조정합니다.</li>
        <li>OpenTelemetry 표준을 사용하여 벤더 중립적 계측을 구현합니다.</li>
        <li>AWS Distro for OpenTelemetry(ADOT)를 활용합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS X-Ray — 분산 추적 수집 및 분석</li>
        <li>AWS Distro for OpenTelemetry — OpenTelemetry 기반 계측</li>
        <li>Amazon CloudWatch ServiceLens — 트레이스와 지표 통합 뷰</li>
        <li>AWS Lambda — X-Ray 액티브 추적 내장 지원</li>
      </ul>

      <PageNav />
    </article>
  );
}
