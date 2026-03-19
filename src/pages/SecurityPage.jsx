import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SecurityPage() {
  return (
    <article className="doc-content">
      <h1>Security</h1>

      <p>
        The security pillar encompasses the ability to protect data, systems, and assets to take advantage of cloud technologies to improve your security.
      </p>

      <p>
        This pillar provides an overview of design principles, best practices, and questions. For prescriptive implementation guidance, see the{" "}
        <a
          href="https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Security Pillar whitepaper
        </a>.
      </p>

      <h2>Design principles</h2>

      <p>
        There are seven design principles for security in the cloud:
      </p>

      <ul>
        <li>
          <strong>Implement a strong identity foundation:</strong> Implement the principle of least privilege and enforce separation of duties with appropriate authorization for each interaction with your AWS resources. Centralize identity management, and aim to eliminate reliance on long-term static credentials.
        </li>
        <li>
          <strong>Maintain traceability:</strong> Monitor, alert, and audit actions and changes to your environment in real time. Integrate log and metric collection with systems to automatically investigate and take action.
        </li>
        <li>
          <strong>Apply security at all layers:</strong> Apply a defense in depth approach with multiple security controls. Apply security to all layers (for example, edge of network, VPC, load balancing, every instance and compute service, operating system, application, and code).
        </li>
        <li>
          <strong>Automate security best practices:</strong> Automated software-based security mechanisms improve your ability to securely scale more rapidly and cost-effectively. Create secure architectures, including the implementation of controls that are defined and managed as code in version-controlled templates.
        </li>
        <li>
          <strong>Protect data in transit and at rest:</strong> Classify your data into sensitivity levels and use mechanisms, such as encryption, tokenization, and access control where appropriate.
        </li>
        <li>
          <strong>Keep people away from data:</strong> Use mechanisms and tools to reduce or eliminate the need for direct access or manual processing of data. This reduces the risk of mishandling or modification and human error when handling sensitive data.
        </li>
        <li>
          <strong>Prepare for security events:</strong> Prepare for an incident by having incident management and investigation policies and processes that align to your organizational requirements. Run incident response simulations and use tools with automation to increase your speed for detection, investigation, and recovery.
        </li>
      </ul>

      <h2>Definition</h2>

      <p>
        Security in the cloud is composed of seven areas:
      </p>

      <ul>
        <li>Security foundations</li>
        <li>Identity and access management</li>
        <li>Detection</li>
        <li>Infrastructure protection</li>
        <li>Data protection</li>
        <li>Incident response</li>
        <li>Application security</li>
      </ul>

      <h2>Best practices</h2>

      <h3>Security foundations</h3>
      <p>
        Before you architect any system, you need to put in place practices that influence security. To operate your workload securely, you must apply overarching best practices to every area of security. Take requirements and processes that you have defined in operational excellence at an organizational and workload level, and apply them to all areas.
      </p>

      <h3>Identity and access management</h3>
      <p>
        Identity and access management are key parts of an information security program, ensuring that only authorized and authenticated users and components are able to access your resources, and only in a manner that you intend. For example, you should define principals (that is, accounts, users, roles, and services that can perform actions in your account), build out policies aligned with these principals, and implement strong credential management.
      </p>

      <h3>Detection</h3>
      <p>
        You can use detective controls to identify a potential security threat or incident. They are an essential part of governance frameworks and can be used to support a quality process, a legal or compliance obligation, and for threat identification and response efforts.
      </p>

      <h3>Infrastructure protection</h3>
      <p>
        Infrastructure protection encompasses control methodologies, such as defense in depth, necessary to meet best practices and organizational or regulatory obligations. Use of these methodologies is critical for successful, ongoing operations in either the cloud or on-premises.
      </p>

      <h3>Data protection</h3>
      <p>
        Before architecting any system, foundational practices that influence security should be in place. For example, data classification provides a way to categorize organizational data based on levels of sensitivity, and encryption protects data by way of rendering it unintelligible to unauthorized access.
      </p>

      <h3>Incident response</h3>
      <p>
        Even with mature preventive and detective controls, your organization should still put processes in place to respond to and mitigate the potential impact of security incidents. The architecture of your workload strongly affects the ability of your teams to operate effectively during an incident, to isolate or contain systems, and to restore operations to a known good state.
      </p>

      <h3>Application security</h3>
      <p>
        Application security (AppSec) describes the overall process of how you reduce the risk of releasing insecure software systems to the cloud. AppSec helps you perform automated testing of security throughout the development and release process.
      </p>

      <PageNav />
    </article>
  );
}
