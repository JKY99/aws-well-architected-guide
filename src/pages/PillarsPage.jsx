import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function PillarsPage() {
  return (
    <article className="doc-content">
      <h1>The pillars of the framework</h1>

      <p>
        Building software systems at AWS is a lot like constructing a building. If the foundation is not solid, structural problems can undermine the integrity and function of the building. When building technology solutions on Amazon Web Services (AWS), if you neglect the six pillars of operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability, it becomes more difficult to build a system that delivers on your expectations and requirements.
      </p>

      <p>
        Incorporating these pillars into your architecture helps you produce stable and efficient systems. This allows you to focus on the other aspects of design, such as functional requirements.
      </p>

      <h2>The six pillars</h2>

      <p>
        The AWS Well-Architected Framework describes key concepts, design principles, and architectural best practices for designing and running workloads in the cloud. By answering a few foundational questions, learn how well your architecture aligns with cloud best practices and gain guidance for making improvements.
      </p>

      <ul>
        <li>
          <strong><Link to="/pillars/operational-excellence">Operational Excellence</Link></strong> – The ability to support development and run workloads effectively, gain insight into their operations, and to continuously improve supporting processes and procedures to deliver business value.
        </li>
        <li>
          <strong><Link to="/pillars/security">Security</Link></strong> – The security pillar encompasses the ability to protect data, systems, and assets to take advantage of cloud technologies to improve your security.
        </li>
        <li>
          <strong><Link to="/pillars/reliability">Reliability</Link></strong> – The reliability pillar encompasses the ability of a workload to perform its intended function correctly and consistently when it's expected to. This includes the ability to operate and test the workload through its total lifecycle.
        </li>
        <li>
          <strong><Link to="/pillars/performance-efficiency">Performance Efficiency</Link></strong> – The ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve.
        </li>
        <li>
          <strong><Link to="/pillars/cost-optimization">Cost Optimization</Link></strong> – The ability to run systems to deliver business value at the lowest price point.
        </li>
        <li>
          <strong><Link to="/pillars/sustainability">Sustainability</Link></strong> – The sustainability pillar focuses on environmental impacts, especially energy consumption and efficiency, since they are important levers for architects to inform direct action to reduce resource usage.
        </li>
      </ul>

      <h2>Summary</h2>

      <p>
        The AWS Well-Architected Framework is built on the foundation of six pillars that form the cornerstones of effective cloud architecture. Just as a building needs a solid foundation, technical solutions must address all six pillars to ensure stability and efficiency. Incorporating these pillars into your architectural designs ensures that you can build stable and efficient systems that meet expectations and requirements while maintaining basic architectural integrity. This frees architects and teams to focus on functional requirements and other design considerations.
      </p>

      <PageNav />
    </article>
  );
}
