import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel13Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL13-BP01 — 다운타임 및 데이터 손실에 대한 복구 목표 정의</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 DR 전략이 비즈니스 요구사항에 맞지 않아 실제 재해 시 비즈니스에 큰 손실이 발생할 수 있습니다.</p>
      </div>
      <p>
        재해 복구 계획의 첫 번째 단계는 RTO(Recovery Time Objective, 복구 시간 목표)와
        RPO(Recovery Point Objective, 복구 시점 목표)를 명확하게 정의하는 것입니다.
        이 목표는 비즈니스 영향 분석(BIA)을 기반으로 하며 DR 전략 선택의 기준이 됩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        각 워크로드의 RTO와 RPO가 비즈니스 요구사항에 기반하여 명확히 정의되고 문서화됩니다.
        이해관계자들이 동의한 목표를 기준으로 DR 전략이 선택됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>RTO/RPO를 정의하지 않고 DR 전략을 선택하는 경우</li>
        <li>비즈니스 영향 분석 없이 임의로 RTO/RPO를 설정하는 경우</li>
        <li>모든 워크로드에 동일한 RTO/RPO를 적용하여 불필요한 비용이 발생하거나 중요 시스템이 보호받지 못하는 경우</li>
        <li>정의된 RTO/RPO가 실제로 달성 가능한지 테스트하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비즈니스 요구사항에 맞는 DR 전략 선택 가능</li>
        <li>DR 투자의 효율성 최대화</li>
        <li>이해관계자 간 DR 목표 합의</li>
        <li>SLA 준수 및 규정 요구사항 충족</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 영향 분석(BIA)을 수행하여 각 워크로드의 비즈니스 중요도를 평가합니다.</li>
        <li>워크로드별로 다운타임으로 인한 시간당 비즈니스 손실을 계산합니다.</li>
        <li>데이터 손실 허용 범위를 비즈니스 관점에서 정의합니다 (RPO: 분, 시간, 일).</li>
        <li>정의된 RTO/RPO와 예상 DR 비용을 이해관계자에게 제시하고 승인을 받습니다.</li>
        <li>AWS Resilience Hub를 사용하여 RTO/RPO 목표를 설정하고 아키텍처의 달성 가능성을 평가합니다.</li>
        <li>RTO/RPO 목표를 연간 DR 테스트를 통해 실제로 달성 가능한지 검증합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Resilience Hub — RTO/RPO 목표 설정 및 평가</li>
        <li>AWS Well-Architected Tool — DR 관련 위험 평가</li>
        <li>AWS Backup — RPO에 맞는 백업 빈도 설정</li>
      </ul>
      <PageNav />
    </article>
  );
}
