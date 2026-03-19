import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function FurtherReadingPage() {
  return (
    <article className="doc-content">
      <h1>추가 참고 자료 (Further Reading)</h1>

      <p>
        다음 리소스는 이 문서에서 다루는 주제에 대한 추가 정보를 제공합니다.
      </p>

      <h2>AWS 리소스</h2>

      <ul>
        <li>
          <a href="https://aws.amazon.com/architecture/" target="_blank" rel="noopener noreferrer">
            AWS 아키텍처 센터 (AWS Architecture Center)
          </a>
        </li>
        <li>
          <a href="https://aws.amazon.com/compliance/" target="_blank" rel="noopener noreferrer">
            AWS 클라우드 컴플라이언스 (AWS Cloud Compliance)
          </a>
        </li>
        <li>
          <a href="https://aws.amazon.com/well-architected-tool/" target="_blank" rel="noopener noreferrer">
            AWS Well-Architected Tool
          </a>
        </li>
        <li>
          <a href="https://www.wellarchitectedlabs.com/" target="_blank" rel="noopener noreferrer">
            AWS Well-Architected Labs
          </a>
        </li>
      </ul>

      <h2>기둥별 백서</h2>

      <ul>
        <li>
          <a href="https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html" target="_blank" rel="noopener noreferrer">
            운영 우수성 기둥 (Operational Excellence Pillar)
          </a>
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html" target="_blank" rel="noopener noreferrer">
            보안 기둥 (Security Pillar)
          </a>
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html" target="_blank" rel="noopener noreferrer">
            안정성 기둥 (Reliability Pillar)
          </a>
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html" target="_blank" rel="noopener noreferrer">
            성능 효율성 기둥 (Performance Efficiency Pillar)
          </a>
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html" target="_blank" rel="noopener noreferrer">
            비용 최적화 기둥 (Cost Optimization Pillar)
          </a>
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html" target="_blank" rel="noopener noreferrer">
            지속 가능성 기둥 (Sustainability Pillar)
          </a>
        </li>
      </ul>

      <h2>추가 자료</h2>

      <ul>
        <li>
          <a href="https://aws.amazon.com/builders-library/" target="_blank" rel="noopener noreferrer">
            Amazon Builders' Library
          </a>
          {" "}— Amazon이 소프트웨어를 구축하고 운영하는 방법
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/" target="_blank" rel="noopener noreferrer">
            AWS 문서 (AWS Documentation)
          </a>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
