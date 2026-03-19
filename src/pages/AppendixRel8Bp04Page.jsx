import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL08-BP04 — 정기적으로 백업 테스트 및 검증</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>백업에서 실제 복원을 정기적으로 테스트하여 백업이 사용 가능한 상태인지 검증하고 복구 절차를 숙지합니다.</p>
      <h2>원하는 결과</h2>
      <p>실제 재해 시 백업에서 신뢰할 수 있게 복구할 수 있다는 보장을 확보합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>백업 테스트 미실시</li>
        <li>복원 절차 미문서화</li>
        <li>복원 시간 미측정</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>백업 신뢰성 확인</li>
        <li>RTO 측정</li>
        <li>복구 절차 숙달</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>분기별 복원 테스트 수행</li>
        <li>격리된 환경에서 복원 검증</li>
        <li>복원 시간 측정 및 RTO 대비 검증</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Backup (복원 테스트)</li>
        <li>Amazon RDS (복원)</li>
        <li>AWS CloudFormation</li>
        <li>AWS Lambda (자동화)</li>
      </ul>
      <PageNav />
    </article>
  );
}
