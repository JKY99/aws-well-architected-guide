import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec11Bp07Page() {
  return (
    <article className="doc-content">
      <h1>SEC11-BP07 — 파이프라인의 보안 속성 정기적 평가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        CI/CD 파이프라인 자체가 보안 공격의 대상이 될 수 있습니다. 파이프라인의 접근 권한, 비밀
        관리, 코드 서명, 빌드 환경 보안 등 파이프라인 자체의 보안 속성을 정기적으로 평가하고
        강화하여 소프트웨어 공급망 공격을 방지합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        CI/CD 파이프라인의 모든 구성 요소(소스 코드 저장소, 빌드 서버, 배포 도구, 비밀 저장소)의
        보안 속성이 정의되고 정기적으로 검증됩니다. 파이프라인 권한은 최소 권한으로 제한되고,
        빌드 결과물의 무결성이 서명으로 보장됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>빌드 환경에 과도한 AWS 권한이 있어 악성 코드가 빌드 중 AWS 리소스에 접근 가능</li>
        <li>CI/CD 시스템의 비밀(API 키, 자격 증명)이 환경 변수로 노출되거나 로그에 기록됨</li>
        <li>코드 서명이 없어 배포 결과물의 무결성을 검증할 수 없음</li>
        <li>파이프라인 구성이 코드로 관리되지 않아 변경 이력과 검토 프로세스가 없음</li>
        <li>빌드 에이전트가 인터넷에서 임의의 스크립트나 도구를 다운로드할 수 있음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>SolarWinds, Codecov와 같은 소프트웨어 공급망 공격 방지</li>
        <li>빌드 환경에서 자격 증명 유출로 인한 AWS 계정 침해 위험 제거</li>
        <li>배포 결과물의 무결성 검증으로 변조된 소프트웨어 배포 방지</li>
        <li>파이프라인 권한 최소화로 침해 발생 시 피해 범위 제한</li>
        <li>파이프라인 보안 감사로 규정 준수 요건 충족 증거 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CodeBuild 프로젝트에 최소 권한 IAM 역할을 연결합니다. 빌드에 필요한 S3, ECR, CodeArtifact 접근만 허용하고 IAM 관리 권한은 절대 부여하지 않습니다.</li>
        <li>AWS Secrets Manager 또는 AWS Systems Manager Parameter Store를 사용하여 빌드 비밀을 관리합니다. 비밀을 환경 변수로 직접 설정하는 것을 피하고, buildspec.yml에 비밀을 하드코딩하지 않습니다.</li>
        <li>AWS Signer를 사용하여 Lambda 함수, 컨테이너 이미지 등 배포 결과물에 디지털 서명을 적용합니다. 검증된 서명이 있는 결과물만 배포하도록 정책을 구성합니다.</li>
        <li>파이프라인 구성을 코드로 관리하고(Pipeline as Code), 모든 파이프라인 변경은 코드 검토를 거치도록 합니다.</li>
        <li>빌드 에이전트의 네트워크 아웃바운드를 CodeArtifact, ECR, S3 VPC 엔드포인트로 제한하여 임의의 외부 스크립트 다운로드를 차단합니다.</li>
        <li>반기별로 파이프라인 보안 평가를 수행합니다. OWASP Top 10 CI/CD Security Risks 프레임워크를 참고하여 접근 제어, 비밀 관리, 무결성 보호, 로깅 등을 검토합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Signer — Lambda 및 컨테이너 배포 결과물 디지털 서명</li>
        <li>AWS Secrets Manager — 파이프라인 비밀 안전 관리</li>
        <li>AWS CodeBuild — 최소 권한 빌드 환경 구성</li>
        <li>Amazon ECR — 컨테이너 이미지 서명 및 불변성 정책</li>
        <li>AWS CloudTrail — 파이프라인 활동 감사 추적</li>
      </ul>
      <PageNav />
    </article>
  );
}
