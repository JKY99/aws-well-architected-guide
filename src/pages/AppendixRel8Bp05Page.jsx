import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL08-BP05 — 변경에 따른 결과 예측</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 변경의 영향을 예측하지 못해 예상치 못한 장애가 발생하거나, 변경 목적을 달성하지 못할 수 있습니다.</p>
      </div>
      <p>변경을 배포하기 전에 그 영향을 분석하고 예측하는 것은 배포 리스크를 줄이는 핵심 사전 작업입니다. 변경 영향 분석, 의존성 매핑, 시뮬레이션을 통해 의도하지 않은 부작용을 사전에 파악합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 변경이 배포 전에 영향 분석을 거치며, 예상되는 변경 결과와 잠재적 위험이 문서화됩니다. 의존성 맵을 통해 변경이 영향을 줄 수 있는 모든 컴포넌트가 파악되고, 각 변경에 대한 성공 기준과 롤백 조건이 사전에 정의됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>변경이 미치는 영향 범위를 분석하지 않고 배포 진행</li>
        <li>서비스 의존성 맵이 없어 변경이 다운스트림 서비스에 미치는 영향 미파악</li>
        <li>성능에 미치는 영향을 분석하지 않아 배포 후 예상치 못한 성능 저하 발생</li>
        <li>변경 성공 기준(success criteria)을 사전에 정의하지 않아 배포 완료 여부 판단 불가</li>
        <li>인프라 변경이 비용에 미치는 영향을 사전에 분석하지 않아 예산 초과 발생</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>변경 영향 범위를 사전에 파악하여 관련 팀에 사전 공지 및 대비 가능</li>
        <li>의존성 분석으로 하위 호환성 문제를 배포 전에 식별하여 서비스 연쇄 장애 방지</li>
        <li>예상 변경 결과와 실제 결과 비교로 시스템에 대한 이해도 향상</li>
        <li>비용 영향 사전 분석으로 예산 관리 및 비용 거버넌스 강화</li>
        <li>성공 기준 사전 정의로 배포 완료 후 객관적인 성공 여부 판단 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>모든 변경 요청에 영향 분석 섹션을 포함하여 영향받는 컴포넌트, 예상 결과, 롤백 계획 문서화</li>
        <li>AWS X-Ray 서비스 맵을 활용하여 서비스 의존성을 시각화하고 변경 영향 범위 파악</li>
        <li>AWS CloudFormation 변경 세트(Change Set)로 IaC 변경이 실제 적용되기 전 예상 변경 사항 검토</li>
        <li>AWS Cost Calculator와 AWS Pricing API를 활용하여 인프라 변경의 비용 영향 사전 분석</li>
        <li>AWS Fault Injection Service로 장애 시나리오를 시뮬레이션하여 변경 후 복원력 예측</li>
        <li>배포 전 성능 테스트를 통해 변경이 응답 시간 및 처리량에 미치는 영향 정량화</li>
        <li>중요한 변경은 Amazon GameDay나 게임데이 연습을 통해 팀 전체가 변경 결과를 이해하고 대응 역량 강화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation Change Sets — 인프라 변경 영향 사전 검토</li>
        <li>AWS X-Ray — 서비스 의존성 맵 및 영향 범위 파악</li>
        <li>AWS Fault Injection Service — 변경 후 복원력 시뮬레이션</li>
        <li>AWS Cost Explorer — 인프라 변경 비용 영향 분석</li>
        <li>AWS Systems Manager Change Manager — 변경 요청 및 영향 분석 워크플로</li>
        <li>AWS Resilience Hub — 변경이 복원력 목표에 미치는 영향 평가</li>
      </ul>
      <PageNav />
    </article>
  );
}
