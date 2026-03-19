import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec8Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC08-BP02 — 암호화 키 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        암호화 키의 생성, 저장, 교체, 폐기를 체계적으로 관리합니다. 키 관리 실패(키 분실, 무단 접근,
        교체 미수행)는 암호화의 효과를 무력화할 수 있습니다. AWS KMS 또는 CloudHSM을 사용하여
        키 관리를 중앙화하고 감사 가능하게 만듭니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 암호화 키는 AWS KMS에서 중앙 관리되고, 키별로 최소 권한 정책이 적용됩니다.
        키 교체가 자동화되고, 모든 키 사용 이력이 CloudTrail에 기록됩니다. 키 관리자와
        키 사용자의 역할이 분리되어 단일 실패 지점이 없습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 서비스에 단일 KMS 키를 사용하여 데이터 격리 원칙을 위반함</li>
        <li>KMS 키 정책을 기본값으로 방치하여 루트 계정이 모든 키에 접근 가능한 상태</li>
        <li>AWS 관리형 키(aws/service)를 사용하여 키 교체나 접근 제어를 직접 제어하지 못함</li>
        <li>키 관리자와 키 사용자 역할을 분리하지 않아 권한 남용 가능성 존재</li>
        <li>연간 자동 키 교체를 비활성화하거나 키 교체 정책이 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>키 접근 제어로 암호화된 데이터에 대한 추가적인 보호 레이어 확보</li>
        <li>모든 키 사용 이력을 CloudTrail로 감사하여 내부자 위협 탐지 가능</li>
        <li>자동 키 교체로 키 노출 시 피해 기간 제한</li>
        <li>서비스별 별도 키로 침해 시 영향 범위(blast radius) 제한</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>서비스/환경/데이터 분류별로 별도의 고객 관리형 KMS 키(CMK)를 생성하여 키 접근을 세분화합니다.</li>
        <li>KMS 키 정책에서 키 관리자(IAM 역할)와 키 사용자(IAM 역할/서비스)를 명확히 분리하고, 루트 계정 접근을 제한합니다.</li>
        <li>KMS 자동 키 교체(연간)를 활성화하여 키 노출 위험을 최소화합니다. 비대칭 키의 경우 수동 교체 절차를 문서화합니다.</li>
        <li>AWS CloudHSM을 사용하여 FIPS 140-2 Level 3 수준의 물리적 키 보호가 필요한 워크로드(결제, HSM 요구 규제 등)를 지원합니다.</li>
        <li>CloudTrail의 KMS 이벤트를 모니터링하여 비정상적인 키 사용(비인가 호출, 대량 복호화 등)을 탐지하고 경보를 설정합니다.</li>
        <li>키 폐기 절차를 준비하여 키 침해 의심 시 즉시 키를 비활성화하고 재암호화를 수행하는 런북을 작성합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS KMS — 고객 관리형 암호화 키 생성 및 관리</li>
        <li>AWS CloudHSM — FIPS 140-2 Level 3 전용 하드웨어 보안 모듈</li>
        <li>AWS CloudTrail — KMS API 호출 감사 로그</li>
        <li>AWS IAM — KMS 키 관리자/사용자 역할 분리</li>
        <li>AWS Config — KMS 키 교체 설정 규정 준수 평가</li>
      </ul>
      <PageNav />
    </article>
  );
}
