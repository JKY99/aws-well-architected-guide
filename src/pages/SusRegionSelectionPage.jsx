import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SusRegionSelectionPage() {
  return (
    <article className="doc-content">
      <h1>지속 가능성 — 지역 선택</h1>

      <p>
        워크로드를 배포할 지역을 선택할 때 탄소 집약도, 재생 가능 에너지 가용성,
        사용 가능한 서비스를 고려합니다.
      </p>

      <h2>모범 사례</h2>

      <h3>SUS01-BP01: 워크로드를 지원하는 지역 선택</h3>
      <p>
        지연 시간, 데이터 주권, 서비스 가용성, 탄소 집약도를 고려하여
        지속 가능성 요구사항에 가장 적합한 지역을 선택합니다.
      </p>
      <ul>
        <li>재생 가능 에너지 비율이 높은 지역 선택</li>
        <li>AWS Customer Carbon Footprint Tool을 사용하여 지역별 탄소 영향 비교</li>
        <li>비즈니스 요구사항(지연 시간, 컴플라이언스)과 지속 가능성 목표 균형 유지</li>
        <li>AWS가 재생 가능 에너지 목표를 달성한 지역 우선 고려</li>
      </ul>

      <div className="doc-note">
        <div className="doc-note-title">참고</div>
        <p>
          AWS는 2025년까지 100% 재생 가능 에너지로 전환하는 목표를 추구하고 있으며,
          일부 지역은 이미 이 목표를 달성했습니다.
          AWS Customer Carbon Footprint Tool을 통해 지역별 탄소 배출량을 추적할 수 있습니다.
        </p>
      </div>

      <h2>관련 AWS 서비스</h2>
      <ul>
        <li>AWS Customer Carbon Footprint Tool — 탄소 발자국 추적 및 보고</li>
        <li>AWS 지속 가능성 허브 — 지속 가능성 관련 리소스 및 도구</li>
      </ul>

      <PageNav />
    </article>
  );
}
