import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus3Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SUS03-BP01 — 비동기 및 예약 패턴 최적화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>비동기 처리와 예약 작업을 활용하여 리소스 활용도를 높이고 에너지 효율성을 개선합니다. 요청이 즉시 처리될 필요가 없는 경우 큐나 이벤트 기반 아키텍처를 사용하면 피크 시간대 리소스 낭비를 줄일 수 있습니다. 예약된 배치 작업은 전력 비용이 낮은 시간대나 재생 에너지 사용률이 높은 시간대에 실행하도록 최적화할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>비동기 패턴과 예약 작업을 통해 컴퓨팅 리소스의 사용률을 균등하게 분산하고, 유휴 리소스를 최소화하여 전체 에너지 소비를 줄입니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 작업을 동기식으로 처리하여 피크 시간대에 과도한 리소스를 프로비저닝합니다.</li>
        <li>배치 작업을 전력 소비가 높은 피크 시간대에 무작위로 실행합니다.</li>
        <li>폴링 방식으로 지속적인 CPU 사이클을 낭비합니다.</li>
        <li>이벤트 기반 처리 대신 항상 대기 중인 서버를 유지합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>컴퓨팅 리소스의 활용률이 향상되어 전체 에너지 소비가 감소합니다.</li>
        <li>피크 부하 처리를 위한 과도한 프로비저닝 필요성이 줄어듭니다.</li>
        <li>저탄소 전력이 풍부한 시간대에 작업을 예약하여 탄소 발자국을 줄입니다.</li>
        <li>인프라 비용과 운영 비용이 함께 감소합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon SQS나 Amazon EventBridge를 사용하여 작업을 비동기적으로 처리합니다.</li>
        <li>AWS Lambda와 이벤트 기반 아키텍처로 필요할 때만 컴퓨팅 리소스를 사용합니다.</li>
        <li>Amazon EventBridge Scheduler로 배치 작업을 에너지 효율적인 시간대에 예약합니다.</li>
        <li>AWS Step Functions으로 장기 실행 워크플로우를 비동기 방식으로 오케스트레이션합니다.</li>
        <li>Carbon-aware computing 원칙을 적용하여 탄소 집약도가 낮은 지역과 시간대를 선택합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon SQS — 메시지 큐 기반 비동기 처리</li>
        <li>Amazon EventBridge — 이벤트 기반 아키텍처 및 스케줄링</li>
        <li>AWS Lambda — 서버리스 이벤트 기반 컴퓨팅</li>
        <li>AWS Step Functions — 서버리스 워크플로우 오케스트레이션</li>
        <li>AWS Batch — 배치 컴퓨팅 작업 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
