import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function CostManageDemandPage() {
  return (
    <article className="doc-content">
      <h1>비용 최적화 — 수요와 공급 자원 관리</h1>

      <p>
        클라우드에서는 필요한 시점에 워크로드 수요에 맞게 리소스를 공급하여
        과도한 프로비저닝을 없앨 수 있습니다.
        또한 스로틀, 버퍼, 큐를 활용하여 수요를 평준화하고 더 적은 리소스로 처리할 수 있습니다.
      </p>

      <div className="doc-note">
        <div className="doc-note-title">핵심 고려사항</div>
        <p>
          저스트인타임 공급의 경제적 이점을 리소스 장애 대비 프로비저닝,
          고가용성 확보, 프로비저닝 소요 시간과 균형있게 조율해야 합니다.
        </p>
      </div>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>COST09-BP01:</strong> 워크로드 수요 분석 수행
        </li>
        <li>
          <strong>COST09-BP02:</strong> 수요 관리를 위한 버퍼 또는 스로틀 구현
        </li>
        <li>
          <strong>COST09-BP03:</strong> 동적 리소스 공급
        </li>
      </ul>

      <h2>관련 AWS 서비스</h2>
      <ul>
        <li>AWS Auto Scaling — 수요에 따른 자동 확장/축소</li>
        <li>Amazon SQS — 메시지 큐로 수요 평준화</li>
        <li>AWS Lambda — 이벤트 기반 서버리스 컴퓨팅</li>
      </ul>

      <PageNav />
    </article>
  );
}
