import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL05-BP04 — 빠른 실패 및 큐 제한</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        시스템이 리소스 경합, 타임아웃, 예외 또는 서비스 수준 목표를 달성할 수 없게 만드는 그레이 실패를
        경험할 때, 빠른 실패 전략으로 더 빠른 시스템 복구를 가능하게 합니다.
        큐 관리 전략을 구현하여 극복할 수 없는 백로그를 방지합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        빠른 실패 전략으로 더 빠른 시스템 복구를 가능하게 하고, 큐 관리 전략으로 극복할 수 없는 백로그를 방지합니다.
        트래픽 스파이크 흡수 및 비동기 처리를 수용하는 시스템이 개선된 신뢰성을 제공합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>DLQ(데드 레터 큐) 구성 없이 또는 시스템 장애를 감지하기 위한 DLQ 볼륨 알람 없이 메시지 큐 구현</li>
        <li>큐 소비자가 뒤처지는 시기를 이해하기 위한 메시지 나이 측정 미실시</li>
        <li>처리에 비즈니스 가치가 없는 경우 큐에서 백로그 메시지를 제거하지 않음</li>
        <li>LIFO 큐가 클라이언트 요구를 더 잘 충족할 때 FIFO 큐 구성</li>
        <li>내부 큐를 API를 통한 작업 수신 관리 대신 클라이언트에 노출</li>
        <li>너무 많은 작업 요청 유형을 단일 큐에 통합</li>
        <li>모니터링, 타임아웃, 리소스 요구 사항이 다름에도 불구하고 동일한 큐에서 복잡한 요청과 단순한 요청 처리</li>
        <li>입력 유효성 검사 또는 소프트웨어에서 빠른 실패 메커니즘을 구현하기 위한 단언(assertion) 미사용</li>
        <li>요청 라우팅에서 결함이 있는 리소스를 제거하지 않음(그레이 실패 포함)</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>빠르게 실패하는 시스템은 디버깅 및 수정이 더 용이</li>
        <li>프로덕션 릴리스 전에 코딩 및 구성 문제 노출</li>
        <li>효과적인 큐잉 전략으로 더 큰 복원력 및 신뢰성 확보</li>
        <li>트래픽 스파이크 및 간헐적 시스템 오류 조건의 개선된 처리</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch를 통한 명시적 알림이 있는 프로그래밍 방식의 단언 또는 특정 메트릭 구현</li>
        <li>CloudWatch 메트릭 및 알람을 사용하여 손상된 리소스에서 트래픽 전환</li>
        <li>Amazon SQS를 사용한 비동기 처리로 클라이언트 리소스 해제 가능</li>
        <li>CloudWatch 메트릭을 통해 메시지 타임스탬프와 현재 시간을 비교하여 큐 처리 지연 시간 측정 및 모니터링</li>
        <li>장애 또는 볼륨 스파이크 시 오래된 트래픽이나 초과 트래픽을 스필오버 큐로 이동</li>
        <li>처리할 수 없는 메시지에 DLQ(데드 레터 큐) 또는 리드라이브 큐 사용</li>
        <li>타임스탬프를 비교하고 관련 없는 메시지를 버려 오래된 메시지를 재시도하거나 삭제</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch</li>
        <li>Amazon SQS</li>
        <li>Amazon MQ</li>
        <li>Elastic Load Balancing: 존 이동(Zonal Shift)</li>
        <li>Amazon Application Recovery Controller</li>
      </ul>
      <PageNav />
    </article>
  );
}
