import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec11Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC11-BP05 — 패키지 및 의존성을 위한 서비스 중앙화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        외부 패키지 저장소(npm, PyPI, Maven Central 등)에서 직접 의존성을 가져오는 대신,
        내부 승인 패키지 저장소를 중앙화하여 악성 패키지, 취약한 의존성, 공급망 공격으로부터
        빌드 환경과 애플리케이션을 보호합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 외부 패키지는 내부 저장소를 통해 제공되며, 신규 패키지 추가는 보안 검토 후 승인됩니다.
        사용 중인 모든 의존성의 목록(소프트웨어 자재 명세서, SBOM)이 유지되고 알려진 취약점이
        지속적으로 모니터링됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>개발자가 인터넷의 임의 패키지 저장소에서 직접 검증되지 않은 패키지를 설치함</li>
        <li>타이포스쿼팅(Typosquatting) 공격으로 악성 패키지가 설치됨(예: 'requets' 대신 'requests')</li>
        <li>소프트웨어 자재 명세서(SBOM)가 없어 Log4Shell과 같은 취약점 발생 시 영향 받는 시스템을 파악하기 어려움</li>
        <li>의존성 혼동(Dependency Confusion) 공격에 노출되어 내부 패키지 이름을 가진 악성 패키지가 설치됨</li>
        <li>패키지 버전을 고정하지 않아 자동 업데이트로 의도치 않게 취약한 버전이 설치됨</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>검증된 패키지만 빌드에 사용되어 공급망 공격 위험 감소</li>
        <li>내부 저장소 캐싱으로 외부 저장소 장애 시에도 빌드 안정성 유지</li>
        <li>SBOM으로 취약점 발생 시 영향 받는 시스템을 신속하게 식별</li>
        <li>패키지 감사 로그로 어떤 버전이 언제 사용되었는지 추적 가능</li>
        <li>의존성 혼동 공격 방지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CodeArtifact를 사용하여 npm, PyPI, Maven, NuGet 패키지를 위한 내부 프록시 저장소를 설정합니다. CodeArtifact는 외부 저장소의 패키지를 캐싱하고 승인된 패키지만 제공합니다.</li>
        <li>CodeArtifact 업스트림 연결을 구성하여 내부 저장소에 없는 패키지는 자동으로 외부 저장소에서 가져와 캐싱합니다. 내부 패키지는 외부에서 오버라이드되지 않도록 설정합니다.</li>
        <li>빌드 환경에서 외부 패키지 저장소 접근을 VPC 네트워크 정책 또는 방화벽으로 차단하고, 모든 패키지를 CodeArtifact를 통해서만 가져오도록 강제합니다.</li>
        <li>패키지 추가 프로세스를 수립합니다. 새 패키지 도입 시 라이선스, 알려진 CVE, 유지보수 상태, 다운로드 수, 출처를 검토하고 승인하는 절차를 정의합니다.</li>
        <li>Amazon Inspector 또는 Snyk을 사용하여 사용 중인 의존성의 CVE를 지속적으로 모니터링하고 새로운 취약점 발견 시 알림을 받습니다.</li>
        <li>CycloneDX 또는 SPDX 표준을 사용하여 SBOM을 생성하고 S3에 보관합니다. 이를 통해 취약점 발생 시 영향 받는 서비스를 신속하게 식별할 수 있습니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeArtifact — npm, PyPI, Maven, NuGet 패키지 중앙 관리 저장소</li>
        <li>Amazon Inspector — 컨테이너 및 EC2 소프트웨어 의존성 취약점 지속 스캔</li>
        <li>AWS CodeBuild — 내부 저장소를 사용하는 안전한 빌드 환경</li>
        <li>Amazon ECR — 컨테이너 이미지 스캔 및 기본 이미지 관리</li>
        <li>AWS Security Hub — 의존성 취약점 발견 결과 중앙 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
