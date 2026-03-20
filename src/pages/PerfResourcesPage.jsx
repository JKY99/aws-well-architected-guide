import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function PerfResourcesPage() {
  return (
    <article className="doc-content">
      <h1>성능 효율성 — 자원</h1>

      <p>
        성능 효율성 기둥에 대한 추가 학습 자료입니다.
      </p>

      <h2>공식 문서 및 백서</h2>
      <ul>
        <li>
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Well-Architected 성능 효율성 기둥 백서
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
        <li>Amazon CloudWatch — 모니터링 및 관찰성</li>
        <li>AWS X-Ray — 분산 추적</li>
        <li>Amazon CloudFront — 글로벌 콘텐츠 배포</li>
        <li>AWS Auto Scaling — 수요에 따른 자동 확장</li>
        <li>Amazon ElastiCache — 인메모리 캐싱</li>
        <li>AWS Compute Optimizer — 최적 컴퓨팅 리소스 추천</li>
        <li>Amazon RDS Read Replicas — 읽기 성능 향상</li>
      </ul>

      <PageNav />
    </article>
  );
}
