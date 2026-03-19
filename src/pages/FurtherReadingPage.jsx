import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function FurtherReadingPage() {
  return (
    <article className="doc-content">
      <h1>Further reading</h1>

      <p>
        The following resources provide additional information about the topics covered in this document.
      </p>

      <h2>AWS resources</h2>

      <ul>
        <li>
          <a href="https://aws.amazon.com/architecture/" target="_blank" rel="noopener noreferrer">
            AWS Architecture Center
          </a>
        </li>
        <li>
          <a href="https://aws.amazon.com/compliance/" target="_blank" rel="noopener noreferrer">
            AWS Cloud Compliance
          </a>
        </li>
        <li>
          <a href="https://aws.amazon.com/console/resources/aws-well-architected-tool/" target="_blank" rel="noopener noreferrer">
            AWS Well-Architected Tool
          </a>
        </li>
        <li>
          <a href="https://www.wellarchitectedlabs.com/" target="_blank" rel="noopener noreferrer">
            AWS Well-Architected Labs
          </a>
        </li>
      </ul>

      <h2>Pillar whitepapers</h2>

      <ul>
        <li>
          <a href="https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html" target="_blank" rel="noopener noreferrer">
            Operational Excellence Pillar
          </a>
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html" target="_blank" rel="noopener noreferrer">
            Security Pillar
          </a>
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html" target="_blank" rel="noopener noreferrer">
            Reliability Pillar
          </a>
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html" target="_blank" rel="noopener noreferrer">
            Performance Efficiency Pillar
          </a>
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html" target="_blank" rel="noopener noreferrer">
            Cost Optimization Pillar
          </a>
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html" target="_blank" rel="noopener noreferrer">
            Sustainability Pillar
          </a>
        </li>
      </ul>

      <h2>Additional resources</h2>

      <ul>
        <li>
          <a href="https://aws.amazon.com/builders-library/" target="_blank" rel="noopener noreferrer">
            Amazon Builders' Library
          </a>
          {" "}— How Amazon builds and operates software
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/" target="_blank" rel="noopener noreferrer">
            AWS Documentation
          </a>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
