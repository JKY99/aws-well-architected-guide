import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec5Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC05-BP05 — 아웃바운드 데이터 전송 제어</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        승인되지 않은 외부로의 데이터 전송(데이터 유출, exfiltration)을 방지합니다. 공격자가
        내부 시스템에 접근한 후 민감 데이터를 외부로 유출하려 할 때, 아웃바운드 트래픽 제어가
        최후의 방어선이 됩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        내부 리소스에서 외부로의 트래픽이 승인된 엔드포인트와 서비스로만 허용됩니다. AWS 서비스와의
        통신은 VPC 엔드포인트를 통해 인터넷을 우회하고, 승인되지 않은 외부 도메인/IP로의 연결은
        차단됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 아웃바운드 트래픽을 허용하여 데이터 유출 경로 무제한 노출</li>
        <li>AWS 서비스 접근에 인터넷 경로(NAT Gateway)를 사용하고 VPC 엔드포인트 미적용</li>
        <li>DNS over HTTPS 또는 DNS 터널링을 통한 데이터 유출 탐지 미적용</li>
        <li>아웃바운드 트래픽 로깅 미적용으로 비정상적인 외부 통신 탐지 불가</li>
        <li>S3 버킷 정책에 VPC 출처 조건을 추가하지 않아 인터넷을 통한 접근 가능</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>내부 침해 후 데이터 유출 시도를 네트워크 계층에서 차단</li>
        <li>AWS 서비스와의 트래픽이 AWS 네트워크 내에서만 이동하여 도청 위험 감소</li>
        <li>승인된 서비스 목록(허용 목록) 기반 통신으로 공급망 공격 위험 감소</li>
        <li>NAT Gateway 비용 절감 및 인터넷 노출 최소화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>S3, DynamoDB, SQS, SNS 등 자주 사용하는 AWS 서비스에 대한 VPC 엔드포인트(Gateway 또는 Interface)를 생성하여 인터넷 경로를 제거합니다.</li>
        <li>VPC 엔드포인트 정책을 적용하여 특정 S3 버킷 또는 서비스 리소스에만 접근 가능하도록 제한합니다.</li>
        <li>S3 버킷 정책에 aws:SourceVpc 또는 aws:SourceVpce 조건을 추가하여 인터넷에서의 직접 접근을 차단합니다.</li>
        <li>AWS Network Firewall 또는 Route 53 Resolver DNS Firewall을 사용하여 허용 목록에 없는 외부 도메인으로의 아웃바운드 트래픽을 차단합니다.</li>
        <li>VPC Flow Logs와 GuardDuty를 활용하여 비정상적인 아웃바운드 연결(대용량 전송, 알 수 없는 외부 IP 등)을 탐지합니다.</li>
        <li>AWS PrivateLink를 활용하여 파트너 서비스 또는 SaaS 서비스와의 연결을 인터넷 없이 프라이빗하게 구성합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>VPC 엔드포인트(Gateway/Interface) — AWS 서비스 프라이빗 접근</li>
        <li>AWS PrivateLink — 서드파티 서비스 프라이빗 연결</li>
        <li>Route 53 Resolver DNS Firewall — 아웃바운드 DNS 쿼리 필터링</li>
        <li>AWS Network Firewall — 아웃바운드 트래픽 도메인/IP 차단</li>
        <li>Amazon GuardDuty — 비정상 아웃바운드 트래픽 탐지(DNS 유출 탐지 포함)</li>
      </ul>
      <PageNav />
    </article>
  );
}
