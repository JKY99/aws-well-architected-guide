import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps1Bp02Page() {
  return (
    <article className="doc-content">
      <h1>OPS01-BP02 — 내부 고객 요구사항 평가</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        운영팀의 내부 고객(개발팀, 보안팀, 비즈니스팀 등)의 요구사항을 파악합니다.
        내부 고객을 위한 서비스 수준을 정의하고, 그들의 운영 요구사항을 충족시키는 것이
        전체 비즈니스 성과 달성에 중요합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        내부 이해관계자의 요구사항을 명확히 이해하고, 내부 서비스 수준 계약(SLA)을 통해
        운영 지원 수준을 정의합니다. 내부 고객 만족도를 정기적으로 측정합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>개발팀, 비즈니스팀 등 내부 팀의 운영 요구사항을 파악하지 않는 경우</li>
        <li>내부 서비스 수준 기대치가 문서화되지 않아 팀 간 갈등이 발생하는 경우</li>
        <li>내부 고객 피드백을 수집하지 않아 운영 팀의 지원 품질이 개선되지 않는 경우</li>
        <li>외부 고객 요구사항만 고려하고 내부 요구사항은 무시하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>팀 간 기대치 불일치로 인한 갈등 감소</li>
        <li>내부 서비스 품질 향상으로 전체 제품 개발 효율성 증가</li>
        <li>명확한 서비스 수준 합의를 통한 운영팀 업무 예측 가능성 향상</li>
        <li>내부 이해관계자 만족도 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>내부 고객과 정기적인 요구사항 수집 회의를 진행합니다.</li>
        <li>내부 서비스 카탈로그를 작성하여 제공 가능한 서비스와 수준을 명시합니다.</li>
        <li>내부 SLA를 문서화하고 각 이해관계자가 동의하도록 합니다.</li>
        <li>내부 고객 만족도 설문을 분기별로 실시합니다.</li>
        <li>내부 지원 티켓 시스템을 운영하여 요청과 이슈를 추적합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager — 내부 운영 자동화 및 변경 관리</li>
        <li>AWS Service Catalog — 내부 서비스 카탈로그 관리</li>
        <li>Amazon CloudWatch Dashboards — 내부 서비스 수준 모니터링</li>
      </ul>

      <PageNav />
    </article>
  );
}
