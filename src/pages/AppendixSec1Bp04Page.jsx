import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC01-BP04 — 보안 위협 최신 정보 유지</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>최신 보안 위협 및 취약점 정보를 지속적으로 파악하여 새로운 공격 기법에 선제적으로 대응합니다. 위협 환경은 끊임없이 변화하므로 최신 정보를 바탕으로 보안 제어를 지속적으로 업데이트해야 합니다.</p>
      <h2>원하는 결과</h2>
      <p>보안 팀은 AWS 보안 공지, CVE 데이터베이스, 위협 인텔리전스 피드를 정기적으로 검토합니다. 새로운 위협이 식별되면 신속하게 영향 범위를 평가하고 필요한 보완 조치를 실행하는 프로세스가 운영됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>AWS 보안 공지나 CVE를 주기적으로 검토하지 않아 알려진 취약점에 노출된 상태 유지</li>
        <li>보안 패치를 적시에 적용하지 않아 공개된 취약점을 악용한 공격에 취약</li>
        <li>위협 정보 수집을 담당하는 역할이나 프로세스가 없어 조직 내 위협 인식 부재</li>
        <li>외부 보안 커뮤니티 및 인텔리전스 소스와의 연결 없이 내부 정보만 의존</li>
        <li>위협 정보를 보안 제어 개선에 반영하지 않아 형식적인 정보 수집에 그침</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>신규 위협에 대한 선제적 대응으로 침해 가능성 감소</li>
        <li>AWS 서비스의 보안 패치를 신속히 적용하여 알려진 취약점 노출 최소화</li>
        <li>위협 환경 변화를 반영한 보안 제어 지속 개선으로 보안 성숙도 향상</li>
        <li>업계 동향 파악을 통한 미래 위협 대비 및 보안 투자 우선순위 결정</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Security Bulletins 구독 및 AWS Health Dashboard를 통해 AWS 서비스 보안 공지를 실시간으로 수신합니다.</li>
        <li>Amazon GuardDuty의 위협 인텔리전스 피드를 활성화하여 알려진 악성 IP 및 도메인으로부터의 접근을 자동 탐지합니다.</li>
        <li>AWS Security Hub와 Amazon Inspector를 연동하여 CVE 기반 취약점 스캔을 자동화합니다.</li>
        <li>MITRE ATT&CK 프레임워크를 참조하여 클라우드 환경에 적용 가능한 공격 기법을 파악하고 탐지 규칙을 수립합니다.</li>
        <li>보안 팀은 AWS re:Inforce, KrCERT, CISA 등 공신력 있는 보안 정보 채널을 정기적으로 모니터링합니다.</li>
        <li>위협 정보 수신 후 영향 평가 및 조치 실행까지의 SLA를 정의하고 준수합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Security Bulletins — AWS 서비스 보안 취약점 공식 공지</li>
        <li>Amazon GuardDuty — 위협 인텔리전스 기반 자동 위협 탐지</li>
        <li>AWS Security Hub — 통합 보안 경보 및 취약점 현황</li>
        <li>Amazon Inspector — EC2 및 컨테이너 취약점 자동 스캔</li>
        <li>AWS Health Dashboard — 계정별 AWS 서비스 이슈 및 공지 확인</li>
      </ul>
      <PageNav />
    </article>
  );
}
