import PageNav from "../components/PageNav";
import "../components/DocContent.css";
import "./DocumentRevisionsPage.css";

const revisions = [
  {
    date: "November 6, 2024",
    description:
      "Updated Reliability, Security, Operational Excellence, Sustainability, and Performance Efficiency pillars. The Reliability pillar received a major refresh.",
  },
  {
    date: "June 27, 2024",
    description:
      "Major update across all pillars. Added new best practices to Security and Cost Optimization pillars.",
  },
  {
    date: "October 3, 2023",
    description:
      "Updated Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability pillars.",
  },
  {
    date: "April 10, 2023",
    description:
      "Added prescriptive guidance and new best practices to multiple pillars.",
  },
  {
    date: "October 20, 2022",
    description: "Added effort level definitions for best practices.",
  },
  {
    date: "December 2, 2021",
    description:
      "Added the Sustainability pillar as the sixth pillar of the AWS Well-Architected Framework.",
  },
  {
    date: "July 1, 2020",
    description: "Updated all five pillars with new best practices and guidance.",
  },
  {
    date: "July 11, 2019",
    description: "Updated all five pillars. Updated format.",
  },
  {
    date: "November 8, 2018",
    description: "Added the operational excellence pillar as the fifth pillar.",
  },
  {
    date: "November 2, 2017",
    description: "Added performance efficiency pillar. Updated other pillars.",
  },
  {
    date: "November 1, 2016",
    description: "Initial publication of the AWS Well-Architected Framework.",
  },
];

export default function DocumentRevisionsPage() {
  return (
    <article className="doc-content">
      <h1>Document revisions</h1>

      <p>
        The following table describes the important changes to this document since its initial publication. To be notified about future updates to this whitepaper, subscribe to the RSS feed.
      </p>

      <table className="revisions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {revisions.map((r) => (
            <tr key={r.date}>
              <td className="revisions-date">{r.date}</td>
              <td>{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <PageNav />
    </article>
  );
}
