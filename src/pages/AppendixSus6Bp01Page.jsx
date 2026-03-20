import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus6Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SUS06-BP01 — 지속 가능성 목표 소통 및 전파</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        기술은 지속 가능성의 핵심 활성화 요소입니다. IT 팀은 조직의 지속 가능성 목표를 향한 의미 있는
        변화를 이끄는 데 중요한 역할을 합니다. 이러한 팀은 회사의 지속 가능성 목표를 명확하게 이해하고
        이를 운영 전반에 전파해야 합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        IT 팀이 리소스 효율성을 높이는 시스템과 솔루션을 최적화합니다. 조직의 탄소 발자국과 환경적 영향을
        최소화하고 지속 가능한 최적화를 통한 비용 절감을 실증합니다. IT와 지속 가능성 이니셔티브 간의
        전략적 파트너십을 구축하고 지속적인 개선 및 적응 역량을 만들어냅니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>조직의 지속 가능성 목표가 팀에 어떻게 적용되는지 파악하지 못하는 경우</li>
        <li>클라우드 워크로드의 환경적 영향에 대한 인식과 교육이 부족한 경우</li>
        <li>우선순위를 두어야 할 특정 영역이 불명확한 경우</li>
        <li>지속 가능성 이니셔티브에 직원과 고객이 참여하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>인프라 최적화와 혁신적 기술 활용을 통한 탄소 배출 감소</li>
        <li>운영 전반에 걸친 리소스 소비 최소화</li>
        <li>목표 소통을 통한 지속적 개선 역량 구축</li>
        <li>지속 가능한 최적화가 비용 절감으로 이어져 비즈니스 가치 강화</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>IT, 지속 가능성, 재무 이해관계자의 입력을 받아 IT 프로그램에 잘 정의된 목표를 수립합니다.</li>
        <li>온실가스(GHG) 프로토콜이 클라우드 워크로드와 어떻게 관련되는지, 범위 1, 2, 3 배출에 대해 학습합니다.</li>
        <li>AWS 탄소 회계 솔루션을 활용하여 운영 및 가치 사슬 전반의 GHG 배출 보고를 추적·간소화합니다.</li>
        <li>AWS Customer Carbon Footprint Tool로 AWS 사용으로 인한 탄소 배출량을 추적·측정·검토·예측합니다.</li>
        <li>Cost Explorer, CUR(비용 및 사용 보고서), Cloud Intelligence Dashboards 및 지속 가능성 프록시 지표 대시보드를 통해 리소스 사용량을 소통합니다.</li>
        <li>AWS Skill Builder와 같은 교육 프로그램으로 직원들을 교육하고 지속 가능성 성취에 인센티브를 제공합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Customer Carbon Footprint Tool — AWS 사용으로 인한 탄소 배출 추적·측정</li>
        <li>AWS Cost Explorer — 시간별 세분성의 리소스 사용량 및 비용 추적</li>
        <li>Cost and Usage Reports (CUR) — 상세 비용 및 사용 데이터</li>
        <li>Cloud Intelligence Dashboards — 지속 가능성 프록시 지표 시각화</li>
        <li>AWS Skill Builder — 지속 가능성 교육 프로그램</li>
      </ul>

      <PageNav />
    </article>
  );
}
