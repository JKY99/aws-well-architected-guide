import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel13Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL13-BP02 — 복구 목표를 충족하는 정의된 복구 전략 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        각 워크로드에 대해 DR 목표를 달성할 수 있는 정의되고 구현된 DR 전략이 있습니다.
        워크로드 간 DR 전략은 설명된 전략들과 같은 재사용 가능한 패턴을 활용합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        각 워크로드에 대해 DR 목표를 달성할 수 있는 정의되고 구현된 DR 전략이 있습니다.
        워크로드 간 DR 전략은 재사용 가능한 패턴을 활용합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>유사한 DR 목표를 가진 워크로드에 일관성 없는 복구 절차 구현</li>
        <li>재해 발생 시 임시방편으로 DR 전략을 구현</li>
        <li>재해 복구 계획 없음</li>
        <li>복구 중 컨트롤 플레인 작업에 의존</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>정의된 복구 전략을 사용하면 공통 도구와 테스트 절차 사용 가능</li>
        <li>팀 간 지식 공유 개선 및 자체 워크로드에 대한 DR 구현 개선</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li><strong>백업 및 복원 (RPO: 수 시간, RTO: 24시간 이하):</strong> 데이터와 애플리케이션을 복구 리전에 백업, IaC로 인프라 배포, 복구 중 코드 배포 및 백업 데이터 복원. 비용에 민감한 워크로드에 적합</li>
        <li><strong>파일럿 라이트 (RPO: 수 분, RTO: 수십 분):</strong> 복구 리전에 핵심 워크로드 인프라 프로비저닝, 데이터 복제 및 백업. 리소스는 항상 켜져 있으나 애플리케이션 서버/서버리스 컴퓨팅은 필요 시 생성. 중간 RTO/RPO 필요에 적합</li>
        <li><strong>웜 스탠바이 (RPO: 수 초, RTO: 수 분):</strong> 복구 리전에 축소된 규모의 완전 기능 버전 유지, 데이터 복제 및 라이브 유지, 복구 필요 시 빠른 확장. 중요 워크로드에 적합</li>
        <li><strong>멀티 리전 액티브/액티브 (RPO: 거의 제로, RTO: 잠재적으로 제로):</strong> 여러 리전에서 트래픽을 적극적으로 처리, 리전 간 데이터 동기화 필요. 글로벌 애플리케이션이나 최대 가용성 요구사항에 적합</li>
        <li><strong>AWS Elastic Disaster Recovery:</strong> 파일럿 라이트/웜 스탠바이의 대안, RPO 수 초, RTO 수 분, 지속적인 데이터 보호 제공</li>
        <li>모든 전략에서 AWS Region 내 백업 + 복구 리전으로 복사 필요</li>
        <li>파일럿 라이트/웜 스탠바이/액티브-액티브의 경우 복구 리전에 라이브 데이터 복제</li>
        <li>장애 조치 트래픽 재라우팅 옵션: Amazon Route 53(멀티 IP 엔드포인트), Amazon Application Recovery Controller(수동 장애 조치용 데이터 플레인 API)</li>
        <li>장애 복구 계획 설계: Aurora Global Database 관리형 계획 장애 조치, DynamoDB Global Tables 자동 재개</li>
        <li>컨트롤 플레인 작업 최소화(REL11-BP04 참조); 데이터 플레인 작업 우선 활용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Backup (중앙화된 백업 구성 및 모니터링)</li>
        <li>AWS CloudFormation / CloudFormation StackSets (인프라 코드화 및 멀티 리전 배포)</li>
        <li>AWS Elastic Disaster Recovery (관리형 DR 서비스)</li>
        <li>Amazon Application Recovery Controller (수동으로 시작된 장애 조치 API)</li>
        <li>Amazon Route 53 (DNS 기반 트래픽 관리)</li>
        <li>Amazon RDS, Aurora Global Database (관계형 데이터베이스 복제)</li>
        <li>Amazon DynamoDB Global Tables (멀티 리전 액티브-액티브)</li>
        <li>Amazon S3 교차 리전 복제 (객체 백업 및 복제)</li>
      </ul>
      <PageNav />
    </article>
  );
}
