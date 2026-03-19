import PageNav from "../components/PageNav";
import "../components/DocContent.css";
import "./DocumentRevisionsPage.css";

const revisions = [
  {
    date: "2024년 11월 6일",
    description:
      "안정성, 보안, 운영 우수성, 지속 가능성, 성능 효율성 기둥 업데이트. 안정성 기둥은 대규모 개편.",
  },
  {
    date: "2024년 6월 27일",
    description:
      "전체 기둥 대규모 업데이트. 보안 및 비용 최적화 기둥에 새로운 모범 사례 추가.",
  },
  {
    date: "2023년 10월 3일",
    description:
      "운영 우수성, 보안, 안정성, 성능 효율성, 비용 최적화, 지속 가능성 기둥 업데이트.",
  },
  {
    date: "2023년 4월 10일",
    description: "여러 기둥에 규범적 지침 및 새로운 모범 사례 추가.",
  },
  {
    date: "2022년 10월 20일",
    description: "모범 사례에 대한 노력 수준(effort level) 정의 추가.",
  },
  {
    date: "2021년 12월 2일",
    description:
      "AWS Well-Architected Framework의 여섯 번째 기둥으로 지속 가능성(Sustainability) 기둥 추가.",
  },
  {
    date: "2020년 7월 1일",
    description: "다섯 가지 기둥 전체에 새로운 모범 사례 및 지침 업데이트.",
  },
  {
    date: "2019년 7월 11일",
    description: "다섯 가지 기둥 전체 업데이트. 형식 업데이트.",
  },
  {
    date: "2018년 11월 8일",
    description: "다섯 번째 기둥으로 운영 우수성(Operational Excellence) 기둥 추가.",
  },
  {
    date: "2017년 11월 2일",
    description: "성능 효율성 기둥 추가. 기타 기둥 업데이트.",
  },
  {
    date: "2016년 11월 1일",
    description: "AWS Well-Architected Framework 최초 발행.",
  },
];

export default function DocumentRevisionsPage() {
  return (
    <article className="doc-content">
      <h1>문서 개정 이력 (Document Revisions)</h1>

      <p>
        다음 표는 최초 발행 이후 이 문서의 주요 변경 사항을 설명합니다. 이 백서의 향후 업데이트에 대한 알림을 받으려면 RSS 피드를 구독하세요.
      </p>

      <table className="revisions-table">
        <thead>
          <tr>
            <th>날짜</th>
            <th>설명</th>
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
