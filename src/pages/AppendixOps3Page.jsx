import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps3Page() {
  return (
    <article className="doc-content">
      <h1>OPS 3 — 조직 문화가 비즈니스 성과를 어떻게 지원합니까?</h1>

      <p>
        고성과 운영 문화는 지속적인 학습, 실험, 개선을 장려합니다.
        심리적 안전감을 통해 팀원들이 실수에서 배우고 혁신할 수 있도록 합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops3/bp01">OPS03-BP01: 경영진 후원 제공</Link></strong><br />
          <span>운영 우수성 이니셔티브에 대한 경영진의 지원과 후원을 확보합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops3/bp02">OPS03-BP02: 팀 구성원 권한 부여</Link></strong><br />
          <span>교육, 멘토링, 커리어 개발 기회를 제공하여 팀원들의 역량을 지속적으로 향상시킵니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops3/bp03">OPS03-BP03: 경험에서 학습</Link></strong><br />
          <span>다양한 배경과 관점을 가진 팀을 구성하여 더 나은 의사결정과 혁신을 이끌어냅니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops3/bp04">OPS03-BP04: 커뮤니케이션 및 협업 촉진</Link></strong><br />
          <span>기술 역량뿐만 아니라 조직 가치와 운영 문화에 맞는 인재를 채용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops3/bp05">OPS03-BP05: 다양성과 포용 촉진</Link></strong><br />
          <span>실패를 학습 기회로 보고, 안전한 환경에서 새로운 아이디어와 접근 방식을 실험할 수 있도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops3/bp06">OPS03-BP06: 팀 구성원의 기술 역량 유지 및 발전 장려</Link></strong><br />
          <span>교육 투자, 인증 취득 지원, 지식 공유 프로그램을 통해 팀원들의 역량을 지속적으로 발전시킵니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops3/bp07">OPS03-BP07: 팀에 적절한 인원 배치</Link></strong><br />
          <span>워크로드를 지원하기 위해 충분한 기술을 갖춘 인원을 배치하고, 자동화를 통해 운영 효율을 높입니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
