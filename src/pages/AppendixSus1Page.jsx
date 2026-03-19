import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus1Page() {
  return (
    <article className="doc-content">
      <h1>SUS 1 — 지역을 어떻게 선택합니까?</h1>

      <p>
        워크로드를 배포할 지역을 선택할 때 탄소 집약도, 재생 가능 에너지 가용성,
        지연 시간, 데이터 주권을 종합적으로 고려합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>SUS01-BP01:</strong> 워크로드를 지원하는 지역 선택<br />
          <span>지연 시간, 데이터 주권, 서비스 가용성 요건을 충족하면서 탄소 집약도가 낮은 지역을 선택합니다.</span>
        </li>
      </ul>

      <h2>고려사항</h2>
      <ul>
        <li>AWS Customer Carbon Footprint Tool로 지역별 탄소 배출량 비교</li>
        <li>재생 가능 에너지 비율이 높은 지역 우선 고려</li>
        <li>규정 요건(데이터 주권, 개인정보 보호법)과 지속 가능성 목표 균형</li>
        <li>엣지 로케이션을 활용하여 사용자와 가까운 곳에서 콘텐츠 제공</li>
      </ul>

      <PageNav />
    </article>
  );
}
