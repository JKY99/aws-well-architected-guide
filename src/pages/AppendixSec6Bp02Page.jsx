import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec6Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC06-BP02 — 워크로드에 대한 접근 축소</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        컴퓨팅 리소스에 대한 불필요한 네트워크 접근, 포트, 프로토콜, 서비스를 비활성화하고 최소 권한
        원칙을 적용합니다. 관리 접근(SSH, RDP)을 공개 인터넷에 노출하지 않고, 안전한 대안으로 대체합니다.
        공격 표면을 줄임으로써 침해 가능성을 최소화합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        컴퓨팅 리소스는 업무에 필요한 최소한의 포트와 프로토콜만 허용하며, 관리 접근은 Systems Manager
        Session Manager를 통해 감사 가능한 방식으로만 이루어집니다. 인스턴스에는 공개 IP가 불필요하게 할당되지 않습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>보안 그룹에서 0.0.0.0/0으로 SSH(22) 또는 RDP(3389) 포트를 개방함</li>
        <li>디버깅 목적으로 열어둔 포트를 프로덕션에서 닫지 않음</li>
        <li>모든 EC2 인스턴스에 공개 IP를 할당하고 인터넷에 직접 노출함</li>
        <li>불필요한 서비스(telnet, FTP 등)가 OS에서 계속 실행됨</li>
        <li>넓은 CIDR 범위로 보안 그룹 인바운드 규칙을 설정함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>네트워크 기반 공격(포트 스캐닝, 브루트 포스 등)에 대한 노출 감소</li>
        <li>침해 발생 시 피해 범위(blast radius) 제한</li>
        <li>Systems Manager를 통한 모든 관리 세션의 감사 로그 확보</li>
        <li>인바운드 접근 불필요로 인해 배스천 호스트 관리 부담 제거</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Systems Manager Session Manager를 사용하여 SSH/RDP 포트 없이 EC2 인스턴스에 안전하게 접속하고, 모든 세션을 CloudTrail 및 S3에 기록합니다.</li>
        <li>보안 그룹 규칙을 검토하여 0.0.0.0/0으로 허용된 인바운드 규칙을 제거하고, 필요한 CIDR만 허용합니다. AWS Config 규칙(restricted-ssh, restricted-common-ports)으로 자동 감지합니다.</li>
        <li>VPC에서 불필요한 공개 서브넷을 제거하고 EC2 인스턴스를 프라이빗 서브넷에 배치합니다.</li>
        <li>OS 수준에서 불필요한 서비스를 비활성화하고, 최소한의 패키지만 설치된 강화된 AMI를 사용합니다.</li>
        <li>Amazon GuardDuty를 활성화하여 비정상적인 네트워크 접근 시도를 탐지합니다.</li>
        <li>EC2 인스턴스 격리 런북을 준비하여 침해 의심 시 즉시 보안 그룹을 교체하고 네트워크를 차단합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Session Manager — SSH/RDP 없는 안전한 인스턴스 관리</li>
        <li>Amazon VPC Security Groups — 인바운드/아웃바운드 트래픽 제어</li>
        <li>AWS Config — 보안 그룹 규칙 규정 준수 자동 평가</li>
        <li>Amazon GuardDuty — 비정상 네트워크 활동 탐지</li>
        <li>AWS Network Firewall — VPC 수준의 네트워크 트래픽 필터링</li>
      </ul>
      <PageNav />
    </article>
  );
}
