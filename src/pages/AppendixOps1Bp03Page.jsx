import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps1Bp03Page() {
  return (
    <article className="doc-content">
      <h1>OPS01-BP03 — 규정 준수 요건 수립</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        법적, 규제적, 산업별 컴플라이언스 요건을 파악하고 이를 운영 우선순위에 반영합니다.
        규정 준수는 선택 사항이 아니라 비즈니스 운영의 필수 요건이며,
        운영 계획 수립 시 반드시 고려해야 합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 관련 규정 및 법률 요건을 파악하고 문서화합니다.
        컴플라이언스 요건이 워크로드 설계, 운영, 변경 관리 프로세스에 통합되어 있습니다.
        정기적인 감사를 통해 지속적인 규정 준수를 확인합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>규정 요건을 파악하지 않고 시스템을 구축하여 나중에 대규모 변경이 필요한 경우</li>
        <li>규정 변경사항을 추적하지 않아 기존에 준수하던 사항이 위반으로 전환되는 경우</li>
        <li>컴플라이언스 책임이 특정 팀에만 있고 개발팀은 무관하다고 생각하는 경우</li>
        <li>규정 준수 요건을 문서화하지 않아 팀원 간 이해가 다른 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>법적 처벌 및 과징금 위험 감소</li>
        <li>고객 신뢰 및 브랜드 평판 보호</li>
        <li>규정 준수를 고려한 설계로 나중에 발생하는 재작업 비용 절감</li>
        <li>감사 대비 업무 부담 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>적용 가능한 규정(GDPR, HIPAA, PCI DSS, ISO 27001 등)을 파악하고 문서화합니다.</li>
        <li>법무팀 및 컴플라이언스 전문가와 협업하여 요건을 기술 요구사항으로 변환합니다.</li>
        <li>AWS Config 규칙을 사용하여 규정 준수 상태를 지속적으로 모니터링합니다.</li>
        <li>AWS Audit Manager를 활용하여 감사 준비 및 증거 수집을 자동화합니다.</li>
        <li>규정 변경사항을 추적하는 프로세스를 수립하고 정기적으로 검토합니다.</li>
        <li>모든 팀원이 관련 규정 요건을 이해할 수 있도록 교육합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Audit Manager — 감사 준비 및 컴플라이언스 증거 수집</li>
        <li>AWS Config — 리소스 구성 규정 준수 모니터링</li>
        <li>AWS Artifact — AWS 규정 준수 문서 접근</li>
        <li>AWS Security Hub — 보안 및 컴플라이언스 상태 통합 보기</li>
      </ul>

      <PageNav />
    </article>
  );
}
