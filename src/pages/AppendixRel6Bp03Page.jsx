import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP03 — 알림 전송 (실시간 처리 및 경보)</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        서비스 및 애플리케이션 메트릭을 기반으로 관련 경보를 구성하여 빠른 대응이 가능하도록 합니다.
        알람 임계값이 초과되면 담당 인원과 시스템에 알림을 전송하여 근본 원인을 해결할 수 있게 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        서비스 및 애플리케이션 메트릭을 기반으로 관련 경보를 구성하여 운영 이벤트에 신속하게 대응합니다.
        알람 임계값이 초과되면 담당 인원과 시스템에 알림이 전송되어 근본 원인을 해결합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>너무 높은 임계값으로 경보를 구성하여 중요한 알림을 전송하지 못함</li>
        <li>너무 낮은 임계값으로 경보를 구성하여 경보 피로와 과도한 알림으로 인한 무대응 발생</li>
        <li>사용 패턴이 변경될 때 경보와 임계값을 업데이트하지 않아 경보 설정이 오래됨</li>
        <li>자동화된 조치로 가장 잘 처리되는 문제에 대해 수동 알림을 전송하여 과도한 알림 생성</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>애플리케이션 가용성에 영향을 미칠 수 있는 문제의 조기 감지</li>
        <li>운영 인시던트에 대한 신속한 대응</li>
        <li>맞춤형 대시보드 및 경보를 통한 시스템 상태 가시성 향상</li>
        <li>적시 알림을 통한 평균 복구 시간(MTTR) 단축</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch 경보를 생성하여 정적 임계값, 이상 감지 또는 기타 사용자 정의 기준을 기반으로 메트릭 및 복합 경보 설정</li>
        <li>메트릭 경보: 단일 CloudWatch 메트릭 또는 수식을 모니터링하고 임계값 초과 시 SNS 알림, EC2 작업, Auto Scaling 작업, OpsItem 또는 인시던트 시작</li>
        <li>복합 경보: 다른 경보의 조건을 고려하는 규칙 표현식으로 구성하여 경보 피로 감소</li>
        <li>Amazon SNS를 사용하여 경보 상태 변경 시 알림 전송: Lambda, SQS, HTTP/S 엔드포인트, SMS, 모바일 푸시, 이메일 등 6가지 대상 유형 지원</li>
        <li>Amazon EventBridge를 사용하여 CloudWatch 경보 이벤트(생성, 업데이트, 삭제, 상태 변경)를 수신하고 자동으로 작업 수행</li>
        <li>AWS Health를 활용하여 AWS 리소스 상태 정보를 얻고 확인된 서비스 이벤트 알림 수신</li>
        <li>AWS Systems Manager를 사용하여 CloudWatch 경보에서 OpsItem 또는 인시던트를 생성하고 자동화 워크플로 실행</li>
        <li>CloudWatch Anomaly Detection을 활용하여 동적 임계값 기반 경보 설정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch (경보, 대시보드, 이상 감지)</li>
        <li>Amazon SNS (알림 팬아웃 및 외부 도구 연동)</li>
        <li>Amazon EventBridge (이벤트 기반 자동화)</li>
        <li>AWS Health</li>
        <li>AWS Systems Manager (OpsCenter, 자동화)</li>
      </ul>
      <PageNav />
    </article>
  );
}
