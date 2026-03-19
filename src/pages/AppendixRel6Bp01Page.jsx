import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP01 — 수요에 따른 자동 조정 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>AWS Auto Scaling을 사용하여 실제 수요에 따라 리소스를 자동으로 추가하거나 제거하여 성능과 비용을 최적화합니다.</p>
      <h2>원하는 결과</h2>
      <p>수요 변화에 자동으로 대응하여 성능은 유지하고 불필요한 비용은 최소화합니다. 트래픽 증가 시 자동으로 리소스를 추가하고, 수요 감소 시 자동으로 리소스를 제거하여 최적의 비용 효율성을 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수동 스케일링으로 인해 용량 변경에 지연이 발생하고 운영팀 부담 증가</li>
        <li>최대 부하에 맞춰 항상 과도하게 프로비저닝하여 불필요한 비용 발생</li>
        <li>스케일링 지표 미설정으로 실제 수요와 용량 간의 불일치 지속</li>
        <li>스케일 인/아웃 쿨다운 미설정으로 과도한 스케일링 발생</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자동 용량 관리로 운영팀 개입 없이 수요 변화에 대응</li>
        <li>비용 최적화 — 수요에 맞는 적정 리소스만 사용</li>
        <li>성능 유지 — 트래픽 증가 시에도 응답 시간 안정적으로 유지</li>
        <li>고가용성 향상 — 장애 인스턴스 자동 교체</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>EC2 Auto Scaling 그룹을 설정하고 최소/최대/희망 용량을 구성</li>
        <li>목표 추적 조정 정책(Target Tracking Scaling Policy)을 사용하여 특정 메트릭 목표값 유지</li>
        <li>CPU 사용률, 요청 수(RPS), 대기열 길이 등 적절한 스케일링 지표 선택</li>
        <li>ECS, Lambda, DynamoDB 등 다양한 서비스에 Application Auto Scaling 적용</li>
        <li>스케일링 활동을 CloudWatch로 모니터링하여 정책 최적화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Auto Scaling — 여러 서비스에 걸친 통합 스케일링 관리</li>
        <li>Amazon EC2 Auto Scaling — EC2 인스턴스 자동 스케일링</li>
        <li>Amazon ECS Auto Scaling — 컨테이너 서비스 자동 스케일링</li>
        <li>AWS Lambda — 자동으로 수요에 맞게 확장되는 서버리스 컴퓨팅</li>
      </ul>
      <PageNav />
    </article>
  );
}
