import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus2Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SUS02-BP01 — 사용자 행동 패턴에 따른 인프라 규모 조정</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        실제 사용자 수요 패턴을 분석하고, 이에 맞게 인프라 규모를 동적으로 조정하여 유휴 리소스를 최소화합니다.
        과도하게 프로비저닝된 인프라는 사용되지 않는 에너지를 소비하므로, Auto Scaling을 통해
        수요에 정확히 맞는 용량만 유지하는 것이 탄소 발자국 감소에 직접적으로 기여합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드의 실제 수요 패턴에 따라 인프라가 자동으로 확장·축소되어,
        피크 시간대에는 충분한 성능을 제공하고 비수요 시간대에는 에너지 소비를 최소화합니다.
        유휴 용량 비율이 낮아지고 리소스 활용률이 높아집니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>최대 피크 부하를 기준으로 인프라를 고정 프로비저닝하여 평상시 유휴 상태가 지속되는 경우</li>
        <li>사용자 행동 데이터 없이 임의의 인프라 규모를 설정하는 경우</li>
        <li>스케일링 정책을 설정하지 않아 수요 변화에 수동으로 대응하는 경우</li>
        <li>리소스 활용률 지표를 모니터링하지 않아 과잉 프로비저닝 상태를 인지하지 못하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>유휴 리소스 감소로 에너지 소비 및 탄소 배출량 절감</li>
        <li>인프라 비용 최적화</li>
        <li>리소스 활용률 향상으로 하드웨어 효율성 증대</li>
        <li>수요에 따른 자동 대응으로 운영 부담 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch를 통해 CPU, 메모리, 네트워크 등의 활용률 지표를 수집하고 수요 패턴을 분석합니다.</li>
        <li>AWS Auto Scaling을 설정하여 실제 부하에 따라 인스턴스 수가 자동으로 조정되도록 합니다.</li>
        <li>예측 가능한 수요 패턴이 있는 경우 AWS Auto Scaling의 예측 조정(Predictive Scaling)을 활용합니다.</li>
        <li>목표 추적 조정 정책(Target Tracking Scaling Policy)으로 리소스 활용률 목표값을 설정합니다.</li>
        <li>Compute Optimizer를 사용하여 현재 인스턴스 규모의 적정성을 정기적으로 평가합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Auto Scaling — 수요 기반 인프라 자동 확장·축소</li>
        <li>Amazon CloudWatch — 리소스 활용률 모니터링 및 경보</li>
        <li>AWS Compute Optimizer — 인스턴스 규모 적정성 평가 및 권장 사항</li>
        <li>Amazon EC2 Auto Scaling — EC2 인스턴스 수 자동 조정</li>
      </ul>

      <PageNav />
    </article>
  );
}
