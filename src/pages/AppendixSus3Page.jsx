import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus3Page() {
  return (
    <article className="doc-content">
      <h1>SUS 3 — 소프트웨어 및 아키텍처 패턴을 어떻게 지속 가능성 목표에 활용합니까?</h1>

      <p>
        소프트웨어 패턴과 아키텍처를 활용하여 지속 가능성 목표를 지원합니다.
        배포된 리소스의 일관되게 높은 활용률을 유지하고 컴포넌트를 최적화하여
        환경적 영향을 줄입니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/sustainability/sus3/bp01">SUS03-BP01: 비동기 및 예약 작업을 위한 소프트웨어 및 아키텍처 최적화</Link></strong><br />
          <span>큐 기반과 같은 효율적인 소프트웨어 및 아키텍처 패턴을 사용하여 배포된 리소스의 일관되게 높은 활용률을 유지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus3/bp02">SUS03-BP02: 사용률이 낮거나 없는 워크로드 컴포넌트 제거 또는 리팩터링</Link></strong><br />
          <span>사용되지 않는 컴포넌트를 제거하고 활용률이 낮은 컴포넌트를 리팩터링하여 워크로드의 낭비를 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus3/bp03">SUS03-BP03: 가장 많은 시간이나 리소스를 소비하는 코드 영역 최적화</Link></strong><br />
          <span>아키텍처 내 다양한 컴포넌트에서 실행되는 코드를 최적화하여 성능을 극대화하면서 리소스 사용을 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus3/bp04">SUS03-BP04: 디바이스 및 장비에 대한 영향 최적화</Link></strong><br />
          <span>아키텍처에서 사용되는 디바이스와 장비를 파악하고 사용을 줄이는 전략을 사용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus3/bp05">SUS03-BP05: 데이터 액세스 및 스토리지 패턴을 가장 잘 지원하는 소프트웨어 패턴 및 아키텍처 사용</Link></strong><br />
          <span>워크로드에서 데이터가 사용·소비·전송·저장되는 방식을 이해하고 이를 최적으로 지원하는 소프트웨어 패턴과 아키텍처를 사용합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
