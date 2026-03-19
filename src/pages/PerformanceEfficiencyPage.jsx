import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function PerformanceEfficiencyPage() {
  return (
    <article className="doc-content">
      <h1>Performance Efficiency</h1>

      <p>
        The performance efficiency pillar includes the ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve.
      </p>

      <h2>Design principles</h2>

      <p>
        There are five design principles for performance efficiency in the cloud:
      </p>

      <ul>
        <li>
          <strong>Democratize advanced technologies:</strong> Make advanced technology implementation easier for your team by delegating complex tasks to your cloud vendor. Rather than asking your IT team to learn about hosting and running a new technology, consider consuming the technology as a service. For example, NoSQL databases, media transcoding, and machine learning are all technologies that require expertise that is not evenly dispersed across the technical community. In the cloud, these technologies become services that your team can consume while focusing on product development rather than resource provisioning and management.
        </li>
        <li>
          <strong>Go global in minutes:</strong> Deploying your workload in multiple AWS Regions around the world allows you to provide lower latency and a better experience for your customers at minimal cost.
        </li>
        <li>
          <strong>Use serverless architectures:</strong> Serverless architectures remove the need for you to run and maintain physical servers for traditional compute activities. For example, serverless storage services can act as static websites (removing the need for web servers) and event services can host code. This removes the operational burden of managing physical servers, and can lower transactional costs because managed services operate at cloud scale.
        </li>
        <li>
          <strong>Experiment more often:</strong> With virtual and automatable resources, you can quickly carry out comparative testing using different types of instances, storage, or configurations.
        </li>
        <li>
          <strong>Consider mechanical sympathy:</strong> Understand how cloud services are consumed and always use the technology approach that aligns best with your workload goals. For example, consider data access patterns when you select database or storage approaches.
        </li>
      </ul>

      <h2>Definition</h2>

      <p>
        There are four best practice areas for performance efficiency in the cloud:
      </p>

      <ul>
        <li>Architecture selection</li>
        <li>Compute and hardware</li>
        <li>Data management</li>
        <li>Networking and content delivery</li>
        <li>Process and culture</li>
      </ul>

      <h2>Best practices</h2>

      <h3>Architecture selection</h3>
      <p>
        The optimal solution for a particular workload varies, and solutions often combine multiple approaches. Well-architected systems use multiple solutions and enable different features to improve performance. This section provides an overview of the patterns and services to consider when architecting workloads for high performance.
      </p>

      <h3>Compute and hardware</h3>
      <p>
        The optimal compute solution for a workload varies based on application design, usage patterns, and configuration settings. Architectures can use different compute solutions for various components and enable different features to improve performance. Selecting the wrong compute solution for an architecture can lead to lower performance efficiency.
      </p>

      <h3>Data management</h3>
      <p>
        The optimal data management solution for a system varies based on the kind of data type (object, block, file, and database data) and access patterns (random and sequential). Architectural decisions about data management can greatly impact the performance of your workload.
      </p>

      <h3>Networking and content delivery</h3>
      <p>
        The optimal networking solution for a workload varies based on latency, throughput requirements, jitter, and bandwidth. Physical constraints, such as user or on-premises resources, determine location options. These constraints can be offset with edges or content delivery networks (CDNs).
      </p>

      <h3>Process and culture</h3>
      <p>
        When architecting workloads, there are principles and practices that you can adopt to help you better run high-performance cloud workloads. Understanding the performance of your workload is foundational to making informed decisions and improvements to your architecture.
      </p>

      <div className="doc-note">
        <div className="doc-note-title">Note</div>
        <p>
          For prescriptive implementation guidance, see the{" "}
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Performance Efficiency Pillar whitepaper
          </a>.
        </p>
      </div>

      <PageNav />
    </article>
  );
}
