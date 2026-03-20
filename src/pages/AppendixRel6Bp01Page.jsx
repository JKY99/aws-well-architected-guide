import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP01 — 워크로드의 모든 구성 요소 모니터링 (생성)</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        Amazon CloudWatch 또는 서드파티 도구로 워크로드 구성 요소를 모니터링하고,
        AWS Health 대시보드로 AWS 서비스를 모니터링합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드의 모든 구성 요소에서 중요한 메트릭을 수집하고 활용하여 워크로드 신뢰성과 최적의 사용자 경험을 보장합니다.
        워크로드가 비즈니스 목표를 달성하지 못하고 있음을 감지하면 재해를 신속하게 선언하고 인시던트에서 복구할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>워크로드의 외부 인터페이스만 모니터링</li>
        <li>워크로드별 메트릭을 생성하지 않고 AWS 서비스에서 제공하는 메트릭에만 의존</li>
        <li>기술적 메트릭만 사용하고 워크로드가 기여하는 비기술적 KPI 관련 메트릭을 모니터링하지 않음</li>
        <li>운영 트래픽과 단순한 상태 확인에만 의존하여 워크로드 상태를 모니터링 및 평가</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <p>
        워크로드의 모든 계층을 모니터링하면 워크로드를 구성하는 구성 요소의 문제를 더 빠르게 예상하고 해결할 수 있습니다.
      </p>
      <h2>구현 지침</h2>
      <ul>
        <li>가용한 모든 곳에서 로깅을 활성화하여 워크로드의 모든 구성 요소에서 모니터링 데이터 수집</li>
        <li>모든 기본 메트릭을 검토하고 데이터 수집 격차를 파악: AWS CLI 또는 API를 사용하여 CloudWatch에 사용자 정의 메트릭을 생성 및 게시</li>
        <li>경보를 발생시킬 메트릭 선택: 워크로드 신뢰성에 큰 영향을 미치는 메트릭의 하위 집합을 선택하고, CPU 사용률보다 분당 처리 주문 수 등 비즈니스 결과 메트릭을 우선시</li>
        <li>경보 및 복구 프로세스 정의: Amazon CloudWatch 경보를 사용하여 자동화 워크플로를 호출하고 인시던트에서 복구하는 절차 시작</li>
        <li>합성 트랜잭션 활용: Amazon CloudWatch Synthetics를 사용하여 합성 카나리를 생성하고, CloudWatch Synthetics 클라이언트 노드와 AWS X-Ray를 결합하여 문제 지점 파악</li>
        <li>Amazon CloudWatch Agent를 EC2 및 컨테이너에 배포하여 시스템 수준 메트릭 수집</li>
        <li>Container Insights로 ECS/EKS 컨테이너 환경의 성능 메트릭 수집</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch (메트릭, 로그, 경보, 대시보드)</li>
        <li>Amazon CloudWatch Synthetics (카나리 기반 가용성 모니터링)</li>
        <li>AWS X-Ray (분산 추적)</li>
        <li>AWS Health 대시보드</li>
        <li>Amazon DevOps Guru</li>
        <li>AWS CloudTrail</li>
        <li>AWS Distro for OpenTelemetry</li>
      </ul>
      <PageNav />
    </article>
  );
}
