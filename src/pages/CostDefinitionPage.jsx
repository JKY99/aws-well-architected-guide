import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function CostDefinitionPage() {
  return (
    <article className="doc-content">
      <h1>비용 최적화 — 정의</h1>

      <p>
        비용 최적화된 워크로드는 모든 리소스를 완전히 활용하고,
        가능한 최저 비용으로 결과를 달성하며, 기능적 요구사항을 충족합니다.
      </p>

      <h2>5가지 모범 사례 영역</h2>
      <ol>
        <li><strong>클라우드 재무 관리 실천</strong></li>
        <li><strong>지출 및 사용량 인식</strong></li>
        <li><strong>비용 효율적 리소스</strong></li>
        <li><strong>수요 및 공급 리소스 관리</strong></li>
        <li><strong>시간 경과에 따른 최적화</strong></li>
      </ol>

      <h2>대상 독자</h2>
      <ul>
        <li>CTO, CFO</li>
        <li>솔루션 아키텍트</li>
        <li>개발자</li>
        <li>재무 담당자</li>
        <li>비즈니스 분석가</li>
        <li>운영팀 구성원</li>
      </ul>

      <PageNav />
    </article>
  );
}
