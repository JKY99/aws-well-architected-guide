import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel10Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL10-BP02 — 단일 위치로 제한된 구성 요소에 대한 복구 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        단일 가용 영역 또는 온프레미스 데이터 센터에서 운영해야 하는 기술적 제약이 있는 구성 요소에 대해
        정의된 복구 목표 내에서 워크로드 전체 재구축이 가능하도록 자동화된 복구 기능을 구현합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        단일 가용 영역 또는 온프레미스 데이터 센터에서 운영해야 하는 기술적 제약이 있는 구성 요소에 대해
        정의된 복구 목표 내에서 완전한 워크로드 재구축이 가능하도록 자동화된 복구 기능을 구현합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>단일 위치 구성 요소 복구를 위해 수동 개입에 의존</li>
        <li>인프라 재생성 및 데이터 재배포를 위한 자동화 부재</li>
        <li>단일 AZ 워크로드에 대한 백업 또는 복제 전략 없음</li>
        <li>장애 감지를 위한 모니터링 및 알림 없음</li>
        <li>복구 절차 문서화 실패</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>RTO/RPO 단축: 자동화된 복구로 수동 지연 제거</li>
        <li>복원력 향상: 인적 개입 없이 구성 요소가 복구 가능</li>
        <li>비즈니스 연속성: 단일 위치 제약에도 불구하고 정의된 복구 목표 충족</li>
        <li>비용 효율성: 자동화로 운영 오버헤드 감소</li>
        <li>일관성: 재현 가능한 복구 프로세스로 오류 최소화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>상태 비저장 워크로드: EC2 Auto Scaling 그룹 사용(시작 템플릿 사용자 데이터로 자가 복구 활성화)</li>
        <li>상태 저장 단일 인스턴스: EC2 자동 복구 활성화(인스턴스 ID, 프라이빗 IP, Elastic IP 보존, 장애 시 SNS 알림 발송)</li>
        <li>복잡한 복구 로직: EC2/ECS 수명 주기 이벤트를 통해 CloudWatch Events로 사용자 정의 복구 자동화 호출</li>
        <li>상태 저장 단일 위치 워크로드: AWS Elastic Disaster Recovery(DRS)를 사용하여 빠른 복구를 위한 스테이징 영역에 지속적인 블록 수준 복제 수행</li>
        <li>Amazon EMR: 단일 AZ 내 여러 노드로 중복성 확보, EMRFS를 통해 S3에 데이터 저장하여 교차 AZ/리전 복제</li>
        <li>Amazon Redshift: 영역 간 백업 및 복원 기능 구현</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling (자동 인스턴스 그룹 관리)</li>
        <li>Amazon EC2 자동 복구 (인스턴스 수준 장애 복구)</li>
        <li>AWS Elastic Disaster Recovery (DRS) (온프레미스 및 클라우드 워크로드 지속적 복제)</li>
        <li>Amazon ECS (수명 주기 이벤트를 포함한 컨테이너 오케스트레이션)</li>
        <li>Amazon EMR (단일 AZ 최적화 분산 처리)</li>
        <li>Amazon Redshift (단일 AZ 데이터 웨어하우스)</li>
        <li>Amazon SNS (복구 알림)</li>
      </ul>
      <PageNav />
    </article>
  );
}
