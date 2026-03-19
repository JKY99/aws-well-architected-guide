import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL09-BP01 — RTO/RPO 목표 정의</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>비즈니스 영향 분석(BIA)을 통해 각 워크로드의 복구 시간 목표(RTO)와 복구 시점 목표(RPO)를 정의합니다.</p>
      <h2>원하는 결과</h2>
      <p>비즈니스 요구사항을 반영한 명확한 RTO/RPO 목표를 수립합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>RTO/RPO 미정의</li>
        <li>기술적 가능성만 고려</li>
        <li>비즈니스 부서와의 소통 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>명확한 DR 기준</li>
        <li>비용 최적화된 DR 전략</li>
        <li>이해관계자 정렬</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 영향 분석 실시</li>
        <li>시간당 비용 계산</li>
        <li>워크로드별 RTO/RPO 문서화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool</li>
        <li>AWS Resilience Hub</li>
      </ul>
      <PageNav />
    </article>
  );
}
