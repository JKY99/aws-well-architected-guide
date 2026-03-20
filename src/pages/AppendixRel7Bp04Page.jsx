import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel7Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL07-BP04 — Amazon DynamoDB 처리량 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 DynamoDB 처리량 초과로 인한 ProvisionedThroughputExceededException 오류나 불필요한 과다 프로비저닝 비용이 발생할 수 있습니다.</p>
      </div>
      <p>DynamoDB의 처리량 관리는 온디맨드 모드와 프로비저닝 모드의 적절한 선택, DAX 캐시 활용, 핫 파티션 방지를 통해 워크로드 요구사항을 만족하면서 비용을 최적화합니다.</p>
      <h2>원하는 결과</h2>
      <p>DynamoDB 테이블이 워크로드 요구사항에 맞는 처리량 모드로 운영되며, 처리량 초과 오류 없이 모든 읽기/쓰기 요청이 처리됩니다. 핫 파티션 없이 데이터가 균등하게 분산되고, 빈번한 읽기는 DAX를 통해 마이크로초 수준의 응답 시간을 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>균등하지 않은 파티션 키 선택으로 특정 파티션에 트래픽 집중(핫 파티션)</li>
        <li>트래픽 패턴이 예측 불가능한데 프로비저닝 모드로 설정하여 처리량 초과 오류 발생</li>
        <li>캐시 적용 없이 동일한 항목을 반복적으로 읽어 불필요한 읽기 용량 소비</li>
        <li>Auto Scaling 없는 프로비저닝 모드로 피크 수요에 대비한 과다 프로비저닝</li>
        <li>스캔 작업을 과도하게 사용하여 전체 테이블 읽기 용량 소비</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>온디맨드 모드로 예측 불가능한 트래픽에 자동 대응하여 처리량 오류 제거</li>
        <li>DAX 캐시로 읽기 집약적 워크로드의 응답 시간을 밀리초에서 마이크로초로 개선</li>
        <li>핫 파티션 방지 설계로 전체 처리량을 균등하게 활용</li>
        <li>DynamoDB Auto Scaling으로 프로비저닝 모드에서도 자동 용량 조정</li>
        <li>쿼리 패턴 최적화로 읽기/쓰기 용량 단위 소비 최소화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>트래픽 패턴이 예측 불가능하거나 간헐적인 경우 온디맨드 모드 선택, 예측 가능한 경우 Auto Scaling과 함께 프로비저닝 모드 선택</li>
        <li>파티션 키는 카디널리티(cardinality)가 높은 속성(UUID, 사용자 ID 등)을 선택하여 균등 분산</li>
        <li>핫 파티션 위험이 있는 경우 파티션 키에 접미사를 추가하는 샤딩 전략 적용</li>
        <li>읽기 집약적 워크로드에는 Amazon DAX를 배포하여 DynamoDB 읽기 용량 80-90% 절감</li>
        <li>DynamoDB Auto Scaling을 활성화하여 소비량에 따라 프로비저닝 용량 자동 조정</li>
        <li>GSI(Global Secondary Index)에도 충분한 처리량 할당 및 Auto Scaling 적용</li>
        <li>CloudWatch의 ConsumedReadCapacityUnits 및 ThrottledRequests 지표 모니터링 및 알람 설정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon DynamoDB — 완전 관리형 NoSQL 데이터베이스</li>
        <li>Amazon DynamoDB Accelerator (DAX) — 인메모리 캐시 클러스터</li>
        <li>DynamoDB Auto Scaling — 용량 단위 자동 조정</li>
        <li>Amazon CloudWatch — DynamoDB 처리량 지표 모니터링</li>
        <li>AWS Cost Explorer — DynamoDB 비용 분석 및 최적화</li>
        <li>NoSQL Workbench for DynamoDB — 데이터 모델 설계 및 최적화 도구</li>
      </ul>
      <PageNav />
    </article>
  );
}
