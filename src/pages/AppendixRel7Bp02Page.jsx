import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel7Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL07-BP02 — 워크로드 장애 감지 시 리소스 확보</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        장애 또는 저하된 고객 경험이 감지될 때 가용성을 복원하기 위해 스케일링 활동(자동 또는 수동)을 시작합니다.
        가용성이 불충분한 리소스로 인해 영향을 받을 때를 감지하는 상태 확인 기준을 정의하여
        가용성을 복원하기 위한 스케일링을 트리거합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        장애 또는 저하된 고객 경험 감지 시 가용성을 복원하기 위해 스케일링 활동(자동 또는 수동)이 시작됩니다.
      </p>
      <h2>구현 지침</h2>
      <ul>
        <li>관측 가능성 및 모니터링 구현: 워크로드의 모든 구성 요소를 모니터링하여 장애를 감지하고, 고객 경험 지표를 모니터링하며, 리소스 장애를 파악하기 위한 상태 확인 기준 정의</li>
        <li>스케일링 절차 정의: 워크로드 구성 요소 설계와 기본 기술에 따라 수동 및 자동화 스케일링 프로세스를 문서화</li>
        <li>AWS Auto Scaling 사용: 스케일링 계획을 사용하여 리소스 스케일링 지침을 구성하고, AWS CloudFormation 태깅 지원, 동적 및 예측 스케일링 방법 결합</li>
        <li>Amazon EC2 Auto Scaling: 최소/최대 인스턴스 수가 정의된 Auto Scaling 그룹을 생성하여 애플리케이션 부하에 맞는 올바른 인스턴스 수를 자동으로 유지</li>
        <li>Amazon DynamoDB Auto Scaling: Application Auto Scaling 서비스를 사용하여 실제 트래픽 패턴에 따라 프로비저닝된 처리량 용량을 동적으로 조정하고 조절 없이 트래픽 급증 처리</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Auto Scaling</li>
        <li>Amazon EC2 Auto Scaling</li>
        <li>Amazon DynamoDB Auto Scaling</li>
        <li>Application Auto Scaling</li>
        <li>AWS CloudFormation</li>
        <li>Amazon CloudWatch (상태 확인 및 경보)</li>
      </ul>
      <PageNav />
    </article>
  );
}
