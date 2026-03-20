import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function OEResourcesPage() {
  return (
    <article className="doc-content">
      <h1>운영 우수성 — 자원</h1>

      <p>
        운영 우수성 기둥에 대한 추가 학습 자료입니다.
      </p>

      <h2>공식 문서 및 백서</h2>
      <ul>
        <li>
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Well-Architected 운영 우수성 기둥 백서
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
        <li>AWS CloudFormation — 인프라를 코드로 관리</li>
        <li>AWS Systems Manager — 운영 자동화 및 구성 관리</li>
        <li>Amazon CloudWatch — 모니터링 및 관찰성</li>
        <li>AWS X-Ray — 분산 추적</li>
        <li>AWS CodePipeline / CodeDeploy — CI/CD 파이프라인</li>
        <li>AWS Organizations — 다중 계정 관리</li>
        <li>AWS Well-Architected Tool — 아키텍처 검토 도구</li>
      </ul>

      <PageNav />
    </article>
  );
}
