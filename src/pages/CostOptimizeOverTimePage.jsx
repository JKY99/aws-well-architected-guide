import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function CostOptimizeOverTimePage() {
  return (
    <article className="doc-content">
      <h1>비용 최적화 — 시간 경과에 따른 최적화</h1>

      <p>
        AWS는 지속적으로 새로운 서비스와 기능을 출시하므로,
        기존 아키텍처 결정사항이 여전히 비용 효율적인지 주기적으로 검토하는 것이 모범 사례입니다.
        더 이상 필요하지 않은 리소스, 컴포넌트, 워크로드는 적극적으로 폐기해야 합니다.
      </p>

      <h2>핵심 권고사항</h2>
      <ul>
        <li>클라우드 운영 비용 대비 효과 평가</li>
        <li>시간 소모적인 클라우드 운영을 검토하고 자동화하여 인력 비용 절감</li>
        <li>AWS CLI, AWS SDK 등 관련 도구 채택</li>
      </ul>

      <h2>2가지 주요 주제</h2>

      <h3>1. 정기적 워크로드 검토 프로세스 정의</h3>
      <p>
        정기적으로 워크로드를 검토하여 새로운 AWS 서비스나 기능이 비용을 절감할 수 있는지 평가합니다.
        Well-Architected 리뷰를 통해 비용 최적화 기회를 체계적으로 발굴합니다.
      </p>

      <h3>2. 운영 자동화</h3>
      <p>
        반복적인 운영 작업을 자동화하여 인력 비용을 절감하고 오류를 줄입니다.
        AWS Systems Manager, AWS Lambda 등을 활용하여 운영을 자동화합니다.
      </p>

      <PageNav />
    </article>
  );
}
