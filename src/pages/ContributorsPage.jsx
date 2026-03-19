import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function ContributorsPage() {
  const contributors = [
    { name: "Brian Carlson", role: "Operations Lead, Principal Solutions Architect" },
    { name: "Ben Potter", role: "Security Lead, Principal Solutions Architect" },
    { name: "Seth Eliot", role: "Reliability Lead, Principal Solutions Architect" },
    { name: "Sam Padgett", role: "Performance Efficiency Lead, Principal Solutions Architect" },
    { name: "Nathan Besh", role: "Cost Optimization Lead, Principal Solutions Architect" },
    { name: "Adnan Aslam", role: "Sustainability Lead, Principal Solutions Architect" },
    { name: "Rodney Lester", role: "Principal Solutions Architect" },
    { name: "David Hagan", role: "Sr. Solutions Architect" },
    { name: "Sheldon Sherrit", role: "Sr. Technical Account Manager" },
    { name: "Erin Hagen", role: "Sr. Technical Account Manager" },
    { name: "Alex Greer", role: "Solutions Architect" },
    { name: "Thiago Morais", role: "Solutions Architect" },
    { name: "Tarek Gaber", role: "Solutions Architect" },
    { name: "Raminder Singh", role: "Solutions Architect" },
    { name: "Tom Atkins", role: "Solutions Architect" },
    { name: "Mark Lav", role: "Solutions Architect" },
  ];

  return (
    <article className="doc-content">
      <h1>기여자 (Contributors)</h1>

      <p>
        다음 AWS 직원들이 AWS Well-Architected Framework 문서에 기여했습니다.
      </p>

      <ul>
        {contributors.map((c) => (
          <li key={c.name}>
            <strong>{c.name}</strong> — {c.role}
          </li>
        ))}
      </ul>

      <PageNav />
    </article>
  );
}
