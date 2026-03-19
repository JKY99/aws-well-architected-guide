import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp06Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP06 — 설계 표준 공유</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        아키텍처 패턴, 코딩 표준, 보안 기준선을 팀 간에 공유하고 재사용합니다.
        표준화된 설계 패턴은 일관성을 높이고 개별 팀이 공통 문제를 중복 해결하는 시간을 줄입니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        검증된 아키텍처 패턴과 서비스 청사진이 내부 카탈로그로 관리됩니다.
        새 서비스나 기능을 개발할 때 기존 표준 패턴을 재사용합니다.
        보안, 모니터링, 로깅 등의 공통 구성요소가 중앙에서 관리되고 팀에 배포됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 팀이 독립적으로 동일한 문제를 해결하여 중복 개발이 발생하는 경우</li>
        <li>팀마다 다른 로깅, 모니터링 구현을 사용하여 운영 복잡성이 증가하는 경우</li>
        <li>표준 패턴이 있지만 팀에 공유되지 않아 활용되지 않는 경우</li>
        <li>오래된 표준을 유지하여 기술 부채가 공식화되는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>공통 구성요소 재사용으로 개발 속도 향상</li>
        <li>조직 전반의 일관된 품질 및 보안 기준 적용</li>
        <li>운영 복잡성 감소로 운영 효율성 향상</li>
        <li>조직 지식의 체계적 축적 및 공유</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS Service Catalog로 승인된 서비스 청사진(blueprint)을 팀에 제공합니다.</li>
        <li>AWS CloudFormation 모듈로 재사용 가능한 인프라 구성요소를 정의합니다.</li>
        <li>내부 기술 표준 문서를 작성하고 팀 위키에 게시합니다.</li>
        <li>아키텍처 검토 위원회(Architecture Review Board)를 운영하여 표준을 정의하고 유지합니다.</li>
        <li>표준 모니터링, 보안 구성요소를 라이브러리로 만들어 팀이 쉽게 채택할 수 있도록 합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Service Catalog — 승인된 서비스 청사진 배포</li>
        <li>AWS CloudFormation Registry — 재사용 가능한 CloudFormation 모듈 관리</li>
        <li>AWS CDK Constructs Library — 재사용 가능한 인프라 구성요소</li>
        <li>AWS Landing Zone — 표준화된 AWS 계정 설정 자동화</li>
      </ul>

      <PageNav />
    </article>
  );
}
