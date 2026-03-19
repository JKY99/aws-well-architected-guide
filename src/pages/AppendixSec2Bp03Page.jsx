import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC02-BP03 — 비밀 안전하게 저장 및 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>데이터베이스 패스워드, API 키, OAuth 토큰 등 민감한 비밀(secrets)을 안전하게 저장하고 관리합니다. 비밀을 코드나 환경변수에 평문으로 저장하면 코드 저장소 유출 또는 로그 노출로 인한 심각한 보안 사고가 발생할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 애플리케이션 비밀은 전용 비밀 관리 서비스에 암호화되어 저장됩니다. 애플리케이션은 런타임에 API를 통해 비밀을 동적으로 획득하며, 코드베이스 또는 설정 파일에는 평문 비밀이 존재하지 않습니다. 비밀은 정기적으로 자동 교체됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터베이스 연결 문자열이나 API 키를 소스 코드에 하드코딩하여 Git 저장소에 노출</li>
        <li>비밀을 환경변수로 전달하여 프로세스 목록이나 로그에 평문 노출 위험</li>
        <li>비밀을 S3 버킷이나 DynamoDB에 암호화 없이 저장하여 접근 제어 우회 시 즉각 노출</li>
        <li>수년간 동일한 데이터베이스 패스워드나 API 키를 교체하지 않아 누적 노출 위험 증가</li>
        <li>비밀 사용 이력을 추적하지 않아 침해 발생 시 피해 범위 파악 불가</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비밀의 중앙 집중식 관리로 가시성 향상 및 분산된 비밀로 인한 관리 공백 제거</li>
        <li>자동 교체 기능으로 운영 부담 없이 비밀 노출 위험 지속 감소</li>
        <li>세분화된 접근 제어로 필요한 서비스만 특정 비밀에 접근 가능</li>
        <li>비밀 접근 감사 로그로 침해 발생 시 영향받은 시스템 즉시 파악</li>
        <li>비밀 유출 사고 발생 시 중앙에서 즉시 교체하여 피해 확산 차단</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Secrets Manager에 모든 데이터베이스 자격증명, API 키, OAuth 토큰을 저장하고 자동 교체를 설정합니다.</li>
        <li>덜 민감한 구성값은 AWS Systems Manager Parameter Store의 SecureString 파라미터 타입을 사용합니다.</li>
        <li>애플리케이션 코드에서 AWS SDK를 통해 런타임에 비밀을 조회하도록 구현하고, 결과를 캐싱하여 API 호출 횟수를 최적화합니다.</li>
        <li>git-secrets, truffleHog 등 도구를 CI/CD 파이프라인에 통합하여 코드 커밋 전 비밀 노출을 자동 탐지합니다.</li>
        <li>RDS 데이터베이스는 Secrets Manager의 RDS 자동 교체 기능을 활성화하여 패스워드를 주기적으로 자동 변경합니다.</li>
        <li>Amazon GuardDuty를 통해 유출된 자격증명이 AWS 외부에서 사용되는 경우를 탐지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Secrets Manager — 비밀 안전 저장, 자동 교체, 접근 제어</li>
        <li>AWS Systems Manager Parameter Store — 계층적 구성 및 비밀 관리</li>
        <li>AWS KMS — 비밀 암호화 키 관리</li>
        <li>Amazon GuardDuty — 유출된 자격증명 사용 탐지</li>
        <li>AWS CloudTrail — 비밀 접근 이력 감사</li>
      </ul>
      <PageNav />
    </article>
  );
}
