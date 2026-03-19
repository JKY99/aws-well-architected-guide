import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps1Bp05Page() {
  return (
    <article className="doc-content">
      <h1>OPS01-BP05 — 트레이드오프 관리</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        속도, 비용, 품질, 보안, 운영 복잡성 간의 트레이드오프를 명시적으로 인식하고 관리합니다.
        트레이드오프 결정이 투명하게 이루어지고 비즈니스 목표와 일치하도록 합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 중요한 트레이드오프 결정이 명시적으로 문서화되고, 관련 이해관계자가 인식합니다.
        기술적 결정이 비즈니스 목표와 일치하며, 트레이드오프의 장단점이 명확히 이해됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>트레이드오프 결정을 암묵적으로 하여 나중에 왜 그런 결정을 했는지 알 수 없는 경우</li>
        <li>단기적 편의를 위해 장기적 운영 복잡성을 높이는 결정을 하는 경우</li>
        <li>비즈니스 이해관계자에게 트레이드오프를 설명하지 않고 기술팀만 결정하는 경우</li>
        <li>이미 선택한 트레이드오프를 재검토하는 프로세스가 없는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>의사결정의 투명성 향상으로 조직 신뢰 구축</li>
        <li>예상치 못한 결과로 인한 재작업 감소</li>
        <li>비즈니스와 기술팀 간 정렬 향상</li>
        <li>과거 결정 학습을 통한 미래 의사결정 품질 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>아키텍처 결정 기록(ADR)을 작성하여 결정의 맥락, 옵션, 선택 이유를 문서화합니다.</li>
        <li>트레이드오프 결정에 비즈니스 이해관계자를 참여시킵니다.</li>
        <li>정기적인 기술 검토에서 이전 트레이드오프 결정을 재평가합니다.</li>
        <li>AWS Well-Architected Framework 검토를 통해 트레이드오프 영역을 식별합니다.</li>
        <li>트레이드오프 매트릭스를 사용하여 옵션을 시각적으로 비교합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool — 워크로드 트레이드오프 평가</li>
        <li>AWS Cost Explorer — 비용 트레이드오프 시각화</li>
      </ul>

      <PageNav />
    </article>
  );
}
