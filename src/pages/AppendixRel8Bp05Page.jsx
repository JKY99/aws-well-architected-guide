import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL08-BP05 — 백업 재해 복구 목표와 조율</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>백업 전략을 RTO와 RPO 목표에 맞게 설계하여 재해 복구 계획과 일관성을 유지합니다.</p>
      <h2>원하는 결과</h2>
      <p>RTO/RPO 목표를 달성하는 백업 및 복구 전략을 수립합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>RTO/RPO 없이 백업 전략 수립</li>
        <li>백업과 DR 계획 불일치</li>
        <li>복구 시간 미측정</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비즈니스 연속성 보장</li>
        <li>명확한 복구 목표</li>
        <li>이해관계자 신뢰</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스별 RTO/RPO 정의</li>
        <li>목표에 맞는 백업 빈도와 복구 방법 선택</li>
        <li>정기적인 DR 훈련</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Backup</li>
        <li>AWS Elastic Disaster Recovery</li>
        <li>Amazon RDS</li>
        <li>Amazon DynamoDB</li>
      </ul>
      <PageNav />
    </article>
  );
}
