import { Link } from "react-router-dom";
import "../components/DocContent.css";

export default function AppendixRel7Page() {
  return (
    <article className="doc-content">
      <h1>REL 7. 수요 변화에 어떻게 적응합니까?</h1>

      <p>
        수요 변화에 따라 리소스를 자동으로 확장하거나 축소하여
        성능을 유지하면서 비용을 최적화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel7/bp01">REL07-BP01: 리소스를 확보하거나 확장할 때 자동화 사용</Link></strong><br />
          <span>인프라를 코드로 관리하고, CI/CD 파이프라인을 사용하여 리소스 프로비저닝을 자동화합니다. Auto Scaling을 통해 수요에 따라 리소스를 자동으로 확장 또는 축소합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel7/bp02">REL07-BP02: 워크로드 장애 감지 시 리소스 확보</Link></strong><br />
          <span>가용성이 영향을 받을 때 워크로드 가용성을 복원하기 위해 스케일링 활동(자동 또는 수동)을 시작합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel7/bp03">REL07-BP03: 워크로드에 더 많은 리소스가 필요함을 감지 시 리소스 확보</Link></strong><br />
          <span>컴퓨팅 및 기타 리소스의 자동 확장을 구성하여 수요를 충족합니다. 추가 리소스가 온라인으로 전환되는 동안 트래픽 급증을 허용할 충분한 여유를 확보합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel7/bp04">REL07-BP04: 워크로드 부하 테스트</Link></strong><br />
          <span>부하 테스트 방법론을 채택하여 스케일링 활동이 워크로드 요구사항을 충족하는지 측정합니다. 아키텍처의 어떤 구성 요소가 부하 하에서 실패하는지 파악합니다.</span>
        </li>
      </ul>

    </article>
  );
}
