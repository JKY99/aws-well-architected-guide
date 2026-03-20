import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function PerfDefinitionPage() {
  return (
    <article className="doc-content">
      <h1>성능 효율성 — 정의</h1>

      <p>
        성능 효율성 기둥은 시스템 요구사항을 충족하기 위해 컴퓨팅 리소스를 효율적으로 사용하는 능력,
        그리고 수요 변화와 기술 발전에 따라 그 효율성을 지속적으로 유지하는 능력을 포함합니다.
      </p>

      <h2>5가지 모범 사례 영역</h2>
      <ol>
        <li><strong>아키텍처 선택</strong> — 올바른 아키텍처 패턴 및 서비스 선택</li>
        <li><strong>컴퓨팅 및 하드웨어</strong> — 적절한 컴퓨팅 리소스와 하드웨어 구성 선택</li>
        <li><strong>데이터 관리</strong> — 데이터 저장, 조회, 처리 최적화</li>
        <li><strong>네트워킹 및 콘텐츠 전송</strong> — 효율적인 네트워크 설계와 콘텐츠 배포 전략</li>
        <li><strong>프로세스 및 문화</strong> — 성능을 지원하는 조직적 관행과 문화 구축</li>
      </ol>

      <PageNav />
    </article>
  );
}
