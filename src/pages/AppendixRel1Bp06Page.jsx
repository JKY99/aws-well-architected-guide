import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Bp06Page() {
  return (
    <article className="doc-content">
      <h1>REL01-BP06 — 장애 조치 수용을 위해 현재 할당량과 최대 사용량 사이에 충분한 간격 확보</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        장애 조치 시나리오를 처리하기 위해 AWS 서비스 할당량과 실제 사용량 사이에 여유 공간을 유지하십시오.
        장애로 인해 리소스에 액세스할 수 없게 되면, 대체 리소스는 기존 할당량 한도 내에서 프로비저닝되어야 합니다.
        충분한 버퍼 공간이 없으면 할당량 고갈로 인해 장애 조치 시도가 실패할 수 있습니다.
        중요 참고 사항: 네트워크 또는 권한 문제로 인해 액세스할 수 없는 활성 리소스도 서비스 할당량 한도에 계속 포함됩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        현재 서비스 임계값 내에서 소규모 또는 대규모 리소스 장애를 수용할 수 있습니다.
        영역, 네트워크, 리전 장애가 리소스 계획에 고려되어 있으며, 서비스 한도를 초과하지 않고 장애 조치 전략을 실행할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>장애 조치 시나리오를 고려하지 않고 현재 필요에 따라 서비스 할당량 설정</li>
        <li>최대 할당량 요구량 계산 시 정적 안정성 원칙 미고려</li>
        <li>총 할당량 계산에서 액세스 불가능한 리소스를 고려하지 않음</li>
        <li>AWS 서비스 장애 격리 경계 및 비정상 사용 패턴 무시</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>서비스 중단 이벤트 발생 시 장애 조치 중 추가 대체 리소스 생성 가능</li>
        <li>서비스 한도에 도달하지 않고 장애에서 복구 가능</li>
        <li>대규모 복원력 전략 구현 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>서비스 할당량과 최대 사용량 사이에 버퍼 공간 유지(예: 현재 할당량 한도 대비 15% 버퍼)</li>
        <li>일반적인 배포 패턴, 가용성 요구 사항, 성장을 고려하여 할당량 결정</li>
        <li>할당량 증가 요청에 대기 시간이 있으므로 사전에 요청 제출</li>
        <li>개별 구성 요소 손실, 가용 영역 장애, 리전 장애 등 장애 시나리오 계획</li>
        <li>영역 및 리전 중복 요구 사항을 고려한 정적 안정성 계산 포함</li>
        <li>사용량 추세를 모니터링하고 성장을 계획</li>
        <li>중요 워크로드의 장애 조치를 위해 온디맨드 용량 예약 활용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Service Quotas</li>
        <li>Amazon CloudWatch</li>
        <li>AWS Trusted Advisor</li>
        <li>Amazon EventBridge</li>
        <li>AWS Config</li>
        <li>Quota Monitor for AWS 솔루션</li>
        <li>AWS Fault Isolation Boundaries 백서</li>
      </ul>
      <PageNav />
    </article>
  );
}
