import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel12Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL12-BP03 — 확장성 및 성능 요구사항 테스트</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 예상치 못한 트래픽 급증 시 성능 저하나 서비스 중단이 발생할 수 있습니다.</p>
      </div>
      <p>
        워크로드의 성능과 확장성을 정기적으로 테스트하여 실제 피크 트래픽에서도
        가용성과 성능 목표를 달성하는지 검증합니다. 부하 테스트, 스트레스 테스트,
        스파이크 테스트 등 다양한 테스트 유형을 활용합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        예상 최대 트래픽 시나리오에서도 성능 목표(응답 시간, 처리량)와 가용성 목표를
        달성하는 것이 테스트로 검증됩니다. 확장성 병목 지점이 프로덕션 배포 전에 식별됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>부하 테스트 없이 프로덕션에 배포하여 실제 트래픽에서 처음으로 성능 한계를 발견하는 경우</li>
        <li>테스트 환경이 프로덕션과 크게 달라 테스트 결과가 실제를 반영하지 못하는 경우</li>
        <li>평균 부하만 테스트하고 피크 부하나 갑작스러운 스파이크를 테스트하지 않는 경우</li>
        <li>한 번만 부하 테스트를 수행하고 이후 아키텍처 변경 시 재테스트하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>프로덕션 배포 전 성능 병목 식별 및 해결</li>
        <li>Auto Scaling 설정의 적절성 검증</li>
        <li>대형 이벤트(마케팅 캠페인, 신규 서비스 출시) 전 준비 상태 확인</li>
        <li>성능 저하로 인한 사용자 경험 저하 예방</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Distributed Load Testing 솔루션 또는 Apache JMeter, Gatling 등을 사용하여 부하 테스트를 수행합니다.</li>
        <li>프로덕션과 유사한 환경에서 테스트를 수행하여 결과의 신뢰성을 높입니다.</li>
        <li>점진적 부하 증가(ramp-up), 지속 부하(steady state), 급격한 스파이크 등 다양한 패턴을 테스트합니다.</li>
        <li>테스트 중 Auto Scaling 동작, 데이터베이스 연결 수, 메모리 사용량 등을 모니터링합니다.</li>
        <li>주요 배포나 아키텍처 변경 후 반드시 부하 테스트를 재수행합니다.</li>
        <li>테스트 결과를 기록하고 이전 결과와 비교하여 성능 회귀를 감지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Distributed Load Testing — 확장 가능한 부하 테스트 솔루션</li>
        <li>Amazon CloudWatch — 부하 테스트 중 메트릭 수집 및 분석</li>
        <li>AWS X-Ray — 부하 테스트 중 성능 병목 추적</li>
        <li>Amazon EC2 Auto Scaling — 부하 증가에 따른 확장 동작 검증</li>
      </ul>
      <PageNav />
    </article>
  );
}
