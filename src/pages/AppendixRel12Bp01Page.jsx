import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel12Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL12-BP01 — 플레이북을 사용하여 장애 조사</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        잘 이해되지 않은 장애 시나리오에 대해 조사 프로세스를 플레이북으로 문서화하여
        일관되고 신속한 대응이 가능하도록 합니다. 플레이북은 각 단계의 결과가 다음 조치를
        결정하여 문제가 식별되거나 에스컬레이션될 때까지 수행하는 미리 정의된 단계입니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        잘 이해되지 않은 장애 시나리오에 대해 조사 프로세스를 플레이북으로 문서화하여
        일관되고 신속한 대응을 허용합니다. 플레이북은 장애 시나리오에 기여하는 요인을
        식별하기 위해 수행하는 미리 정의된 단계를 포함하며, 각 단계의 결과가 문제가
        식별되거나 에스컬레이션될 때까지 다음 조치를 결정합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>문제를 진단하거나 인시던트에 대응하는 프로세스를 알지 못한 채 워크로드를 배포할 계획</li>
        <li>이벤트 조사 시 어떤 시스템에서 로그와 메트릭을 수집할지에 대한 계획되지 않은 결정</li>
        <li>데이터를 검색할 수 있을 만큼 충분히 오랫동안 메트릭과 이벤트를 보유하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>일관성: 플레이북을 캡처하면 프로세스를 일관되게 따를 수 있음</li>
        <li>오류 감소: 플레이북을 코드화하면 수동 활동으로 인한 오류 발생 제한</li>
        <li>속도: 플레이북 자동화로 팀 구성원 개입 요구사항을 제거하거나 개입 시작 시 추가 정보를 제공하여 이벤트 대응 시간 단축</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>플레이북은 문제를 조사하기 위한 문서화된 프로세스로, 적절한 기술을 가진 사람이 관련 정보를 수집하고, 잠재적인 장애 원인을 파악하고, 결함을 격리하고, 기여 요인을 결정할 수 있도록 정보와 지침을 포함해야 함</li>
        <li>플레이북을 코드로 구현: 일관성을 보장하기 위해 플레이북을 스크립팅하고 수동 프로세스로 인한 오류 제한</li>
        <li>플레이북은 다양한 조사 단계를 나타내는 여러 스크립트로 구성 가능</li>
        <li>런북 활동을 플레이북 활동의 일부로 호출 가능</li>
        <li>AWS Systems Manager Automation을 사용하여 플레이북 자동화 및 버전 관리</li>
        <li>AWS Systems Manager Run Command를 사용하여 원격으로 플레이북 실행</li>
        <li>Amazon EventBridge와 AWS Lambda를 사용하여 이벤트 기반 플레이북 자동 실행</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Automation (플레이북 자동화)</li>
        <li>AWS Systems Manager Run Command (원격 플레이북 실행)</li>
        <li>AWS Lambda (플레이북 이벤트 기반 호출)</li>
        <li>Amazon EventBridge (이벤트 기반 플레이북 트리거)</li>
        <li>Amazon CloudWatch Alarms (알람 기반 플레이북 실행)</li>
        <li>Amazon CloudWatch Synthetics (합성 카나리아 모니터링)</li>
      </ul>
      <PageNav />
    </article>
  );
}
