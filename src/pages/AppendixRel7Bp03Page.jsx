import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel7Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL07-BP03 — 테스트 배포</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>프로덕션과 동일한 환경에서 변경을 먼저 테스트하여 프로덕션 배포 전에 문제를 발견하고 수정합니다.</p>
      <h2>원하는 결과</h2>
      <p>프로덕션 환경과 동일한 테스트 환경에서 검증된 변경만 프로덕션에 배포합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>프로덕션과 다른 테스트 환경</li>
        <li>환경 드리프트 무시</li>
        <li>불충분한 테스트 커버리지</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>환경 관련 문제 사전 발견</li>
        <li>배포 신뢰도 향상</li>
        <li>프로덕션 장애 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>IaC(CloudFormation/CDK)로 환경 일관성 유지</li>
        <li>스테이징 환경을 프로덕션과 동일하게 구성</li>
        <li>통합 테스트 자동화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation</li>
        <li>AWS CDK</li>
        <li>AWS CodeBuild</li>
        <li>AWS CodePipeline</li>
      </ul>
      <PageNav />
    </article>
  );
}
