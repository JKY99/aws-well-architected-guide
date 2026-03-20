import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL08-BP05 — 자동화를 사용하여 변경 배포</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        광범위한 사전 프로덕션 테스트, 자동 롤백, 단계적 프로덕션 배포를 통해
        릴리스 프로세스에 자동화된 배포 안전성을 구축합니다.
        이 자동화는 실패한 배포로 인한 프로덕션 영향 가능성을 최소화하며,
        개발자는 더 이상 프로덕션 배포를 능동적으로 감시할 필요가 없습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        광범위한 사전 프로덕션 테스트, 자동 롤백, 단계적 프로덕션 배포를 통해
        릴리스 프로세스에 자동화된 배포 안전성이 구축됩니다.
        실패한 배포로 인한 프로덕션 영향이 최소화되고,
        개발자는 더 이상 프로덕션 배포를 능동적으로 감시할 필요가 없습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수동 변경 수행</li>
        <li>수동 비상 워크플로를 통해 자동화의 단계 건너뜀</li>
        <li>가속화된 타임라인을 위해 수립된 계획과 프로세스를 따르지 않음</li>
        <li>베이킹 시간(bake time) 없이 빠른 후속 배포 수행</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>배포에서 인적 오류 제거</li>
        <li>사전 프로덕션 테스트로 프로덕션 배포 전 계획의 완전성 검증</li>
        <li>자동 롤백으로 프로덕션 문제를 파악하고 워크로드를 이전에 작동하던 운영 상태로 복구</li>
        <li>수동 운영 및 개발자 오버헤드 감소</li>
        <li>일관되고 반복 가능한 프로세스를 통한 신뢰성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>코드 저장소 설정: Git 기반 소스 코드 관리 사용, 소스 코드와 IaC 구성 포함</li>
        <li>지속적 통합 서비스 구성: 소스 코드 컴파일, 자동화 테스트 실행, 배포 아티팩트 생성. AWS CodeBuild 사용</li>
        <li>배포 서비스 설정: 애플리케이션 배포 자동화, 수동 개입 없이 애플리케이션 업데이트의 복잡성 처리. AWS CodeDeploy 사용 (Amazon EC2, AWS Fargate, AWS Lambda, 온프레미스 서버 지원)</li>
        <li>지속적 제공 서비스 설정: 릴리스 파이프라인 자동화, 더 빠르고 안정적인 업데이트 가능. AWS CodePipeline 사용</li>
        <li>CI/CD 문화 채택: 코드 커밋이 빌드 및 테스트 단계에서 프로덕션 배포까지 자동화된 단계 게이트를 통과. 핵심 원칙: 가장 어려운 절차를 자동화하는 이유는 바로 그렇기 때문 — 사람을 루프에 두지 않기 위해</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeBuild (지속적 통합 및 컴파일)</li>
        <li>AWS CodeDeploy (자동화 애플리케이션 배포)</li>
        <li>AWS CodePipeline (릴리스 파이프라인 자동화)</li>
        <li>AWS Systems Manager Patch Manager (자동화 패치)</li>
        <li>AWS CloudFormation (인프라스트럭처 코드)</li>
        <li>Amazon SNS (알림)</li>
      </ul>
      <PageNav />
    </article>
  );
}
