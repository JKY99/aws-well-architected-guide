import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost7Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST07-BP02 — 운영 비용 대비 효과 측정</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        클라우드 운영 비용이 창출하는 비즈니스 가치를 측정하여 투자 우선순위를 결정합니다.
        단순한 비용 절감이 아닌 비용 대비 가치(Value for Money) 관점에서 클라우드 지출을
        평가하고 최적화합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        각 워크로드와 서비스의 비용 효율성을 비즈니스 지표와 연계하여 측정합니다.
        비용 최적화 투자의 ROI를 명확히 파악하고 우선순위가 높은 최적화 작업에 집중합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용만 측정하고 창출되는 비즈니스 가치를 무시</li>
        <li>비용 효율성 지표 없이 절대 비용만으로 성과 평가</li>
        <li>단기적 비용 절감에 집착하여 장기적 가치 창출 기회 놓침</li>
        <li>비즈니스 부서와 IT 부서 간 비용-가치 대화 단절</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 기반 비용 최적화 의사결정 가능</li>
        <li>비즈니스 가치 창출에 집중된 클라우드 투자</li>
        <li>이해관계자에게 클라우드 지출의 비즈니스 가치 명확히 전달</li>
        <li>단위 경제성(Unit Economics) 개선으로 경쟁력 강화</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 KPI와 클라우드 비용을 연계한 단위 비용 지표 정의 (예: 거래당 비용, 사용자당 비용)</li>
        <li>AWS Cost Explorer와 비즈니스 분석 도구를 통합하여 종합적인 비용-가치 대시보드 구축</li>
        <li>각 제품 팀에 비용 가시성을 제공하여 책임감 있는 지출 문화 조성</li>
        <li>비용 최적화 프로젝트의 투자 수익률(ROI)을 사전에 추정하고 사후에 검증</li>
        <li>AWS Customer Carbon Footprint Tool로 탄소 발자국도 비즈니스 가치 지표에 포함</li>
        <li>CloudWatch 대시보드로 비용과 성능/품질 지표를 함께 모니터링</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Explorer</li>
        <li>AWS Budgets</li>
        <li>Amazon CloudWatch</li>
        <li>Amazon QuickSight</li>
        <li>AWS Customer Carbon Footprint Tool</li>
      </ul>

      <PageNav />
    </article>
  );
}
