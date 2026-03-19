import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL08-BP02 — 정기적인 백업 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>RPO(복구 시점 목표)에 맞는 백업 주기를 설정하고 AWS Backup으로 중앙에서 일관되게 백업을 관리합니다.</p>
      <h2>원하는 결과</h2>
      <p>RPO를 충족하는 주기로 모든 중요 데이터가 백업되는 체계적인 백업 관리를 실현합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>RPO 미정의</li>
        <li>일관성 없는 백업 주기</li>
        <li>백업 현황 추적 불가</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비즈니스 요구사항 충족</li>
        <li>중앙화된 백업 관리</li>
        <li>컴플라이언스 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 영향 분석으로 RPO 정의</li>
        <li>AWS Backup으로 백업 계획 수립</li>
        <li>백업 완료 알림 설정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Backup</li>
        <li>Amazon RDS</li>
        <li>Amazon DynamoDB</li>
        <li>Amazon EFS</li>
        <li>AWS Storage Gateway</li>
      </ul>
      <PageNav />
    </article>
  );
}
