import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function ReliabilityPage() {
  return (
    <article className="doc-content">
      <h1>Reliability</h1>

      <p>
        The reliability pillar encompasses the ability of a workload to perform its intended function correctly and consistently when it's expected to. This includes the ability to operate and test the workload through its total lifecycle. This paper provides in-depth, best practice guidance for implementing reliable workloads on AWS.
      </p>

      <h2>Design principles</h2>

      <p>
        There are five design principles for reliability in the cloud:
      </p>

      <ul>
        <li>
          <strong>Automatically recover from failure:</strong> By monitoring a workload for key performance indicators (KPIs), you can trigger automation when a threshold is breached. This allows for automatic notification and tracking of failures, and for automated recovery processes that work around or repair the failure. With more sophisticated automation, it's possible to anticipate and remediate failures before they occur.
        </li>
        <li>
          <strong>Test recovery procedures:</strong> In an on-premises environment, testing is often conducted to prove that the workload works in a particular scenario. Testing is not typically used to validate recovery strategies. In the cloud, you can test how your workload fails, and you can validate your recovery procedures. You can use automation to simulate different failures or to recreate scenarios that led to failures before. This approach exposes failure pathways that you can test and fix before a real failure scenario occurs, reducing the risk that scenarios replicate in production.
        </li>
        <li>
          <strong>Scale horizontally to increase aggregate workload availability:</strong> Replace one large resource with multiple small resources to reduce the impact of a single failure on the overall workload. Distribute requests across multiple, smaller resources to ensure that they don't share a common point of failure.
        </li>
        <li>
          <strong>Stop guessing capacity:</strong> A common cause of failure in on-premises workloads is resource saturation, when the demands placed on a workload exceed the capacity of that workload (this is often the objective of denial of service attacks). In the cloud, you can monitor demand and workload utilization, and automate the addition or removal of resources to maintain the optimal level to satisfy demand without over- or under-provisioning. There are still limits, but some quotas can be controlled and others can be managed (see Manage Service Quotas and Constraints).
        </li>
        <li>
          <strong>Manage change through automation:</strong> Changes to your infrastructure should be made using automation. The changes that need to be managed include changes to the automation, which then can be tracked and reviewed.
        </li>
      </ul>

      <h2>Definition</h2>

      <p>
        Reliability of a workload in the cloud depends on several factors, the primary of which is Resiliency:
      </p>

      <ul>
        <li>
          <strong>Resiliency</strong> is the ability of a workload to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues.
        </li>
      </ul>

      <p>
        The other factors important to reliability are:
      </p>

      <ul>
        <li>Operational Excellence, which includes automation of changes, use of playbooks, and communication</li>
        <li>Security, which includes preventing harm to data or infrastructure from malicious actors</li>
        <li>Performance Efficiency, which includes preventing loss of availability due to insufficient capacity</li>
        <li>Cost Optimization, which includes preventing loss of availability by eliminating unused capacity</li>
      </ul>

      <p>
        There are four best practice areas for reliability in the cloud:
      </p>

      <ul>
        <li>Foundations</li>
        <li>Workload Architecture</li>
        <li>Change Management</li>
        <li>Failure Management</li>
      </ul>

      <h2>Best practices</h2>

      <h3>Foundations</h3>
      <p>
        Foundational requirements are those whose scope extends beyond a single workload or project. Before architecting any system, foundational requirements that influence reliability should be in place. For example, you must have sufficient network bandwidth to your data center.
      </p>

      <h3>Workload architecture</h3>
      <p>
        A reliable workload starts with upfront design decisions for both software and infrastructure. Your architecture choices will impact your workload behavior across all of the Well-Architected pillars. For reliability, there are specific patterns you must follow.
      </p>

      <h3>Change management</h3>
      <p>
        Changes to your workload or its environment must be anticipated and accommodated to achieve reliable operation of the workload. Changes include those imposed on your workload like a spikes in demand, as well as those from within such as feature deployments and security patches.
      </p>

      <h3>Failure management</h3>
      <p>
        In any system of reasonable complexity, it is expected that failures will occur. Reliability requires that your workload be aware of failures as they occur and take action to avoid impact on availability. Workloads must be able to both withstand failures and automatically repair issues.
      </p>

      <div className="doc-note">
        <div className="doc-note-title">Note</div>
        <p>
          For prescriptive implementation guidance, see the{" "}
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reliability Pillar whitepaper
          </a>.
        </p>
      </div>

      <PageNav />
    </article>
  );
}
