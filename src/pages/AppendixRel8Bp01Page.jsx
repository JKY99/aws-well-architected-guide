import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL08-BP01 — 배포와 같은 표준 활동에 런북 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        런북은 특정 결과를 달성하기 위해 설계된 사전 정의된 절차입니다.
        워크로드 배포, 패치, DNS 수정 등 표준 활동을 수동 또는 자동으로 수행하는 데 사용합니다.
        배포 중에 롤백 안전성을 확보하는 것이 서비스 신뢰성에 매우 중요합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        런북은 잘 이해된 이벤트에 대해 문서화된 절차를 통해 일관되고 신속한 대응을 확립합니다.
        변경 계획은 영향받는 모든 시스템에 대한 인식을 보장하여 변경을 성공적으로 실행하는 능력을 높입니다.
        배포를 고객 중단 없이 롤백할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>프로덕션에서 구성을 계획되지 않은 방식으로 변경</li>
        <li>더 빠르게 배포하기 위해 배포 계획의 단계를 건너뛰어 배포 실패 초래</li>
        <li>변경 되돌리기를 테스트하지 않고 변경(롤백 검증 없음)</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>효과적인 변경 계획으로 영향받는 모든 시스템에 대한 인식을 보장하여 변경 성공 가능성 향상</li>
        <li>테스트 환경에서 검증으로 프로덕션 변경 전 신뢰도 향상</li>
        <li>잘 이해된 이벤트에 대한 일관된 대응</li>
        <li>배포 롤백 안전성 확보로 서비스 신뢰성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>절차를 런북에 문서화하여 잘 이해된 이벤트에 대한 일관되고 신속한 대응 제공</li>
        <li>IaC(인프라스트럭처 코드) 원칙 적용: AWS CloudFormation을 사용하여 인프라 정의, 버전 관리에 인프라 정의 저장</li>
        <li>단일하고 분리된 템플릿을 좋은 소프트웨어 설계 원칙을 사용하여 생성, 구현을 위한 권한, 템플릿, 담당자 결정</li>
        <li>소스 코드 관리 시스템(Git 기반)을 사용하여 소스 코드와 IaC 구성 저장</li>
        <li>유효하고 효과적인 수동 프로세스로 시작 → 코드로 구현 → 적절한 경우 자동으로 실행되도록 호출하는 프로세스 흐름 따르기</li>
        <li>런북(표준 활동)과 플레이북(인시던트 대응) 구분: 런북은 특정 결과를 달성하기 위한 루틴 활동에 사용, 플레이북은 특정 인시던트 및 비루틴 이벤트에 대응하는 데 사용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation (인프라스트럭처 코드)</li>
        <li>AWS Systems Manager (자동화 문서 및 런북)</li>
        <li>AWS CodePipeline (배포 파이프라인)</li>
        <li>AWS Identity and Access Management (IAM)</li>
      </ul>
      <PageNav />
    </article>
  );
}
