import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp08Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP08 — 비용 인식 문화 조성</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>조직 전체에 비용 인식 문화를 구축하여 모든 팀원이 클라우드 비용을 이해하고 비용 효율적인 의사결정에 참여하도록 합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 조직 구성원이 클라우드 비용을 자신의 책임으로 인식하고 비용 최적화 문화가 조직 전반에 정착됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 최적화가 특정 팀의 책임으로만 여겨집니다.</li>
        <li>개발자들이 클라우드 비용에 대한 교육이 부족합니다.</li>
        <li>비용 데이터가 비즈니스 리더들에게 투명하게 공유되지 않습니다.</li>
        <li>비용 최적화 노력이 인정받거나 보상받지 못합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>모든 팀원이 비용 최적화에 적극적으로 참여합니다.</li>
        <li>비용 낭비가 자발적으로 감소합니다.</li>
        <li>혁신과 비용 효율성이 동시에 추구됩니다.</li>
        <li>클라우드 투자 수익이 극대화됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비용 교육 프로그램: 모든 팀원 대상 클라우드 비용 인식 교육 과정을 개발합니다.</li>
        <li>게임화 요소 도입: 비용 절감 아이디어나 실행에 대한 인센티브와 인정 체계를 만듭니다.</li>
        <li>투명한 비용 공유: 팀별 비용 데이터를 정기적으로 공유하고 목표 달성 여부를 소통합니다.</li>
        <li>비용 챔피언 지정: 각 팀에서 비용 인식 문화를 촉진하는 역할을 담당하는 사람을 지정합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Explorer</li>
        <li>AWS Budgets</li>
        <li>AWS Cost Categories</li>
        <li>AWS Training and Certification</li>
      </ul>
      <PageNav />
    </article>
  );
}
