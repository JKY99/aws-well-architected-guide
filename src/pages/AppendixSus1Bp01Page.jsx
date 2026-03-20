import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus1Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SUS01-BP01 — 비즈니스 요구사항과 지속 가능성 목표에 따른 리전 선택</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        워크로드의 리전 선택은 성능, 비용, 탄소 발자국 등 핵심 성과 지표에 큰 영향을 미칩니다.
        규정 준수(데이터 주권), 필요 서비스·기능 가용성, 비용, 지연 시간, 탄소 발자국을 균형 있게
        고려하여 비즈니스 요구사항과 지속 가능성 목표를 모두 충족하는 리전을 선택합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드 핵심 성과 지표(성능, 비용, 탄소 발자국)를 최적화합니다.
        클라우드 워크로드의 탄소 발자국을 낮추고 연간 탄소 배출량을 줄입니다.
        비즈니스 요구사항과 지속 가능성 목표가 균형 있게 달성됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비즈니스·지속 가능성 요구사항 대신 자신의 지리적 위치를 기준으로 리전을 선택하는 경우</li>
        <li>대안적 리전을 고려하지 않고 모든 워크로드 리소스를 하나의 지리적 위치에 통합하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>Amazon 재생 가능 에너지 프로젝트 인근 리전 또는 탄소 집약도가 낮은 리전 배치를 통한 탄소 발자국 감소</li>
        <li>연간 탄소 배출량 감소</li>
        <li>비즈니스 요구사항과 지속 가능성 목표의 균형 있는 달성</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>현지 규정(데이터 주권) 준수 여부를 확인하여 후보 리전을 선별합니다.</li>
        <li>AWS 리전별 서비스 목록으로 필요한 서비스·기능 가용성을 검증합니다.</li>
        <li>AWS Pricing Calculator로 워크로드 비용을 산출하고 최종 사용자 위치와 AWS 리전 간의 네트워크 지연 시간을 측정합니다.</li>
        <li>온실가스 프로토콜(시장 기반·위치 기반 방법)에 따른 지속 가능성 지침에 맞춰 Amazon 재생 가능 에너지 프로젝트 인근 리전 또는 탄소 집약도가 낮은 리전을 우선합니다.</li>
        <li>AWS Customer Carbon Footprint Tool로 리전별 탄소 배출량을 비교합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Customer Carbon Footprint Tool — 탄소 배출량 추정 이해</li>
        <li>AWS Pricing Calculator — 리전별 비용 산출</li>
        <li>AWS Well-Architected Tool — 지속 가능성 워크로드 검토</li>
        <li>Amazon CloudFront — 엣지 로케이션을 통한 데이터 전송 최소화</li>
      </ul>

      <PageNav />
    </article>
  );
}
