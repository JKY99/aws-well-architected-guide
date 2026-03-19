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
          <strong>REL06-BP01:</strong> 수요에 따른 자동 조정 사용<br />
          <span>AWS Auto Scaling을 사용하여 EC2, ECS, DynamoDB 등의 리소스를 자동으로 확장/축소합니다.</span>
        </li>
        <li>
          <strong>REL06-BP02:</strong> 일정 기반 자동 조정<br />
          <span>예측 가능한 트래픽 패턴(영업시간, 마케팅 이벤트 등)에 대해 스케줄 기반 스케일링을 설정합니다.</span>
        </li>
        <li>
          <strong>REL06-BP03:</strong> 예측 조정 사용<br />
          <span>AWS Auto Scaling의 예측 조정을 사용하여 과거 데이터를 기반으로 수요를 예측하고 사전에 리소스를 프로비저닝합니다.</span>
        </li>
        <li>
          <strong>REL06-BP04:</strong> 수요 관리<br />
          <span>요청 스로틀링, 큐잉을 통해 수요를 평준화하여 갑작스러운 트래픽 급증에 대한 복원력을 높입니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
