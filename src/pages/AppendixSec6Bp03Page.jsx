import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec6Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC06-BP03 — 코드 무결성 검증 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        배포되는 코드, 컨테이너 이미지, 소프트웨어 패키지의 무결성을 암호화 서명으로 검증합니다.
        공급망 공격(supply chain attack)과 코드 변조를 방지하기 위해, 서명된 아티팩트만
        프로덕션 환경에 배포되도록 파이프라인에 무결성 검증을 통합합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        CI/CD 파이프라인에서 빌드된 모든 아티팩트에 암호화 서명이 적용되고, 배포 시 서명 검증이
        자동으로 수행됩니다. 서명되지 않거나 검증에 실패한 아티팩트는 배포가 차단됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>컨테이너 이미지나 배포 패키지에 서명을 적용하지 않고 배포함</li>
        <li>이미지 태그(latest 등)만으로 신뢰하고 SHA256 다이제스트를 검증하지 않음</li>
        <li>외부 소스에서 다운로드한 바이너리나 스크립트의 체크섬을 확인하지 않음</li>
        <li>코드 서명 키를 접근 통제 없이 공유하거나 CI/CD 환경에 하드코딩함</li>
        <li>소프트웨어 공급망(오픈소스 종속성)의 무결성을 검증하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>소프트웨어 공급망 공격으로 인한 악성 코드 배포 방지</li>
        <li>승인되지 않은 코드 변경이 프로덕션에 도달하는 것을 차단</li>
        <li>배포된 소프트웨어의 출처와 무결성에 대한 감사 추적 확보</li>
        <li>규정 준수 요구 사항(SLSA, NIST SSDF 등) 충족에 기여</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Signer를 사용하여 Lambda 함수 및 컨테이너 이미지에 코드 서명을 적용하고, 서명 프로파일로 신뢰할 수 있는 서명자를 관리합니다.</li>
        <li>Amazon ECR의 이미지 서명 기능을 활성화하고, EKS/ECS 배포 시 서명 정책을 적용하여 서명되지 않은 이미지는 실행되지 않도록 합니다.</li>
        <li>AWS CodePipeline에 서명 검증 단계를 추가하여 빌드 아티팩트가 변조 없이 파이프라인을 통과했는지 확인합니다.</li>
        <li>AWS CodeArtifact를 사용하여 승인된 패키지 저장소를 구성하고, 외부 오픈소스 패키지의 버전을 고정하여 공급망 위험을 줄입니다.</li>
        <li>Amazon Inspector의 SBOM(소프트웨어 자재 명세서) 내보내기 기능을 활용하여 종속성을 추적하고 취약한 패키지를 식별합니다.</li>
        <li>서명 키는 AWS KMS에서 관리하고, IAM 정책으로 서명 작업을 CI/CD 역할에만 제한합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Signer — Lambda 및 컨테이너 이미지 코드 서명</li>
        <li>Amazon ECR — 컨테이너 이미지 서명 및 서명 정책 적용</li>
        <li>AWS CodePipeline — CI/CD 파이프라인 내 서명 검증 통합</li>
        <li>AWS CodeArtifact — 승인된 소프트웨어 패키지 저장소 관리</li>
        <li>AWS KMS — 서명 키 생성 및 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
