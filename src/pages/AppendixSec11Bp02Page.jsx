import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec11Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC11-BP02 — 개발 및 배포 수명 주기 전반에 걸쳐 테스트 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        정적 애플리케이션 보안 테스트(SAST), 동적 애플리케이션 보안 테스트(DAST), 소프트웨어
        구성 분석(SCA), 컨테이너/IaC 보안 스캔 등 자동화된 보안 테스트를 CI/CD 파이프라인에
        통합하여 코드 변경마다 자동으로 실행합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 코드 변경이 자동화된 보안 스캔을 통과한 후에만 다음 단계로 진행됩니다. 심각한 보안
        취약점이 발견되면 파이프라인이 자동으로 차단됩니다. 보안 스캔 결과가 개발자에게 즉각적으로
        피드백되어 빠른 수정이 가능합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>보안 스캔을 릴리스 전 단계에만 수행하여 취약점을 늦게 발견하고 수정 비용이 증가함</li>
        <li>오탐(False Positive)이 많아 개발자들이 보안 결과를 무시하게 됨</li>
        <li>SAST만 적용하고 오픈소스 의존성 취약점(SCA) 또는 클라우드 설정 오류를 확인하지 않음</li>
        <li>보안 스캔 결과를 파이프라인 차단 기준으로 사용하지 않아 취약한 코드가 배포됨</li>
        <li>IaC 코드(CloudFormation, Terraform)의 보안 취약점을 스캔하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>개발 초기에 보안 취약점을 발견하여 수정 비용을 최대 100배까지 절감</li>
        <li>지속적인 보안 스캔으로 새로운 취약점이 프로덕션에 도달하지 못하도록 방지</li>
        <li>개발자에게 즉각적인 보안 피드백을 제공하여 보안 학습 가속화</li>
        <li>알려진 취약점을 가진 오픈소스 라이브러리 사용 방지</li>
        <li>규정 준수 요건(PCI DSS, SOC 2 등)의 보안 테스트 요구사항 충족</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CodeBuild 파이프라인에 Amazon CodeGuru Security를 통합하여 AI 기반 SAST를 자동으로 실행하고 결과를 Security Hub로 전송합니다.</li>
        <li>Snyk, OWASP Dependency-Check, npm audit 등 SCA 도구를 파이프라인에 통합하여 오픈소스 의존성의 알려진 CVE를 자동으로 스캔합니다.</li>
        <li>cfn-nag, Checkov, tfsec 등 IaC 보안 스캐너를 CloudFormation/Terraform 코드 변경 시 자동으로 실행하여 과도한 권한, 암호화 미적용, 퍼블릭 액세스 등을 탐지합니다.</li>
        <li>Amazon ECR의 컨테이너 이미지 스캔 기능을 활성화하여 이미지 푸시 시 자동으로 OS 패키지 취약점을 스캔하고, 심각(CRITICAL) 취약점이 있는 이미지 배포를 차단합니다.</li>
        <li>OWASP ZAP 또는 Burp Suite를 스테이징 환경에서 DAST 도구로 자동 실행하여 인증 우회, SQL 인젝션, XSS 등 런타임 취약점을 탐지합니다.</li>
        <li>보안 스캔 결과를 CRITICAL/HIGH 취약점 기준으로 파이프라인 통과 조건을 설정하고, 예외 승인 프로세스를 수립합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CodeGuru Security — AI 기반 코드 보안 취약점 자동 탐지(SAST)</li>
        <li>Amazon ECR 이미지 스캔 — 컨테이너 이미지 OS 취약점 자동 스캔</li>
        <li>AWS CodeBuild — 보안 스캔을 포함한 빌드 및 테스트 자동화</li>
        <li>AWS CodePipeline — 보안 게이트를 포함한 CI/CD 파이프라인 관리</li>
        <li>AWS Security Hub — 보안 스캔 결과 중앙 집계 및 우선순위 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
