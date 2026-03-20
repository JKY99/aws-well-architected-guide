import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel13Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL13-BP04 — DR 사이트 또는 리전의 구성 드리프트 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 DR 환경이 프로덕션과 불일치하여 실제 복구 시 예상치 못한 문제가 발생할 수 있습니다.</p>
      </div>
      <p>
        DR 환경이 프로덕션 환경과 동기화된 상태를 유지해야 합니다.
        구성 드리프트(configuration drift)가 발생하면 실제 재해 시 DR 환경으로 전환했을 때
        애플리케이션이 정상적으로 동작하지 않을 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        DR 환경이 항상 프로덕션 환경과 동일한 구성을 유지합니다.
        프로덕션 변경 시 자동으로 DR 환경도 업데이트됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>프로덕션 환경을 변경할 때 DR 환경은 수동으로 업데이트하는 경우</li>
        <li>DR 환경을 처음 구성한 후 장기간 업데이트하지 않아 큰 드리프트가 발생하는 경우</li>
        <li>애플리케이션 버전은 동기화하지만 인프라 구성(보안 그룹, IAM 역할 등)은 동기화하지 않는 경우</li>
        <li>DR 환경에 비용 절감을 위해 다른 인스턴스 유형을 사용하여 성능 차이가 발생하는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>DR 전환 후 예상치 못한 구성 불일치 문제 방지</li>
        <li>DR 테스트의 신뢰성 향상</li>
        <li>운영 부담 감소(자동화된 동기화)</li>
      </ul>
      <h2>구현 지침</html2>
      <ul>
        <li>AWS CloudFormation StackSets를 사용하여 프로덕션과 DR 리전에 동일한 인프라를 배포합니다.</li>
        <li>CI/CD 파이프라인에 DR 리전 배포를 포함하여 프로덕션 배포와 동시에 DR 환경도 업데이트합니다.</li>
        <li>AWS Config를 사용하여 DR 환경과 프로덕션 환경의 구성 일치 여부를 자동으로 확인합니다.</li>
        <li>AMI(Amazon Machine Image)를 중앙에서 관리하고 두 리전에 동일한 AMI를 사용합니다.</li>
        <li>컨테이너 이미지를 ECR에서 크로스 리전으로 복제하여 동일한 이미지를 DR 리전에서 사용합니다.</li>
        <li>월별로 DR 환경과 프로덕션 환경의 구성 차이를 검토하고 동기화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation StackSets — 멀티 리전 인프라 동기화</li>
        <li>AWS Config — 구성 일치 여부 자동 확인</li>
        <li>Amazon ECR — 컨테이너 이미지 크로스 리전 복제</li>
        <li>AWS CodePipeline — DR 리전 포함한 CI/CD 파이프라인</li>
        <li>AWS Systems Manager Parameter Store — 파라미터 크로스 리전 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
