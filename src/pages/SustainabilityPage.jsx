import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SustainabilityPage() {
  return (
    <article className="doc-content">
      <h1>Sustainability</h1>

      <p>
        The discipline of sustainability addresses the long-term environmental, economic, and societal impact of your business activities. Your business or organization can have negative environmental impacts like direct or indirect carbon emissions, unrecyclable hardware, or large amounts of water used in operations.
      </p>

      <p>
        The sustainability pillar focuses on environmental impacts, especially energy consumption and efficiency, since they are important levers for architects to inform direct action to reduce resource usage.
      </p>

      <h2>Design principles</h2>

      <p>
        There are six design principles for sustainability in the cloud:
      </p>

      <ul>
        <li>
          <strong>Understand your impact:</strong> Measure the impact of your cloud workload and model the future impact of your workload. Include all sources of impact, including impacts resulting from customer use of your products, and impacts resulting from their eventual decommissioning and replacement. Compare the productive output with the total impact of your cloud workloads by reviewing the resources and emissions required per unit of work. Use this data to establish key performance indicators (KPIs), evaluate ways to improve productivity while reducing impact, and estimate the impact of proposed changes over time.
        </li>
        <li>
          <strong>Establish sustainability goals:</strong> For each cloud workload, establish long-term sustainability goals such as reducing the compute and storage resources required per transaction. Model the return on investment of sustainability improvements for existing workloads, and give sustainability improvement the same priority as other business goals. Use goal-setting methodologies such as the science based targets initiative (SBTi) to guide target setting for your organization.
        </li>
        <li>
          <strong>Maximize utilization:</strong> Right-size workloads and implement efficient design to verify high utilization and maximize the energy efficiency of the underlying hardware. Two hosts running at 30% utilization are less efficient than one host running at 60% due to baseline power consumption per host. At the same time, eliminate or minimize idle resources, processing, and storage to reduce the total energy required to power your workload.
        </li>
        <li>
          <strong>Anticipate and adopt new, more efficient hardware and software offerings:</strong> Support the upstream improvements your partners and suppliers make to help you reduce the impact of your cloud workloads. Continually monitor and evaluate new, more efficient hardware and software offerings. Design for flexibility to allow for the rapid adoption of new efficient technologies.
        </li>
        <li>
          <strong>Use managed services:</strong> Sharing services across a broad customer base helps maximize resource utilization, which reduces the amount of infrastructure needed to support cloud workloads. For example, customers can share the impact of common data center components like power and networking by migrating workloads to the AWS Cloud and adopting managed services, such as AWS Fargate for serverless containers, where AWS operates the infrastructure in an efficient, shared manner. Use managed services that can help minimize your impact, such as automatically moving infrequently accessed data to cold storage with Amazon S3 Lifecycle configurations or Amazon EC2 Auto Scaling to adjust capacity to meet demand.
        </li>
        <li>
          <strong>Reduce the downstream impact of your cloud workloads:</strong> Reduce the amount of energy or resources required to use your services. Reduce or eliminate the need for customers to upgrade their devices to use your services. Test using device farms to understand expected impact and test with older device versions to ensure you can support older hardware.
        </li>
      </ul>

      <h2>Definition</h2>

      <p>
        The following focus areas are addressed by the sustainability pillar:
      </p>

      <ul>
        <li>Region selection</li>
        <li>Alignment to demand</li>
        <li>Software and architecture</li>
        <li>Data</li>
        <li>Hardware and services</li>
        <li>Process and culture</li>
      </ul>

      <h2>Best practices</h2>

      <h3>Region selection</h3>
      <p>
        The choice of AWS Region for your workload significantly impacts your sustainability goals. The carbon intensity of the electricity used by the data centers in each AWS Region differs based on the power mix available in the geographic area. Identify and use AWS Regions where renewable electricity sources are used to power the AWS infrastructure.
      </p>

      <h3>Alignment to demand</h3>
      <p>
        The way users and applications consume your workloads and other resources can help you identify improvements to meet sustainability goals. Scale infrastructure to continually match user load and ensure that only the minimum resources required to support users are deployed. Align SLAs with sustainability goals and communicate them to your users to let them adjust their workload demand to your infrastructure requirements.
      </p>

      <h3>Software and architecture</h3>
      <p>
        Implement patterns for performing load smoothing and maintaining consistent high utilization of deployed resources to minimize the resources consumed. Components might become idle from lack of use because of changes in user behavior over time. Revise patterns and architecture to consolidate under-utilized components to increase overall utilization. Retire components that are no longer required. Understand the performance of your workload components, and optimize the components that consume the most resources.
      </p>

      <h3>Data</h3>
      <p>
        The data you store and process reflects choices you've made and your customer needs. Reducing the amount of data you create and retain is the most effective way to reduce the storage and processing resources you need. Use shared file systems or object storage to access common data and avoid creating data copies with different lifecycle policies. Review the data retention policies of your workloads to determine if you're storing data past its useful life.
      </p>

      <h3>Hardware and services</h3>
      <p>
        Look for opportunities to reduce workload sustainability impacts by making changes to your development, test, and production environments. Use managed device farms to test using physical hardware without owning, operating, and disposing of the hardware when it becomes obsolete.
      </p>

      <h3>Process and culture</h3>
      <p>
        Implement sustainability principles and set sustainability targets for your team and project. Teach sustainability best practices and how to measure impact within your team and as part of your broader organizational programs. Establish mechanisms to measure the sustainability impact of your workload regularly.
      </p>

      <div className="doc-note">
        <div className="doc-note-title">Note</div>
        <p>
          For prescriptive implementation guidance, see the{" "}
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sustainability Pillar whitepaper
          </a>.
        </p>
      </div>

      <PageNav />
    </article>
  );
}
