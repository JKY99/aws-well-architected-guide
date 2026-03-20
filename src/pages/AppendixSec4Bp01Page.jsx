import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec4Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC04-BP01 — 서비스 및 애플리케이션 로깅 구성</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 보안 인시던트 발생 시 원인 분석 및 증거 확보가 불가능해집니다.</p>
      </div>
      <p>
        내부 프로세스 또는 보안 인시던트 대응과 같은 의무를 이행하는 데 필요할 때 AWS 서비스 및 애플리케이션에서 보안 이벤트 로그를 안정적이고 일관되게 검색할 수 있어야 합니다. 더 나은 운영 결과를 위해 로그 중앙화를 고려합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>워크로드와 관련된 모든 AWS 서비스의 로그가 활성화됨</li>
        <li>로그는 불변성이 보장되는 중앙 저장소에 보관됨</li>
        <li>보안 이벤트 전체 타임라인 재구성이 가능하도록 로그 누락 없음</li>
        <li>보존 정책에 따라 충분한 기간 동안 로그 유지(즉시 접근 가능한 3개월~1년, 규정 준수 목적의 최대 7년)</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>로그를 영구 보관하거나 너무 일찍 삭제함</li>
        <li>모든 사람이 로그에 접근 가능하도록 설정함</li>
        <li>로그 거버넌스 및 활용을 위해 수동 프로세스에만 전적으로 의존함</li>
        <li>필요할 수 있다는 이유로 모든 유형의 로그를 저장함</li>
        <li>필요할 때만 로그 무결성을 확인함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>보안 인시던트에 대한 근본 원인 분석(RCA) 메커니즘 구현</li>
        <li>거버넌스, 위험 및 규정 준수 의무를 위한 증거 자료로 활용</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CloudTrail 또는 AWS Organizations 트레일을 사용하여 각 AWS 계정에 대한 트레일을 설정하고 Amazon S3 버킷을 스토리지로 구성합니다. CloudTrail은 기본 90일 보존으로 API 호출을 추적하며, 더 긴 보존을 위해 트레일을 생성합니다.</li>
        <li>CloudTrail Lake를 사용하면 SQL 기반 쿼리로 최대 7년간 로그를 보존할 수 있습니다.</li>
        <li>모든 VPC에서 VPC Flow Logs를 활성화하고 S3 또는 CloudWatch Logs로 스트리밍합니다.</li>
        <li>Amazon Security Lake를 활성화하여 로그를 수집, 정규화하고 Apache Parquet 형식 및 OCSF(Open Cybersecurity Schema Framework)로 저장합니다.</li>
        <li>각 AWS 서비스(AWS Config, AWS WAF, AWS Network Firewall, ELB 액세스 로그, Route 53 Resolver 쿼리 로그, RDS 로그, EKS 컨트롤 플레인 로그)에 대해 적절한 보존 정책과 함께 로깅을 활성화합니다.</li>
        <li>로그 쿼리 메커니즘으로 CloudWatch Logs Insights(CloudWatch 로그 그룹용), Amazon Athena(S3 저장 데이터용), Amazon OpenSearch Service 또는 서드파티 SIEM 도구를 선택합니다.</li>
        <li>AWS Config, Amazon GuardDuty, AWS Security Hub CSPM을 사용하여 로그 기반 경보를 구성합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudTrail — API 호출 로깅 및 추적</li>
        <li>VPC Flow Logs — 네트워크 트래픽 모니터링</li>
        <li>Amazon Security Lake — 중앙 집중식 로그 수집 및 OCSF 정규화</li>
        <li>Amazon CloudWatch — 로그 저장 및 분석</li>
        <li>Amazon S3 — 비용 효율적인 로그 스토리지</li>
        <li>Amazon Athena — S3 로그 SQL 기반 쿼리</li>
        <li>Amazon GuardDuty — 위협 탐지 및 조사</li>
        <li>AWS Security Hub CSPM — 중앙화된 보안 결과 관리</li>
        <li>AWS Config — 구성 모니터링 및 규정 준수</li>
      </ul>
      <PageNav />
    </article>
  );
}
