import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel4Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL04-BP02 — 상태 확인 인지</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        단순한 생존 확인(liveness check)을 넘어 애플리케이션의 실제 서비스 가능 여부를 확인하는
        딥 헬스 체크(deep health check)를 구현해야 합니다.
        데이터베이스 연결, 외부 서비스 의존성, 내부 처리 큐 상태 등을 포함한 종합적인 헬스 체크를 통해
        실제 장애를 정확하게 감지합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        헬스 체크가 애플리케이션의 실제 서비스 가능 상태를 정확하게 반영하여,
        비정상 상태의 인스턴스는 신속하게 트래픽에서 제외되고
        정상 복구 시 자동으로 서비스에 복귀합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>HTTP 200 응답만 확인하는 단순 헬스 체크로 실제 장애를 감지하지 못하는 경우</li>
        <li>데이터베이스 연결 실패 상태에서도 헬스 체크가 성공을 반환하는 경우</li>
        <li>헬스 체크 엔드포인트가 외부 의존성을 확인하지 않아 부분 장애를 감지하지 못하는 경우</li>
        <li>헬스 체크 타임아웃과 임계값이 너무 길어 장애 감지가 늦는 경우</li>
        <li>헬스 체크 자체가 무거운 연산을 수행하여 정상 트래픽에 영향을 주는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>실제 서비스 불가 상태를 빠르게 감지하여 장애 영향 최소화</li>
        <li>정상 복구 후 자동 서비스 복귀로 운영 효율성 향상</li>
        <li>부분 장애(종속성 문제) 조기 감지</li>
        <li>카나리 배포 시 비정상 버전을 신속하게 롤백</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>/health 또는 /status 엔드포인트를 구현하여 애플리케이션 상태를 확인합니다.</li>
        <li>딥 헬스 체크에는 데이터베이스 연결, 캐시 연결, 외부 API 연결 상태를 포함합니다.</li>
        <li>헬스 체크 응답에 각 의존성의 상태를 구체적으로 포함하여 문제 진단을 용이하게 합니다.</li>
        <li>ELB 헬스 체크 임계값(healthy/unhealthy threshold)과 타임아웃을 워크로드 특성에 맞게 설정합니다.</li>
        <li>Amazon CloudWatch Synthetics로 주기적으로 외부에서 엔드포인트 가용성을 모니터링합니다.</li>
        <li>헬스 체크 응답 시간을 모니터링하여 성능 저하를 조기에 감지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Elastic Load Balancing — 타겟 헬스 체크 설정</li>
        <li>Amazon Route 53 헬스 체크 — DNS 장애 전환을 위한 엔드포인트 모니터링</li>
        <li>Amazon CloudWatch Synthetics — 합성 모니터링으로 엔드포인트 가용성 확인</li>
        <li>Amazon CloudWatch Alarms — 헬스 체크 실패 알람</li>
        <li>AWS X-Ray — 분산 추적으로 의존성 상태 가시성 확보</li>
      </ul>
      <PageNav />
    </article>
  );
}
