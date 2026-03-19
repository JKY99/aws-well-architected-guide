import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";
import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <article className="doc-content">
      <div className="doc-meta">
        <span className="doc-meta-date">PDF — Publication date: November 6, 2024</span>
        <a
          href="https://docs.aws.amazon.com/wellarchitected/latest/framework/wellarchitected-framework.pdf"
          className="doc-meta-pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
          </svg>
          Download PDF
        </a>
      </div>

      <h1>AWS Well-Architected Framework</h1>

      <p>
        The AWS Well-Architected Framework helps you understand the pros and cons of decisions you make while building systems on AWS. By using the Framework you will learn architectural best practices for designing and operating reliable, secure, efficient, cost-effective, and sustainable systems in the cloud.
      </p>

      <p>
        The AWS Well-Architected Framework is based on six pillars — operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability.
      </p>

      <p>
        By using the Framework, you will be able to learn how to design and operate systems in the cloud by leveraging AWS best practices.
      </p>

      <h2>How to use this guide</h2>

      <p>
        This guide is intended for those in technology roles, such as chief technology officers (CTOs), architects, developers, and operations team members. After reading this paper, you will understand AWS best practices and strategies to use when designing systems for the cloud.
      </p>

      <p>
        It is intended to help provide guidance when building or improving cloud systems. Rather than asking "What should we do?" this framework allows you to measure your architecture against the best practices in the framework and identify areas for improvement. The process for reviewing an architecture is a constructive conversation about architectural decisions, and is not an audit mechanism.
      </p>

      <p>
        There are general design principles, as well as specific best practices and guidance for each pillar. The guidance includes questions about how to apply pillar to your workload, and also best practices, and improvement plans for the areas that need to be addressed.
      </p>

      <div className="doc-note">
        <div className="doc-note-title">Note</div>
        <p>
          The Well-Architected Framework is a work in progress, and we will be adding more content over time. We also will be updating the guidance based on feedback we receive from you and your colleagues.
        </p>
      </div>

      <h2>The six pillars of the AWS Well-Architected Framework</h2>

      <p>
        The AWS Well-Architected Framework describes key concepts, design principles, and architectural best practices for designing and running workloads in the cloud. By answering a few foundational questions, learn how well your architecture aligns with cloud best practices and gain guidance for making improvements.
      </p>

      <div className="pillars-grid">
        {[
          {
            title: "Operational Excellence",
            path: "/pillars/operational-excellence",
            description:
              "The ability to support development and run workloads effectively, gain insight into their operations, and to continuously improve supporting processes and procedures to deliver business value.",
          },
          {
            title: "Security",
            path: "/pillars/security",
            description:
              "The security pillar encompasses the ability to protect data, systems, and assets to take advantage of cloud technologies to improve your security.",
          },
          {
            title: "Reliability",
            path: "/pillars/reliability",
            description:
              "The reliability pillar encompasses the ability of a workload to perform its intended function correctly and consistently when it's expected to.",
          },
          {
            title: "Performance Efficiency",
            path: "/pillars/performance-efficiency",
            description:
              "The ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve.",
          },
          {
            title: "Cost Optimization",
            path: "/pillars/cost-optimization",
            description:
              "The ability to run systems to deliver business value at the lowest price point.",
          },
          {
            title: "Sustainability",
            path: "/pillars/sustainability",
            description:
              "The sustainability pillar focuses on environmental impacts, especially energy consumption and efficiency, since they are important levers for architects to inform direct action to reduce resource usage.",
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
