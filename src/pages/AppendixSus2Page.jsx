import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus2Page() {
  return (
    <article className="doc-content">
      <h1>SUS 2 — 사용자 행동 패턴에 어떻게 맞춥니까?</h1>

      <p>
        실제 사용자 행동과 수요 패턴에 맞게 인프라를 조정하여
        유휴 리소스를 최소화하고 효율성을 극대화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/sustainability/sus2/bp01">SUS02-BP01: 사용자 행동 패턴에 따른 인프라 규모 조정</Link></strong><br />
          <span>Auto Scaling으로 실제 수요에 맞게 리소스를 자동 조정하여 유휴 용량을 줄입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus2/bp02">SUS02-BP02: SLA를 사용 패턴에 맞게 정렬</Link></strong><br />
          <span>실제 필요한 수준의 가용성과 성능 SLA를 설정하여 과도한 리소스 프로비저닝을 방지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus2/bp03">SUS02-BP03: 미사용 자산, 리소스, 서비스 제거</Link></strong><br />
          <span>정기적으로 유휴 리소스를 식별하고 제거하여 불필요한 에너지 소비를 줄입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus2/bp04">SUS02-BP04: 비활성 기간에 리소스 종료</Link></strong><br />
          <span>개발/테스트 환경을 비업무 시간에 자동으로 종료하여 에너지 사용을 절감합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus2/bp05">SUS02-BP05: 완전히 활용되는 서비스를 선택하는 IaC 사용</Link></strong><br />
          <span>Infrastructure as Code로 필요한 만큼만 정확하게 프로비저닝하여 낭비를 방지합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
