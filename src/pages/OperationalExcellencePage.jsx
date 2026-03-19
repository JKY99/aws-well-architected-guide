import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function OperationalExcellencePage() {
  return (
    <article className="doc-content">
      <h1>Operational Excellence</h1>

      <p>
        The operational excellence pillar includes the ability to support development and run workloads effectively, gain insight into their operations, and to continuously improve supporting processes and procedures to deliver business value.
      </p>

      <p>
        This pillar is a commitment to building software correctly while consistently delivering a great customer experience. It contains best practices for organizing your teams, designing your workload, operating it at scale, and evolving it over time.
      </p>

      <h2>Design principles</h2>

      <p>
        There are five design principles for operational excellence in the cloud:
      </p>

      <ul>
        <li>
          <strong>Perform operations as code:</strong> In the cloud, you can apply the same engineering discipline that you use for application code to your entire environment. You can define your entire workload (applications, infrastructure, etc.) as code and update it with code. You can script your operations procedures and automate their execution by triggering them in response to events. By performing operations as code, you limit human error and enable consistent responses to events.
        </li>
        <li>
          <strong>Make frequent, small, reversible changes:</strong> Design workloads to allow components to be updated regularly. Make changes in small increments that can be reversed if they fail (without affecting customers when possible). This allows you to apply regular small improvements and avoid the risk of large, irreversible changes.
        </li>
        <li>
          <strong>Refine operations procedures frequently:</strong> As you use operations procedures, look for opportunities to improve them. As you evolve your workload, evolve your procedures appropriately. Set up regular game days to review and validate that all procedures are effective and that teams are familiar with them.
        </li>
        <li>
          <strong>Anticipate failure:</strong> Perform "pre-mortem" exercises to identify potential sources of failure so that they can be removed or mitigated. Test your failure scenarios and validate your understanding of their impact. Test your response procedures to ensure that they are effective, and that teams are familiar with their execution. Set up regular game days to test workloads and team responses to simulated events.
        </li>
        <li>
          <strong>Learn from all operational failures:</strong> Drive improvement through lessons learned from all operational events and failures. Share what is learned across teams and through the entire organization.
        </li>
      </ul>

      <h2>Definition</h2>

      <p>
        There are four best practice areas for operational excellence in the cloud:
      </p>

      <ul>
        <li>Organization</li>
        <li>Prepare</li>
        <li>Operate</li>
        <li>Evolve</li>
      </ul>

      <p>
        Your organization's leadership defines business objectives. Your organization must understand requirements and priorities and use these to organize and conduct work to support the achievement of business outcomes. Your workload must emit the information necessary to support it. Implementing services to enable integration, deployment, and delivery of your workload will enable you to provide rapid feedback on your efforts to improve operational outcomes. Adopting approaches that improve flow of changes into production and that help refactoring, fast feedback on quality, and bug fixing will positively impact your organization's performance.
      </p>

      <h2>Best practices</h2>

      <h3>Organization</h3>
      <p>
        Your teams need to have a shared understanding of your entire workload, their role in it, and shared business goals to set the priorities that will enable business success. Well-defined priorities will enable you to make trade-offs as you design, manage, and improve your workload.
      </p>

      <h3>Prepare</h3>
      <p>
        To prepare for operational excellence, you have to understand your workloads and their expected behaviors. You will then be able to design them to provide insight to their status and build the procedures to support them.
      </p>

      <h3>Operate</h3>
      <p>
        Successful operation of a workload is measured by the achievement of business and customer outcomes. Define expected outcomes, determine how success will be measured, and identify the workload and operations metrics that will be used in those calculations to determine if operations are successful.
      </p>

      <h3>Evolve</h3>
      <p>
        You must learn, share, and continuously improve to sustain operational excellence. Dedicate work cycles to making continuous incremental improvements. Include feedback loops within your procedures to rapidly identify areas for improvement and capture learnings from the execution of operations.
      </p>

      <div className="doc-note">
        <div className="doc-note-title">Note</div>
        <p>
          For prescriptive implementation guidance, see the{" "}
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Operational Excellence Pillar whitepaper
          </a>.
        </p>
      </div>

      <PageNav />
    </article>
  );
}
