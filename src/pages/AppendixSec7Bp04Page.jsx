import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec7Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC07-BP04 — 데이터 접근 및 사용 감사</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        민감 데이터에 대한 모든 접근과 사용을 기록하고 감사합니다. 누가, 언제, 어떤 데이터에
        접근했는지 추적할 수 있어야 하며, 비정상적인 접근 패턴이나 무단 접근 시도를 신속하게
        탐지하고 대응할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 민감 데이터 접근이 로그로 기록되고, 이 로그는 변조 방지되어 안전하게 보관됩니다.
        비정상적인 접근 패턴(대량 다운로드, 비업무 시간 접근 등)이 자동으로 탐지되고 알림이
        발송됩니다. 접근 로그는 규정 준수 감사 시 즉시 제공 가능합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>S3 버킷의 서버 액세스 로깅 또는 CloudTrail 데이터 이벤트를 비활성화함</li>
        <li>감사 로그를 수집하지만 실제로 분석하거나 이상 탐지에 활용하지 않음</li>
        <li>감사 로그를 보호되지 않은 버킷에 저장하여 로그 자체가 변조될 수 있음</li>
        <li>데이터베이스 쿼리 로그를 비활성화하여 어떤 데이터가 조회되었는지 추적 불가</li>
        <li>감사 로그 보존 기간이 규정 요구 사항(예: 1년, 7년)보다 짧음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>내부자 위협(내부 직원의 무단 데이터 접근)을 탐지하고 조사할 수 있음</li>
        <li>데이터 침해 발생 시 무엇이 노출되었는지 신속하게 파악하여 사고 대응 지원</li>
        <li>규정 준수 감사(SOC 2, PCI-DSS, HIPAA)에 필요한 증거 자료 확보</li>
        <li>접근 패턴 분석을 통해 불필요한 권한을 가진 사용자 식별 및 정리</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CloudTrail을 조직 전체에 활성화하고, S3 데이터 이벤트(GetObject, PutObject, DeleteObject)를 기록하도록 구성합니다. 로그는 별도의 보안 계정 S3 버킷에 저장합니다.</li>
        <li>Amazon Macie를 활성화하여 민감 데이터에 대한 비정상적인 접근 패턴을 자동으로 탐지하고 Security Hub로 결과를 전송합니다.</li>
        <li>CloudTrail 로그에 S3 Object Lock을 적용하여 로그 변조를 방지하고, CloudTrail 로그 무결성 검증을 활성화합니다.</li>
        <li>Amazon RDS의 경우 감사 로그(MySQL General Log, PostgreSQL pgaudit)를 활성화하고 CloudWatch Logs로 전송합니다.</li>
        <li>Amazon CloudWatch Logs Insights 또는 Amazon Athena를 사용하여 감사 로그를 쿼리하고 이상 접근 패턴을 분석합니다.</li>
        <li>Amazon GuardDuty S3 보호 기능을 활성화하여 S3 버킷에 대한 의심스러운 API 호출을 실시간으로 탐지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudTrail — API 호출 및 데이터 이벤트 감사 로그</li>
        <li>Amazon S3 서버 액세스 로깅 — 객체 수준 접근 기록</li>
        <li>Amazon Macie — 민감 데이터 비정상 접근 탐지</li>
        <li>Amazon GuardDuty — S3 의심스러운 활동 실시간 탐지</li>
        <li>Amazon Athena — 감사 로그 대규모 쿼리 및 분석</li>
      </ul>
      <PageNav />
    </article>
  );
}
