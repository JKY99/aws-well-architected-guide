import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus5Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SUS05-BP01 — 필요를 충족하는 최소한의 하드웨어 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        워크로드에 효율적으로 맞는 비즈니스 요구사항을 충족하는 데 필요한 최소한의 하드웨어를 사용합니다.
        워크로드에 필요한 하드웨어의 총 수를 최적으로 선택하여 전반적인 효율성을 향상시킵니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드의 환경적 영향을 줄이고 효율적인 리소스 활용을 통한 비용 절감을 달성합니다.
        성능 벤치마크를 유지하고 지속 가능성 자세를 개선합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>리소스 활용률을 모니터링하지 않는 경우</li>
        <li>활용률이 낮은 리소스를 아키텍처에 유지하는 경우</li>
        <li>정적 하드웨어 활용률을 검토하여 크기 조정이 필요한지 확인하지 않는 경우</li>
        <li>비즈니스 KPI를 기반으로 컴퓨팅 인프라에 대한 하드웨어 활용률 목표를 설정하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>적정 규모 조정으로 워크로드의 탄소 발자국 감소</li>
        <li>과잉 프로비저닝된 리소스 낭비 제거를 통한 비용 최적화</li>
        <li>필요한 성능 기준 유지하면서 리소스 감소</li>
        <li>수요 변화에 맞는 동적 리소스 확장을 위한 AWS 클라우드 탄력성 활용</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>속성 기반 인스턴스 선택을 사용하고 EC2 인스턴스 유형 선택에 대한 AWS 지침을 참조합니다.</li>
        <li>가변 워크로드에 AWS Auto Scaling을 사용하고 수요에 따라 리소스를 동적으로 조정합니다.</li>
        <li>온디맨드, 스팟 인스턴스, 컴퓨팅 Savings Plans 등 다양한 컴퓨팅 구매 옵션을 활용합니다.</li>
        <li>AWS Cost Explorer와 AWS Compute Optimizer를 사용하여 인스턴스를 적정 규모로 조정하고 권장 사항을 빈번하게 적용합니다.</li>
        <li>SLA를 협상하여 자동화가 교체를 배포하는 동안 일시적인 용량 감소를 허용합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Auto Scaling — 수요 기반 동적 인프라 확장·축소</li>
        <li>AWS Compute Optimizer — 적정 규모 권장 사항</li>
        <li>AWS Cost Explorer — 리소스 사용량과 비용 분석</li>
        <li>Amazon EC2 — 온디맨드, 스팟, Savings Plans</li>
      </ul>

      <PageNav />
    </article>
  );
}
