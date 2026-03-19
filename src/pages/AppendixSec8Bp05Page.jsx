import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec8Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC08-BP05 — 데이터 감사 추적 유지</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        저장 데이터에 대한 모든 변경과 액세스의 완전한 감사 추적을 유지합니다. 데이터가 언제,
        누구에 의해, 어떻게 변경되었는지 추적할 수 있어야 보안 사고 조사, 규정 준수 감사,
        문제 해결이 가능합니다. 감사 로그 자체도 무결성이 보호되어야 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        데이터 생성, 수정, 삭제, 접근에 대한 완전한 감사 추적이 자동으로 기록됩니다. 감사 로그는
        안전하게 보관되고, 보존 기간 동안 변경되지 않습니다. 감사 로그를 신속하게 검색하고
        분석할 수 있어 사고 대응 시간을 단축합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>CloudTrail을 활성화했지만 관리 이벤트만 기록하고 데이터 이벤트(S3 객체 접근 등)는 기록하지 않음</li>
        <li>감사 로그를 모니터링하는 계정과 동일한 버킷에 저장하여 관리자가 로그를 삭제 가능</li>
        <li>데이터베이스 변경 이력(누가 어떤 레코드를 수정했는지)을 기록하지 않음</li>
        <li>감사 로그 보존 기간이 규정 요구 사항에 미달(예: SOC 2는 1년, HIPAA는 6년)</li>
        <li>로그가 수집되지만 검색이 어려워 사고 조사 시 활용하지 못함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 침해 사고 발생 시 영향 범위와 침해 경로를 신속하게 파악</li>
        <li>규정 준수 감사(SOC 2, HIPAA, PCI-DSS)에 필요한 완전한 증거 자료 확보</li>
        <li>내부자에 의한 무단 데이터 접근 및 변조를 사후 추적하여 책임 소재 확인</li>
        <li>데이터 변경 이력으로 의도치 않은 변경 발생 시 원인 파악 및 롤백 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>CloudTrail을 조직 트레일로 설정하여 모든 계정의 관리 이벤트와 S3/Lambda 데이터 이벤트를 중앙 집중식 S3 버킷에 기록합니다.</li>
        <li>S3 서버 액세스 로깅을 활성화하여 버킷에 대한 모든 HTTP 요청(요청자 IP, 요청 시간, 요청 유형 등)을 기록합니다.</li>
        <li>AWS Config를 활성화하여 모든 AWS 리소스 구성 변경 이력을 자동으로 기록하고 S3에 장기 보관합니다.</li>
        <li>Amazon RDS의 경우 데이터베이스 감사 로그(MySQL: General/Audit Log, PostgreSQL: pgaudit)를 활성화하고 CloudWatch Logs로 전송하여 SQL 쿼리 수준의 감사를 수행합니다.</li>
        <li>감사 로그를 저장하는 S3 버킷은 별도의 보안 계정에 생성하고, CloudTrail 로그 무결성 검증과 Object Lock을 적용합니다.</li>
        <li>Amazon OpenSearch Service 또는 Amazon Athena를 사용하여 감사 로그를 인덱싱하고 신속하게 검색할 수 있는 환경을 구축합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudTrail — 모든 API 호출 및 데이터 이벤트 감사 로그</li>
        <li>Amazon S3 서버 액세스 로깅 — 버킷 HTTP 요청 기록</li>
        <li>AWS Config — AWS 리소스 구성 변경 이력 관리</li>
        <li>Amazon CloudWatch Logs — 데이터베이스 감사 로그 수집 및 보관</li>
        <li>Amazon Athena — 감사 로그 대규모 쿼리 및 사고 조사</li>
      </ul>
      <PageNav />
    </article>
  );
}
