import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function ConclusionPage() {
  return (
    <article className="doc-content">
      <h1>결론 (Conclusion)</h1>

      <p>
        AWS Well-Architected Framework는 클라우드에서 신뢰할 수 있고, 안전하며, 효율적이고, 비용 효율적이며, 지속 가능한 시스템을 설계하고 운영하기 위한 여섯 가지 기둥에 걸친 아키텍처 모범 사례를 제공합니다. 이 Framework는 기존 또는 제안된 아키텍처를 검토하는 질문 세트와 각 기둥에 대한 AWS 모범 사례를 제공합니다.
      </p>

      <p>
        이 문서는 클라우드 시스템을 구축하거나 개선할 때 지침을 제공하기 위한 것입니다. "무엇을 해야 하는가?"라고 묻는 대신, 이 Framework를 통해 자신의 아키텍처를 모범 사례와 비교 측정하고 개선이 필요한 영역을 파악할 수 있습니다. 아키텍처를 검토하는 과정은 아키텍처 결정에 관한 건설적인 대화이며, 감사 메커니즘이 아닙니다.
      </p>

      <p>
        시스템을 구축하고 발전시키면서 Well-Architected Framework를 활용하시기를 권장합니다. 또한 AWS Management Console의 무료 도구인 AWS Well-Architected Tool을 사용하여 워크로드의 상태를 검토하고 최신 AWS 아키텍처 모범 사례와 비교하시기를 권장합니다.
      </p>

      <p>
        이 Framework가 계속 발전함에 따라, 고객과 파트너로부터 받은 피드백을 바탕으로 지침을 업데이트할 것입니다. 여러분이 이 Framework를 어떻게 활용하는지, 그리고 어떻게 더 개선할 수 있는지 들을 수 있기를 기대합니다.
      </p>

      <PageNav />
    </article>
  );
}
