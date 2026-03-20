import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel13Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL13-BP04 — DR 사이트 또는 리전의 구성 드리프트 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        재해 복구 사이트의 구성과 데이터가 기본 사이트와 동등한 상태를 유지하도록 하여
        필요 시 신속하고 완전한 복구를 가능하게 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        재해 복구 사이트의 구성과 데이터가 기본 사이트와 동등한 상태를 유지하여
        필요 시 신속하고 완전한 복구가 가능합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>복구 위치 업데이트 실패: 기본 위치에 변경이 있을 때 복구 위치를 업데이트하지 않아 장애 조치 중 방해가 되는 오래된 구성 발생</li>
        <li>서비스 차이점 무시: 기본 위치와 복구 위치 간의 서비스 차이점 등 잠재적 제한을 고려하지 않아 장애 조치 중 예상치 못한 장애 발생</li>
        <li>수동 프로세스에 의존: DR 환경의 수동 업데이트 및 동기화로 인적 오류 및 불일치 위험 증가</li>
        <li>구성 드리프트 감지 실패: 인시던트 전에 DR 사이트 준비 상태에 대한 잘못된 인식 생성</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>인시던트 후 성공적인 복구 가능성 크게 향상</li>
        <li>실패한 복구 절차 위험 감소</li>
        <li>DR 환경과 기본 환경 간의 일관성 보장</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>DR 리전 기능 검증: DR 리전에 성공적인 DR 계획 실행에 필요한 모든 AWS 서비스 및 기능이 포함되어 있는지 확인</li>
        <li>인프라 코드(IaC) 사용: 프로덕션 인프라 및 애플리케이션 구성 템플릿을 정확하게 유지하고 DR 환경에 정기적으로 적용(AWS CloudFormation 드리프트 감지 활용)</li>
        <li>CI/CD 파이프라인 구성: 모든 환경(기본 및 DR)에 애플리케이션 및 인프라 업데이트 배포(AWS CodePipeline으로 자동화)</li>
        <li>스태거드 배포: 기본 환경에 먼저 업데이트 배포 후 테스트, 그 다음 DR에 전파. 결함이 프로덕션과 DR에 동시에 영향을 미치지 않도록 방지</li>
        <li>리소스 구성 지속적 모니터링: 기본 및 DR 환경 모두 모니터링(AWS Config로 구성 준수 적용 및 드리프트 감지)</li>
        <li>알림 메커니즘 구현: 구성 드리프트 또는 데이터 복제 중단/지연 추적 및 알림</li>
        <li>자동화된 수정 구현: 감지된 구성 드리프트 자동 수정(AWS Systems Manager Automation, AWS Lambda)</li>
        <li>정기 감사 예약: 기본 및 DR 구성 간 일치 여부 확인을 위한 주기적 컴플라이언스 검사</li>
        <li>불일치 확인: AWS 프로비저닝 용량, 서비스 할당량, 스로틀 제한, 구성 및 버전 불일치</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation (IaC 및 드리프트 감지)</li>
        <li>AWS CloudFormation StackSets (멀티 리전/계정 배포)</li>
        <li>AWS CodePipeline (CI/CD 자동화)</li>
        <li>AWS Config (구성 컴플라이언스 모니터링 및 드리프트 감지)</li>
        <li>AWS Systems Manager Automation (자동화된 수정)</li>
        <li>Amazon CloudWatch (모니터링 및 알림)</li>
        <li>AWS Lambda (자동화된 수정 실행)</li>
      </ul>
      <PageNav />
    </article>
  );
}
