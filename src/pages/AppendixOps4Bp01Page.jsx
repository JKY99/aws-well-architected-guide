import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps4Bp01Page() {
  return (
    <article className="doc-content">
      <h1>OPS04-BP01 — 워크로드 내부 상태 파악</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        워크로드의 내부 상태(메모리, CPU, 큐 깊이, 연결 수 등)를 측정하고 모니터링할 수 있도록 설계합니다.
        내부 상태를 파악해야 성능 저하나 장애를 사전에 감지할 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드의 모든 중요 구성요소에서 내부 상태 지표가 수집됩니다.
        이 지표들이 대시보드에 시각화되어 운영팀이 워크로드 건강 상태를 실시간으로 파악할 수 있습니다.
        임계값 초과 시 알람이 발생합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>외부 지표(응답 시간, 오류율)만 모니터링하고 내부 상태는 파악하지 않는 경우</li>
        <li>장애 발생 후에야 로그를 확인하여 문제를 파악하는 경우</li>
        <li>운영팀이 워크로드 내부 동작을 이해하지 못하는 경우</li>
        <li>지표는 수집하지만 임계값과 알람이 설정되지 않은 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 발생 전 사전 감지로 가용성 향상</li>
        <li>성능 병목 원인을 신속하게 식별</li>
        <li>용량 계획을 위한 데이터 기반 의사결정 가능</li>
        <li>워크로드 동작 이해 향상으로 최적화 기회 발견</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>애플리케이션에 커스텀 지표(Custom Metrics)를 코드로 발행합니다.</li>
        <li>Amazon CloudWatch에 중요 내부 지표(큐 깊이, 캐시 히트율, 스레드 풀 사용률 등)를 전송합니다.</li>
        <li>AWS Systems Manager가 제공하는 인프라 지표(CPU, 메모리, 디스크)를 수집합니다.</li>
        <li>지표별 정상 범위를 정의하고 임계값 기반 알람을 설정합니다.</li>
        <li>워크로드 상태를 종합적으로 보여주는 운영 대시보드를 구성합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch Metrics — 커스텀 지표 수집 및 모니터링</li>
        <li>Amazon CloudWatch Alarms — 임계값 기반 알람 설정</li>
        <li>AWS Systems Manager Agent — EC2 인스턴스 내부 지표 수집</li>
        <li>Amazon CloudWatch Dashboards — 운영 현황 시각화</li>
      </ul>

      <PageNav />
    </article>
  );
}
