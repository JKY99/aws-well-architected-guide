import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL08-BP04 — 불변 인프라를 사용하여 배포</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        불변 인프라는 프로덕션 워크로드에서 업데이트, 보안 패치 또는 구성 변경이 현재 위치에서
        발생하지 않도록 규정하는 모델입니다. 변경이 필요한 경우 아키텍처는 새 인프라에 구축되고
        프로덕션에 배포됩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        불변 인프라에서는 워크로드 내에서 실행 중인 인프라 리소스에 대한 현재 위치 수정이 허용되지 않습니다.
        변경이 필요한 경우 모든 필요한 변경 사항을 포함한 새로운 업데이트된 인프라 리소스 집합이
        기존 리소스와 병렬로 배포되고, 자동으로 검증되며, 성공 시 트래픽이 새 리소스 집합으로 점진적으로 전환됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>실행 중인 인프라 리소스에 대한 현재 위치 변경 구현</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>환경 전반의 일관성 향상: 환경 간 인프라 리소스에 차이 없음, 단순화된 테스트</li>
        <li>구성 드리프트 감소: 알려지고 버전 관리된 구성으로 인프라 리소스 교체</li>
        <li>신뢰할 수 있는 원자적 배포: 배포가 성공적으로 완료되거나 아무것도 변경되지 않음</li>
        <li>단순화된 배포: 업그레이드를 지원할 필요 없음 - 업그레이드는 단순히 새 배포</li>
        <li>빠른 롤백 및 복구 프로세스를 통한 안전한 배포: 이전 작동 버전이 변경되지 않은 상태로 유지됨</li>
        <li>강화된 보안 태세: 인프라 변경을 허용하지 않아 원격 접속(SSH) 비활성화 가능, 공격 벡터 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>자동화: 재현성을 높이고 인적 오류를 최소화하기 위해 가능한 한 많은 자동화 사용, IaC를 구현하여 프로그래밍 방식으로 인프라 프로비저닝, 오케스트레이션 및 배포 정의, 소스 제어 시스템에 구성 저장</li>
        <li>카나리 배포: 소수의 고객을 새 버전으로 안내하고 동작 변경 또는 오류를 면밀히 검토, 중요한 문제 발생 시 카나리에서 트래픽 제거, 성공 시 원하는 속도로 계속 배포. AWS CodeDeploy의 카나리 배포 구성 사용</li>
        <li>블루/그린 배포: 전체 애플리케이션 플릿을 병렬로 배포, 두 스택(블루와 그린)에 걸쳐 배포를 교대로 수행, 새 버전으로 트래픽 전환. AWS CodeDeploy, AWS Elastic Beanstalk, Amazon Route 53 활용</li>
        <li>드리프트 감지: 인프라 리소스가 예상과 다른 상태/구성을 갖게 하는 관리되지 않는 구성 변경 감지 및 수정, AWS CloudFormation 스택 드리프트 감지 사용</li>
        <li>실행 중인 인프라 리소스에 대한 현재 위치 수정 비허용: IAM을 사용하여 서비스 및 리소스에 접근할 수 있는 사람/대상 지정</li>
        <li>인프라 배포 자동화: EC2 Image Builder를 사용하여 Amazon Machine Image(AMI)를 사전 구성하여 빠른 시작 가능</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation (JSON/YAML 템플릿을 사용하여 AWS 리소스 생성)</li>
        <li>AWS SAM (서버리스 애플리케이션 구축을 위한 오픈 소스 프레임워크)</li>
        <li>AWS CDK (TypeScript, Python, Java, .NET을 사용하여 클라우드 리소스 모델링 및 프로비저닝)</li>
        <li>AWS Elastic Beanstalk (내장 배포 패턴으로 웹 애플리케이션 신속 배포)</li>
        <li>AWS CodeDeploy (카나리 및 블루/그린 구성을 사용한 자동화 배포)</li>
        <li>EC2 Image Builder (사용자 정의 AMI 생성, 유지 관리, 검증 자동화)</li>
        <li>Amazon Route 53 (블루/그린 배포에서 트래픽 분산을 위한 가중치 DNS 라우팅)</li>
      </ul>
      <PageNav />
    </article>
  );
}
