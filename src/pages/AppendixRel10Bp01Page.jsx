import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel10Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL10-BP01 — 워크로드를 여러 위치에 배포</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        프로덕션 워크로드를 여러 가용 영역(AZ) 또는 리전에 분산하여 장애 허용성과 고가용성을 달성합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        프로덕션 워크로드가 여러 가용 영역(AZ) 또는 리전에 분산되어 장애 허용성과 고가용성을 달성합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>프로덕션 워크로드가 단일 가용 영역에만 존재</li>
        <li>비즈니스 요구사항을 멀티 AZ 아키텍처로 충족할 수 있음에도 멀티 리전 아키텍처를 구현</li>
        <li>배포 또는 데이터가 동기화되지 않아 구성 드리프트 또는 복제 부족 발생</li>
        <li>구성 요소 간의 복원력 및 멀티 위치 요구사항이 다른 경우 애플리케이션 구성 요소 간 의존성을 고려하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>전력 또는 환경 제어 장애, 자연재해, 업스트림 서비스 장애, AZ 또는 전체 리전에 영향을 미치는 네트워크 문제 등의 인시던트에 대한 복원력 향상</li>
        <li>더 광범위한 Amazon EC2 인스턴스 인벤토리에 접근 가능하여 특정 인스턴스 유형 시작 시 InsufficientCapacityException(ICE) 가능성 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>리전 내 최소 2개의 가용 영역(AZ)에 걸쳐 모든 프로덕션 워크로드를 배포하고 운영</li>
        <li>VPC 내 여러 AZ에 걸쳐 적절한 크기의 서브넷 생성</li>
        <li>EC2 Auto Scaling, Amazon ECS, Amazon EKS를 사용하여 여러 AZ에 컴퓨팅 리소스 자동 분산</li>
        <li>Application Load Balancer 또는 Network Load Balancer를 컴퓨팅 리소스 앞에 배치하고 교차 영역 로드 밸런싱 활성화</li>
        <li>S3, EFS, Aurora, DynamoDB, SQS, Kinesis Data Streams 등 기본적으로 멀티 AZ 복제를 제공하는 서비스 활용</li>
        <li>RDS, Redshift, ElastiCache 등 수동으로 멀티 AZ 복제를 활성화해야 하는 서비스에 대해 멀티 AZ 옵션 활성화</li>
        <li>극도의 복원력이 필요한 경우(핵심 인프라, 의료 관련 애플리케이션, 엄격한 가용성 요구사항) 최소 2개의 AWS 리전에 배포 고려</li>
        <li>AWS CloudFormation StackSets를 사용하여 리전 간 인프라 복제</li>
        <li>Amazon Route 53 상태 확인 및 짧은 TTL(60초 이하)로 DNS 장애 조치 구성</li>
        <li>Amazon Route 53 Application Recovery Controller(ARC)를 사용하여 수동 트래픽 재라우팅을 위한 고가용성 라우팅 제어 제공</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling, Amazon ECS, Amazon EKS, AWS Lambda (멀티 AZ 컴퓨팅 분산)</li>
        <li>Application Load Balancer, Network Load Balancer (멀티 AZ 트래픽 분산)</li>
        <li>Amazon Route 53, AWS Global Accelerator (글로벌 트래픽 라우팅 및 장애 조치)</li>
        <li>Amazon Route 53 Application Recovery Controller (ARC) (라우팅 제어)</li>
        <li>Amazon S3, EFS, Aurora, DynamoDB, SQS, Kinesis Data Streams (기본 멀티 AZ 복제)</li>
        <li>Amazon RDS, Amazon Redshift, Amazon ElastiCache (수동 멀티 AZ 활성화 필요)</li>
        <li>AWS CloudFormation StackSets (리전 간 인프라 복제)</li>
        <li>EC2 Image Builder, Amazon ECR (AMI 및 컨테이너 이미지 복제)</li>
        <li>AWS KMS 멀티 리전 키 (교차 리전 데이터 암호화)</li>
      </ul>
      <PageNav />
    </article>
  );
}
