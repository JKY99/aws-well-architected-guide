import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AbstractPage() {
  return (
    <article className="doc-content">
      <h1>Abstract and introduction</h1>

      <p>
        This paper describes the AWS Well-Architected Framework, which enables customers and partners to review their architectures using a consistent approach and provides guidance to help implement designs that will scale with your application needs over time.
      </p>

      <h2>Introduction</h2>

      <p>
        The AWS Well-Architected Framework helps you understand the pros and cons of decisions you make while building systems on AWS. By using the Framework you will learn architectural best practices for designing and operating reliable, secure, efficient, cost-effective, and sustainable systems in the cloud. It provides a way for you to consistently measure your architectures against best practices and identify areas for improvement. The process for reviewing an architecture is a constructive conversation about architectural decisions, and is not an audit mechanism.
      </p>

      <p>
        We believe that having well-architected systems greatly increases the likelihood of business success. This paper is intended for those in technology roles, such as chief technology officers (CTOs), architects, developers, and operations team members. After reading this paper, you will understand AWS best practices and strategies to use when designing systems for the cloud. This paper does not provide implementation details or architectural patterns, but does provide references to relevant technical resources.
      </p>

      <h2>Definitions</h2>

      <p>
        The AWS Well-Architected Framework is based on six pillars — operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability.
      </p>

      <p>
        When architecting technology solutions, if you neglect these six pillars, it becomes more difficult to build a system that delivers on your expectations and requirements. Incorporating these pillars into your architecture helps you produce stable and efficient systems. This allows you to focus on the other aspects of design, such as functional requirements.
      </p>

      <h2>On architecture</h2>

      <p>
        In on-premises environments, customers often have a central team for technology architecture that acts as an overlay to other product or feature teams to ensure they are following best practice. Technology architecture teams are often composed of a set of roles such as Technical Architect (infrastructure), Solutions Architect (software), Data Architect, Networking Architect, and Security Architect. Often these teams use TOGAF or the Zachman Framework as part of their architecture control and governance process.
      </p>

      <p>
        At AWS, we prefer to distribute capabilities into teams rather than having a centralized team with that capability. There are risks when you choose to distribute this, but there are also significant benefits. If you have distributed teams and organizations you need to make sure that you have standards and best practices that each of the teams can use. The Well-Architected Framework is a scalable mechanism that lets you take advantage of these practices without requiring a large and expensive central team.
      </p>

      <p>
        One of the ways that we've tried to make it easier for companies to adopt our recommendations is to create tools that are accessible to a wider community. Not everyone can write a dissertation on big data processing, but they can use a tool that asks the right questions and tells them how to improve their architectures.
      </p>

      <h2>General design principles</h2>

      <p>
        The Well-Architected Framework identifies a set of general design principles to facilitate good design in the cloud:
      </p>

      <ul>
        <li>
          <strong>Stop guessing your capacity needs:</strong> Eliminate guessing about your infrastructure capacity needs. When you make a capacity decision before you deploy a system, you might end up sitting on expensive idle resources or dealing with the performance implications of limited capacity. With cloud computing, these problems can go away. You can use as much or as little capacity as you need, and scale up and down automatically.
        </li>
        <li>
          <strong>Test systems at production scale:</strong> In the cloud, you can create a production-scale test environment on demand, complete your testing, and then decommission the resources. Because you only pay for the test environment when it's running, you can simulate your live environment for a fraction of the cost of testing on premises.
        </li>
        <li>
          <strong>Automate with architectural experimentation in mind:</strong> Automation allows you to create and replicate your systems at low cost and avoid the expense of manual effort. You can track changes to your automation, audit the impact, and revert to previous parameters when necessary.
        </li>
        <li>
          <strong>Consider evolutionary architectures:</strong> In a traditional environment, architectural decisions are often implemented as static, one-time events, with a few major versions of a system during its lifetime. As a business and its context continue to change, these initial decisions might hinder the system's ability to deliver changing business requirements. In the cloud, the capability to automate and test on demand lowers the risk of impact from design changes. This allows systems to evolve over time so that businesses can take advantage of innovations as a standard practice.
        </li>
        <li>
          <strong>Drive architectures using data:</strong> In the cloud, you can collect data on how your architectural choices affect the behavior of your workload. This lets you make fact-based decisions on how to improve your workload. Your cloud infrastructure is code, so you can use that data to inform your architecture choices and improvements over time.
        </li>
        <li>
          <strong>Improve through game days:</strong> Test how your architecture and processes perform by regularly scheduling game days to simulate events in production. This will help you understand where improvements can be made and can help develop organizational experience in dealing with events.
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
