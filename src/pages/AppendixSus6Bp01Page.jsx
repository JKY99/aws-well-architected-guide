import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus6Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SUS06-BP01 — 각 팀에 지속 가능성 목표 채택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        모든 팀에 지속 가능성 목표를 설정하고 이를 KPI에 포함하여 지속 가능한 개발 문화를 조성합니다.
        지속 가능성은 특정 팀만의 책임이 아니라 개발, 운영, 아키텍처 등 모든 팀이 공동으로 추진해야 합니다.
        측정 가능한 목표를 설정하고 정기적으로 검토함으로써 조직 전체의 탄소 발자국 감소를 이끌어냅니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 팀이 지속 가능성 목표를 이해하고 이를 일상적인 의사결정에 반영합니다.
        탄소 발자국 감소가 조직 문화의 일부가 되어 자발적이고 지속적인 개선이 이루어집니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>지속 가능성을 특정 팀(예: 인프라팀)만의 책임으로 한정하는 것</li>
        <li>지속 가능성 목표를 설정하지 않거나 측정하지 않는 것</li>
        <li>탄소 발자국 지표 없이 단순히 비용 절감만을 추구하는 것</li>
        <li>지속 가능성 개선 성과를 팀 평가에 반영하지 않는 것</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>조직 전체의 에너지 효율 개선으로 탄소 배출량 체계적 감소</li>
        <li>지속 가능성을 고려한 설계 결정이 제품 개발 초기부터 이루어져 비용 절감</li>
        <li>ESG(환경·사회·지배구조) 목표 달성을 통한 기업 이미지 및 투자자 신뢰 향상</li>
        <li>직원들의 환경적 가치관과 조직 목표 일치로 구성원 만족도 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Customer Carbon Footprint Tool로 현재 탄소 배출 기준점을 측정하고 개선 목표 설정</li>
        <li>각 팀의 OKR(목표 및 핵심 결과)에 지속 가능성 지표를 포함</li>
        <li>분기별 지속 가능성 검토 회의를 통해 각 팀의 진척 상황 공유</li>
        <li>지속 가능성 개선 사례를 조직 내 공유하여 모범 사례 확산</li>
        <li>리더십 차원에서 지속 가능성 목표를 명확히 지지하고 자원을 할당</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Customer Carbon Footprint Tool — AWS 사용으로 인한 탄소 배출 추적</li>
        <li>AWS Well-Architected Tool — 지속 가능성 기둥 평가 및 개선사항 도출</li>
        <li>AWS Sustainability — AWS 지속 가능성 목표 및 프로그램 정보</li>
        <li>Amazon CloudWatch — 리소스 활용률 및 효율성 지표 모니터링</li>
        <li>AWS Cost Explorer — 비용 및 리소스 사용 패턴 추적</li>
      </ul>
      <PageNav />
    </article>
  );
}
