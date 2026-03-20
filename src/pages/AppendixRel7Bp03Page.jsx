import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel7Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL07-BP03 — 기대치 설정 테스트</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 실제 트래픽 급증 시 예상치 못한 병목이 발생하여 성능 저하 또는 서비스 중단으로 이어질 수 있습니다.</p>
      </div>
      <p>부하 테스트와 성능 기준선 수립은 워크로드가 예상 수요를 처리할 수 있는지 검증하고, 스케일링 동작과 병목 지점을 사전에 파악합니다. 정기적인 테스트를 통해 변경 사항이 성능에 미치는 영향을 추적합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드가 예상 피크 수요의 최소 1.5~2배를 처리할 수 있음이 테스트로 검증됩니다. 병목 지점이 부하 테스트에서 파악되어 운영 전에 해결되며, 스케일링 동작이 예상대로 작동함을 확인합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>부하 테스트를 수행하지 않고 이론적 용량만으로 성능을 가정</li>
        <li>단일 서비스만 테스트하고 전체 시스템 통합 환경에서의 성능 미검증</li>
        <li>현실적이지 않은 테스트 패턴(균등 분산)으로 실제 부하 패턴과 다른 결과 도출</li>
        <li>테스트 결과를 문서화하지 않아 이전 결과와 비교 불가</li>
        <li>주요 출시 전에만 테스트하고 정기적인 성능 회귀 테스트 미실시</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>운영 전 병목 지점 파악 및 해결로 실제 트래픽 급증 시 장애 예방</li>
        <li>성능 기준선 수립으로 코드 변경이 성능에 미치는 영향 객관적 측정</li>
        <li>스케일링 정책의 실제 동작 검증으로 예상치 못한 스케일링 지연 발견</li>
        <li>데이터베이스 연결 풀, 캐시 히트율 등 숨겨진 제약 사항 발견</li>
        <li>비즈니스에 필요한 SLA를 충족하는 아키텍처 설계 근거 마련</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Distributed Load Testing 솔루션 또는 Apache JMeter/k6 등을 활용하여 현실적인 부하 패턴으로 테스트 수행</li>
        <li>점진적 부하 증가(ramp-up), 정상 운영(steady-state), 스파이크 세 단계로 구성된 부하 테스트 시나리오 설계</li>
        <li>부하 테스트 중 CloudWatch 지표를 실시간 모니터링하여 CPU, 메모리, DB 연결 수, 응답 시간 추적</li>
        <li>예상 피크 수요의 150% 수준까지 점진적으로 부하를 증가시켜 한계 용량 파악</li>
        <li>스케일링 이벤트 발생 시간, 새 인스턴스가 부하를 받기 시작하는 시간 등 스케일링 동작 검증</li>
        <li>테스트 결과를 성능 기준선으로 문서화하고 CI/CD 파이프라인에 성능 회귀 테스트 통합</li>
        <li>카오스 엔지니어링 도구로 장애 상황에서의 성능 저하 패턴도 테스트</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Distributed Load Testing — 관리형 분산 부하 테스트</li>
        <li>Amazon CloudWatch — 테스트 중 성능 지표 모니터링</li>
        <li>AWS X-Ray — 부하 테스트 중 병목 지점 추적</li>
        <li>Amazon CloudWatch Evidently — 기능 플래그 및 A/B 성능 테스트</li>
        <li>AWS Fault Injection Service — 카오스 엔지니어링 및 장애 주입</li>
        <li>AWS CodePipeline — 성능 회귀 테스트 자동화 통합</li>
      </ul>
      <PageNav />
    </article>
  );
}
