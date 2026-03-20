import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus2Page() {
  return (
    <article className="doc-content">
      <h1>SUS 2 — 클라우드 리소스를 수요에 어떻게 맞춥니까?</h1>

      <p>
        클라우드 리소스 공급을 수요에 맞게 조정하여 과잉 프로비저닝된 용량을 방지합니다.
        수요 패턴을 분석하고 탄력성을 활용하여 환경적 영향을 최소화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/sustainability/sus2/bp01">SUS02-BP01: 워크로드 인프라를 동적으로 확장</Link></strong><br />
          <span>클라우드의 탄력성을 활용하여 인프라를 동적으로 확장·축소함으로써 과잉 프로비저닝된 용량을 방지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus2/bp02">SUS02-BP02: SLA를 지속 가능성 목표에 맞게 정렬</Link></strong><br />
          <span>지속 가능성 목표에 따라 워크로드 SLA를 검토·최적화하여 비즈니스 요구를 충족하면서 필요한 리소스를 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus2/bp03">SUS02-BP03: 미사용 자산의 생성 및 유지 관리 중단</Link></strong><br />
          <span>워크로드의 미사용 자산을 폐기하여 수요를 지원하는 데 필요한 클라우드 리소스 수를 줄이고 낭비를 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus2/bp04">SUS02-BP04: 네트워킹 요구사항에 따른 워크로드의 지리적 배치 최적화</Link></strong><br />
          <span>네트워크 트래픽이 이동해야 하는 거리를 줄이는 클라우드 위치와 서비스를 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus2/bp05">SUS02-BP05: 수행 활동에 맞게 팀 구성원 리소스 최적화</Link></strong><br />
          <span>팀 구성원에게 제공되는 리소스를 최적화하여 필요를 지원하면서 환경적 지속 가능성 영향을 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus2/bp06">SUS02-BP06: 버퍼링 또는 스로틀링으로 수요 곡선 평탄화</Link></strong><br />
          <span>버퍼링과 스로틀링으로 수요 곡선을 평탄화하여 워크로드에 필요한 프로비저닝 용량을 줄입니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
