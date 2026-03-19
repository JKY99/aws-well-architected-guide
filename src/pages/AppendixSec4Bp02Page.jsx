import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec4Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC04-BP02 — 표준 위치에 로그 및 보안 결과 수집</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        여러 AWS 계정과 서비스에서 생성되는 로그 및 보안 결과를 표준화된 중앙 위치에 집계합니다.
        로그가 분산되어 있으면 이벤트 간 상관 분석이 어렵고, 조사에 오랜 시간이 소요됩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 계정과 리전의 보안 관련 로그가 지정된 로그 아카이브 계정의 S3 버킷 또는 Amazon
        Security Lake에 중앙 집계됩니다. 보안팀은 단일 위치에서 전체 조직의 보안 이벤트를 조회하고
        분석할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 계정의 로그를 해당 계정 내에만 보관하여 교차 계정 분석 불가</li>
        <li>로그 형식이 서비스마다 달라 통합 분석 도구 적용 어려움</li>
        <li>보안 결과(GuardDuty, Security Hub 등)와 인프라 로그를 별도로 관리</li>
        <li>로그 수집 지연으로 실시간 위협 탐지가 어려운 구조</li>
        <li>중앙 로그 저장소 접근 권한을 과도하게 부여하여 로그 무결성 위협</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>여러 계정에 걸친 공격 시나리오를 단일 인터페이스에서 조사 가능</li>
        <li>표준화된 로그 형식으로 SIEM 도구 및 자동화 분석 효율 향상</li>
        <li>중앙 집중 보관으로 로그 무결성 보호 및 보존 정책 일관 적용</li>
        <li>보안 운영 팀의 가시성 향상 및 탐지·대응 시간 단축</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Organizations에서 전용 로그 아카이브 계정을 생성하고, 모든 계정의 CloudTrail 로그를 이 계정의 S3 버킷으로 집중합니다.</li>
        <li>Amazon Security Lake를 활성화하여 CloudTrail, VPC Flow Logs, Route 53 DNS 로그 등을 OCSF(Open Cybersecurity Schema Framework) 형식으로 표준화합니다.</li>
        <li>AWS Security Hub를 조직 수준에서 활성화하여 GuardDuty, Inspector, Macie 등의 보안 결과를 중앙에서 집계합니다.</li>
        <li>Amazon CloudWatch Logs를 사용하여 애플리케이션 로그를 수집하고, Logs Insights로 분석합니다.</li>
        <li>중앙 로그 버킷은 별도의 로그 아카이브 계정에 생성하고, 운영 계정에서는 쓰기만 가능하고 수정/삭제는 불가하도록 버킷 정책을 설정합니다.</li>
        <li>Amazon Athena 또는 Amazon OpenSearch Service를 사용하여 집계된 로그를 쿼리하고 분석합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Security Lake — 멀티 계정 보안 로그 중앙 집계 및 OCSF 표준화</li>
        <li>AWS Security Hub — 보안 결과 중앙 집계 및 우선순위 관리</li>
        <li>Amazon CloudWatch Logs — 애플리케이션 로그 수집 및 분석</li>
        <li>Amazon S3 — 로그 장기 보관 및 아카이브</li>
        <li>Amazon Athena — S3 로그 대화형 쿼리 분석</li>
      </ul>
      <PageNav />
    </article>
  );
}
