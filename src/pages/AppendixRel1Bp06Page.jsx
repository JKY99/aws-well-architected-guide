import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Bp06Page() {
  return (
    <article className="doc-content">
      <h1>REL01-BP06 — 현재 할당량과 최대 사용량 사이에 충분한 간격 확보</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 장애 조치 시 리소스 급증으로 할당량 한도에 도달하여 복구가 실패할 수 있습니다.</p>
      </div>
      <p>
        장애 조치나 트래픽 급증 상황에서는 리소스 사용량이 일반적인 최대값을 초과할 수 있습니다.
        이를 대비하여 현재 최대 사용량과 서비스 할당량 사이에 충분한 여유(gap)를 유지해야 합니다.
        여유가 부족하면 장애 복구 시도 중에 할당량 한도에 도달하여 복구 자체가 실패할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        정상 최대 사용량의 최소 1.5배~2배의 여유가 서비스 할당량 내에 존재합니다.
        장애 조치 시나리오를 시뮬레이션했을 때 리소스 사용량이 할당량의 80%를 초과하지 않습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>현재 사용량만 기준으로 할당량 여유를 판단하고 장애 조치 시나리오를 고려하지 않는 경우</li>
        <li>멀티 AZ 구성에서 하나의 AZ가 완전히 실패할 때 나머지 AZ의 리소스 급증을 계산하지 않는 경우</li>
        <li>할당량을 정기적으로 검토하지 않아 워크로드 성장과 함께 여유가 점차 줄어드는 경우</li>
        <li>모든 서비스가 동시에 최대 수평 확장을 시도할 때 필요한 총 리소스를 계산하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 조치 중 리소스 프로비저닝 실패 위험 제거</li>
        <li>예상치 못한 트래픽 급증에도 안정적인 자동 확장 보장</li>
        <li>복구 시간 단축으로 가용성 목표(RTO) 달성</li>
        <li>할당량 초과로 인한 연쇄 장애 방지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>장애 조치 시나리오(AZ 장애, 리전 장애 등)별로 예상 최대 리소스 사용량을 계산합니다.</li>
        <li>계산된 최대값의 1.5배~2배 수준으로 서비스 할당량을 미리 증가 요청합니다.</li>
        <li>AWS Service Quotas에서 CloudWatch 경보를 설정하여 사용량이 할당량의 60% 이상 시 알림을 받습니다.</li>
        <li>분기별로 할당량 여유를 검토하고 워크로드 성장에 맞게 할당량 증가를 요청합니다.</li>
        <li>AWS Trusted Advisor의 서비스 한도 확인 항목을 활성화하여 자동으로 위험 감지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Service Quotas — 할당량 조회 및 증가 요청</li>
        <li>Amazon CloudWatch — 할당량 사용률 모니터링 및 경보</li>
        <li>AWS Trusted Advisor — 서비스 한도 초과 위험 자동 감지</li>
        <li>AWS Health Dashboard — AWS 서비스 가용성 및 할당량 이벤트 모니터링</li>
      </ul>
      <PageNav />
    </article>
  );
}
