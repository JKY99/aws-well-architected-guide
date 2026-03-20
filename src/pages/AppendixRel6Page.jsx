import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Page() {
  return (
    <article className="doc-content">
      <h1>REL 6 — 수요 변화에 어떻게 적응합니까?</h1>

      <p>
        수요 변화에 따라 리소스를 자동으로 확장하거나 축소하여
        성능을 유지하면서 비용을 최적화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp01">REL06-BP01: 수요에 따른 자동 조정 사용</Link></strong><br />
          <span>AWS Auto Scaling을 사용하여 EC2, ECS, DynamoDB 등의 리소스를 자동으로 확장/축소합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp02">REL06-BP02: 일정 기반 자동 조정</Link></strong><br />
          <span>예측 가능한 트래픽 패턴(영업시간, 마케팅 이벤트 등)에 대해 스케줄 기반 스케일링을 설정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp03">REL06-BP03: 예측 조정 사용</Link></strong><br />
          <span>AWS Auto Scaling의 예측 조정을 사용하여 과거 데이터를 기반으로 수요를 예측하고 사전에 리소스를 프로비저닝합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp04">REL06-BP04: 자동 응답 자동화</Link></strong><br />
          <span>CloudWatch Alarm과 AWS Lambda, Systems Manager Automation을 연계하여 임계값 초과 시 자동으로 복구 조치가 실행되도록 합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp05">REL06-BP05: 로그 분석</Link></strong><br />
          <span>Amazon CloudWatch Logs Insights, AWS OpenSearch Service를 사용하여 로그를 분석하고 장애 패턴을 식별합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp06">REL06-BP06: 모니터링 범위 및 지표 정기 검토</Link></strong><br />
          <span>워크로드가 변경될 때마다 모니터링 대상과 임계값을 재검토하여 모니터링 커버리지가 유효한지 확인합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel6/bp07">REL06-BP07: 시스템 전반의 요청 추적 모니터링</Link></strong><br />
          <span>AWS X-Ray를 사용하여 분산 시스템에서 요청의 전체 경로를 추적하고 성능 병목과 오류 지점을 파악합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
