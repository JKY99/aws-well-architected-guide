import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function ReviewProcessPage() {
  return (
    <article className="doc-content">
      <h1>The review process</h1>

      <p>
        The review process is not meant to be a single "gate" review that you go through at the end of your project, but rather a continuous approach integrated into the lifecycle of your workload. A Well-Architected review should be used throughout the lifecycle of your workload as an ongoing process rather than a one-time event.
      </p>

      <h2>How to approach a Well-Architected review</h2>

      <p>
        We recommend that you approach a Well-Architected review in a blame-free, blameless manner. The review is not meant to uncover failures or to assign blame, but to identify areas for improvement. The goal is to make sure that your team is delivering business value and to identify any risks that might prevent them from doing so.
      </p>

      <p>
        The review process is a constructive conversation about architectural decisions, and is not an audit mechanism. It is important to note that the review is not a pass/fail process. Instead, it is a conversation that helps you understand the trade-offs you have made, and gives you the information you need to make informed decisions about your architecture.
      </p>

      <h2>Continuous reviews</h2>

      <p>
        Rather than a formal review meeting, we recommend that team members regularly use the Well-Architected Framework as a guide when they are making architectural decisions. This allows you to integrate the review process into the day-to-day operations of your team, rather than it being a separate activity.
      </p>

      <p>
        As your architecture evolves, regularly update your answers to reflect the current state of your architecture. This will help you track your progress and identify new areas for improvement.
      </p>

      <h2>When to perform a review</h2>

      <p>
        We recommend performing a Well-Architected review at the following points:
      </p>

      <ul>
        <li>Early in the design process, before you make any one-way decisions</li>
        <li>At major milestones in the product lifecycle</li>
        <li>Before launch, when you are about to go live</li>
        <li>After you go live, as you continue to make architectural changes</li>
      </ul>

      <h2>Preparing for a review</h2>

      <p>
        You should have the following materials available for a Well-Architected review:
      </p>

      <ul>
        <li>A room with a whiteboard</li>
        <li>An architecture diagram of the workload you are reviewing</li>
        <li>Design notes and any other documentation about the workload</li>
        <li>A list of questions that you have about the workload that need further investigation</li>
      </ul>

      <h2>Overcoming team resistance</h2>

      <p>
        You might encounter resistance from your team when you first start doing Well-Architected reviews. Here are some common objections and how to address them:
      </p>

      <ul>
        <li>
          <strong>We don't have time for this:</strong> Doing a review early in the process can reduce the risk of costly architectural changes later. A short review now can save significant time later.
        </li>
        <li>
          <strong>We don't have time to deal with the results:</strong> Consider using a playbook approach where you write down the issues you find and create a plan to address them over time. This allows you to continue making progress without being blocked by the results of the review.
        </li>
        <li>
          <strong>We don't want to expose our technology choices:</strong> The Well-Architected questions are about best practices, not about specific technology choices. You can answer the questions without revealing proprietary information about your technology choices.
        </li>
      </ul>

      <h2>Organizational benefits</h2>

      <p>
        When you do reviews across multiple teams, you can identify common themes and issues that affect multiple workloads. This allows you to create common training programs and improvements that benefit the entire organization. It also allows you to identify systemic issues that might affect multiple workloads.
      </p>

      <PageNav />
    </article>
  );
}
