import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps4Bp01Page() {
  return (
    <article className="doc-content">
      <h1>OPS04-BP01 — 핵심 성과 지표 파악</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 높습니다.</p>
      </div>

      <p>
        워크로드에서 관찰 가능성을 구현하려면 워크로드의 상태를 이해하고 비즈니스 요구 사항을 기반으로
        데이터 기반 결정을 내리는 것부터 시작합니다. 모니터링 활동과 비즈니스 목표 간의 정렬을 보장하는
        가장 효과적인 방법 중 하나는 핵심 성과 지표(KPI)를 정의하고 모니터링하는 것입니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모니터링 노력이 항상 실질적인 비즈니스 성과를 위해 작동하도록 비즈니스 목표와
        긴밀하게 정렬된 효율적인 관찰 가능성 관행을 구현합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>명확한 KPI 없이 작업하면 너무 많거나 너무 적게 모니터링하여 중요한 신호를 놓칠 수 있는 경우</li>
        <li>워크로드나 비즈니스 목표가 발전함에 따라 KPI를 재검토하거나 개선하지 않는 경우</li>
        <li>비즈니스 성과와 직접 연관되지 않거나 실제 문제와 연관짓기 어려운 기술 지표에 집중하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비즈니스 KPI는 기술 지표보다 문제를 더 명확하게 드러내는 경우가 많습니다.</li>
        <li>모니터링 활동이 비즈니스 목표를 직접 지원하도록 보장합니다.</li>
        <li>중요한 지표에 모니터링 리소스를 우선순위로 배분할 수 있습니다.</li>
        <li>더 광범위한 비즈니스 의미가 있기 전에 문제를 인식하고 해결합니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 성과(매출 증가, 사용자 참여, 더 빠른 응답 시간)를 이해하는 것부터 시작합니다.</li>
        <li>비즈니스에 직접적인 영향을 미치는 기술 지표를 파악하여 기술 지표와 비즈니스 목표를 연관짓습니다.</li>
        <li>Amazon CloudWatch를 사용하여 KPI를 나타내는 지표를 정의하고 모니터링합니다.</li>
        <li>워크로드와 비즈니스가 발전함에 따라 KPI를 정기적으로 검토하고 업데이트합니다.</li>
        <li>KPI를 정의하고 검토할 때 기술 팀과 비즈니스 팀 모두의 이해관계자를 참여시킵니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 지표 모니터링 및 KPI 추적</li>
        <li>관련 모범 사례: OPS04-BP02, OPS04-BP03, OPS04-BP04, OPS04-BP05</li>
        <li>AWS Observability Best Practices</li>
      </ul>

      <PageNav />
    </article>
  );
}
