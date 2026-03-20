import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp07Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP07 — 가용성 목표 및 서비스 수준 협약(SLA)을 충족하도록 제품 아키텍처 설계</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        각 애플리케이션에 가용성 목표와 성능 메트릭 SLA를 정의하고, 이를 모니터링하고
        유지하여 비즈니스 목표를 달성합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        각 애플리케이션에 가용성 목표와 성능 메트릭 SLA가 정의되어 있으며, 이를 모니터링하고
        유지하여 비즈니스 목표를 달성합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>SLA를 설정하지 않고 워크로드를 설계하고 배포</li>
        <li>근거나 비즈니스 요구사항 없이 너무 높은 SLA 메트릭 설정</li>
        <li>의존성 및 기본 SLA를 고려하지 않고 SLA 설정</li>
        <li>복원력을 위한 공동 책임 모델을 고려하지 않고 애플리케이션 설계 생성</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>핵심 복원력 목표를 기반으로 한 애플리케이션 설계로 비즈니스 목표 및 고객 기대치 충족</li>
        <li>이러한 목표가 다양한 기술을 평가하고 여러 트레이드오프를 고려하는 애플리케이션 설계 프로세스를 주도</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>모든 워크로드에 고유한 복원력 메트릭 세트 정의(다른 비즈니스 애플리케이션과 다를 수 있음)</li>
        <li>의존성 감소: 워크로드 목표와 동일하거나 더 높은 가용성 목표를 가진 의존성 선택</li>
        <li>느슨하게 결합된 설계 구현: 가능한 경우 의존성 장애에도 올바르게 작동하도록</li>
        <li>컨트롤 플레인 의존성 감소, 특히 복구 또는 저하 중</li>
        <li>미션 크리티컬 워크로드에 대해 리소스 여유를 활용한 정적 안정성 설계 평가</li>
        <li>MTTD 및 MTTR을 줄여 SLA를 달성하기 위한 관찰 가능성 및 계측 구현</li>
        <li>워크로드 설계 검토 및 문서화: 컨트롤 플레인 사용 위치, 장애 허용성 구현 방법, 스케일링/오토스케일링/중복성/고가용성 구성 요소를 위한 설계 패턴, 데이터 일관성 및 가용성 요구사항, 리소스 여유 또는 정적 안정성 고려사항, 서비스 의존성</li>
        <li>이해관계자 입력 및 모든 의존성을 고려하여 SLA 메트릭 정의</li>
        <li>SLA 목표를 충족하도록 아키텍처 최적화</li>
        <li>MTTD 및 MTTR 감소에 초점을 맞춘 운영 변경, 프로세스 자동화 및 런북 구현</li>
        <li>배포 후 SLA 성과 모니터링 및 보고</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch (모니터링 및 관찰 가능성)</li>
        <li>AWS Config (구성 관리 및 규정 준수)</li>
        <li>AWS Trusted Advisor (모범 사례 권장 사항)</li>
        <li>AWS Well-Architected Tool (아키텍처 위험 평가)</li>
        <li>AWS Fault Injection Service (FIS) (복원력 테스트)</li>
      </ul>
      <PageNav />
    </article>
  );
}
