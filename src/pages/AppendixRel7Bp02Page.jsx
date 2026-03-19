import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel7Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL07-BP02 — 배포 파이프라인 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>자동화된 CI/CD 파이프라인을 통해 모든 변경이 일관성 있게 테스트되고 배포되도록 하여 인적 오류를 줄입니다.</p>
      <h2>원하는 결과</h2>
      <p>자동화된 테스트와 배포로 일관되고 신뢰할 수 있는 변경 관리를 실현합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수동 배포</li>
        <li>테스트 없는 직접 프로덕션 배포</li>
        <li>일관성 없는 배포 프로세스</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>일관된 배포 프로세스</li>
        <li>인적 오류 감소</li>
        <li>빠른 피드백</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>CodePipeline으로 파이프라인 구성</li>
        <li>각 단계별 자동화 테스트 추가</li>
        <li>승인 게이트 설정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodePipeline</li>
        <li>AWS CodeBuild</li>
        <li>AWS CodeDeploy</li>
        <li>AWS CodeCommit</li>
        <li>Amazon ECR</li>
      </ul>
      <PageNav />
    </article>
  );
}
