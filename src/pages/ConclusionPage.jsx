import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function ConclusionPage() {
  return (
    <article className="doc-content">
      <h1>Conclusion</h1>

      <p>
        The AWS Well-Architected Framework provides architectural best practices across the six pillars for designing and operating reliable, secure, efficient, cost-effective, and sustainable systems in the cloud. The Framework provides a set of questions that allows you to review an existing or proposed architecture, and a set of AWS best practices for each pillar. Using the Framework in your architecture will help you produce stable and efficient systems, which allow you to focus on your functional requirements.
      </p>

      <p>
        This paper is intended to provide guidance when building or improving cloud systems. Rather than asking "What should we do?" the Framework allows you to measure your architecture against the best practices in the framework and identify areas for improvement. The process for reviewing an architecture is a constructive conversation about architectural decisions, and is not an audit mechanism.
      </p>

      <p>
        We encourage you to use the Well-Architected Framework as you build and evolve your systems. We also encourage you to use the AWS Well-Architected Tool, which is a free tool in the AWS Management Console, to help you review the state of your workloads and compare them to the latest AWS architectural best practices.
      </p>

      <p>
        As this Framework continues to evolve, we will update the guidance based on feedback we receive from customers and partners. We look forward to hearing how you use this Framework and how we can make it better.
      </p>

      <PageNav />
    </article>
  );
}
