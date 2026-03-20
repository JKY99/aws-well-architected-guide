import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost5Bp05Page() {
  return (
    <article className="doc-content">
      <h1>COST05-BP05 — 조직 우선순위에 맞게 비용 최적화를 위한 워크로드 구성 요소 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>조직의 우선순위와 제약을 고려하여 비용을 최적화하는 워크로드 구성 요소를 선택합니다. 모든 구성 요소에서 최저 비용을 추구하는 대신 전체적인 비용 최적화 관점에서 접근합니다.</p>
      <h2>원하는 결과</h2>
      <p>조직의 우선순위와 제약을 반영하여 전체적으로 최적화된 서비스 구성이 선택됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용만을 고려하고 성능, 신뢰성, 보안 요구사항을 무시합니다.</li>
        <li>조직 우선순위와 맞지 않는 서비스를 선택합니다.</li>
        <li>단기 비용 절감에 집중하고 장기 비용을 간과합니다.</li>
        <li>모든 구성 요소에 동일한 비용 최적화 전략을 적용합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비용, 성능, 신뢰성의 최적 균형을 달성합니다.</li>
        <li>조직 목표와 일치하는 아키텍처를 구축합니다.</li>
        <li>장기적으로 지속 가능한 비용 최적화를 달성합니다.</li>
        <li>비용 최적화 노력이 가장 큰 영향을 미치는 곳에 집중됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>우선순위 매트릭스 작성: 비용, 성능, 신뢰성, 보안을 기준으로 각 구성 요소의 우선순위를 정합니다.</li>
        <li>80/20 원칙 적용: 전체 비용의 80%를 차지하는 20%의 구성 요소에 최적화 노력을 집중합니다.</li>
        <li>트레이드오프 문서화: 각 선택의 비용-이점 트레이드오프를 명확히 문서화합니다.</li>
        <li>이해관계자 검토: 주요 서비스 선택에 대해 이해관계자의 검토와 승인을 받습니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool</li>
        <li>AWS Pricing Calculator</li>
        <li>AWS Cost Explorer</li>
      </ul>
      <PageNav />
    </article>
  );
}
