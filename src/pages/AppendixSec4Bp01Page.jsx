import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec4Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC04-BP01 — 서비스 및 애플리케이션 로깅 구성</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        보안 이벤트를 탐지하고 조사하기 위해 모든 AWS 서비스와 애플리케이션에서 포괄적인 로그를
        활성화합니다. 로그가 없으면 보안 인시던트 발생 시 원인 분석, 피해 범위 파악, 법적 증거
        확보가 불가능합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드와 관련된 모든 AWS 서비스의 로그가 활성화되고, 로그는 불변성이 보장되는 중앙
        저장소에 보관됩니다. 로그 누락 없이 보안 이벤트 전체 타임라인 재구성이 가능하며,
        보존 정책에 따라 충분한 기간 동안 로그가 유지됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>CloudTrail을 일부 리전에서만 활성화하거나 관리 이벤트만 기록</li>
        <li>VPC Flow Logs를 비활성화하여 네트워크 트래픽 분석 불가</li>
        <li>로그를 애플리케이션이 실행되는 동일 계정/위치에 저장하여 공격자가 로그 삭제 가능</li>
        <li>로그 보존 기간을 과도하게 짧게 설정하여 장기 조사 불가</li>
        <li>애플리케이션 레벨 로그(접근 로그, 오류 로그 등) 미수집</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>보안 인시던트 발생 시 전체 공격 경로 재구성 가능</li>
        <li>규정 준수 감사를 위한 증거 자료 확보</li>
        <li>이상 행동 탐지를 위한 기계 학습 모델 학습 데이터 제공</li>
        <li>포렌식 조사 시 법적 증거로 활용 가능한 불변 로그 보관</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CloudTrail을 조직 트레일(Organization Trail)로 구성하여 모든 계정과 리전의 API 호출을 중앙에서 수집합니다.</li>
        <li>CloudTrail에서 관리 이벤트뿐 아니라 데이터 이벤트(S3 객체 수준, Lambda 실행)도 활성화합니다.</li>
        <li>모든 VPC에서 VPC Flow Logs를 활성화하고, 로그를 S3 또는 CloudWatch Logs로 전송합니다.</li>
        <li>ALB/NLB/CloudFront 액세스 로그, S3 서버 액세스 로그, RDS 감사 로그를 활성화합니다.</li>
        <li>AWS WAF 로그를 활성화하여 웹 애플리케이션 공격 시도를 기록합니다.</li>
        <li>로그 저장 S3 버킷에 MFA Delete와 Object Lock을 설정하여 로그 불변성을 보장합니다.</li>
        <li>로그 보존 기간을 보안 요건과 규정에 맞게 설정합니다(최소 1년 이상 권장).</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudTrail — API 호출 감사 로깅(관리 이벤트 및 데이터 이벤트)</li>
        <li>VPC Flow Logs — 네트워크 트래픽 로깅</li>
        <li>Amazon CloudWatch Logs — 애플리케이션 및 시스템 로그 수집</li>
        <li>AWS WAF 로그 — 웹 애플리케이션 방화벽 이벤트 기록</li>
        <li>Amazon S3 Object Lock — 로그 불변성 및 보존 정책 적용</li>
      </ul>
      <PageNav />
    </article>
  );
}
