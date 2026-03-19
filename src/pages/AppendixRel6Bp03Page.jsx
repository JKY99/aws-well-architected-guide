import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP03 — 예측 조정 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>머신러닝을 활용하여 과거 트래픽 패턴을 분석하고 미래 수요를 예측하여 사전에 리소스를 프로비저닝합니다.</p>
      <h2>원하는 결과</h2>
      <p>과거 패턴 기반 미래 수요 예측으로 선제적 리소스 프로비저닝을 구현합니다. 반응적 스케일링보다 먼저 리소스를 준비하여 성능 저하 없이 트래픽 급증에 대응합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>반응적 스케일링에만 의존하여 스케일 아웃 지연 시 성능 저하 발생</li>
        <li>과거 트래픽 데이터를 활용하지 않아 예측 가능한 패턴도 수동으로 관리</li>
        <li>예측 정확도를 검증하지 않아 과도하거나 부족한 프로비저닝 지속</li>
        <li>이력 데이터가 충분하지 않은 상태에서 예측 조정 활성화</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사전 스케일 아웃으로 트래픽 급증 시 지연 없이 용량 확보</li>
        <li>더 정확한 용량 계획으로 과도 프로비저닝 비용 감소</li>
        <li>비용 최적화 — 예측 기반으로 최적 용량 유지</li>
        <li>운영 부담 감소 — ML이 자동으로 패턴을 학습하고 조정</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>EC2 Auto Scaling 예측 조정(Predictive Scaling)을 활성화하여 ML 기반 수요 예측 적용</li>
        <li>최소 2주 이상의 CloudWatch 이력 데이터 확보 후 예측 조정 활성화</li>
        <li>예측 정확도를 CloudWatch에서 모니터링하고 필요시 예측 모드 조정</li>
        <li>예측 조정과 동적 조정을 함께 사용하여 예측 오차를 동적 스케일링으로 보완</li>
        <li>예측 전용 모드(Forecast Only)로 먼저 평가 후 활성화 여부 결정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Auto Scaling (Predictive Scaling) — ML 기반 예측 스케일링</li>
        <li>Amazon EC2 Auto Scaling — EC2 예측 조정 정책</li>
        <li>Amazon CloudWatch — 이력 메트릭 데이터 및 예측 정확도 모니터링</li>
      </ul>
      <PageNav />
    </article>
  );
}
