import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function RelResourcesPage() {
  return (
    <article className="doc-content">
      <h1>안정성 — 자원</h1>

      <p>
        안정성 기둥에 대한 추가 학습 자료입니다.
      </p>

      <h2>공식 문서 및 백서</h2>
      <ul>
        <li>
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Well-Architected 안정성 기둥 백서
          </a>
          — 모범 사례에 대한 심층적인 규범적 지침
        </li>
        <li>
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Well-Architected Framework
          </a>
          — 전체 프레임워크 문서
        </li>
      </ul>

      <h2>관련 AWS 서비스</h2>
      <ul>
        <li>AWS Fault Injection Simulator (FIS) — 카오스 엔지니어링 실험</li>
        <li>Amazon CloudWatch — 모니터링 및 관찰성</li>
        <li>AWS Backup — 중앙 집중식 백업 관리</li>
        <li>AWS CloudFormation — 인프라를 코드로 관리</li>
        <li>Amazon Route 53 — 가용성 높은 DNS 서비스</li>
        <li>Elastic Load Balancing — 트래픽 분산</li>
        <li>Amazon RDS Multi-AZ — 고가용성 데이터베이스</li>
      </ul>

      <PageNav />
    </article>
  );
}
