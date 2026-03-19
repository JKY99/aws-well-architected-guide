import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel4Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL04-BP01 — 자동화된 장애 조치 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        장애 발생 시 수동 개입 없이 자동으로 복구되는 시스템을 구축해야 합니다.
        Auto Scaling, Route 53 헬스 체크, Elastic Load Balancing 등을 활용하여
        장애 인스턴스를 자동으로 교체하고 트래픽을 정상 인스턴스로 라우팅합니다.
        자동화된 장애 조치는 RTO를 획기적으로 단축하여 사용자 영향을 최소화합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        구성 요소 장애 발생 시 자동으로 감지하고, 장애 인스턴스를 교체하거나
        트래픽을 정상 대상으로 재라우팅합니다.
        운영팀이 경보를 받기 전에 이미 복구가 시작되어 서비스 중단 시간이 최소화됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>장애 발생 시 수동으로 인스턴스를 재시작하거나 교체하는 경우</li>
        <li>헬스 체크 없이 로드 밸런서가 장애 인스턴스에 트래픽을 계속 전송하는 경우</li>
        <li>Auto Scaling 없이 고정된 수의 인스턴스만 운영하는 경우</li>
        <li>장애 감지와 자동 조치 사이의 지연이 너무 커서 서비스 중단이 길어지는 경우</li>
        <li>자동 장애 조치를 구성했지만 정기적으로 테스트하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>RTO 단축으로 사용자 영향 최소화</li>
        <li>야간 및 주말 장애 발생 시에도 자동 복구</li>
        <li>운영팀의 수동 개입 부담 감소</li>
        <li>일관된 장애 처리 절차 보장</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling을 사용하여 최소 인스턴스 수를 유지하고 비정상 인스턴스를 자동 교체합니다.</li>
        <li>Elastic Load Balancing 헬스 체크를 구성하여 비정상 타겟으로의 트래픽 전송을 중단합니다.</li>
        <li>Amazon Route 53 헬스 체크와 DNS 페일오버를 사용하여 엔드포인트 장애 시 자동 전환합니다.</li>
        <li>Amazon RDS Multi-AZ를 사용하여 데이터베이스 장애 시 자동으로 스탠바이로 전환합니다.</li>
        <li>AWS Lambda와 CloudWatch 이벤트를 사용하여 장애 감지 시 자동 복구 액션을 트리거합니다.</li>
        <li>Chaos Engineering을 실시하여 자동 장애 조치 메커니즘이 의도대로 동작하는지 검증합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling — 자동 인스턴스 교체 및 확장</li>
        <li>Elastic Load Balancing — 트래픽 분산 및 헬스 체크</li>
        <li>Amazon Route 53 — DNS 기반 장애 전환</li>
        <li>Amazon RDS Multi-AZ — 데이터베이스 자동 장애 전환</li>
        <li>AWS Systems Manager — 자동화된 운영 작업</li>
      </ul>
      <PageNav />
    </article>
  );
}
