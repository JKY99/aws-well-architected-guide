import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL05-BP02 — 불변 인프라로 배포</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 환경 드리프트와 일관성 없는 배포로 인해 예측 불가능한 장애가 발생할 수 있습니다.</p>
      </div>
      <p>불변 인프라는 한 번 배포된 서버나 컴포넌트를 직접 수정하지 않고 새 버전으로 교체하는 방식입니다. Blue/Green 배포와 이미지 기반 배포를 통해 환경 일관성을 보장하고 신뢰할 수 있는 롤백을 가능하게 합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 배포가 검증된 이미지 또는 아티팩트를 기반으로 이루어지며, 운영 중인 인프라에 대한 직접 변경이 없습니다. 문제 발생 시 이전 버전으로 즉시 롤백이 가능하고, 개발·스테이징·운영 환경이 동일한 이미지를 사용하여 일관성을 유지합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>운영 중인 인스턴스에 SSH로 접속하여 직접 패치나 설정 변경을 수행</li>
        <li>배포마다 다른 설정이나 패키지 버전이 적용되어 환경 드리프트 발생</li>
        <li>이미지 기반이 아닌 스크립트로만 구성된 프로비저닝으로 재현 불가능한 환경 생성</li>
        <li>구 버전 이미지를 삭제하여 롤백 불가능한 상태 만들기</li>
        <li>컨테이너 내부에서 런타임에 패키지를 추가로 설치하는 Dockerfile</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>배포 환경 간의 일관성 확보로 "내 환경에서는 동작했는데" 문제 제거</li>
        <li>빠르고 신뢰할 수 있는 롤백 가능 — 이전 이미지로 즉시 복구</li>
        <li>보안 패치를 새 이미지로 배포하여 일관된 보안 상태 유지</li>
        <li>배포 감사 추적이 용이하며, 언제 무엇이 배포되었는지 명확히 파악</li>
        <li>Blue/Green 배포로 제로 다운타임 배포 실현</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon Machine Image(AMI) 또는 컨테이너 이미지를 기반으로 한 배포 파이프라인 구축</li>
        <li>AWS CodePipeline과 AWS CodeBuild를 활용하여 이미지 빌드 및 테스트 자동화</li>
        <li>Blue/Green 배포를 AWS CodeDeploy 또는 Amazon ECS를 통해 구현</li>
        <li>배포 완료 후 구 버전(Green)을 일정 기간 유지하여 롤백 옵션 확보</li>
        <li>EC2 Image Builder로 AMI 빌드 파이프라인 자동화 및 취약점 스캔 통합</li>
        <li>인프라 변경은 항상 코드(IaC)로만 수행하고 콘솔 직접 변경을 방지하는 SCP 적용</li>
        <li>컨테이너 이미지는 Amazon ECR에 버전 태그와 함께 저장하고 최신 이미지 외 삭제 방지 정책 설정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeDeploy — Blue/Green 및 카나리 배포 자동화</li>
        <li>EC2 Image Builder — AMI 빌드 파이프라인 및 보안 스캔</li>
        <li>Amazon ECR — 컨테이너 이미지 저장소 및 취약점 스캔</li>
        <li>AWS CodePipeline — 배포 파이프라인 오케스트레이션</li>
        <li>AWS Systems Manager — 패치 관리 및 인스턴스 상태 추적</li>
        <li>Amazon ECS / EKS — 컨테이너 기반 불변 인프라 운영</li>
      </ul>
      <PageNav />
    </article>
  );
}
