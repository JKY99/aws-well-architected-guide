import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPage() {
  const sections = [
    {
      title: "Operational Excellence",
      path: "/appendix/operational-excellence",
      description:
        "Questions and best practices for operational excellence including organization, prepare, operate, and evolve.",
    },
    {
      title: "Security",
      path: "/appendix/security",
      description:
        "Questions and best practices for security including identity and access management, detection, infrastructure protection, data protection, incident response, and application security.",
    },
    {
      title: "Reliability",
      path: "/appendix/reliability",
      description:
        "Questions and best practices for reliability including foundations, workload architecture, change management, and failure management.",
    },
    {
      title: "Performance Efficiency",
      path: "/appendix/performance-efficiency",
      description:
        "Questions and best practices for performance efficiency including architecture selection, compute and hardware, data management, and networking.",
    },
    {
      title: "Cost Optimization",
      path: "/appendix/cost-optimization",
      description:
        "Questions and best practices for cost optimization including cloud financial management, expenditure awareness, cost-effective resources, and demand management.",
    },
    {
      title: "Sustainability",
      path: "/appendix/sustainability",
      description:
        "Questions and best practices for sustainability including region selection, alignment to demand, software and architecture, data, hardware, and process.",
    },
  ];

  return (
    <article className="doc-content">
      <h1>Appendix: Questions and best practices</h1>

      <p>
        This appendix contains the questions and best practices for each of the six pillars of the AWS Well-Architected Framework. Use these questions to evaluate the state of your architecture and identify areas for improvement.
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
