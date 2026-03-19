import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus6Page() {
  return (
    <article className="doc-content">
      <h1>SUS 6 — 개발 및 배포 프로세스에서 지속 가능성을 어떻게 달성합니까?</h1>

      <p>
        개발 및 배포 프로세스에 지속 가능성 원칙을 통합하고
        조직 전체에 지속 가능성 문화를 구축합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/sustainability/sus6/bp01">SUS06-BP01: 각 팀에 지속 가능성 목표 채택</Link></strong><br />
          <span>개발팀과 운영팀이 지속 가능성을 KPI로 채택하고 팀 목표에 반영합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus6/bp02">SUS06-BP02: 개발자를 위한 교육 자원 개발</Link></strong><br />
          <span>지속 가능한 소프트웨어 개발 방법에 대한 교육 자료를 개발하고 공유합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus6/bp03">SUS06-BP03: 디바이스 팜에서 지속 가능성 테스트</Link></strong><br />
          <span>다양한 기기에서 애플리케이션의 에너지 효율성을 테스트하여 사용자 기기의 배터리 소모를 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus6/bp04">SUS06-BP04: 빌드 환경 활용도 증가</Link></strong><br />
          <span>CI/CD 파이프라인의 빌드 인프라를 효율적으로 사용하여 에너지 낭비를 줄입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus6/bp05">SUS06-BP05: 지속 가능성을 위한 배포 전략 사용</Link></strong><br />
          <span>불필요한 중복 환경을 줄이는 배포 전략을 선택하여 배포 중 에너지 사용을 최소화합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
