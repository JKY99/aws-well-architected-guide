import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec9Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC09-BP02 — 안전한 키 및 인증서 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        TLS 인증서의 발급, 배포, 갱신, 폐기를 포함한 전체 생명 주기를 안전하게 자동화합니다.
        인증서 만료는 서비스 중단을 초래하고, 개인 키 노출은 중간자 공격을 가능하게 합니다.
        ACM과 Private CA를 활용하여 인증서 관리를 자동화하고 인증서 개인 키를 안전하게 보호합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 TLS 인증서는 ACM에서 관리되어 만료 전 자동으로 갱신됩니다. 인증서 개인 키는 코드나
        파일 시스템에 저장되지 않고 ACM 또는 KMS에서 안전하게 관리됩니다. 인증서 만료 임박 시
        자동 경보가 발송되고, 내부 PKI가 필요한 경우 ACM Private CA를 사용합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>인증서 개인 키를 EC2 인스턴스 파일 시스템이나 S3 버킷에 평문으로 저장함</li>
        <li>인증서 갱신을 수동으로 관리하여 만료로 인한 서비스 중단이 발생함</li>
        <li>자체 서명 인증서나 내부 CA로 발급한 인증서를 공개 서비스에 사용함</li>
        <li>와일드카드 인증서를 모든 도메인에 공유하여 단일 인증서 침해 시 전체 도메인 영향</li>
        <li>만료된 인증서를 폐기하지 않고 방치하거나 유효성 확인 없이 신뢰함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>인증서 자동 갱신으로 만료로 인한 서비스 중단 위험 제거</li>
        <li>개인 키를 ACM에서 관리하여 키 노출 위험 최소화</li>
        <li>내부 마이크로서비스 간 mTLS에 Private CA를 사용하여 서비스 신원 검증</li>
        <li>인증서 중앙 관리로 대규모 환경에서도 인증서 현황 가시화 및 거버넌스 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Certificate Manager(ACM)를 사용하여 퍼블릭 도메인의 TLS 인증서를 무료로 발급하고, ACM이 만료 전 자동으로 갱신합니다. ACM 인증서는 ALB, CloudFront, API Gateway에 직접 배포됩니다.</li>
        <li>ACM Private CA를 사용하여 내부 서비스, 마이크로서비스, VPN 등에 사용할 인증서를 발급하는 내부 PKI를 구축합니다.</li>
        <li>EC2나 온프레미스 서버에서 사용하는 인증서는 ACM Private CA에서 발급하고, 개인 키 보호를 위해 AWS KMS를 활용합니다.</li>
        <li>Amazon EventBridge와 CloudWatch Alarms를 사용하여 ACM 인증서 만료 30일, 7일 전에 보안 팀에 알림을 발송합니다.</li>
        <li>AWS Secrets Manager를 사용하여 외부 CA에서 발급한 인증서와 개인 키를 안전하게 저장하고 자동 교체 Lambda를 구성합니다.</li>
        <li>인증서 투명성 로그를 모니터링하여 도메인에 대한 무단 인증서 발급을 탐지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Certificate Manager(ACM) — 퍼블릭 TLS 인증서 발급, 배포, 자동 갱신</li>
        <li>AWS Certificate Manager Private CA — 내부 PKI 및 사설 인증서 관리</li>
        <li>AWS Secrets Manager — 외부 인증서 및 개인 키 안전 보관</li>
        <li>Amazon EventBridge — 인증서 만료 임박 이벤트 자동화</li>
        <li>AWS KMS — 인증서 개인 키 보호</li>
      </ul>
      <PageNav />
    </article>
  );
}
