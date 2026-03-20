import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps4Bp05Page() {
  return (
    <article className="doc-content">
      <h1>OPS04-BP05 — 분산 추적 구현</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 높습니다.</p>
      </div>

      <p>
        분산 추적은 분산 시스템의 다양한 구성 요소를 통과하는 요청을 모니터링하고 시각화하는 방법을 제공합니다.
        여러 소스의 트레이스 데이터를 캡처하고 통합 뷰에서 분석함으로써 팀은 요청 흐름, 병목 위치,
        최적화 노력이 집중되어야 할 곳을 더 잘 이해할 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        분산 시스템을 통해 흐르는 요청의 전체적인 뷰를 달성하여 정확한 디버깅, 최적화된 성능,
        향상된 사용자 경험을 가능하게 합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>분산 시스템의 모든 서비스가 추적을 위해 계측되지 않는 경우</li>
        <li>오류에만 집중하고 지연 또는 점진적인 성능 저하를 고려하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>진입부터 종료까지 요청의 전체 경로를 시각화하는 포괄적인 시스템 개요를 제공합니다.</li>
        <li>장애 또는 성능 문제가 발생하는 위치를 신속하게 파악합니다.</li>
        <li>실제 사용자 데이터를 기반으로 모니터링 및 최적화하여 시스템이 실제 요구를 충족하도록 합니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS X-Ray를 채택하여 애플리케이션에 통합하고 자동 트레이스 분석을 위한 X-Ray Insights를 활용합니다.</li>
        <li>모든 서비스(Lambda, EC2 등)가 트레이스 데이터를 전송하는지 확인합니다.</li>
        <li>CloudWatch RUM과 합성 모니터링을 통합하여 실제 사용자 경험을 캡처하고 상호작용을 시뮬레이션합니다.</li>
        <li>CloudWatch 에이전트를 사용하여 X-Ray 또는 OpenTelemetry에서 트레이스를 전송합니다.</li>
        <li>Amazon DevOps Guru를 사용하여 X-Ray, CloudWatch, AWS Config, CloudTrail의 데이터를 활용한 권장 사항을 얻습니다.</li>
        <li>패턴, 이상, 병목에 대해 트레이스 데이터를 정기적으로 분석합니다.</li>
        <li>비정상적인 패턴이나 연장된 지연에 대해 CloudWatch 알람을 설정합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS X-Ray — 기본 분산 추적 서비스</li>
        <li>Amazon CloudWatch ServiceLens Map — 트레이스 데이터 분석 시각화</li>
        <li>CloudWatch Real User Monitoring (RUM) — 실제 사용자 경험 캡처</li>
        <li>CloudWatch Synthetics Canaries — 합성 모니터링</li>
        <li>Amazon DevOps Guru — 자동화된 인사이트 및 권장 사항</li>
        <li>관련 모범 사례: OPS04-BP01, OPS04-BP02, OPS04-BP03, OPS04-BP04</li>
      </ul>

      <PageNav />
    </article>
  );
}
