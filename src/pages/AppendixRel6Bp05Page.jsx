import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP05 — 로그 분석</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        로그 파일 및 메트릭 이력을 수집하고 분석하여 광범위한 추세와 워크로드 인사이트를 도출하고
        신뢰성 및 운영 가시성을 개선합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        로그 파일 및 메트릭 이력을 수집하고 분석하여 광범위한 추세와 워크로드 인사이트를 통해
        신뢰성 및 운영 가시성을 개선합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>추세 분석 없이 로그를 수집만 함</li>
        <li>로그 보존 정책을 구현하지 않음</li>
        <li>수명 주기 관리 없이 모든 로그를 무기한 저장</li>
        <li>집계 없이 서로 다른 로깅 솔루션 사용</li>
        <li>데이터 관리 및 보존 요구사항 무시</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드 리소스 전반에 걸친 광범위한 추세 식별</li>
        <li>더 깊은 워크로드 인사이트와 운영 가시성</li>
        <li>계층형 스토리지 전략을 통한 비용 최적화</li>
        <li>대규모 데이터 세트에 대한 페타바이트 규모 분석 기능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>CloudWatch Logs Insights를 사용하여 간단하면서도 강력한 쿼리 언어로 인터랙티브 로그 분석 수행</li>
        <li>S3와 Amazon Athena 통합: CloudWatch Logs 구독을 구성하여 S3로 데이터를 흐르게 하고, Athena를 사용하여 S3에 저장된 로그 쿼리</li>
        <li>S3 수명 주기 정책을 생성하여 주기적으로 로그 파일을 제거하여 쿼리 비용 절감</li>
        <li>대규모 분석이 필요한 경우 Amazon EMR 클러스터를 실행하여 페타바이트 규모 로그 분석</li>
        <li>데이터 관리 및 수명 주기 정책 적용: S3 버킷 수준에서 수명 주기 정책 적용, 장기 스토리지를 위해 Amazon Glacier로 데이터 전환, S3 Intelligent-Tiering으로 자동 비용 최적화</li>
        <li>필요에 따라 서드파티 도구(New Relic, Splunk, Loggly 등) 통합</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch Logs Insights (로그 쿼리 및 분석)</li>
        <li>Amazon CloudWatch Logs (로그 수집 및 구독)</li>
        <li>Amazon S3 (수명 주기 관리와 함께 로그 저장)</li>
        <li>Amazon Athena (S3에 저장된 로그 쿼리)</li>
        <li>Amazon EMR (대규모 로그 분석)</li>
        <li>Amazon S3 Glacier (장기 로그 아카이브 스토리지)</li>
      </ul>
      <PageNav />
    </article>
  );
}
