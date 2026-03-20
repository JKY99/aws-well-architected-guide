import { Link } from "react-router-dom";
import "../components/DocContent.css";

export default function AppendixOps3Page() {
  return (
    <article className="doc-content">
      <h1>OPS 3. 조직 문화가 비즈니스 성과를 어떻게 지원합니까?</h1>

      <p>
        조직 문화는 팀이 비즈니스 성과를 지원하기 위해 함께 작동하는 방식에 영향을 미칩니다.
        리더십 후원, 팀 권한 부여, 에스컬레이션 장려, 명확한 커뮤니케이션, 실험 문화, 기술 역량 개발,
        적절한 인원 배치를 통해 지속적으로 개선되는 문화를 조성합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li><Link to="/appendix/ops3/bp01">OPS03-BP01 — 경영진 후원 제공</Link></li>
        <li><Link to="/appendix/ops3/bp02">OPS03-BP02 — 결과가 위험에 처했을 때 행동을 취할 수 있도록 팀 구성원 권한 부여</Link></li>
        <li><Link to="/appendix/ops3/bp03">OPS03-BP03 — 에스컬레이션 장려</Link></li>
        <li><Link to="/appendix/ops3/bp04">OPS03-BP04 — 커뮤니케이션은 시기적절하고 명확하며 실행 가능함</Link></li>
        <li><Link to="/appendix/ops3/bp05">OPS03-BP05 — 실험 장려</Link></li>
        <li><Link to="/appendix/ops3/bp06">OPS03-BP06 — 팀 구성원이 기술 역량을 유지하고 발전시키도록 장려</Link></li>
        <li><Link to="/appendix/ops3/bp07">OPS03-BP07 — 팀에 적절한 인원 배치</Link></li>
      </ul>
    </article>
  );
}
