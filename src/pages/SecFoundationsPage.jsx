import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SecFoundationsPage() {
  return (
    <article className="doc-content">
      <h1>보안 — 보안 기반</h1>

      <p>
        보안 기초는 강력한 보안 태세를 유지하기 위한 근본 원칙을 다룹니다.
      </p>

      <h2>AWS 공동 책임 모델</h2>
      <ul>
        <li>
          <strong>AWS 책임:</strong> 클라우드 인프라(하드웨어, 소프트웨어, 네트워킹, 시설)를 보호합니다.
        </li>
        <li>
          <strong>고객 책임:</strong> 클라우드 내에서 운영하는 모든 것(데이터, 플랫폼, 애플리케이션,
          IAM, OS, 네트워크 구성, 방화벽)을 보호합니다.
        </li>
      </ul>

      <h2>AWS 거버넌스 및 규정 준수</h2>
      <ul>
        <li>AWS Artifact를 통해 규정 준수 보고서에 접근하고, AWS Config로 구성 변경을 추적합니다.</li>
        <li>AWS Organizations를 사용해 다중 계정 전략으로 보안 통제를 중앙 집중화합니다.</li>
        <li>AWS Control Tower로 랜딩 존을 구성하고 가드레일을 설정합니다.</li>
      </ul>

      <h2>모범 사례</h2>
      <ul>
        <li><strong>SEC01-BP01:</strong> AWS 계정을 별도로 분리하여 워크로드를 격리합니다.</li>
        <li><strong>SEC01-BP02:</strong> 보안 연락처 정보를 최신 상태로 유지합니다.</li>
        <li><strong>SEC01-BP03:</strong> 보안 팀에게 위협 및 취약점 정보를 제공합니다.</li>
        <li><strong>SEC01-BP04:</strong> AWS 계정 루트 사용자를 보호합니다.</li>
        <li><strong>SEC01-BP05:</strong> 보안 요구사항 및 권고사항을 선제적으로 통제합니다.</li>
        <li><strong>SEC01-BP06:</strong> 자동화된 도구로 정책 및 구성을 검증합니다.</li>
        <li><strong>SEC01-BP07:</strong> 위협 모델을 통해 위험을 식별하고 우선순위를 정합니다.</li>
        <li><strong>SEC01-BP08:</strong> 새로운 보안 서비스와 기능을 정기적으로 평가하고 도입합니다.</li>
      </ul>

      <PageNav />
    </article>
  );
}
