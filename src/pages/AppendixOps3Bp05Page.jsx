import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps3Bp05Page() {
  return (
    <article className="doc-content">
      <h1>OPS03-BP05 — 다양성과 포용 촉진</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>

      <p>
        다양한 배경, 관점, 경험을 가진 팀을 구성하고 모든 구성원이 기여할 수 있는 포용적 환경을 만듭니다.
        다양성은 문제를 다양한 각도에서 바라보게 하여 더 나은 솔루션을 만들어냅니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        팀 구성원이 자신의 아이디어와 우려를 자유롭게 표현할 수 있는 심리적 안전감이 있습니다.
        다양한 배경의 팀원이 모두 의사결정에 기여합니다.
        포용적인 문화가 혁신과 창의성을 증진합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>소수 의견이 무시되어 잠재적인 위험이 간과되는 경우</li>
        <li>특정 배경을 가진 사람들만 주요 결정에 참여하는 경우</li>
        <li>팀원이 두려움으로 인해 문제를 제기하지 않는 경우</li>
        <li>동질적인 팀이 동일한 관점으로만 문제를 바라보는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>다양한 관점으로 인한 문제 해결 능력 향상</li>
        <li>더 나은 의사결정과 혁신 촉진</li>
        <li>팀 참여도 및 만족도 향상으로 이직률 감소</li>
        <li>더 넓은 인재 풀에서 인재 확보 가능</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>심리적 안전감을 측정하고 개선하기 위한 정기적인 설문을 실시합니다.</li>
        <li>회의에서 모든 구성원이 발언할 기회를 갖도록 퍼실리테이션 기법을 사용합니다.</li>
        <li>채용 과정에서 다양성을 고려합니다.</li>
        <li>포용성 교육을 정기적으로 실시합니다.</li>
        <li>익명 피드백 채널을 제공하여 우려 사항을 안전하게 제기할 수 있도록 합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Training and Certification — 다양한 배경의 팀원 역량 개발</li>
        <li>AWS Skill Builder — 개인화된 학습 경로 제공</li>
      </ul>

      <PageNav />
    </article>
  );
}
