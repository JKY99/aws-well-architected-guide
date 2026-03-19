import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus1Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SUS01-BP01 — 워크로드를 지원하는 지역 선택</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        워크로드를 배포할 AWS 리전을 선택할 때 지연 시간, 데이터 주권, 서비스 가용성 요건을 충족하면서
        탄소 집약도가 낮은 리전을 우선적으로 고려합니다.
        재생 가능 에너지 비율이 높은 리전을 선택하면 동일한 워크로드를 실행하면서도 탄소 발자국을 크게 줄일 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        비즈니스 요구사항(지연 시간, 규정 준수, 서비스 가용성)을 만족하면서도 탄소 배출량이 가장 낮은
        리전에서 워크로드를 실행합니다. 지속 가능성 목표와 사업 목표가 균형 있게 달성됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>탄소 집약도를 고려하지 않고 단순히 가장 가까운 리전이나 익숙한 리전을 선택하는 경우</li>
        <li>모든 워크로드를 동일한 리전에 배포하여 지속 가능성 최적화 기회를 놓치는 경우</li>
        <li>데이터 주권 요건이 없는 워크로드도 제한 없이 단일 리전에 고정하는 경우</li>
        <li>리전 선택 시 AWS Customer Carbon Footprint Tool 등의 탄소 데이터를 활용하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>동일한 워크로드에 대한 탄소 배출량 감소</li>
        <li>기업의 탄소 중립 및 넷제로 목표 달성 기여</li>
        <li>재생 가능 에너지 비율이 높은 인프라 활용으로 환경적 책임 이행</li>
        <li>비즈니스 요건과 지속 가능성 목표의 균형 있는 달성</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS Customer Carbon Footprint Tool을 사용하여 리전별 탄소 배출량을 비교합니다.</li>
        <li>비즈니스 요건(지연 시간, 데이터 주권, 규정 준수)을 먼저 충족하는 리전 후보군을 선정합니다.</li>
        <li>후보 리전 중 탄소 집약도가 가장 낮은 리전을 최종 선택합니다.</li>
        <li>AWS 공개 지속 가능성 보고서와 리전별 재생 가능 에너지 정보를 정기적으로 검토합니다.</li>
        <li>지연 시간에 민감하지 않은 배치 워크로드는 탄소 집약도가 낮은 리전으로 우선 이전을 고려합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Customer Carbon Footprint Tool — 리전별 탄소 배출량 데이터 확인</li>
        <li>AWS Well-Architected Tool — 지속 가능성 워크로드 검토</li>
        <li>Amazon CloudFront — 엣지 로케이션을 통한 사용자 근접 콘텐츠 제공으로 데이터 전송 최소화</li>
        <li>AWS Global Infrastructure — 리전별 재생 가능 에너지 현황 정보</li>
      </ul>

      <PageNav />
    </article>
  );
}
