import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec9Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC09-BP01 — 보안 키 및 인증서 관리 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 인증서 관리 미흡으로 인해 네트워크 통신의 기밀성과 무결성이 위협받을 수 있습니다.</p>
      </div>
      <p>
        TLS 인증서는 네트워크 통신을 보안하고 인터넷 및 프라이빗 네트워크 상의 웹사이트, 리소스, 워크로드의 ID를 확인하는 데 사용됩니다. 현대 워크로드는 TLS와 같은 PKI 프로토콜을 통한 암호화된 네트워크 통신을 광범위하게 사용합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>PKI(공개 키 인프라)에서 인증서를 프로비저닝, 배포, 저장, 갱신하는 보안 인증서 관리 시스템</li>
        <li>인증서 개인 키 자료의 노출 방지</li>
        <li>주기적으로 인증서를 자동 갱신</li>
        <li>보안 네트워크 통신을 제공하기 위해 다른 서비스와 통합</li>
        <li>인간 ID가 키 자료에 접근할 수 없도록 보장</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>인증서 배포 또는 갱신 프로세스 중 수동 단계 수행</li>
        <li>프라이빗 CA 설계 시 인증 기관(CA) 계층 구조에 충분한 주의를 기울이지 않음</li>
        <li>공개 리소스에 자체 서명 인증서 사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자동화된 배포 및 갱신을 통한 인증서 관리 간소화</li>
        <li>TLS 인증서를 사용한 전송 중 데이터 암호화 촉진</li>
        <li>인증 기관이 수행한 인증서 작업의 보안성 및 감사 가능성 향상</li>
        <li>CA 계층의 다른 레이어에서 관리 의무 조직화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>웹 서버 및 로드 밸런서의 공개적으로 신뢰받는 인증서에는 AWS Certificate Manager(ACM)를 사용합니다. ACM은 Amazon Trust Services에서 공개 인증서를 발급하며, 현대 브라우저 및 운영 체제에서 기본적으로 신뢰됩니다.</li>
        <li>자체 프라이빗 인증 기관 계층이 필요하거나 내보낼 수 있는 인증서가 필요한 경우 AWS Private Certificate Authority(AWS Private CA)를 사용합니다. IoT 임베디드 장치에는 AWS IoT Core를 활용합니다.</li>
        <li>프라이빗 CA 계층을 구축할 때 각 CA 수준을 별도의 AWS 계정에 배포하여 공격 표면을 줄이고 이상 탐지를 단순화합니다. 루트 CA는 자체 별도 계정에 두고 중간 CA 인증서 발급에만 사용합니다.</li>
        <li>API Gateway 또는 Application Load Balancer의 네이티브 mTLS 기능을 활용하여 상호 TLS 인증을 구현합니다.</li>
        <li>인증서 작업 추적을 위해 CA 계정에서 CloudTrail 로그를 활성화하고, 로그 파일 무결성 검증을 구성합니다. 발급되거나 해지된 인증서를 나열하는 감사 보고서를 정기적으로 생성하고 검토합니다.</li>
        <li>프라이빗 CA 배포를 위해 인증서 해지 목록(CRL)을 저장하는 S3 버킷을 구성합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Certificate Manager(ACM) — 공개 TLS 인증서 프로비저닝, 관리 및 배포</li>
        <li>AWS Private Certificate Authority(AWS Private CA) — 프라이빗 CA 계층 구축 및 인증서 발급</li>
        <li>AWS IoT Core — IoT 장치용 PKI 인증서 관리</li>
        <li>Amazon API Gateway — mTLS 지원</li>
        <li>Application Load Balancer — 클라이언트 인증서 지원 및 mTLS 기능</li>
        <li>AWS CloudTrail — CA 계정의 API 호출 로깅 및 감사</li>
      </ul>
      <PageNav />
    </article>
  );
}
