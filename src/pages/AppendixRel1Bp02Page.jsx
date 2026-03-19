import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL01-BP02 — 서비스 할당량 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        서비스 할당량을 단순히 파악하는 것에서 나아가 능동적으로 관리해야 합니다.
        할당량 사용률을 지속적으로 모니터링하고, 임계치 도달 전 사전 증가 요청을 통해
        워크로드의 가용성과 확장성을 보장합니다.
        할당량 관리 자동화를 통해 인적 오류를 줄이고 대응 시간을 단축합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        서비스 할당량 사용률이 임계치(예: 80%)에 도달하면 자동으로 알람이 발생하고,
        필요에 따라 자동 또는 수동으로 할당량 증가 요청이 이루어집니다.
        모든 할당량 변경 이력이 추적되며, 팀은 할당량 상태를 실시간으로 파악할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>장애 발생 후에야 할당량 한도 도달을 인지하는 경우</li>
        <li>할당량 증가 요청에 소요되는 리드 타임을 고려하지 않고 대응이 늦는 경우</li>
        <li>CloudWatch 알람 없이 수동으로만 할당량을 확인하는 경우</li>
        <li>할당량 증가 요청 승인 프로세스나 승인 권한이 불명확한 경우</li>
        <li>개발, 스테이징, 프로덕션 환경의 할당량을 동일하게 관리하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>할당량 초과로 인한 서비스 중단 사전 예방</li>
        <li>계획된 성장 및 이벤트(예: 대규모 마케팅 캠페인)에 대한 사전 대비 가능</li>
        <li>운영팀의 수동 모니터링 부담 감소</li>
        <li>할당량 관련 인시던트 대응 시간 단축</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch를 사용하여 서비스 할당량 사용률 지표를 모니터링하고, 사용률이 임계치를 초과할 때 알람을 생성합니다.</li>
        <li>Service Quotas API를 활용하여 할당량 사용률을 주기적으로 확인하는 자동화 스크립트를 작성합니다.</li>
        <li>AWS Support 케이스를 통한 할당량 증가 요청 프로세스를 문서화하고 팀 내 공유합니다.</li>
        <li>AWS Trusted Advisor의 서비스 한도 점검을 정기 운영 검토에 포함합니다.</li>
        <li>Infrastructure as Code(IaC)를 사용하여 할당량 증가 요청 자동화를 구현합니다.</li>
        <li>대규모 이벤트나 급격한 성장 예상 시 최소 4~8주 전에 할당량 증가를 요청합니다.</li>
        <li>Service Quotas 콘솔에서 할당량 증가 요청 자동 승인을 활성화합니다(가능한 경우).</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Service Quotas — 할당량 조회 및 증가 요청 자동화</li>
        <li>Amazon CloudWatch — 할당량 사용률 모니터링 및 알람 설정</li>
        <li>AWS Trusted Advisor — 서비스 한도 사전 경고</li>
        <li>AWS Support — 할당량 증가 요청 및 기술 지원</li>
        <li>AWS Config — 리소스 구성 변경 추적</li>
      </ul>
      <PageNav />
    </article>
  );
}
