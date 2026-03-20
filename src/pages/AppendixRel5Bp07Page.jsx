import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Bp07Page() {
  return (
    <article className="doc-content">
      <h1>REL05-BP07 — 긴급 레버 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 예상치 못한 장애 상황에서 빠른 대응 수단이 없어 장애 지속 시간이 길어질 수 있습니다.</p>
      </div>
      <p>
        긴급 레버(emergency lever)는 장애 상황에서 즉시 활성화하여 시스템 안정성을 회복하거나
        유지하는 사전 구현된 메커니즘입니다. 기능 플래그, 트래픽 차단, 서비스 저하 모드 전환 등이
        포함됩니다. 장애 발생 시 즉시 사용 가능한 레버를 미리 준비하면 대응 시간을 크게 단축할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        장애 발생 시 운영팀이 몇 분 내에 긴급 레버를 활성화하여 부분적 또는 완전한 서비스를 유지합니다.
        긴급 레버는 코드 배포 없이 구성 변경만으로 즉시 활성화 및 비활성화할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>장애 발생 후에야 대응 방법을 고민하여 대응 시간이 길어지는 경우</li>
        <li>긴급 조치를 위해 코드 변경 및 배포가 필요한 경우</li>
        <li>긴급 레버가 존재하지만 팀원들이 존재를 모르거나 사용 방법을 모르는 경우</li>
        <li>긴급 레버를 테스트하지 않아 실제 장애 시 작동하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 대응 시간 단축으로 MTTR(평균 복구 시간) 감소</li>
        <li>운영팀이 장애 상황에서 빠르고 자신감 있게 대응 가능</li>
        <li>부분 서비스 저하를 통해 전체 서비스 중단 방지</li>
        <li>코드 배포 없이 즉각적인 장애 대응 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS AppConfig 또는 AWS Systems Manager Parameter Store를 사용하여 기능 플래그를 구현합니다.</li>
        <li>긴급 상황에서 비필수 기능을 비활성화하는 "서비스 저하 모드" 플래그를 미리 구현합니다.</li>
        <li>Amazon Route 53 상태 확인과 장애 조치 라우팅을 구성하여 빠른 트래픽 전환을 준비합니다.</li>
        <li>AWS WAF를 사용하여 특정 IP나 요청 패턴을 빠르게 차단하는 규칙을 미리 작성합니다.</li>
        <li>모든 긴급 레버를 런북(Runbook)에 문서화하고 정기적으로 게임 데이에서 연습합니다.</li>
        <li>긴급 레버 활성화에 필요한 권한을 운영팀에 사전 부여하고, MFA 조건 등 안전장치를 함께 구성합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS AppConfig — 기능 플래그 및 구성 변경 안전 배포</li>
        <li>AWS Systems Manager Parameter Store — 구성 값 중앙 관리</li>
        <li>Amazon Route 53 — 장애 조치 라우팅 및 상태 확인</li>
        <li>AWS WAF — 트래픽 차단 및 요청 필터링</li>
        <li>Amazon CloudFront — 오리진 장애 시 에러 페이지 제공</li>
      </ul>
      <PageNav />
    </article>
  );
}
