import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP01 — 장애 감지를 위한 모든 워크로드 구성 요소 모니터링</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        워크로드의 필수 구성 요소를 독립적으로 모니터링하여 장애 발생 시 즉시 감지하고 알립니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드의 필수 구성 요소를 독립적으로 모니터링하여 장애가 발생하는 즉시 감지하고 알림을 전송합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>알람이 구성되지 않아 알림 없이 서비스 중단 발생</li>
        <li>알람은 존재하지만 임계값이 적절한 대응 시간을 제공하지 않음</li>
        <li>RTO(복구 시간 목표)를 충족할 만큼 메트릭을 자주 수집하지 않음</li>
        <li>워크로드의 고객 대면 인터페이스만 적극적으로 모니터링</li>
        <li>기술 메트릭만 수집하고 비즈니스 기능 메트릭 없음</li>
        <li>워크로드의 사용자 경험을 측정하는 메트릭 없음</li>
        <li>너무 많은 모니터 생성</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>모든 계층에 적절한 모니터링을 통해 감지 시간(MTTD)을 줄여 복구 시간 단축</li>
        <li>자동화된 복구 및 복원 메커니즘 트리거를 위한 기반 마련</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>RTO 요구사항에 따라 모니터링 간격 결정</li>
        <li>EC2 세부 모니터링(1분 간격) 활성화, RDS 향상된 모니터링 구성</li>
        <li>Lambda, API Gateway, Amazon EKS, Amazon ECS, 로드 밸런서, S3, FSx, EFS, EBS 등 구성 요소 및 관리형 서비스에 대한 세부 모니터링 구성</li>
        <li>비즈니스 KPI, 간접 문제 지표, 고객 경험 메트릭을 측정하는 사용자 정의 메트릭 생성</li>
        <li>CloudWatch Synthetics를 사용하여 다양한 원격 위치에서 워크로드 엔드포인트에 대한 합성 트랜잭션 테스트(카나리아 테스트) 지속 실행</li>
        <li>워크로드 구성 요소 장애에 대한 알람 구성 및 CloudWatch 대시보드 생성</li>
        <li>CloudWatch 또는 X-Ray를 사용하여 분산 추적 구현</li>
        <li>별도 리전 및 계정에 모니터링 시스템 구축하여 교차 리전/교차 계정 가시성 확보</li>
        <li>AWS Health 이벤트 알림 활성화 및 Amazon EventBridge를 통해 모니터링 도구와 통합</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch (기본 모니터링 서비스)</li>
        <li>Amazon CloudWatch Synthetics (카나리아 테스트 및 사용자 경험 모니터링)</li>
        <li>AWS X-Ray (분산 추적)</li>
        <li>AWS Health (서비스 저하 알림)</li>
        <li>Amazon EventBridge (이벤트 라우팅 및 통합)</li>
        <li>AWS User Notifications (알림 전달)</li>
      </ul>
      <PageNav />
    </article>
  );
}
