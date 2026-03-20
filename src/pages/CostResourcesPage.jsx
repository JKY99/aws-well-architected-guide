import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function CostResourcesPage() {
  return (
    <article className="doc-content">
      <h1>비용 최적화 — 자원</h1>

      <p>
        비용 최적화 기둥에 대한 추가 학습 자료입니다.
      </p>

      <h2>공식 문서 및 백서</h2>
      <ul>
        <li>
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Well-Architected 비용 최적화 기둥 백서
          </a>
          — 모범 사례에 대한 심층적인 규범적 지침
        </li>
        <li>
          <a
            href="https://aws.amazon.com/aws-cost-management/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Cost Management
          </a>
          — AWS 비용 관리 도구 모음
        </li>
      </ul>

      <h2>관련 AWS 서비스</h2>
      <ul>
        <li>AWS Cost Explorer — 비용 시각화 및 분석</li>
        <li>AWS Budgets — 예산 설정 및 알림</li>
        <li>AWS Cost Anomaly Detection — 이상 지출 감지</li>
        <li>AWS Compute Optimizer — 최적 리소스 크기 추천</li>
        <li>AWS Trusted Advisor — 비용 절감 기회 식별</li>
        <li>AWS Savings Plans — 유연한 가격 모델</li>
        <li>AWS Cost and Usage Report — 상세 사용량 보고</li>
      </ul>

      <PageNav />
    </article>
  );
}
