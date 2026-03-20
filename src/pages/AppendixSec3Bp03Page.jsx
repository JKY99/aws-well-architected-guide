import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP03 — 긴급 액세스 프로세스 수립</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 긴급 상황 시 적시 대응이 어려워 서비스 가용성에 영향을 줄 수 있습니다.</p>
      </div>
      <p>
        일반 접근 메커니즘 장애 시 사용할 긴급 접근 프로세스를 수립합니다. 각 장애 모드에 특화된 긴급 접근 프로세스를 문서화하고, 신속한 실행을 위한 상세 지침과 플레이북을 작성합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>긴급 상황에 해당하는 장애 모드가 정의되고 문서화됨</li>
        <li>장애를 긴급 상황으로 확인하는 절차 문서화</li>
        <li>각 장애 모드 유형에 특화된 긴급 접근 프로세스 보유</li>
        <li>상세 지침과 플레이북이 포함된 문서화된 프로세스</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>잘 문서화되고 테스트된 긴급 접근 프로세스 부재</li>
        <li>일반 접근과 동일한 시스템에 의존하는 긴급 접근 프로세스</li>
        <li>비긴급 상황에서 긴급 접근 프로세스 남용</li>
        <li>긴급 접근 프로세스에 대한 불충분한 로깅/모니터링/알림</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>긴급 이벤트 대응 시간 단축으로 다운타임 감소 및 서비스 가용성 향상</li>
        <li>긴급 접근 요청 추적 및 미승인 남용 시도 탐지 능력</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>IAM 사용자 또는 루트 사용자를 사용하는 전용 긴급 접근 AWS 계정을 사전 생성합니다.</li>
        <li>긴급 접근에 필요한 리소스를 사전 생성하고(컨트롤 플레인 API 의존성 방지), 기존 워크플로 시스템에 승인 메커니즘이 포함된 긴급 접근 요청 프로세스를 정의합니다.</li>
        <li>모든 접근 시도에 대한 강력한 로깅, 모니터링, 알림을 구현합니다.</li>
        <li>인시던트 대응 시뮬레이션과 재해 복구 테스트의 일부로 프로세스를 주기적으로 테스트합니다.</li>
        <li>CloudFormation StackSets와 AWS Organizations를 사용하여 교차 계정 IAM 역할을 생성합니다.</li>
        <li>긴급 계정에 CloudTrail을 활성화하고 중앙 S3 버킷으로 이벤트를 전송합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM — 긴급 역할 및 사용자 관리</li>
        <li>AWS CloudTrail — 긴급 접근 활동 감사 로깅</li>
        <li>Amazon EventBridge — 콘솔 로그인 및 API 활동 모니터링</li>
        <li>AWS CloudFormation StackSets — 교차 계정 IAM 역할 자동화</li>
        <li>AWS Organizations — 다중 계정 관리 및 SCP</li>
        <li>AWS Security Hub — 보안 발견사항 통합</li>
      </ul>
      <PageNav />
    </article>
  );
}
