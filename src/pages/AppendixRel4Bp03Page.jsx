import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel4Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL04-BP03 — 워크로드 구성 요소에 대한 수요를 최적으로 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        워크로드의 각 구성 요소가 처리할 수 있는 용량보다 많은 요청이 들어오면 성능 저하나 장애로 이어집니다.
        로드 밸런싱, 큐 기반 부하 평탄화, 백프레셔 메커니즘을 통해
        각 구성 요소가 수용 가능한 범위 내에서만 요청을 처리하도록 수요를 관리합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        트래픽 급증 시에도 시스템이 안정적으로 운영되며, 처리 가능한 범위를 초과하는 요청은
        큐에 버퍼링되거나 적절한 오류 응답을 반환하여 전체 시스템 장애로 이어지지 않습니다.
        각 구성 요소의 부하가 균형 있게 분산되어 특정 인스턴스에 과부하가 발생하지 않습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>로드 밸런서 없이 단일 인스턴스가 모든 트래픽을 처리하는 경우</li>
        <li>트래픽 급증 시 Auto Scaling이 충분히 빠르게 반응하지 못하는 경우</li>
        <li>큐 기반 처리 없이 백엔드에 직접 모든 요청을 전달하여 과부하가 발생하는 경우</li>
        <li>스티키 세션 설정이 특정 인스턴스에 부하를 집중시키는 경우</li>
        <li>백프레셔 메커니즘 없이 업스트림이 다운스트림을 압도하는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>트래픽 급증 시에도 안정적인 서비스 제공</li>
        <li>구성 요소 간 균형 잡힌 부하 분산</li>
        <li>과부하로 인한 연쇄 장애 예방</li>
        <li>비용 효율적인 리소스 사용(필요할 때만 확장)</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Elastic Load Balancing을 사용하여 여러 가용 영역의 인스턴스에 트래픽을 균등 분산합니다.</li>
        <li>Amazon SQS를 사용하여 요청을 큐에 버퍼링하고, 백엔드는 처리 가능한 속도로 소비합니다.</li>
        <li>Amazon EC2 Auto Scaling의 예약 스케일링과 동적 스케일링을 결합하여 수요 변화에 대응합니다.</li>
        <li>API Gateway의 스로틀링 설정으로 백엔드 서비스를 과부하로부터 보호합니다.</li>
        <li>CloudWatch 메트릭을 기반으로 Auto Scaling 정책을 최적화하여 확장 반응 시간을 단축합니다.</li>
        <li>워크로드 용량 테스트(부하 테스트)를 정기적으로 실시하여 병목 지점을 식별합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Elastic Load Balancing (ALB/NLB) — 트래픽 분산 및 헬스 체크</li>
        <li>Amazon EC2 Auto Scaling — 수요에 따른 자동 용량 조정</li>
        <li>Amazon SQS — 큐 기반 부하 평탄화</li>
        <li>Amazon API Gateway — API 스로틀링 및 사용 계획</li>
        <li>AWS Application Auto Scaling — ECS, DynamoDB 등 다양한 서비스 자동 확장</li>
      </ul>
      <PageNav />
    </article>
  );
}
