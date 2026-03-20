import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost9Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST09-BP03 — 리소스 동적 공급</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>수요 변화에 따라 리소스를 동적으로 공급하고 제거합니다. 오토 스케일링과 서버리스 아키텍처를 활용하여 필요한 만큼만 리소스를 사용합니다.</p>
      <h2>원하는 결과</h2>
      <p>수요에 따라 리소스가 자동으로 공급되고 제거되어 비용이 최적화됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수요와 관계없이 일정한 수의 리소스를 유지합니다.</li>
        <li>자동 스케일링을 구성하지 않습니다.</li>
        <li>서버리스 옵션을 활용하지 않습니다.</li>
        <li>비피크 시간에도 최대 용량을 유지합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사용된 리소스에 대해서만 비용을 지불합니다.</li>
        <li>수요 변화에 자동으로 대응합니다.</li>
        <li>운영 부담이 줄어듭니다.</li>
        <li>비용 효율성이 극대화됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>EC2 Auto Scaling: 수요에 따라 EC2 인스턴스를 자동으로 추가하거나 제거합니다.</li>
        <li>서버리스 전환: Lambda, Fargate 등 서버리스 서비스로 세밀한 비용 제어를 구현합니다.</li>
        <li>컨테이너 오케스트레이션: ECS/EKS의 동적 스케일링으로 컨테이너 수를 최적화합니다.</li>
        <li>예측적 스케일링: 예측 가능한 패턴에 대해 예측적 스케일링을 사용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling</li>
        <li>AWS Lambda</li>
        <li>Amazon ECS</li>
        <li>Amazon EKS</li>
        <li>AWS Fargate</li>
      </ul>
      <PageNav />
    </article>
  );
}
