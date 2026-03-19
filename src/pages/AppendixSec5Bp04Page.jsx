import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec5Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC05-BP04 — 네트워크 트래픽 검사 및 보호 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        허용/차단 규칙만으로는 정교한 공격을 방어하기 어렵습니다. 인바운드 및 아웃바운드 트래픽에
        대한 심층 패킷 검사(Deep Packet Inspection)와 침입 탐지/방지(IDS/IPS)를 구현하여 정교한
        공격과 악성코드 통신을 탐지하고 차단합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 인바운드 및 아웃바운드 트래픽이 심층 검사를 거치며, 악성 패턴이 포함된 트래픽은
        실시간으로 차단됩니다. 감염된 인스턴스의 C&C(Command and Control) 서버 통신이 차단되고,
        트래픽 검사 결과가 보안 이벤트 파이프라인으로 전달됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>방화벽 규칙(IP/포트 기반)만으로 트래픽을 제어하고 심층 검사 미적용</li>
        <li>인바운드 트래픽만 검사하고 아웃바운드 트래픽(데이터 유출 경로) 검사 미적용</li>
        <li>트래픽 검사 장비를 인라인(inline)이 아닌 탭(tap) 모드로만 운영하여 차단 불가</li>
        <li>암호화된 트래픽(TLS)에 대한 검사 없이 허용</li>
        <li>트래픽 검사 결과를 모니터링하지 않아 탐지된 위협 인지 불가</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>포트/IP 기반 규칙을 우회하는 정교한 공격 탐지 및 차단</li>
        <li>감염된 인스턴스의 C&C 통신 차단으로 내부 피해 확산 방지</li>
        <li>암호화된 채널을 통한 데이터 유출 및 악성 페이로드 탐지</li>
        <li>네트워크 계층에서의 가시성 확보로 위협 헌팅(Threat Hunting) 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Network Firewall을 VPC의 인터넷 경계에 배포하고, Suricata 기반 IPS 규칙을 적용하여 심층 패킷 검사를 구현합니다.</li>
        <li>Gateway Load Balancer를 사용하여 서드파티 IDS/IPS 어플라이언스를 투명하게 인라인으로 배포합니다.</li>
        <li>AWS Network Firewall의 도메인 필터링 기능을 사용하여 알려진 악성 도메인으로의 트래픽을 차단합니다.</li>
        <li>아웃바운드 트래픽에 대한 검사 정책을 적용하여 내부에서 외부로의 비정상적인 통신을 탐지합니다.</li>
        <li>Network Firewall 로그를 CloudWatch Logs 및 S3로 전송하고, Security Hub와 연동하여 탐지 이벤트를 중앙 관리합니다.</li>
        <li>TLS 검사가 필요한 환경에서는 Network Firewall의 TLS 검사 기능 또는 서드파티 솔루션을 활용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Network Firewall — 관리형 네트워크 방화벽 및 IDS/IPS</li>
        <li>AWS Gateway Load Balancer — 서드파티 보안 어플라이언스 인라인 배포</li>
        <li>Amazon GuardDuty — 네트워크 트래픽 기반 위협 탐지</li>
        <li>AWS WAF — 웹 계층 트래픽 심층 검사 및 차단</li>
        <li>VPC Flow Logs — 네트워크 트래픽 메타데이터 수집 및 분석</li>
      </ul>
      <PageNav />
    </article>
  );
}
