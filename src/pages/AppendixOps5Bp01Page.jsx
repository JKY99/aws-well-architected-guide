import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp01Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP01 — 버전 관리 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        모든 코드, 구성, 인프라 정의에 버전 관리 시스템을 사용합니다.
        버전 관리는 변경 이력 추적, 협업, 롤백 능력의 기초를 제공합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 코드(애플리케이션, 인프라 as Code, 구성)가 버전 관리 시스템에서 관리됩니다.
        변경의 전체 이력이 보존되어 언제든지 과거 상태로 되돌릴 수 있습니다.
        팀원이 병렬로 작업하고 변경을 안전하게 병합할 수 있습니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>인프라 구성을 콘솔에서 직접 변경하고 기록하지 않는 경우</li>
        <li>애플리케이션 코드는 Git을 사용하지만 배포 스크립트는 파일 서버에 저장하는 경우</li>
        <li>브랜치 전략 없이 모두 main 브랜치에 직접 커밋하는 경우</li>
        <li>서버에서 직접 코드를 수정하는 서버 스노우플레이크 현상</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>문제 있는 변경 즉시 롤백 가능</li>
        <li>누가 언제 무엇을 변경했는지 완전한 감사 추적</li>
        <li>코드 리뷰를 통한 변경 품질 향상</li>
        <li>팀 협업 및 병렬 개발 지원</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>모든 프로젝트에 Git을 사용하고 AWS CodeCommit이나 GitHub 등을 원격 저장소로 활용합니다.</li>
        <li>인프라를 코드로 관리(IaC)하여 CloudFormation, CDK, Terraform 등을 버전 관리합니다.</li>
        <li>브랜치 보호 규칙을 설정하여 main 브랜치에 직접 푸시를 방지합니다.</li>
        <li>의미 있는 커밋 메시지를 작성하는 컨벤션을 팀에서 합의합니다.</li>
        <li>모든 변경은 Pull Request를 통해 코드 리뷰 후 병합하도록 합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeCommit — 완전관리형 Git 저장소</li>
        <li>AWS CloudFormation — 인프라를 코드로 버전 관리</li>
        <li>AWS CDK — 프로그래밍 언어로 인프라 정의 및 버전 관리</li>
        <li>AWS CodePipeline — 버전 관리와 연동된 CI/CD 파이프라인</li>
      </ul>

      <PageNav />
    </article>
  );
}
