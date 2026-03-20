import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec4Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC04-BP03 — 보안 경보 상관 분석 및 강화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 보안팀의 수동 작업 부담이 증가하고 인시던트 판별 시간이 길어집니다.</p>
      </div>
      <p>
        자동화된 메커니즘이 경보 데이터를 상관 분석하고 추가 정보로 강화합니다. 전처리를 통해 이벤트에 대한 상세한 이해를 제공하여 조사자가 이벤트의 중요도를 판단하고 공식적인 대응이 필요한지 결정하는 데 도움을 줍니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>자동화된 메커니즘이 경보 데이터를 상관 분석하고 추가 정보로 강화</li>
        <li>전처리를 통해 이벤트에 대한 상세한 이해 제공</li>
        <li>조사자가 이벤트 중요도를 판단하고 공식 대응 필요 여부 결정에 도움</li>
        <li>모니터링 및 조사 팀의 부담 감소</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>서로 다른 그룹이 서로 다른 시스템의 결과를 조율 없이 독립적으로 조사(직무 분리가 필요한 경우 제외)</li>
        <li>모든 보안 데이터가 표준 위치로 집계되지만 조사자가 수동으로 상관 분석 및 강화를 수행</li>
        <li>위협 탐지 시스템의 인텔리전스에만 전적으로 의존하여 중요도를 판단</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>조사자의 인지 부하 및 수동 데이터 준비 감소</li>
        <li>이벤트가 인시던트를 나타내는지 판단하는 시간 단축</li>
        <li>정확한 심각도 평가 가능(개별 경보가 시사하는 것보다 높거나 낮을 수 있음)</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>경보 소스(Amazon GuardDuty, AWS Security Hub CSPM, Amazon Macie, Amazon Inspector, AWS Config, IAM Access Analyzer, Network Access Analyzer, Amazon CloudWatch 등)를 파악하고 각 시스템이 자격 증명, 작업 및 리소스를 어떻게 표현하는지 이해하여 상관 관계 매핑을 준비합니다.</li>
        <li>AWS Security Hub CSPM, Amazon EventBridge, Amazon CloudWatch와 같은 서비스를 사용하여 경보 캡처 메커니즘을 구축합니다.</li>
        <li>상관 관계 및 강화 데이터 소스(AWS CloudTrail, VPC Flow Logs, Route 53 Resolver 로그, 인프라 및 애플리케이션 로그, Amazon Security Lake)를 식별합니다.</li>
        <li>Amazon Detective, SIEM 도구 또는 서드파티 솔루션을 활용하거나 AWS Lambda와 Amazon Athena 쿼리를 조합한 맞춤형 솔루션을 구축하여 경보와 강화 소스를 통합하고 상세한 보안 이벤트 컨텍스트를 생성합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Detective — 보안 결과 자동 상관 분석 및 시각화</li>
        <li>Amazon GuardDuty — 위협 탐지</li>
        <li>AWS Security Hub CSPM — 보안 태세 관리</li>
        <li>Amazon Macie — 데이터 탐지 및 보호</li>
        <li>Amazon Inspector — 취약성 관리</li>
        <li>Amazon EventBridge — 보안 경보 자동 라우팅</li>
        <li>AWS Lambda — 경보 강화 자동화</li>
        <li>Amazon Athena — 로그 쿼리 분석</li>
        <li>Amazon Security Lake — 단일 통합 지점으로 로그 집계</li>
      </ul>
      <PageNav />
    </article>
  );
}
