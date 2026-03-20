import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost9Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST09-BP03 — 동적으로 리소스 공급</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>실제 수요에 따라 리소스를 자동으로 확장하고 축소하면 항상 최소한의 비용으로 필요한 성능을 제공할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드 수요에 비례하여 리소스가 자동으로 프로비저닝되고 해제되어, 항상 최적의 비용과 성능 균형을 유지합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>리소스를 수동으로 관리하여 수요 변화에 신속하게 대응하지 못합니다.</li>
        <li>최대 부하를 기준으로 고정된 수의 인스턴스를 상시 운영합니다.</li>
        <li>Auto Scaling 정책이 없거나 너무 보수적으로 설정되어 있습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사용하지 않는 리소스에 대한 비용이 제거됩니다.</li>
        <li>수요 증가 시 자동으로 성능이 유지됩니다.</li>
        <li>운영 부담이 줄어듭니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling을 사용하여 CloudWatch 지표에 기반한 자동 확장 정책을 구성합니다.</li>
        <li>AWS Lambda, Amazon Fargate 등 서버리스 서비스를 사용하여 자동으로 수요에 맞게 확장합니다.</li>
        <li>예측 스케일링을 사용하여 과거 패턴을 기반으로 사전에 용량을 조정합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling</li>
        <li>AWS Auto Scaling</li>
        <li>AWS Lambda</li>
        <li>Amazon ECS Fargate</li>
      </ul>
      <PageNav />
    </article>
  );
}
