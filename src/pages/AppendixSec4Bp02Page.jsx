import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec4Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC04-BP02 — 표준 위치에 로그, 결과 및 지표 캡처</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 분산된 로그로 인해 보안 이벤트 상관 분석 및 조사가 어려워집니다.</p>
      </div>
      <p>
        로그 데이터, 결과 및 지표를 수집, 분석, 시각화하기 위한 표준화된 접근 방식을 갖춥니다. 보안팀이 서로 다른 시스템 전반의 보안 데이터를 효율적으로 상관 분석하고 분석하여 잠재적 보안 이벤트를 발견하고 이상 징후를 식별할 수 있어야 합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>로그 데이터, 결과 및 지표를 수집, 분석, 시각화하는 표준화된 접근 방식</li>
        <li>보안팀이 서로 다른 시스템 전반의 보안 데이터를 효율적으로 상관 분석 가능</li>
        <li>잠재적 보안 이벤트 발견 및 이상 징후 식별</li>
        <li>SIEM 시스템 또는 다른 메커니즘이 로그 데이터를 쿼리하고 분석하여 적시 대응, 추적, 에스컬레이션 지원</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>팀이 조직 로깅 전략과 일치하지 않게 독립적으로 로깅 및 지표 수집을 소유하고 관리</li>
        <li>수집된 데이터의 가시성 및 변경을 제한하는 접근 제어 부족</li>
        <li>보안 로그, 결과 및 지표를 데이터 분류 정책의 일부로 관리하지 않음</li>
        <li>데이터 수집 구성 시 데이터 주권 및 현지화 요구 사항 무시</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>로그 데이터 및 이벤트 수집 및 쿼리를 위한 표준화된 로깅 솔루션으로 향상된 인사이트</li>
        <li>자동화된 수명 주기 구성을 통한 로그 스토리지 비용 절감</li>
        <li>데이터 민감도에 따른 로그 정보의 세분화된 접근 제어</li>
        <li>상관 관계, 시각화 및 인사이트 도출을 위한 통합 도구</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Organizations를 사용하여 보안 조직 단위 아래에 전용 로그 아카이브 계정과 보안 도구 계정을 생성합니다(AWS Control Tower는 이를 자동으로 생성함).</li>
        <li>데이터 레이크 아키텍처, 서드파티 제품 또는 Amazon Security Lake를 활용하여 표준화된 보안 데이터 위치 전략을 결정합니다.</li>
        <li>Amazon Security Lake를 활성화하여 CloudTrail, Route 53, EKS, VPC Flow Logs에서 데이터를 OCSF 형식으로 수집합니다.</li>
        <li>보안 도구 계정에서 로그 아카이브에 대한 교차 계정 읽기 접근 권한으로 Amazon Athena, QuickSight, 서드파티 솔루션 등 분석 도구를 설정합니다.</li>
        <li>Amazon Security Lake 구독자를 생성하여 데이터 접근을 구성합니다.</li>
        <li>수동 ETL 프로세스 대신 자동 내보내기를 활용하여 보안 데이터 소스를 표준 위치로 게시합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Security Lake — OCSF 표준화를 통한 중앙 집중식 보안 데이터 저장소</li>
        <li>AWS CloudTrail — API 활동 로깅</li>
        <li>Amazon CloudWatch — 지표 및 모니터링</li>
        <li>Amazon Athena — 로그 분석을 위한 온디맨드 쿼리 서비스</li>
        <li>Amazon QuickSight — 시각화 및 분석</li>
        <li>Amazon GuardDuty — 위협 탐지</li>
        <li>AWS Security Hub CSPM — 보안 결과 집계</li>
        <li>Amazon S3 — 데이터 스토리지(Parquet 형식)</li>
        <li>Amazon OpenSearch — 이벤트 분석 및 시각화</li>
      </ul>
      <PageNav />
    </article>
  );
}
