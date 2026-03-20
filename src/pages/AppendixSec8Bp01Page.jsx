import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec8Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC08-BP01 — 보안 키 관리 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 암호화 키 노출 또는 남용으로 모든 암호화된 데이터가 위험에 처할 수 있습니다.</p>
      </div>
      <p>
        확장 가능하고 반복 가능하며 자동화된 키 관리 메커니즘을 구현합니다. 키 자료에 대한 최소 권한 접근을 강제하고, 키 가용성, 기밀성 및 무결성 간의 올바른 균형을 제공합니다. 키 접근을 모니터링하고 자동화된 프로세스를 사용하여 키 자료를 교체합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>확장 가능하고 반복 가능하며 자동화된 키 관리 메커니즘</li>
        <li>키 자료에 대한 최소 권한 접근 강제</li>
        <li>키 가용성, 기밀성 및 무결성 간의 올바른 균형 제공</li>
        <li>키 접근 모니터링</li>
        <li>자동화된 프로세스를 사용하여 키 자료 교체</li>
        <li>인간 운영자가 키 자료에 접근하지 못하도록 방지</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>암호화되지 않은 키 자료에 인간이 접근</li>
        <li>맞춤형 암호화 알고리즘 생성</li>
        <li>키 자료 접근에 대한 과도하게 광범위한 권한</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비인가 접근으로부터 콘텐츠 보호</li>
        <li>데이터 암호화에 대한 규제 요구 사항 충족에 도움</li>
        <li>규정 준수 규정에 맞는 기술적 메커니즘 제공</li>
        <li>보안 메커니즘을 통한 키 자료 보호</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS 소유/관리 키(사용 편의성)와 고객 관리형 키(기본 키 스토어 또는 맞춤형 키 스토어 — CloudHSM, 외부 키 스토어) 중 적절한 키 관리 옵션을 결정합니다.</li>
        <li>AWS KMS와의 서비스 통합 방법을 검토합니다(예: EC2 EBS 볼륨, 스냅샷 암호화 방법).</li>
        <li>AWS KMS를 구현하여 키를 생성하고 관리하며 접근 제어 모범 사례를 검토합니다.</li>
        <li>클라이언트 측 암호화 요구 사항에 AWS Encryption SDK와 AWS KMS 통합 사용을 고려합니다.</li>
        <li>IAM Access Analyzer를 활성화하여 과도하게 광범위한 KMS 키 정책을 자동으로 검토하고 공개 접근을 방지하기 위한 맞춤형 정책 검사를 사용합니다.</li>
        <li>Security Hub CSPM을 활성화하여 잘못 구성된 키 정책, 삭제 예정 키 또는 자동 교체 없는 키에 대한 알림을 받습니다.</li>
        <li>AWS KMS API 호출에 대한 CloudTrail 로깅을 구성합니다. 로그 볼륨 관리를 위해 KMS 로깅을 별도의 트레일로 분리하는 것을 고려합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Key Management Service(AWS KMS) — 키 관리를 위한 기본 서비스</li>
        <li>AWS Encryption SDK — 클라이언트 측 암호화 기본 요소</li>
        <li>AWS CloudHSM — 맞춤형 키 스토어 옵션</li>
        <li>IAM Access Analyzer — 정책 검토 및 검증</li>
        <li>AWS Security Hub CSPM — 보안 태세 관리 모니터링</li>
        <li>AWS CloudTrail — API 호출 로깅 및 모니터링</li>
      </ul>
      <PageNav />
    </article>
  );
}
