import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP05 — 로그 분석</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 장애 원인 파악이 어려워 MTTR이 증가하고, 반복적인 장애가 발생할 수 있습니다.</p>
      </div>
      <p>
        로그는 장애 진단과 성능 개선에 필수적인 정보를 제공합니다.
        로그를 중앙에 수집하고 분석 도구를 활용하여 이상 패턴을 조기에 감지하고,
        장애 발생 시 빠른 근본 원인 분석(RCA)을 수행합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 워크로드 구성 요소의 로그가 중앙 저장소에 수집되고, 구조화된 로그 형식으로
        쉽게 검색 및 분석할 수 있습니다. 이상 패턴이 감지되면 자동으로 경보가 발생합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>로그를 각 서버의 로컬 파일 시스템에만 저장하여 서버 장애 시 로그가 손실되는 경우</li>
        <li>비구조화된 텍스트 형식으로 로그를 작성하여 검색 및 분석이 어려운 경우</li>
        <li>로그 보존 기간을 설정하지 않아 불필요한 스토리지 비용이 발생하는 경우</li>
        <li>중요한 비즈니스 이벤트나 에러를 로그에 기록하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 발생 시 빠른 근본 원인 분석(RCA)으로 MTTR 단축</li>
        <li>이상 패턴 조기 감지를 통한 사전 장애 예방</li>
        <li>감사(Audit) 및 규정 준수를 위한 로그 증거 확보</li>
        <li>성능 병목 지점 식별 및 최적화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch Logs를 사용하여 EC2, ECS, Lambda, API Gateway 등의 로그를 중앙에 수집합니다.</li>
        <li>JSON 형식의 구조화된 로그를 작성하여 CloudWatch Logs Insights로 쉽게 쿼리할 수 있도록 합니다.</li>
        <li>CloudWatch Logs Insights를 사용하여 에러 패턴, 응답 시간 분포 등을 분석합니다.</li>
        <li>대규모 로그 분석이 필요한 경우 Amazon OpenSearch Service 또는 Amazon Athena를 사용합니다.</li>
        <li>CloudWatch Logs 메트릭 필터를 설정하여 특정 로그 패턴이 나타날 때 경보를 발생시킵니다.</li>
        <li>AWS CloudTrail을 활성화하여 API 호출 이력을 기록하고 보안 이벤트를 추적합니다.</li>
        <li>로그 보존 기간을 비즈니스 요구사항 및 규정에 맞게 설정합니다 (기본값 무한 보존 주의).</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch Logs — 로그 수집, 저장, 검색</li>
        <li>CloudWatch Logs Insights — 로그 쿼리 및 분석</li>
        <li>Amazon OpenSearch Service — 대규모 로그 분석 및 시각화</li>
        <li>Amazon Athena — S3에 저장된 로그 SQL 쿼리 분석</li>
        <li>AWS CloudTrail — AWS API 호출 이력 기록</li>
      </ul>
      <PageNav />
    </article>
  );
}
