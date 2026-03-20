import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost6Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST06-BP03 — 메트릭 기반 리소스 유형, 크기, 수량 자동 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>메트릭과 자동화를 사용하여 필요에 따라 리소스를 동적으로 조정합니다. 수동 개입 없이 수요 변화에 맞게 리소스를 자동으로 확장 또는 축소합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드 수요에 따라 리소스가 자동으로 조정되어 최적의 비용 효율성을 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>고정된 수의 리소스를 항상 실행합니다.</li>
        <li>수동 조정으로 인해 리소스 최적화가 지연됩니다.</li>
        <li>피크 시간과 비피크 시간에 동일한 용량을 유지합니다.</li>
        <li>자동 스케일링 없이 과도하게 프로비저닝합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수요에 맞게 리소스가 자동으로 조정되어 비용이 최적화됩니다.</li>
        <li>사용하지 않는 시간에 리소스 비용이 줄어듭니다.</li>
        <li>수동 운영 부담이 감소합니다.</li>
        <li>서비스 품질을 유지하면서 비용을 최소화합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Auto Scaling 구성: EC2 Auto Scaling Groups를 사용하여 수요에 따라 인스턴스를 자동으로 조정합니다.</li>
        <li>컨테이너 자동 스케일링: ECS/EKS의 자동 스케일링을 활용합니다.</li>
        <li>서버리스 활용: Lambda와 같은 서버리스 서비스로 인프라 관리를 최소화합니다.</li>
        <li>스케줄 기반 스케일링: 예측 가능한 트래픽 패턴에 대해 스케줄 기반 스케일링을 사용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling</li>
        <li>AWS Lambda</li>
        <li>Amazon ECS</li>
        <li>Amazon EKS</li>
        <li>Amazon DynamoDB Auto Scaling</li>
      </ul>
      <PageNav />
    </article>
  );
}
