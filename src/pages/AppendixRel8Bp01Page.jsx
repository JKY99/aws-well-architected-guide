import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL08-BP01 — 자동화된 변경 관리 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 수동 변경으로 인한 환경 드리프트와 인적 오류가 서비스 중단의 주요 원인이 됩니다.</p>
      </div>
      <p>자동화된 변경 관리는 Infrastructure as Code(IaC)와 CI/CD 파이프라인을 통해 인프라 및 애플리케이션 변경을 표준화하고 자동화합니다. 모든 변경이 코드로 정의되고 버전 관리되며 자동 테스트를 거쳐 배포됩니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 인프라 변경이 IaC 코드를 통해 자동화된 파이프라인으로 배포됩니다. 수동 콘솔 변경이 없으며, 모든 변경은 코드 리뷰와 자동화 테스트를 거쳐 운영에 적용됩니다. 변경 이력이 Git 히스토리에 완전히 기록됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>AWS 콘솔에서 직접 리소스를 생성하거나 수정하여 IaC와 실제 상태 불일치</li>
        <li>IaC 코드가 있지만 리뷰 없이 직접 수동으로 terraform apply 실행</li>
        <li>환경별(개발/스테이징/운영) 인프라가 각각 다르게 구성되어 환경 간 불일치</li>
        <li>배포 파이프라인이 없어 변경 이력과 승인 과정 추적 불가</li>
        <li>IaC 코드가 버전 관리되지 않거나 여러 복사본이 관리되지 않은 채 존재</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수동 변경 제거로 인적 오류에 의한 서비스 중단 대폭 감소</li>
        <li>변경 이력 완전 추적 — 누가, 언제, 무엇을 변경했는지 코드로 확인</li>
        <li>환경 간 일관성 보장 — 동일한 코드로 개발·스테이징·운영 환경 프로비저닝</li>
        <li>재해 복구 시 인프라 전체를 코드로 빠르게 재구성</li>
        <li>보안 및 규정 준수 정책을 코드로 구현하여 자동 적용</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CloudFormation 또는 AWS CDK를 사용하여 모든 인프라를 IaC로 정의</li>
        <li>AWS CodePipeline으로 변경 파이프라인 구축 — 코드 검토 → 테스트 → 스테이징 배포 → 승인 → 운영 배포</li>
        <li>AWS Config와 CloudFormation Drift Detection으로 IaC와 실제 상태 불일치 감지</li>
        <li>SCP(Service Control Policy)를 통해 콘솔 직접 변경 권한 제한</li>
        <li>CloudFormation StackSets로 다중 계정·리전에 일관된 인프라 배포</li>
        <li>변경 세트(Change Set)를 사용하여 적용 전 변경 영향 사전 검토</li>
        <li>IaC 코드를 Git에 관리하고 브랜치 보호 규칙으로 직접 main 브랜치 푸시 방지</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation — 선언적 인프라 프로비저닝</li>
        <li>AWS CDK — 프로그래밍 언어 기반 인프라 정의</li>
        <li>AWS CodePipeline — 변경 파이프라인 오케스트레이션</li>
        <li>AWS Config — 구성 변경 감지 및 규정 준수 추적</li>
        <li>AWS Service Catalog — 승인된 인프라 템플릿 관리</li>
        <li>AWS Systems Manager Change Manager — 변경 요청 및 승인 워크플로</li>
      </ul>
      <PageNav />
    </article>
  );
}
