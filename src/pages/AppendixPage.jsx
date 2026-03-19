import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPage() {
  const sections = [
    {
      title: "운영 우수성 (Operational Excellence)",
      path: "/appendix/operational-excellence",
      description:
        "조직, 준비, 운영, 진화를 포함한 운영 우수성에 대한 질문과 모범 사례.",
    },
    {
      title: "보안 (Security)",
      path: "/appendix/security",
      description:
        "자격 증명 및 접근 관리, 탐지, 인프라 보호, 데이터 보호, 인시던트 대응, 애플리케이션 보안을 포함한 보안에 대한 질문과 모범 사례.",
    },
    {
      title: "안정성 (Reliability)",
      path: "/appendix/reliability",
      description:
        "기반, 워크로드 아키텍처, 변경 관리, 실패 관리를 포함한 안정성에 대한 질문과 모범 사례.",
    },
    {
      title: "성능 효율성 (Performance Efficiency)",
      path: "/appendix/performance-efficiency",
      description:
        "아키텍처 선택, 컴퓨팅 및 하드웨어, 데이터 관리, 네트워킹을 포함한 성능 효율성에 대한 질문과 모범 사례.",
    },
    {
      title: "비용 최적화 (Cost Optimization)",
      path: "/appendix/cost-optimization",
      description:
        "클라우드 재무 관리, 지출 인식, 비용 효율적인 리소스, 수요 관리를 포함한 비용 최적화에 대한 질문과 모범 사례.",
    },
    {
      title: "지속 가능성 (Sustainability)",
      path: "/appendix/sustainability",
      description:
        "리전 선택, 수요 조정, 소프트웨어 및 아키텍처, 데이터, 하드웨어, 프로세스를 포함한 지속 가능성에 대한 질문과 모범 사례.",
    },
  ];

  return (
    <article className="doc-content">
      <h1>부록: 질문 및 모범 사례 (Appendix: Questions and Best Practices)</h1>

      <p>
        이 부록에는 AWS Well-Architected Framework의 여섯 가지 기둥 각각에 대한 질문과 모범 사례가 포함되어 있습니다. 이 질문들을 사용하여 아키텍처의 상태를 평가하고 개선 영역을 파악하세요.
      </p>

      <ul>
        {sections.map((s) => (
          <li key={s.path}>
            <strong>
              <Link to={s.path}>{s.title}</Link>
            </strong>{" "}
            — {s.description}
          </li>
        ))}
      </ul>

      <PageNav />
    </article>
  );
}
