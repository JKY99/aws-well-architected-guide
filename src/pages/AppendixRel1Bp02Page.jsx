import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL01-BP02 — 계정 및 리전 간 서비스 할당량 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        프로덕션 워크로드가 실행되는 모든 AWS 계정과 리전에서 서비스 할당량을 일관되게 관리하십시오.
        각 할당량은 AWS 리전별, 계정별로 범위가 지정되므로 장애 조치 시나리오에서 서비스 고갈을 방지하려면
        여러 환경 간에 조율이 필요합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        다중 계정 및 다중 리전 구성에서 할당량 고갈로 인해 서비스와 애플리케이션이 영향을 받지 않도록 합니다.
        영역, 리전, 계정 장애 조치를 사용하는 복원력 설계가 할당량 관련 제약 없이 작동합니다.
        보조 리전 및 계정이 기본 리소스를 사용할 수 없는 경우 프로덕션 부하를 처리할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>한 리전의 리소스 사용량을 늘리면서 다른 리전의 용량을 유지하지 않음</li>
        <li>격리된 리전에서 할당량을 독립적으로 수동 설정</li>
        <li>향후 할당량 요구 사항에 대한 복원력 아키텍처(Active/Active, Active/Passive) 영향 무시</li>
        <li>모든 리전 및 계정에 걸쳐 할당량을 정기적으로 평가하지 않음</li>
        <li>다중 리전 및 다중 계정 증가를 위한 할당량 요청 템플릿 활용 미흡</li>
        <li>할당량 증가에 비용 영향이 있다고 잘못 가정(실제로는 비용 없음)</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>리전 손실 시 오류 및 저하 수준 감소</li>
        <li>적절한 장애 조치 용량 검증 가능</li>
        <li>리전 간 할당량 드리프트 방지</li>
        <li>일관된 한도로 게임 데이 및 탁상 연습 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Trusted Advisor 경보를 사용하여 사용량이 80~90% 임계값에 근접한 할당량 값 검토</li>
        <li>Active/Passive 설계에서 수동 리전 할당량이 보조 장애 조치를 지원하는지 확인</li>
        <li>리전 간 할당량 드리프트 감지 및 수정 자동화</li>
        <li>서비스 할당량 템플릿을 업데이트하여 여러 리전 및 계정에 변경 사항 적용</li>
        <li>필요한 변경 사항에 대한 기존 템플릿(리전, 한도, 계정) 검토</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Service Quotas</li>
        <li>AWS Trusted Advisor</li>
        <li>AWS Systems Manager</li>
        <li>AWS Config</li>
        <li>Amazon CloudWatch</li>
        <li>Amazon EventBridge</li>
        <li>Quota Monitor for AWS 솔루션</li>
      </ul>
      <PageNav />
    </article>
  );
}
