import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP05 — 이중 모드 동작을 방지하는 정적 안정성 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 장애 상황에서 동적 리소스 확장이 실패하여 복구가 지연될 수 있습니다.</p>
      </div>
      <p>
        정적 안정성(static stability)은 워크로드가 정상 상태와 장애 상태 모두에서
        동일하게 예측 가능하게 동작하도록 미리 리소스를 프로비저닝하는 패턴입니다.
        동적으로 리소스를 확장하는 대신 필요한 용량을 미리 확보하여
        이중 모드(bimodal) 동작을 방지합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        장애 발생 시 워크로드가 동적 리소스 확장 없이도 부하를 처리할 수 있으며,
        정상 상태와 동일한 코드 경로로 실행됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>AZ 장애 시 나머지 AZ에서 처리량을 수용하기 위해 Auto Scaling에 의존하지만, Auto Scaling 자체가 컨트롤 플레인에 의존하는 경우</li>
        <li>장애 시에만 활성화되는 특별한 코드 경로가 존재하여 테스트가 어려운 경우</li>
        <li>정상 상태에서 비용 절감을 위해 최소 용량으로 운영하다가 장애 시 용량 부족이 발생하는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 시 예측 가능하고 일관된 시스템 동작</li>
        <li>동적 확장 실패로 인한 복구 실패 위험 제거</li>
        <li>단일 코드 경로로 테스트와 운영 단순화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AZ 장애 시나리오를 분석하고, 남은 AZ의 인스턴스가 전체 부하를 처리할 수 있는 용량을 미리 유지합니다.</li>
        <li>Auto Scaling의 최소 인스턴스 수(Min)를 정상 부하를 처리할 수 있는 수준으로 설정합니다.</li>
        <li>스팟 인스턴스 또는 비용 최적화보다 안정성을 우선하는 On-Demand 인스턴스를 기본 용량으로 사용합니다.</li>
        <li>사전 워밍(Pre-warming)이 가능한 서비스(Elastic Load Balancing, Lambda 예약된 동시성)를 활용합니다.</li>
        <li>용량 계획 시 AZ 장애 시나리오를 포함하여 필요한 인스턴스 수를 계산합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling — 정적 최소 용량 설정</li>
        <li>AWS Lambda 예약된 동시성 — 사전 용량 확보</li>
        <li>Amazon EC2 Capacity Reservations — AZ별 용량 예약</li>
        <li>AWS Compute Optimizer — 최적 용량 권장</li>
      </ul>
      <PageNav />
    </article>
  );
}
