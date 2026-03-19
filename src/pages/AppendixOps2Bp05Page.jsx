import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps2Bp05Page() {
  return (
    <article className="doc-content">
      <h1>OPS02-BP05 — 책임 식별 메커니즘 구현</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        리소스나 이슈의 소유자를 빠르게 식별할 수 있는 메커니즘을 구현합니다.
        장애나 보안 사건 발생 시 담당자를 즉시 찾을 수 있어야 대응 속도가 빨라집니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        임의의 리소스에서 담당 팀과 담당자를 30초 이내에 찾을 수 있습니다.
        자동화된 도구를 통해 알람이나 이슈가 올바른 소유자에게 자동 라우팅됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>리소스 소유자를 찾기 위해 여러 사람에게 물어보는 데 시간을 낭비하는 경우</li>
        <li>모니터링 알람이 모든 팀에게 전송되어 "누군가 처리하겠지"라는 상황이 발생하는 경우</li>
        <li>소유권 정보가 여러 곳에 분산되어 일관성이 없는 경우</li>
        <li>팀 변경 후 소유권 데이터베이스 업데이트가 지연되는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 대응 시간 단축으로 서비스 가용성 향상</li>
        <li>보안 사건 대응 속도 향상</li>
        <li>알람 피로 감소로 팀 생산성 향상</li>
        <li>운영 투명성 및 책임성 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS 리소스 태그(Owner, Team)를 기반으로 소유자 조회 자동화를 구현합니다.</li>
        <li>Amazon CloudWatch 알람을 소유자 태그에 따라 적절한 SNS 토픽으로 라우팅합니다.</li>
        <li>서비스 카탈로그 또는 내부 포털에서 리소스-소유자 매핑을 검색할 수 있도록 합니다.</li>
        <li>온콜 관리 도구(PagerDuty 등)와 AWS 태그 정보를 연동합니다.</li>
        <li>정기적으로 소유권 데이터의 정확성을 감사합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Resource Groups — 태그 기반 리소스 그룹 관리</li>
        <li>AWS Systems Manager — 운영 데이터 중앙화</li>
        <li>Amazon SNS — 소유자 기반 알림 라우팅</li>
        <li>AWS Service Catalog — 서비스 및 소유권 카탈로그 관리</li>
      </ul>

      <PageNav />
    </article>
  );
}
