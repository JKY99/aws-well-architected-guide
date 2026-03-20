import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus6Page() {
  return (
    <article className="doc-content">
      <h1>SUS 6 — 조직 프로세스가 지속 가능성 목표를 어떻게 지원합니까?</h1>

      <p>
        개발, 테스트, 배포 관행에 대한 개선을 통해 지속 가능성 영향을 줄입니다.
        조직 내 프로세스와 문화 변화를 통해 지속 가능성 목표를 달성합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/sustainability/sus6/bp01">SUS06-BP01: 지속 가능성 목표 소통 및 전파</Link></strong><br />
          <span>IT 팀은 회사의 지속 가능성 목표를 명확하게 이해하고 이를 운영 전반에 전파해야 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus6/bp02">SUS06-BP02: 지속 가능성 개선을 신속하게 도입할 수 있는 방법 채택</Link></strong><br />
          <span>잠재적 개선 사항을 검증하고 테스트 비용을 최소화하며 소규모 개선 사항을 제공하는 방법과 프로세스를 채택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus6/bp03">SUS06-BP03: 워크로드를 최신 상태로 유지</Link></strong><br />
          <span>효율적인 기능을 채택하고 문제를 해결하며 워크로드의 전반적인 효율성을 개선하기 위해 워크로드를 최신 상태로 유지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus6/bp04">SUS06-BP04: 빌드 환경 활용도 증가</Link></strong><br />
          <span>자동화와 코드로서의 인프라를 사용하여 필요 시 빌드 환경을 시작하고 미사용 시 종료하여 리소스 활용도를 높입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus6/bp05">SUS06-BP05: 테스트에 관리형 디바이스 팜 사용</Link></strong><br />
          <span>관리형 디바이스 팜을 사용하여 대표적인 하드웨어 세트에서 새 기능을 효율적으로 테스트합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
