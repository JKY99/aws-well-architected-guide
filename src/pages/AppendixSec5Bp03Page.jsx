import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec5Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC05-BP03 — 네트워크 보호 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        새로운 위협이 탐지되면 수동 개입 없이 네트워크 보호 규칙이 자동으로 업데이트되도록
        자동화합니다. 위협 환경은 빠르게 변화하며, 수동 대응으로는 신규 공격을 적시에 차단하기
        어렵습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        GuardDuty, WAF 로그, 위협 인텔리전스 피드 등에서 탐지된 위협 정보를 기반으로 WAF 규칙,
        보안 그룹, Network Firewall 규칙이 자동으로 업데이트됩니다. DDoS 공격 발생 시 Shield
        Advanced가 자동으로 완화 조치를 취합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 방화벽 규칙 업데이트를 수동으로 처리하여 위협 대응 지연</li>
        <li>위협 인텔리전스 피드를 구독하지 않아 알려진 악성 IP/도메인에 대한 자동 차단 미적용</li>
        <li>Shield Standard만 사용하여 정교한 DDoS 공격에 대한 자동 완화 부재</li>
        <li>자동화된 규칙 업데이트에 대한 검토 프로세스 없이 임시 차단이 영구화</li>
        <li>네트워크 보호 규칙이 분산 관리되어 일관성 없는 정책 적용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>신규 위협 탐지에서 차단까지의 시간을 분에서 초 단위로 단축</li>
        <li>위협 인텔리전스 기반 사전 차단으로 알려진 공격 자동 방어</li>
        <li>DDoS 공격 시 자동 완화로 서비스 가용성 보호</li>
        <li>보안팀이 반복적인 규칙 업데이트 대신 전략적 보안 개선에 집중 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Firewall Manager를 사용하여 조직 전체의 WAF, 보안 그룹, Network Firewall 정책을 중앙에서 자동 배포하고 관리합니다.</li>
        <li>GuardDuty에서 탐지된 악성 IP를 EventBridge를 통해 Lambda로 전달하고, WAF IP 세트를 자동으로 업데이트하는 자동화를 구현합니다.</li>
        <li>AWS Shield Advanced를 활성화하고 DDoS Response Team(DRT)과의 사전 접근 권한을 설정하여 공격 시 자동 지원을 받습니다.</li>
        <li>AWS Managed Rules for WAF를 사용하고, AWS가 업데이트하는 규칙 그룹을 활용하여 최신 위협에 자동 대응합니다.</li>
        <li>자동으로 추가된 차단 규칙에 만료 시간(TTL)을 설정하여 임시 차단이 영구화되는 것을 방지합니다.</li>
        <li>Amazon Route 53 Resolver DNS Firewall을 활용하여 알려진 악성 도메인으로의 DNS 쿼리를 자동 차단합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Firewall Manager — 조직 전체 방화벽 정책 자동 배포 및 관리</li>
        <li>AWS Shield Advanced — DDoS 자동 완화 및 DRT 지원</li>
        <li>Amazon GuardDuty — 위협 탐지 결과를 자동화 트리거로 활용</li>
        <li>AWS WAF — 자동 업데이트되는 Managed Rules 적용</li>
        <li>Amazon Route 53 Resolver DNS Firewall — 악성 도메인 DNS 쿼리 자동 차단</li>
      </ul>
      <PageNav />
    </article>
  );
}
