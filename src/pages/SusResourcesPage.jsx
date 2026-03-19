import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SusResourcesPage() {
  return (
    <article className="doc-content">
      <h1>지속 가능성 — 자원</h1>

      <p>
        지속 가능성 기둥에 대한 추가 학습 자료입니다.
      </p>

      <h2>공식 문서 및 백서</h2>
      <ul>
        <li>
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Well-Architected 지속 가능성 기둥 백서
          </a>
          — 모범 사례에 대한 심층적인 규범적 지침
        </li>
        <li>
          <a
            href="https://sustainability.aboutamazon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon 지속 가능성
          </a>
          — Amazon의 지속 가능성 이니셔티브 및 목표
        </li>
      </ul>

      <h2>관련 AWS 서비스</h2>
      <ul>
        <li>AWS Customer Carbon Footprint Tool — 탄소 발자국 추적 및 보고</li>
        <li>AWS Graviton — 에너지 효율적인 ARM 기반 프로세서</li>
        <li>AWS Compute Optimizer — 최적 리소스 크기 추천</li>
        <li>Amazon S3 Intelligent-Tiering — 자동 스토리지 계층 최적화</li>
        <li>AWS Instance Scheduler — 비활성 기간 리소스 자동 종료</li>
        <li>AWS Lambda — 서버리스 이벤트 기반 컴퓨팅</li>
        <li>AWS Fargate — 서버리스 컨테이너 실행</li>
      </ul>

      <h2>외부 리소스</h2>
      <ul>
        <li>
          <a
            href="https://greensoftware.foundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Green Software Foundation
          </a>
          — 지속 가능한 소프트웨어 개발 표준 및 모범 사례
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
