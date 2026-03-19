import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL09-BP04 — 자동화를 통한 복구 절차 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>수동 복구 절차를 자동화하여 인적 오류를 줄이고 RTO를 단축하며 재해 시 일관된 복구를 보장합니다.</p>
      <h2>원하는 결과</h2>
      <p>재해 발생 시 자동화된 절차로 신속하고 일관되게 복구되는 시스템을 구축합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수동 복구 절차에만 의존</li>
        <li>복구 런북 미문서화</li>
        <li>자동화 테스트 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>RTO 단축</li>
        <li>인적 오류 제거</li>
        <li>24/7 자동 대응</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Systems Manager Runbook으로 복구 절차 자동화</li>
        <li>CloudFormation으로 인프라 재구축 자동화</li>
        <li>Lambda로 자동화된 복구 트리거</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager (Automation)</li>
        <li>AWS CloudFormation</li>
        <li>AWS Lambda</li>
        <li>Amazon EventBridge</li>
        <li>AWS Elastic Disaster Recovery</li>
      </ul>
      <PageNav />
    </article>
  );
}
