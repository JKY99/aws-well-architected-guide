import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function CostOptimizationPage() {
  return (
    <article className="doc-content">
      <h1>Cost Optimization</h1>

      <p>
        The cost optimization pillar includes the ability to run systems to deliver business value at the lowest price point.
      </p>

      <p>
        This pillar provides an overview of design principles, best practices, and questions. For prescriptive implementation guidance, see the{" "}
        <a
          href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cost Optimization Pillar whitepaper
        </a>.
      </p>

      <h2>Design principles</h2>

      <p>
        There are five design principles for cost optimization in the cloud:
      </p>

      <ul>
        <li>
          <strong>Implement cloud financial management:</strong> To achieve financial success and accelerate business value realization in the cloud, you must invest in Cloud Financial Management. Your organization must dedicate the necessary time and resources for building capability in this new domain of technology and usage management. Similar to your Security or Operations capability, you need to build capability through knowledge building, programs, resources, and processes to become a cost-efficient organization.
        </li>
        <li>
          <strong>Adopt a consumption model:</strong> Pay only for the computing resources that you require and increase or decrease usage depending on business requirements. For example, development and test environments are typically only used for eight hours a day during the work week. You can stop these resources when they are not in use for a potential cost savings of 75% (40 hours versus 168 hours).
        </li>
        <li>
          <strong>Measure overall efficiency:</strong> Measure the business output of the workload and the costs associated with delivering it. Use this measure to know the gains you make from increasing output and reducing costs.
        </li>
        <li>
          <strong>Stop spending money on undifferentiated heavy lifting:</strong> AWS does the heavy lifting of data center operations like racking, stacking, and powering servers. It also removes the operational burden of managing operating systems and applications with managed services. This allows you to focus on your customers and business projects rather than on IT infrastructure.
        </li>
        <li>
          <strong>Analyze and attribute expenditure:</strong> The cloud makes it easier to accurately identify the usage and cost of systems, which then allows transparent attribution of IT costs to individual workload owners. This helps measure return on investment (ROI) and gives workload owners an opportunity to optimize their resources and reduce costs.
        </li>
      </ul>

      <h2>Definition</h2>

      <p>
        There are five best practice areas for cost optimization in the cloud:
      </p>

      <ul>
        <li>Practice Cloud Financial Management</li>
        <li>Expenditure and usage awareness</li>
        <li>Cost-effective resources</li>
        <li>Manage demand and supply resources</li>
        <li>Optimize over time</li>
      </ul>

      <h2>Best practices</h2>

      <h3>Practice Cloud Financial Management</h3>
      <p>
        With the adoption of cloud, technology teams innovate faster due to shortened approval, procurement, and infrastructure deployment cycles. A new approach to financial management in the cloud is required to realize business value and financial success. This approach is Cloud Financial Management, and builds capability across your organization by implementing organizational wide knowledge building, programs, resources, and processes.
      </p>

      <h3>Expenditure and usage awareness</h3>
      <p>
        Many businesses are composed of multiple systems run by various teams. The capability to attribute resource costs to the individual organization or product owners drives efficient usage behavior and helps reduce waste. Accurate cost attribution allows you to know which products are truly profitable, and allows you to make more informed decisions about where to allocate budget.
      </p>

      <h3>Cost-effective resources</h3>
      <p>
        Using the appropriate instances and resources for your workload is key to cost savings. For example, a reporting process might take five hours to run on a smaller server but one hour to run on a larger server that is twice as expensive. Both servers give you the same outcome, but the smaller server incurs more cost over time.
      </p>

      <h3>Manage demand and supply resources</h3>
      <p>
        When you move to the cloud, you pay only for what you need. You can supply resources to match the workload demand at the time they're needed, this eliminates the need for costly and wasteful over provisioning. You can also modify the demand, using a queue or buffer to smooth the demand and serve it with less resources resulting in a lower cost, or synchronizing supply with demand to avoid the cost of over provisioning.
      </p>

      <h3>Optimize over time</h3>
      <p>
        As AWS releases new services and features, it's a best practice to review your existing architectural decisions to ensure they continue to be the most cost effective. As your requirements change, be aggressive in decommissioning resources, entire services, and systems that you no longer require.
      </p>

      <PageNav />
    </article>
  );
}
