import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP02 — 일정 기반 자동 조정</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>예측 가능한 트래픽 패턴에 대해 스케줄 기반 스케일링을 설정하여 트래픽 급증 전에 미리 리소스를 준비합니다.</p>
      <h2>원하는 결과</h2>
      <p>예측 가능한 트래픽 증가에 선제적으로 대응하는 리소스 프로비저닝을 구현합니다. 반응적 스케일링보다 먼저 리소스를 준비함으로써 초기 트래픽 급증 시 성능 저하 없이 서비스를 제공합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>반응적 스케일링만 사용하여 예측 가능한 급증에도 초기 성능 저하 발생</li>
        <li>정기적 이벤트(영업시간 시작, 마케팅 캠페인 등)에 대한 사전 스케일링 미설정</li>
        <li>스케일 업 지연으로 인해 예측 가능한 피크 시간대에 성능 저하 반복</li>
        <li>타임존 미고려로 스케줄이 잘못된 시간에 실행</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>예측 가능한 성능 — 피크 시간대 시작 전부터 충분한 용량 확보</li>
        <li>콜드 스타트 방지 — 스케일 아웃 시 인스턴스 초기화 지연 없음</li>
        <li>운영 안정성 향상 — 예측 가능한 트래픽 패턴에 대한 신뢰성 있는 대응</li>
        <li>비용 최적화 — 낮은 트래픽 시간대에 자동으로 스케일 인</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>영업시간 기반 스케줄링으로 업무 시작 전 용량 증가 및 업무 종료 후 감소 설정</li>
        <li>마케팅 이벤트, 프로모션 등 예정된 트래픽 급증 전에 수동 스케일 업 예약</li>
        <li>타임존을 명확히 지정하여 스케줄이 올바른 로컬 시간에 실행되도록 구성</li>
        <li>Lambda Provisioned Concurrency를 예약하여 콜드 스타트 없는 서버리스 실행 보장</li>
        <li>스케줄 기반 스케일링과 동적 스케일링을 함께 사용하여 예측 외 급증도 대응</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling (Scheduled Actions) — 시간 기반 스케일링 액션</li>
        <li>AWS Lambda Provisioned Concurrency — 예약된 동시성으로 콜드 스타트 방지</li>
        <li>Amazon DynamoDB — 예약된 용량 모드 조정</li>
      </ul>
      <PageNav />
    </article>
  );
}
