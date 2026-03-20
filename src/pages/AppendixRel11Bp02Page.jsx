import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP02 — 정상 리소스로 장애 조치</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        저하가 발생할 경우 새로운 리소스를 사용하여 자동 또는 수동으로 복구할 수 있는 시스템을 구축합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        저하가 발생할 경우 새로운 리소스를 사용하여 자동 또는 수동으로 복구할 수 있는 시스템을 구축합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>장애 계획이 설계 단계의 일부가 아님</li>
        <li>RTO 및 RPO가 설정되지 않음</li>
        <li>장애 리소스를 감지하기 위한 충분한 모니터링 부재</li>
        <li>장애 도메인 격리 불충분</li>
        <li>멀티 리전 장애 조치를 고려하지 않음</li>
        <li>장애 조치 결정 시 감지가 너무 민감하거나 공격적</li>
        <li>장애 조치 설계를 테스트하거나 검증하지 않음</li>
        <li>자동 복구 자동화를 수행하지만 복구가 필요했다는 알림을 전송하지 않음</li>
        <li>너무 빨리 장애 복구(fail back)하지 않도록 감쇠 기간 부재</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>점진적 저하와 빠른 복구를 통해 장애 발생 시 신뢰성을 유지하는 더 복원력 있는 시스템 구축</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>모든 적절한 애플리케이션 및 서비스에 대한 장애 조치 설계 생성; RTO 및 RPO를 충족하는 각 아키텍처 구성 요소에 대한 장애 조치 설계 수립</li>
        <li>장애 조치 계획에 필요한 모든 서비스로 하위 환경(개발/테스트) 구성</li>
        <li>복구 사이트(두 번째 리전)를 구성하여 장애 조치 설계 구현 및 테스트</li>
        <li>각 리소스, 애플리케이션 및 서비스의 장애 조치와 장애 복구 플레이북 작성</li>
        <li>시뮬레이션 및 카오스 테스트를 사용하여 플레이북 연습</li>
        <li>위치 장애의 경우 손상되지 않은 위치로 장애 조치할 시스템 구축; 테스트 전 할당량, 오토스케일링 수준 및 리소스 확인</li>
        <li>기본 멀티 AZ 서비스 활용: Lambda, API Gateway, S3, SQS, SNS, DynamoDB, EventBridge, ECR, ACM 등</li>
        <li>멀티 AZ 구성이 필요한 서비스에 멀티 AZ 활성화: RDS, Aurora, Redshift, EKS, ECS</li>
        <li>Amazon Route 53 상태 확인을 사용하여 멀티 리전 트래픽 장애 조치</li>
        <li>Amazon Application Recovery Controller(ARC)를 사용하여 교차 리전 장애 조치 오케스트레이션</li>
        <li>AWS Global Accelerator를 사용하여 정적 IP 진입점과 멀티 리전 라우팅 제공</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Elastic Load Balancing (로드 분산 및 비정상 인스턴스 감지)</li>
        <li>Amazon Route 53 (상태 확인을 통한 멀티 리전 트래픽 장애 조치)</li>
        <li>Amazon Application Recovery Controller (ARC) (교차 리전 장애 조치 오케스트레이션)</li>
        <li>AWS Global Accelerator (멀티 리전 라우팅을 위한 정적 IP 진입점)</li>
        <li>Amazon CloudFront (장애 조치 기능을 갖춘 콘텐츠 전송)</li>
        <li>Amazon RDS, Aurora (멀티 AZ 배포 및 읽기 복제본)</li>
        <li>Amazon S3, EFS, ECR, Secrets Manager (교차 리전 복제)</li>
      </ul>
      <PageNav />
    </article>
  );
}
