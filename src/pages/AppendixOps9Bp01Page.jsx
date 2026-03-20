import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps9Bp01Page() {
  return (
    <article className="doc-content">
      <h1>OPS09-BP01 — 메트릭으로 운영 목표 및 KPI 측정</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        조직이 운영 목표와 KPI를 팀과 함께 공유하고 발표합니다.
        KPI를 반영하는 메트릭을 수립하여 비즈니스 성과와 운영팀의 효과성을 측정합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        조직이 팀과 함께 운영 목표와 KPI를 공유하고 발표합니다.
        KPI를 반영하는 메트릭이 수립됩니다. 여기에는 티켓 대기열 깊이, 평균 티켓 수명,
        문제 유형별 티켓 수, 표준 운영 절차 유무에 따른 문제 처리 시간, 실패한 코드 푸시
        복구에 소요된 시간, 콜 볼륨 등이 포함됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>개발자들이 문제 해결을 위해 차출되어 배포 마감일을 놓치는데, 측정되지 않은 시간 손실로 인해 인력 필요성을 정량화할 수 없는 경우</li>
        <li>1층 데스크가 인원 증가 없이 증가하는 업무량을 처리하고, 가시적인 메트릭 없이 고객 만족도가 저하되는 경우</li>
        <li>문서나 런북이 없는 문제 있는 워크로드로 인해 책임 메트릭 없이 긴 문제 해결 시간이 발생하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드 소비자 간의 변화에 대한 인사이트 제공(변화하는 비즈니스 요구)</li>
        <li>비즈니스 목표 대비 팀 효율성 측정</li>
        <li>지원 문제를 강조하고 서비스 수준 목표 이탈 식별</li>
        <li>워크로드 모니터링과 운영팀 성과 가시성 보완</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 리더와 세션을 예약하여 서비스 목표를 결정합니다.</li>
        <li>운영팀 작업과 잠재적 도전 과제를 파악합니다.</li>
        <li>KPI를 브레인스토밍합니다(고객 만족도, 배포 시간, 해결 시간, 비용 효율성).</li>
        <li>KPI에 메트릭과 데이터 소스를 매핑합니다.</li>
        <li>복합 메트릭을 추적합니다(대기 시간, 만족도 점수, 문제 유형 등).</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 메트릭 수집 및 사용</li>
        <li>Amazon QuickSight — KPI 대시보드 시각화</li>
        <li>AWS DevOps Guidance — DevOps 모범 사례 문서</li>
      </ul>

      <PageNav />
    </article>
  );
}
