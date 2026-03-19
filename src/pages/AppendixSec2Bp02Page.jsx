import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC02-BP02 — 임시 자격 증명 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>장기 자격증명(액세스 키) 대신 임시 자격증명을 사용하여 자격증명 노출 위험을 최소화합니다. 임시 자격증명은 만료 시간이 정해져 있어 유출되더라도 피해 기간이 제한됩니다.</p>
      <h2>원하는 결과</h2>
      <p>EC2 인스턴스, Lambda 함수, 컨테이너 등 모든 AWS 컴퓨팅 리소스는 IAM Role을 통해 임시 자격증명을 자동으로 획득합니다. 사람 사용자는 IAM Identity Center를 통해 임시 자격증명으로 AWS에 접근하며, 장기 액세스 키는 존재하지 않습니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>애플리케이션 코드나 설정 파일에 IAM 액세스 키를 하드코딩하여 코드 저장소에 노출</li>
        <li>EC2 인스턴스에 IAM Role 대신 액세스 키를 직접 설정하여 인스턴스 침해 시 자격증명 탈취</li>
        <li>만료되지 않는 장기 액세스 키를 수년간 교체 없이 사용하여 누적된 노출 위험 증가</li>
        <li>여러 서비스가 동일한 IAM 사용자 키를 공유하여 하나의 유출이 모든 서비스에 영향</li>
        <li>CI/CD 파이프라인에 장기 액세스 키를 환경변수로 설정하여 파이프라인 시스템 침해 시 노출</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>임시 자격증명의 단기 유효성으로 자격증명 유출 피해 기간 및 범위 제한</li>
        <li>자격증명 교체 자동화로 운영 부담 없이 보안 수준 향상</li>
        <li>IAM Role 기반 접근으로 서비스별 최소 권한 원칙 적용 용이</li>
        <li>장기 키 관리 복잡성 제거로 자격증명 관련 운영 위험 감소</li>
        <li>AWS STS 감사를 통해 역할 위임 및 자격증명 사용 추적 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>EC2 인스턴스에는 Instance Profile(IAM Role)을 연결하고, 애플리케이션은 인스턴스 메타데이터에서 자동으로 임시 자격증명을 획득하도록 구성합니다.</li>
        <li>Lambda 함수, ECS 태스크, EKS Pod에 각각 전용 IAM Role을 할당하여 최소 권한을 적용합니다.</li>
        <li>AWS IAM Identity Center의 AWS CLI v2 통합을 사용하여 개발자가 임시 자격증명으로 CLI를 사용하도록 전환합니다.</li>
        <li>GitHub Actions, Jenkins 등 CI/CD 도구에서는 OIDC 연동(AssumeRoleWithWebIdentity)을 사용하여 액세스 키 없이 AWS에 접근합니다.</li>
        <li>AWS IAM Access Analyzer를 통해 기존 장기 액세스 키를 식별하고 단계적으로 제거합니다.</li>
        <li>IMDSv2(인스턴스 메타데이터 서비스 v2)를 강제 적용하여 SSRF 공격을 통한 자격증명 탈취를 방지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS STS (Security Token Service) — 임시 자격증명 발급</li>
        <li>AWS IAM Roles — EC2, Lambda 등 AWS 서비스에 권한 위임</li>
        <li>AWS IAM Identity Center — 사람 사용자를 위한 임시 자격증명 SSO</li>
        <li>AWS IAM Access Analyzer — 기존 장기 키 탐지 및 미사용 권한 분석</li>
        <li>Amazon EC2 Instance Metadata Service v2 — 안전한 임시 자격증명 획득</li>
      </ul>
      <PageNav />
    </article>
  );
}
