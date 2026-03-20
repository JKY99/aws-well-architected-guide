import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC01-BP04 — 보안 위협 및 권고 사항 최신 상태 유지</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 최신 위협 환경 변화를 파악하지 못해 워크로드가 중대한 보안 위험에 노출됩니다.</p>
      </div>
      <p>
        업계 위협 인텔리전스 간행물과 데이터 피드의 업데이트를 모니터링하여 최신 위협과 완화 방법을 파악합니다. 최신 위협 데이터를 기반으로 자동으로 업데이트되는 관리형 서비스 제공을 평가합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>업계 간행물이 최신 위협 및 권고 사항으로 업데이트될 때 신속하게 파악</li>
        <li>자동화를 사용하여 새로운 위협이 식별될 때 잠재적 취약점 및 노출 탐지</li>
        <li>식별된 위협에 대한 완화 조치 수행</li>
        <li>최신 위협 인텔리전스로 자동 업데이트되는 AWS 서비스 채택</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>최신 위협 인텔리전스를 파악하기 위한 신뢰할 수 있고 반복 가능한 메커니즘 부재</li>
        <li>잠재적 취약점 및 노출 여부를 수동으로 검토해야 하는 기술 포트폴리오, 워크로드, 의존성의 수동 인벤토리 유지</li>
        <li>알려진 위협 완화를 제공하는 최신 버전으로 워크로드와 의존성을 업데이트하는 메커니즘 부재</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비즈니스에 영향을 미치는 위협 환경의 중요한 변화를 놓칠 위험 감소</li>
        <li>자동화를 통한 빠르고 예측 가능한 취약점 스캔, 탐지, 수정</li>
        <li>취약점 완화 관련 시간 및 비용 통제에 도움</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>MITRE ATT&CK, CVE, OWASP Top 10, AWS Security Bulletins 등 신뢰할 수 있는 위협 인텔리전스 소스를 구독합니다.</li>
        <li>Amazon GuardDuty를 활용하여 최신 위협 인텔리전스를 통해 비정상적인 동작과 위협 서명을 자동으로 탐지합니다.</li>
        <li>Amazon Inspector를 통해 지속적인 스캔을 위해 CVE 데이터베이스를 자동으로 최신 상태로 유지합니다.</li>
        <li>AWS WAF 관리형 규칙 그룹을 사용하여 새로운 위협이 등장할 때 자동으로 규칙을 업데이트합니다.</li>
        <li>플릿 관리 및 패치 전략을 Well-Architected 운영 우수성 원칙에 맞게 배포합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon GuardDuty — 최신 위협 인텔리전스 기반 이상 동작 및 위협 서명 탐지</li>
        <li>Amazon Inspector — CVE 데이터베이스 자동 유지 관리 및 지속적 스캔</li>
        <li>AWS WAF — 최신 위협에 따라 자동 업데이트되는 관리형 규칙 그룹</li>
        <li>AWS Shield Advanced — 자동으로 업데이트되는 위협 규칙 기반 관리형 DDoS 방어</li>
      </ul>
      <PageNav />
    </article>
  );
}
