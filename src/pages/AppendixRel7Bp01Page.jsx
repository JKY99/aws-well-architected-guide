import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel7Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL07-BP01 — 리소스를 확보하거나 확장할 때 자동화 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        인프라를 코드(IaC)로 관리하고, 버전 관리 시스템에 인프라 코드를 정의 및 유지합니다.
        자동화된 메커니즘에 AWS 리소스 프로비저닝을 위임하고, CI/CD 파이프라인을 사용하여
        코드 변경이 자동으로 리소스 업데이트를 시작하도록 합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>인프라를 코드(IaC)로 관리</li>
        <li>버전 관리 시스템(VCS)에 인프라 코드를 정의 및 유지</li>
        <li>자동화된 메커니즘에 AWS 리소스 프로비저닝 위임</li>
        <li>관리형 서비스(ALB, NLB, Auto Scaling 그룹) 활용</li>
        <li>CI/CD 파이프라인을 사용하여 코드 변경이 자동으로 리소스 업데이트를 시작</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>CLI 또는 AWS 관리 콘솔을 사용하여 수동으로 리소스 배포("클릭 운영")</li>
        <li>애플리케이션 구성 요소/리소스를 긴밀하게 결합하여 비유연한 아키텍처 생성</li>
        <li>변경하는 비즈니스 요구사항, 트래픽 패턴 또는 새로운 리소스 유형에 적응하지 않는 비유연한 스케일링 정책 구현</li>
        <li>예상 수요를 충족하기 위해 용량을 수동으로 추정</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>IaC: 인프라가 프로그래밍 방식으로 정의되어 애플리케이션 변경과 동일한 SDLC를 통해 관리되고, 일관성과 반복성을 높이며 수동적이고 오류가 발생하기 쉬운 작업의 위험 감소</li>
        <li>자동화된 배포 파이프라인: 수동 개입 없이 안정적이고 효율적으로 인프라 업데이트 배포</li>
        <li>동적 Auto Scaling: 주요 메트릭을 모니터링하고 사전 정의된 스케일링 정책을 적용하여 수요에 따라 자동으로 리소스를 프로비저닝/디프로비저닝, 성능 및 비용 효율성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>버전 관리 시스템 선택: Git을 사용하여 IaC 템플릿 및 구성 저장</li>
        <li>IaC 도구 선택: AWS CloudFormation으로 인프라 구성 요소(VPC, EC2 Auto Scaling 그룹, RDS 데이터베이스) 정의</li>
        <li>CI/CD 파이프라인 통합: AWS CodePipeline 또는 서드파티 솔루션 사용, IaC 템플릿 린트 및 검증, 스테이징 환경 배포, 자동화 테스트 실행, 프로덕션 배포 단계 포함</li>
        <li>Auto Scaling 구성: EC2 인스턴스, ECS 태스크, 데이터베이스 복제본에 대한 스케일 아웃 및 스케일 인 정책 구현, 예측 가능한 패턴에는 예약 스케일링 고려</li>
        <li>배포 모니터링: 실패 및 회귀를 감지하고 롤백 메커니즘 구현</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation (인프라스트럭처 코드)</li>
        <li>AWS CodePipeline (CI/CD 자동화)</li>
        <li>Amazon EC2 Auto Scaling</li>
        <li>AWS Auto Scaling</li>
        <li>Application Load Balancer (ALB), Network Load Balancer (NLB)</li>
        <li>DynamoDB Auto Scaling</li>
        <li>AWS CDK (클라우드 개발 키트)</li>
      </ul>
      <PageNav />
    </article>
  );
}
