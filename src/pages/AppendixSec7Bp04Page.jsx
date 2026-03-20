import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec7Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC07-BP04 — 확장 가능한 데이터 수명 주기 관리 정의</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 불필요한 민감 데이터 보관으로 규정 위반 및 보안 위험이 증가합니다.</p>
      </div>
      <p>
        데이터를 수집 시점과 가장 가까운 시점에 분류합니다. 수집 시점과 가장 가까운 시점에 데이터 마스킹, 토큰화 또는 기타 민감도 감소 프로세스를 수행합니다. 분류에 따라 더 이상 보관하는 것이 적절하지 않을 때 정책에 따라 데이터를 삭제합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>수집 시점과 가장 가까운 시점에 데이터 분류</li>
        <li>수집 시점과 가장 가까운 시점에 데이터 마스킹, 토큰화 또는 기타 민감도 감소 프로세스 수행</li>
        <li>분류에 따라 더 이상 보관하는 것이 적절하지 않을 때 정책에 따라 데이터 삭제</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>다양한 민감도 수준과 접근 요구 사항을 고려하지 않고 데이터 수명 주기 관리에 획일적 접근 방식 구현</li>
        <li>사용 가능한 데이터 또는 백업된 데이터 관점에서만 수명 주기 관리를 고려하고 두 가지를 모두 고려하지 않음</li>
        <li>워크로드에 들어오는 데이터의 가치 또는 출처를 확인하지 않고 유효한 것으로 가정</li>
        <li>데이터 보호 및 백업의 대체물로 데이터 내구성에 의존</li>
        <li>유용성 및 필요한 보존 기간을 초과하여 데이터 보존</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>규정 준수 유지</li>
        <li>데이터 보안 향상</li>
        <li>스토리지 비용 최적화</li>
        <li>적절한 제어를 유지하면서 효율적인 데이터 접근 및 공유 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>워크로드의 데이터 유형, 민감도 수준 및 접근 요구 사항을 분석하여 데이터를 분류하고 적절한 수명 주기 관리 전략을 정의합니다.</li>
        <li>법적, 규제 및 조직 요구 사항에 맞는 데이터 보존 정책 및 자동화된 파기 프로세스를 설계하고 구현합니다.</li>
        <li>AWS Config를 사용하여 자동화된 수명 주기 관리 없는 리소스를 탐지합니다.</li>
        <li>요구 사항이 발전함에 따라 데이터 수명 주기 관리 전략, 제어 및 정책을 지속적으로 모니터링, 감사 및 조정하는 프로세스 및 자동화를 구축합니다.</li>
        <li>Amazon S3 수명 주기 정책, Amazon Data Lifecycle Manager, DynamoDB TTL을 활용하여 데이터 보존, 아카이빙, 만료를 자동화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 수명 주기 정책 — 데이터 보존, 아카이빙, 만료 구성</li>
        <li>Amazon Data Lifecycle Manager — EBS 볼륨의 자동화된 수명 주기 관리</li>
        <li>AWS Backup — AWS 서비스 전체의 자동화된 백업</li>
        <li>DynamoDB Time To Live(TTL) — 항목별 만료 타임스탬프</li>
        <li>S3 Object Lock — 불변 백업</li>
        <li>AWS Backup Vault Lock — 추가적인 백업 보안 및 제어</li>
        <li>AWS Glue Data Catalog — 스키마 및 타임스탬프 정보 저장</li>
        <li>AWS Config — 수명 주기 관리 정책 없는 리소스 탐지</li>
        <li>AWS IAM Access Analyzer — 접근 권한 분석</li>
      </ul>
      <PageNav />
    </article>
  );
}
