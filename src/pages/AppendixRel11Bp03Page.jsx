import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP03 — 모든 계층에서 복구 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        장애 감지 시 자동으로 복구 조치를 수행합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        장애 감지 시 자동으로 복구 조치가 수행됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>오토스케일링 없이 리소스 프로비저닝</li>
        <li>개별적으로 인스턴스나 컨테이너에 애플리케이션 배포</li>
        <li>자동 복구를 사용하지 않고 여러 위치에 배포할 수 없는 애플리케이션 배포</li>
        <li>자동 스케일링 및 자동 복구가 실패한 애플리케이션을 수동으로 복구</li>
        <li>데이터베이스 장애 조치를 위한 자동화 없음</li>
        <li>트래픽을 새 엔드포인트로 자동 재라우팅하는 방법 없음</li>
        <li>스토리지 복제 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>평균 복구 시간(MTTR) 단축</li>
        <li>전반적인 가용성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>서비스를 가능한 한 상태 비저장으로 설계하여 리소스 재시작 시 데이터 손실 방지</li>
        <li>전체 리소스(컴퓨팅 인스턴스, 서버리스 함수)를 교체하는 방식을 간단한 복구 메커니즘으로 사용</li>
        <li>네트워크 타임아웃 및 의존성 장애 모두에 지수 백오프 및 지터를 포함한 제한된 재시도 전략 적용</li>
        <li>EKS/Kubernetes: 클러스터 및 노드 그룹 크기 조정과 함께 최소/최대 복제본 또는 상태 저장 세트 포함</li>
        <li>로드 밸런싱 컴퓨팅: Elastic Load Balancing(ELB)을 사용한 Auto Scaling 그룹을 여러 가용 영역에 걸쳐 활용</li>
        <li>클러스터 설계: 최소 하나의 노드 손실을 고려하여 설계, 복구 중 감소된 용량으로 동작하도록 크기 조정</li>
        <li>Amazon RDS: 스탠바이 인스턴스로의 자동 장애 조치 구성; 읽기 복제본 승격을 위한 자동화 워크플로우 사용</li>
        <li>EC2 인스턴스: 분산되지 않은 애플리케이션에 자동 복구 구현; 상태 확인 구성</li>
        <li>고급 시나리오: 자동 스케일링/복구를 사용할 수 없거나 실패하는 경우 AWS Step Functions + Lambda 사용</li>
        <li>이벤트 기반: Amazon EventBridge를 사용하여 CloudWatch 알람을 모니터링하고 Lambda 또는 Systems Manager를 통해 사용자 정의 복구 호출</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling (자동 인스턴스 그룹 관리)</li>
        <li>Elastic Load Balancing (ELB) (트래픽 분산 및 상태 확인)</li>
        <li>Amazon EventBridge (이벤트 기반 복구 트리거)</li>
        <li>AWS Lambda (복구 자동화)</li>
        <li>AWS Step Functions (복잡한 복구 워크플로우 오케스트레이션)</li>
        <li>AWS Systems Manager Automation (복구 절차 자동화)</li>
        <li>Amazon RDS (자동 장애 조치)</li>
        <li>Amazon EKS, Amazon ECS (컨테이너 오케스트레이션 자동 복구)</li>
        <li>Amazon CloudWatch (장애 감지 및 복구 트리거)</li>
      </ul>
      <PageNav />
    </article>
  );
}
