import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";
import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <article className="doc-content">
      <div className="doc-meta">
        <span className="doc-meta-date">PDF — 발행일: 2024년 11월 6일</span>
        <a
          href="https://docs.aws.amazon.com/wellarchitected/latest/framework/wellarchitected-framework.pdf"
          className="doc-meta-pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
          </svg>
          PDF 다운로드
        </a>
      </div>

      <h1>AWS Well-Architected Framework</h1>

      <p>
        AWS Well-Architected Framework는 AWS에서 시스템을 구축할 때 내리는 의사결정의 장단점을 이해할 수 있도록 돕습니다. 이 Framework를 활용하면 클라우드에서 신뢰할 수 있고, 안전하며, 효율적이고, 비용 효율적이며, 지속 가능한 시스템을 설계하고 운영하기 위한 아키텍처 모범 사례를 배울 수 있습니다.
      </p>

      <p>
        AWS Well-Architected Framework는 여섯 가지 기둥(Pillar)을 기반으로 합니다. 운영 우수성(Operational Excellence), 보안(Security), 안정성(Reliability), 성능 효율성(Performance Efficiency), 비용 최적화(Cost Optimization), 그리고 지속 가능성(Sustainability)입니다.
      </p>

      <p>
        이 Framework를 사용하면 AWS 모범 사례를 활용하여 클라우드에서 시스템을 설계하고 운영하는 방법을 배울 수 있습니다.
      </p>

      <h2>이 가이드의 활용 방법</h2>

      <p>
        이 가이드는 최고기술책임자(CTO), 아키텍트, 개발자, 운영팀 구성원 등 기술 역할을 담당하는 분들을 위해 작성되었습니다. 이 문서를 읽고 나면 클라우드용 시스템을 설계할 때 활용할 수 있는 AWS 모범 사례와 전략을 이해하게 됩니다.
      </p>

      <p>
        이 가이드는 클라우드 시스템을 구축하거나 개선할 때 지침을 제공하기 위한 것입니다. "무엇을 해야 하는가?"라고 묻는 대신, 이 Framework를 통해 자신의 아키텍처를 모범 사례와 비교 측정하고 개선이 필요한 영역을 파악할 수 있습니다. 아키텍처를 검토하는 과정은 아키텍처 결정에 관한 건설적인 대화이며, 감사(audit) 메커니즘이 아닙니다.
      </p>

      <p>
        각 기둥에 대한 일반적인 설계 원칙과 구체적인 모범 사례 및 지침이 포함되어 있습니다. 지침에는 워크로드에 각 기둥을 적용하는 방법에 관한 질문과 모범 사례, 그리고 해결이 필요한 영역에 대한 개선 계획이 포함됩니다.
      </p>

      <div className="doc-note">
        <div className="doc-note-title">참고</div>
        <p>
          Well-Architected Framework는 지속적으로 발전하고 있으며, 앞으로 더 많은 콘텐츠가 추가될 예정입니다. 또한 여러분과 동료들로부터 받은 피드백을 바탕으로 지침을 지속적으로 업데이트할 것입니다.
        </p>
      </div>

      <h2>AWS Well-Architected Framework의 여섯 가지 기둥</h2>

      <p>
        AWS Well-Architected Framework는 클라우드에서 워크로드를 설계하고 실행하기 위한 핵심 개념, 설계 원칙, 아키텍처 모범 사례를 설명합니다. 몇 가지 기본 질문에 답함으로써 자신의 아키텍처가 클라우드 모범 사례와 얼마나 잘 부합하는지 파악하고, 개선을 위한 지침을 얻을 수 있습니다.
      </p>

      <div className="pillars-grid">
        {[
          {
            title: "운영 우수성 (Operational Excellence)",
            path: "/pillars/operational-excellence",
            description:
              "개발을 지원하고 워크로드를 효과적으로 실행하며, 운영에 대한 통찰력을 확보하고, 비즈니스 가치를 제공하기 위해 지원 프로세스와 절차를 지속적으로 개선하는 능력.",
          },
          {
            title: "보안 (Security)",
            path: "/pillars/security",
            description:
              "클라우드 기술을 활용하여 보안을 향상시키고 데이터, 시스템, 자산을 보호하는 능력.",
          },
          {
            title: "안정성 (Reliability)",
            path: "/pillars/reliability",
            description:
              "워크로드가 예상된 시점에 의도한 기능을 올바르고 일관되게 수행하는 능력. 전체 수명 주기 동안 워크로드를 운영하고 테스트하는 능력 포함.",
          },
          {
            title: "성능 효율성 (Performance Efficiency)",
            path: "/pillars/performance-efficiency",
            description:
              "시스템 요구사항을 충족하기 위해 컴퓨팅 리소스를 효율적으로 사용하고, 수요 변화와 기술 진화에 따라 그 효율성을 유지하는 능력.",
          },
          {
            title: "비용 최적화 (Cost Optimization)",
            path: "/pillars/cost-optimization",
            description:
              "최저 비용으로 비즈니스 가치를 제공하는 시스템을 운영하는 능력.",
          },
          {
            title: "지속 가능성 (Sustainability)",
            path: "/pillars/sustainability",
            description:
              "지속 가능성 기둥은 환경적 영향, 특히 에너지 소비와 효율성에 초점을 맞춥니다. 아키텍트가 리소스 사용량을 줄이기 위한 직접적인 조치를 취할 수 있도록 중요한 레버 역할을 합니다.",
          },
        ].map((pillar) => (
          <div key={pillar.path} className="pillar-card">
            <h3 className="pillar-card-title">
              <Link to={pillar.path}>{pillar.title}</Link>
            </h3>
            <p className="pillar-card-desc">{pillar.description}</p>
          </div>
        ))}
      </div>

      <PageNav />
    </article>
  );
}
