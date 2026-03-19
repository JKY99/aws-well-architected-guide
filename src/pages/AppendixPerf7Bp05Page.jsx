import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf7Bp05Page() {
  return (
    <article className="doc-content">
      <h1>PERF07-BP05 — 트레이드오프 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>성능, 비용, 복잡도, 보안 간의 트레이드오프를 명시적으로 인식하고 비즈니스 우선순위에 따라 균형 있는 결정을 내립니다.</p>
      <h2>원하는 결과</h2>
      <p>성능 최적화 결정 시 전체 트레이드오프를 고려한 균형 잡힌 아키텍처를 구성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>성능만 고려</li>
        <li>비용/보안/복잡도 영향 미검토</li>
        <li>단기 성능 향상을 위한 장기 부채 수용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>균형 잡힌 아키텍처 결정</li>
        <li>예상치 못한 부작용 방지</li>
        <li>지속 가능한 성능 유지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>트레이드오프 문서화</li>
        <li>이해관계자와 결정 공유</li>
        <li>정기적인 아키텍처 검토</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool</li>
        <li>AWS Trusted Advisor</li>
        <li>Amazon CloudWatch Cost Explorer</li>
      </ul>
      <PageNav />
    </article>
  );
}
