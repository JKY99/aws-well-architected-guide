import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel12Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL12-BP04 — 카오스 엔지니어링을 사용하여 복원력 테스트</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 실제 장애가 발생할 때까지 복원력의 취약점을 발견하지 못할 수 있습니다.</p>
      </div>
      <p>
        카오스 엔지니어링(Chaos Engineering)은 제어된 환경에서 의도적으로 장애를 주입하여
        시스템의 복원력을 검증하는 방법입니다. "실패에 대한 설계"가 실제로 작동하는지
        프로덕션에서 미리 검증합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        정기적인 카오스 실험을 통해 자동 복구 메커니즘이 예상대로 작동하는지 검증하고,
        취약점이 실제 장애 발생 전에 발견되어 해결됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>자동 복구가 구성되어 있다고 가정하지만 실제로 테스트하지 않는 경우</li>
        <li>카오스 실험을 무계획적으로 수행하여 비필요한 장애를 유발하는 경우</li>
        <li>테스트 환경에서만 카오스 실험을 수행하여 프로덕션의 실제 복원력을 검증하지 못하는 경우</li>
        <li>한 번 성공한 후 지속적으로 테스트하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>복원력 취약점을 실제 장애 발생 전에 발견</li>
        <li>자동 복구 메커니즘의 신뢰성 검증</li>
        <li>팀의 장애 대응 역량 향상</li>
        <li>"실패에 대한 설계" 원칙의 실제 검증</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Fault Injection Service(FIS)를 사용하여 EC2 인스턴스 중단, AZ 장애, 네트워크 지연 등의 실험을 설계합니다.</li>
        <li>실험 전 "안정 상태(steady state)"를 정의하고 실험 중/후 시스템이 안정 상태를 유지하는지 확인합니다.</li>
        <li>소규모(단일 인스턴스)에서 시작하여 점진적으로 실험 범위를 확대합니다.</li>
        <li>실험 중 즉시 중단할 수 있는 중단 조건(stop conditions)을 사전에 정의합니다.</li>
        <li>카오스 실험 결과를 문서화하고 취약점이 발견되면 즉시 수정합니다.</li>
        <li>프로덕션 피크 시간을 피하여 실험을 수행합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Fault Injection Service(FIS) — 제어된 장애 주입 실험</li>
        <li>Amazon CloudWatch — 실험 중 시스템 상태 모니터링</li>
        <li>AWS Systems Manager — 실험 전후 상태 확인 자동화</li>
        <li>AWS Resilience Hub — 복원력 평가 및 권장 사항</li>
      </ul>
      <PageNav />
    </article>
  );
}
