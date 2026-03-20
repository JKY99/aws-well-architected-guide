import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus2Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SUS02-BP01 — 워크로드 인프라를 동적으로 확장</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        클라우드의 탄력성을 활용하여 인프라를 동적으로 확장·축소함으로써 클라우드 리소스 공급을
        수요에 맞추고 워크로드의 과잉 프로비저닝된 용량을 방지합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        클라우드 리소스 공급을 수요에 효율적으로 맞추고 과잉 프로비저닝된 용량을 방지합니다.
        수요 급증 중 및 이후에 용량을 자동으로 조정하고 비즈니스 요구사항을 충족하는 데
        필요한 정확한 수의 리소스만 사용합니다. 워크로드의 최저 환경적 영향을 달성합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사용자 부하에 맞게 인프라를 확장하지 않는 경우</li>
        <li>항상 인프라를 수동으로 확장하는 경우</li>
        <li>스케일링 이벤트 후 용량을 다시 축소하지 않고 증가된 용량을 그대로 유지하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>클라우드 리소스 공급을 수요에 효율적으로 맞춤</li>
        <li>과잉 프로비저닝된 용량 방지</li>
        <li>수요 급증 시 클라우드 탄력성을 활용한 자동 확장</li>
        <li>최적의 리소스 활용을 통한 환경적 영향 최소화</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>스케일링 지표를 모니터링하고 용량을 자동으로 조정하는 목표 추적(Target-tracking) 방식을 적용합니다.</li>
        <li>일일·주간 트렌드를 예측하여 사전에 확장하는 예측 스케일링(Predictive Scaling)을 사용합니다.</li>
        <li>예측 가능한 부하 변화에 따라 스케일링 일정을 설정하는 일정 기반 방식을 활용합니다.</li>
        <li>서버리스 또는 네이티브 자동 스케일링 기능이 있는 서비스를 사용합니다.</li>
        <li>낮은 활용 기간을 파악하고 해당 시간대에 리소스를 축소합니다.</li>
        <li>스케일 인·아웃 이벤트를 테스트하여 사용자 경험 저하를 방지합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling — 애플리케이션 부하에 맞는 EC2 인스턴스 수 검증</li>
        <li>Application Auto Scaling — EC2 이외의 AWS 서비스(Lambda, ECS 등) 확장</li>
        <li>Kubernetes Cluster Autoscaler / Karpenter — AWS에서 Kubernetes 클러스터 자동 확장</li>
        <li>Amazon DynamoDB — 수요에 맞는 읽기·쓰기 용량 단위 구성</li>
        <li>Amazon Kinesis Data Streams — 수요에 맞는 샤드 확장</li>
        <li>AWS Lambda — 설계상 서버리스 확장</li>
      </ul>

      <PageNav />
    </article>
  );
}
